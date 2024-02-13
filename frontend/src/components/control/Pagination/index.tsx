import { LeftIcon, RightIcon } from 'src/components/icon'
import { useEffect, useState } from 'react'
import { ChatItem } from'src/components'
import styled from 'styled-components'

const PageWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`

const Pagination = ( props ) => {
  
  const { chats, type = 'all', team } = props
  
  const itemsPerPage = 5
  const [ currentPage, setCurrentPage ] = useState( 1 )

  const [ chatContent, setChatContent ] = useState([])

  const totalPages = Math.ceil( chats?.totalElements / itemsPerPage )

  useEffect(()=>{
   setChatContent( chats?.content )
   if( chatContent &&  team !== 11 ){
     setChatContent( chats?.content?.filter(( chat )=> chat?.cheeringClub?.id === team ))
     setCurrentPage( 1 )
   }
  }, [ team, chats ])

  const handleClick = ( page ) => {
    setCurrentPage( page )
  }
  const handlePrevClick = () => {
    setCurrentPage(( prevPage ) => Math.max( prevPage - 1, 1 ))
  }
  const handleNextClick = () => {
    setCurrentPage(( prevPage ) => Math.min( prevPage + 1, totalPages ))
  }

  const renderPagination = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={ i }
          onClick={() => handleClick( i ) }
          style={{ color: currentPage === i ? '#6A60A9' : '#DEDCEE', backgroundColor: '#fff', border: 'none' }}
        >
          { i }
        </button>
      )
    }
    return pages
  }

  const renderItems = () => {
    const startIndex = ( currentPage - 1 ) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return chatContent?.slice( startIndex, endIndex ).map(( chat ) => (
      <ChatItem type = { type } key = { chat?.id } item= { chat }/>
    ))
  }

  return (
    <>
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '100%' }}>
      { renderItems() }
    </div>
    <PageWrapper>
        <LeftIcon size= { 20 } onClick={ handlePrevClick } disabled={ currentPage === 1 }/>
        { renderPagination() }
        <RightIcon size= { 20 } onClick={ handleNextClick }/>
    </PageWrapper>
    </>
  )
}

export default Pagination;