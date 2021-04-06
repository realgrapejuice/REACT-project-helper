# 프로젝트 관리 앱

### 0. 목표로 삼은 부분

- Firebase를 이용해 로그인 기능 구현
- Firebase를 이용해 회원가입 및 비밀번호 찾기 기능 구현
- 데이터베이스를 만들고 CRUD 구현
- 프로젝트의 할 일 목록을 만들고, 프로젝트 별로 할 일을 관리할 수 있는 어플리케이션 구현

### 1. 특징 및 기능

- Google Auth, Github Auth를 이용해 로그인을 할 수 있음
- Firebase Auth를 이용해 외원가입 및 비밀번호 찾기를 할 수 있음
- 프로젝트의 목록을 한눈에 확인하고 프로젝트 별로 할 일 목록을 관리할 수 있음
- 입력할 할 일 목록을 Database에 저장하고 CRUD 기능을 이용할 수 있음
- 작성된 할 일 목록에서 Drag & Drop이 가능하도록 구현해 우선순위 별로 프로젝트를 관리할 수 있음

### 2. 사용 스택

- HTML(JSX)
- CSS(POSTCSS)
- JS(React-hook)
- React-Router
- React Beautiful D&D
- User Authentification(Firebase Auth)
- Database(Firebase database)

### 3. 프로젝트 스크린샷

#### 3.1 로그인 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113671692-a980b000-96f1-11eb-9805-a93e7511f5a7.gif" width="50%">
</p>

#### 3.2 회원가입 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113671726-b7cecc00-96f1-11eb-8be7-05daaa06d163.gif" width="50%">
</p>

#### 3.3 비밀번호 찾기 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113671817-d3d26d80-96f1-11eb-94e6-8f62efe916f3.gif" width="50%">
</p>

#### 3.4 서드파티 사용자 인증 스크린샷

|          Google          |          Github          |
| :----------------------: | :----------------------: |
| <img src="https://user-images.githubusercontent.com/66715905/113673073-79d2a780-96f3-11eb-8918-e8a9bc2ece13.gif" width="90%"> | <img src="https://user-images.githubusercontent.com/66715905/113673076-7b9c6b00-96f3-11eb-8db1-3831d6a28a75.gif" width="90%"> |

#### 3.5 프로젝트 콘솔 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113672095-39265e80-96f2-11eb-82fc-4d515b93a720.png" width="50%">
</p>

#### 3.6 프로젝트 추가 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113672123-45aab700-96f2-11eb-9e5c-7808b31ee8fe.gif" width="50%">
</p>

#### 3.7 프로젝트 수정 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113672163-552a0000-96f2-11eb-9d19-3612642c9fee.gif" width="50%">
</p>

#### 3.8 프로젝트 삭제 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113672174-5824f080-96f2-11eb-8475-59db89fb14f8.gif" width="50%">
</p>

#### 3.9 데이터베이스 CRUD 스크린샷

<p align="center">
  <img src="https://user-images.githubusercontent.com/66715905/113672244-6a069380-96f2-11eb-8bda-504f2ecbd404.gif" width="50%">
</p>

### 4. 피드백 및 리뷰

#### 4.1 잘한 점

- 사용자 Auth 기능을 구현하며 사용자 관리 원리에 대해 이해할 수 있었음
- 다양한 페이지의 라우팅을 구현해 화면을 효율적으로 관리함
- 데이터베이스를 이용해 CRUD를 구현해 기본적인 백엔드가 어떻게 구동되는지 이해할 수 있었음

#### 4.2 아쉬운 점

- 프로젝트가 커질 수록 리엑트의 State관리가 어려웠고, 프로젝트 진행 시 어플리케이션의 디자인패턴이 중요하다는 것을 알게 됨
- 상태 관리에서 어려움을 겪어 기능적인 측면에서는 제대로 작성하나 코드의 가독성이 떨어진다는 부분이 아쉬웠음
- 사용자가 편한 어플리케이션을 만들기 위해서는 사용자의 경험 순서를 고민하고 자잘한 부분들을 개선시켜야하는 것을 알게 됨
