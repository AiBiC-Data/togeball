

# ⚾️ Togeball - 야구 직관 메이트 매칭 플랫폼

<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/9cd20836-3606-4d1d-ae37-9fefe7ef14e3" width="500" height="300">


## 목차
- 팀소개
- 역할 분담
- 프로젝트 소개
- 기술스택
- 핵심 기능
- 역할별 상세 보기
- 기타 산출물

## 팀소개

```
    안녕하세요? 5명의 I와 1명의 E가 모인 E와 I들 입니다.

    팀장 및 프론트 : 이운재
    프론트리더: 윤진아
    백엔드리더: 오형택
    인프라리더 및 프론트: 조권호
    백엔드 : 양유경
    백엔드 : 조아영
```

## 역할 분담

### 각자 맡은 핵심 기능
- 이운재 : 매칭 페이지, 마이페이지
- 윤진아 : 채팅 페이지, 알림페이지
- 조권호 : 인프라 구성, 프로필 수정페이지
- 오형택 : 알림 시스템, 채팅 시스템
- 양유경 : 매칭 알고리즘, 유저 API
- 조아영 : 매칭 시스템

## 프로젝트 소개

```
    함께 직관하고 싶은 사람들을 위한 직관 메이트 매칭 서비스 투게볼 !  
    
    같이보는 재미를 제공하기 위해 저희 투게볼이 딱 맞는 직관 메이트를 구해 드립니다. 

    '야구, 같이 보면 더 재밌잖아요'  슬로건 아래  매칭을 기반으로 하는 서비스를 제공합니다.
```

## 기술스택

### 프론트엔드
| TypeScript |    React   |  StyeldComponent   |  Zustand |
| :--------: | :--------: | :------: | :-----: |
|   <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/c096ba85-55e7-4e47-a15d-ef29328b52fb" width="100" height="100">    |   <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/a6232c39-7558-4789-bd7a-259bc1d66232" width="100" height="100">    | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/262f23af-8c11-482f-8127-d19e787a9ff8" width="100" height="100"> | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/f07136c9-aa0f-4d00-9074-b76aeedc0bcc" width="100" height="100"> |

### 백엔드

| SpringBoot |   MariaDB  |  MongoDB   |  Redis | RabbitMQ | 
| :--------: | :--------: | :------: | :-----: | :--------: |
|   <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/37d2c84b-d5c2-4fee-b932-eef560277026" width="100" height="100">    |   <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/cd2656ac-f4df-4d38-b135-02b4ebe6bb4d" width="100" height="100">    | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/04c61e4e-9f82-4160-907a-100756720a9f" width="100" height="100"> | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/c18b2bf1-4ed2-4fb8-8b96-6b5a769ab52e" width="100" height="100"> | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/46bb0613-b905-4a91-98da-09f7655f70f7" width="100" height="100"> |

### 인프라


| Jenkins |   Docker  |  nginx   |  prometheus | Grafana | 
| :--------: | :--------: | :------: | :-----: | :--------: |
|   <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/1bd6c827-34fa-4fa7-8c3a-8221aa8de84e" width="100" height="100">   | <img width="100" height="100" src="https://github.com/AiBiC-Data/togeball/assets/76275193/06262ddd-3d61-4bf4-a7d0-70b81b040a5a">   | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/60ed3425-b05a-439d-b1ec-c70d8cbf0f79" width="100" height="100"> | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/391726bf-c862-4753-a51d-2ff5443ee78b" width="100" height="100"> | <img src="https://github.com/AiBiC-Data/togeball/assets/76275193/a2ce8cf3-e0a1-48eb-b131-82dd07eaf906" width="100" height="100"> |



## 핵심 기능

### 매칭 시스템
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/623d47ff-a28b-4433-8695-5d8115d95d57" width="1000" height="600">
- 매칭 
    - 프론트: 웹소켓을 이용한 통신, d3를 이용한 데이터 시각화 및 인터랙티브웹 구현
    - 백 : 유사도를 이용한 매칭 알고리즘 설계


### 채팅 시스템

<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/108f5558-0ceb-4662-9fc6-cea134936f99" width="1000" height="600">

- 채팅
    - 프론트: 웹소켓과 stomp 프로토콜을 이용한 통신, 이미지 전송 가능
    - 백: 채팅 서버 구현


## 역할별 상세 보기

### 프론트

#### 매칭 시스템


<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/c431fa58-789d-4976-9ffd-24eaea08a81c" width="1000" height="600">

- 매칭 클릭 시 매칭을 시도하는 사람들과의 사용자 태그 기반 매칭 적용
- 상위 6개의 태그 애니메이션으로 표시
- 스케줄링 시간에 따라 2~6인으로 구성된 채팅방 생성

<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/97d685ba-116a-4ce6-9332-8f18a2c90e7d" width="500" height="300">
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/0819adc4-c292-44b5-ad42-ed81b2fd7fd2" width="500" height="300">

- Chat GPT 이용하여 태그들 조합의 적절한 채팅방 이름 생성

#### 모집 채팅방

<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/d09e2ea2-478f-46d4-beed-43f7b0364a00" width="1000" height="600">

- 현재 활성화 된 채팅방 목록 제공
- 경기 일자, 응원팀에 맞는 채팅방 찾는 필터 기능 제공
- 페이지네이션 활용

#### 채팅방 생성

<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/f29203b9-db50-4a83-94a0-cd8b3269dada" width="1000" height="600">

- 커스텀 주별 달력 활용하여 경기 선택
- 경기에 맞는 응원팀 항목 제한
- 사용자에 맞는 태그 입력 가능

#### 채팅방

##### 게임 채팅방 참여
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/140ae564-e76d-4ce8-b9f4-6af669b1ac8f" width="1000" height="600">

- 대화 참가자 모두 표시

#### 나의 채팅방 확인
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/3f0c175b-29d1-4c9c-8b4a-ea63bfd5d959" width="1000" height="600">

- 나의 채팅방 목록 확인 및 채팅방 개별 알림
- 최근 메시지 확인, 클릭 시 채팅방 이동

#### 로그인 및 회원가입

- 회원가입
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/ca4574e9-7d55-43f5-85a0-6f8abc3c834b" width="1000" height="600">

- 로그인
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/3ee639bc-a8bb-405c-bb81-b469a2c50e4b" width="400" height="300">
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/6b1cde79-530a-4b5b-b823-9a401f37da14" width="400" height="300">


#### 경기 캘린더

- 월별/주별 캘린더
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/0a471566-c10d-4772-8573-99bb43ab2f15" width="1000" height="600">


### 백엔드

#### Swagger API 확인

- 채팅방 API
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/f049b800-3b94-43aa-986d-ca3adebf7f83" width="400" height="200">

- 매칭, 태그 API
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/7a4088e0-aa3c-429c-92f6-c2bebb3a6d0f" width="400" height="200">

#### Postman API 확인

- 게시판, 리그, 매칭, 알림 API
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/0a236f6b-f594-4ea8-ac5d-5d3764b21232" width="200" height="300">

- 유저 API
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/211be725-1c16-42e1-96fd-335bb95e156f" width="200" height="300">

- 인증 API
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/aac74c42-96c3-444b-8a3c-883d218c1497" width="300" height="200">

- 채팅방 API
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/0e847a49-027a-47c4-8dd6-2848ded90604" width="200" height="400">

- 태그 API
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/660b0205-e371-4b00-a043-fb193379cb10" width="300" height="200">

### 인프라

#### 아키텍처 설계

<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/805f8337-930c-47ae-8beb-be53e65a27fe" width="800" height="600">

#### 모니터링 구현

- 시스템 모니터링
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/1f59ad8d-a6a0-43b1-a4cd-010325fa27e5" width="800" height="600">


- 젠킨스 모니터링
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/899d9827-d996-4193-837e-953ed7bc18aa" width="800" height="600">


- 엔진엑스 모니터링
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/e61bb6be-603a-4f6c-b478-7f4f8f33cd27" width="800" height="600">

## 기타 산출물


#### ERD
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/8644e8e8-69c5-420a-8815-26e275a5f2f4" width="1000" height="600">

#### Figma 화면 설계서
<img src="https://github.com/AiBiC-Data/togeball/assets/76275193/22f8702d-1502-48fb-8e00-4657cf96f08e" width="1000" height="600">


#### 회고

이운재: 좋은 팀원들들 만나 프로젝트 할 수 있어서 좋았습니다. 개인적으로 팀원 덕분에 많은 성장을 했으며,  다음에도 기회가 된다면 같이 프로젝트를 하고 싶습니다. 좋은 경험이였습니다.

오형택: 처음 도전해보는 것들이 많았는데 많은 성장을 했다는 생각이 들면서도 아쉬움도 많이 남는 건 어쩔 수 없는 것 같네요,,
정신없었지만 즐거웠고 보람찼습니다!

윤진아: 좋은 팀원들과 짧은 기간 안에 기획부터 개발까지 경험할 수 있어 좋았습니다. 백엔드와 협업하면서 부족함도 많이 느꼈지만 성장도 많이 할 수 있었던 프로젝트 였습니다.

양유경: 실력있고 열정있는 팀원들과 함께 하게 되어 영광이었습니다! 시간이 더 있었으면 어땠을까 하는 아쉬움도 있지만 많이 성장할 수 있는 좋은 프로젝트 경험이었습니다.

조권호: 훌륭한 팀원들과 함께 프로젝트를 할 수 있어서 많이 성장할 수 있었습니다. 인프라를 구성하면서 발생하는 오류들에 대해 프론트엔드와 백엔드와의 협업이 정말 중요하다고 생각하였고 좋은 경험이었습니다.

조아영: 멋진 팀원분들 덕분에 많은 것을 배우고 성장할 수 있었던 뜻깊고 알찬 시간이었습니다!
