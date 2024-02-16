import { useState, useEffect, useRef } from 'react'
import { useParams, useLocation, useNavigate, } from 'react-router-dom'
import { ChatMessage, Participants } from './components'
import { Button, InputBox, LeftIcon, MainLayout } from 'src/components'
import { createClient } from './util/chat'
import useStore from 'src/store'
import styled from 'styled-components'
import { getChat, getOpenChatMessages, getMyInfo, getParticipants, exitChat } from 'src/api'
import { useQuery, useMutation } from 'react-query'
import { formatDate } from './util'
import postChatImage  from './api/postChatImage'
import postLastChat from './api/postLastChat'
import { deleteAxios } from 'src/api/util'

const ChatPageWrapper = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`
const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex; 
  flex-direction: column; 
  padding: 10px;
  padding-top: 0px;
`
const ScriptWrapper = styled.div`
  border: 1px solid #DEDCEE;
  border-radius: 10px;
  padding: 10px;
  height: 90%;
  overflow-y: scroll;
`
const InputBoxWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  align-items: center;
`
const LabelWrapper =styled.label`
  background-color: gray;
  display: flex;
  width: 15px;
  height: 13px;
  color: white;
  padding: 8px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background-color: #E4E2DD;
  }
`

type PathParam = {
  chatroomId?: string
}
const OpenChat = () => {

  const navigator = useNavigate()

  const { chatroomId } = useParams< PathParam >()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const userId = localStorage.getItem('userId')
  const [ messages, setMessages ] = useState([])
  const  [ input, setInput ] = useState('')
  const scriptEndRef = useRef< HTMLDivElement >( null ) 
  const { session } = useStore()
  const { data: itsme } = useQuery([ 'itsme' ], () => getMyInfo())
  const { data: participants, refetch } = useQuery([ 'participants', { id : chatroomId }], () => getParticipants( { id : chatroomId }))
  
  const stompClient = useRef( null )

  const imageMutations = useMutation( postChatImage )
  const lastChatMutatioins = useMutation( postLastChat )

  const location = useLocation()
  const games = location.state

  useEffect(() => {
    refetch()
    const onConnect = async() => {
      stompClient.current?.subscribe(`/topic/room.${ chatroomId }`, ( message ) => {
        const newMessage = JSON.parse( message.body )
        refetch()
        if( newMessage?.type === 'NOTICE' ) return

        setMessages(( prevMessages ) => [
          ...prevMessages,
          { 
            content: newMessage?.content, 
            senderId: newMessage?.senderId,  
            type : newMessage?.type,
            nickname: newMessage?.nickname,
            id: newMessage?.id,
            time: formatDate(new Date())
          },
      ])},
      { 'auto-delete': true, durable: false, exclusive: false })       
    }

    const connectToStomp = async () => {
      try {
        stompClient.current = await createClient()
        await stompClient.current?.connect({ Authorization :  userId }, onConnect )
      } catch ( error ) {
        console.error('Stomp 연결에 실패했습니다:', error)
      }
    }

    const param = {
      page: 0,
      size: 100
    }

    const getMessages= async () => {
      try{
        setMessages([])
        const response= await getOpenChatMessages( chatroomId, param )
        response?.content?.map(( chat )=>{
          if( chat?.type === 'NOTICE' ) return
          setMessages(( prevMessages ) => [
            ...prevMessages,
            { 
              content: chat?.content, 
              senderId: chat?.senderId,  
              type : chat?.type,
              nickname: chat?.nickname,
              id: chat?.id,
              time: formatDate(new Date( chat?.timestamp ))
            },
        ])
      })
        return response
      }catch( error ){
        console.error('데이터를 가져오지 못했습니다.', error)
      }
    }

    getMessages()
    connectToStomp()

    return () => {
      
      const exitChat = async() => {
        await deleteAxios(`/api/chatrooms/${chatroomId}/participants`)
      }
      exitChat()

      const data = {
        roomId : Number(chatroomId),
        data :{
          lastReadMessageId : messages[messages.length - 1]?.id
        }
      }

      data.data.lastReadMessageId && lastChatMutatioins.mutateAsync( data )
      stompClient.current?.disconnect()
    }
  }, [ chatroomId ])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if ( !e.target.files || e.target.files.length ===0 ) return

    const file = e.target.files[0]

    try {
      const param = {
        file: file,
        roomId: Number(chatroomId),
        nickname: itsme?.nickname,
        senderId: userId,
        type: "IMAGE"
      }
      await imageMutations.mutateAsync(param)
    } catch (error) {
      console.error('이미지 업로드 에러:', error)
    }
  };

  useEffect(() => {
    scriptEndRef.current && 
    scriptEndRef.current.scrollIntoView({ block: 'end' }) 
  }, [ messages ])

  const sendMessage = () => {
    if( input.trim()==='') return
    stompClient.current?.send(
      `/pub/chat.${ chatroomId }`, 
      { Authorization : userId }, 
        JSON.stringify(
          {
            roomId: chatroomId,
            senderId: userId,
            type: 'TEXT',
            nickname: session?.nickname,
            content: input,
          }
        )
    )
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && sendMessage()
    
  }

  return (
    <MainLayout>
      
        <ChatPageWrapper>
          <Participants list = { participants } game = { games }/>
          <ChatWrapper>
            <ScriptWrapper>
              { 
                messages?.map(( message, index ) => (
                <ChatMessage 
                  key={ index } 
                  message = { message } 
                  time={ message?.time }  
                />
              ))}
              <div ref={ scriptEndRef }/>
            </ScriptWrapper>
            
            <InputBoxWrapper>
              <input 
                style= {{ display: 'none' }} type= 'file' accept= 'image/*' id= 'files' 
                ref={ inputRef } onChange={ handleImageUpload }
                />
              <LabelWrapper htmlFor= 'files'>+</LabelWrapper>
                <InputBox
                  value={ input }
                  icon={ <LeftIcon/> }
                  onChange={ (e) => setInput( e.target.value ) }
                  onKeyDown={ handleKeyDown }
                  placeholder='메시지를 입력하세요'
                >
                  <Button style={{ padding : '0px' }} width='40px' onClick={ sendMessage }>
                    전송
                  </Button>
                </InputBox>
            </InputBoxWrapper>
            
          </ChatWrapper>
        </ChatPageWrapper>
    </MainLayout>
  )
}

export default OpenChat
