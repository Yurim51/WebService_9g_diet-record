# Gugram
  AI를 활용해 음식 사진을 인식하고 식단을 기록 및 분석해주는 서비스
![project3_ggu](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/a115829f-e397-49cc-a7bb-8ce4a6d3bdd1)

<br/><br/>
## 프로젝트 구성 안내
### **목차**<br/>
[1. 프로젝트 목표](#1-프로젝트-목표)<br/>
[2. 프로젝트 기능 설명](#2-프로젝트-기능-설명)<br/>
[3. 프로젝트 기술 스택](#3-프로젝트-기술-스택)<br/>
[4. 프로젝트 구성도](#4-프로젝트-구성도)<br/>
[5. 프로젝트 팀 구성 및 역할](#5-프로젝트-팀-구성-및-역할)<br/>
[6. 버전](#6-버전)

<br/><br/>
## 1. 프로젝트 목표

  ##### 1) AI를 활용한 200가지 음식 이미지 인식 및 기록 기능

  ##### 2) Open AI API를 활용한 식단 분석 서비스 구현

<br/><br/>
#### **Gugram**만의 차별점 및 기대 효과
- AI를 활용한 음식 이미지 인식
- Open AI API를 이용한 사용자 맞춤 식단 분석 서비스 제공

  
<br/><br/>
## 2. 프로젝트 기능 설명

### 주요 기능 및 서브 기능

**1. 회원가입 & 로그인**<br/>
- 이메일, 닉네임 중복 확인<br/>
- 로그인 시, token 및 cookie로 유저 인증

**2. 메인페이지**<br/>
- 목표 칼로리 대비 하루 총 섭취 칼로리 및 영양 성분별 섭취량 - 그래프 시각화
- 끼니별 대표 사진 및 섭취 칼로리

**3. 달력 페이지**<br/>
- 목표 칼로리 성취여부를 달력에 시각화하여 보여줌

**4. 하루 식단 페이지**<br/>
- 하루 섭취 칼로리는 아침, 점심, 저녁, 간식으로 나눠서 칼로리 정보 제공 
- 카드형 레이아웃

**5. 한끼 식단 페이지**<br/>
- 음식 이미지 등록 기능 ( 촬영 또는 앨범 )
    - 등록된 음식 이미지를 분석하여 얻은 음식 종류 데이터 제공
    - 여러 음식이 보이는 사진을 등록하면, 이를 분석하여 개별 음식 사진으로 등록
    - 분석된 음식명을 원본 이미지 위에 태그로 표시 </br></br>
- 음식 종류 별 칼로리와 영양성분 데이터 제공
  - 식품의약품안전처 식품영양성분 데이터베이스 활용
  - https://various.foodsafetykorea.go.kr/nutrient/ </br></br>

**6. AI영양사 페이지**<br/>
- 채팅형 레이아웃
- Open AI API를 활용한 사용자 맞춤 식단 분석 데이터 제공 및 저장 
  - 식단 추천
  - 선택한 식단 평가
  - 목표 추천


<br/><br/>
## 3. 프로젝트 기술 스택
![project1_ajaj_stack](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/204a7681-782c-42a4-977e-f9237e7b2d5d)
 - AI
   - Python
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/> <br/>
  
 - Front-end <br/>
   - Typescript
     <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
   - React
     <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <br/>

 - Back-end <br/>
   - Nest.js
   - PostgreSQL
   - Swagger
   - OpenAI API

<br/>
#### AI 모델 학습 데이터셋
 AI 허브의 음식 이미지 데이터셋을 가져와 이미지 인식 모델 학습에 활용<br/>
 https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=&topMenu=&aihubDataSe=data&dataSetSn=74<br/>

<br/><br/>
## 4. 프로젝트 구성도
![project3_ggu_structure](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/d66687ef-d66f-4b33-a3ee-eb25db0c22fe)
### 회원가입 & 로그인 & 프로필
![project3_ggu_login](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/a0c6f9a4-d0b5-4763-845b-e5641c5e66b5)
![project3_ggu_question](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/1c5744b7-3e6e-4784-929c-e366cad8ff35)
### 메인페이지
![project3_ggu_home](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/461a0bb4-9501-4775-a517-3781bbf60a2c)
### 식단 기록 페이지
![project3_ggu_add](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/b8fe599d-cea2-465e-92e7-e3214f19e005)
![project3_ggu_ai](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/5fa5a3ca-07a6-4b59-8c5e-45af79d81f84)
### 식단 캘린더 / 피드백
![project3_ggu_calender](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/d7747a92-425c-4aad-8a7e-49eaa55c8269)
![project3_ggu_feedback](https://github.com/Yurim51/WebService_9g_diet-record/assets/90613423/ca731877-5303-4b8d-9af7-05c9c849b6e6)


<br/><br/>
## 5. 프로젝트 팀 구성 및 역할
프론트엔드 5명 / 백엔드 3명 / AI 1명

**팀별 responsibility**

1. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

2. 백엔드

- 기획 단계: 데이터 수집, ERD 구성, 명세서 작성
- 개발 단계: 데이터 베이스 구축, 외부 API 활용, CRUD 구현
- 수정 단계: 피드백 반영해서 수정, 쿼리 성능 <br/>

3. AI
- 기획 단계: 학습시킬 데이터 수집 및 학습 모델 선정
- 학습 단계: 데이터 기반 이미지 학습, 하이퍼파라미터 조정
- 수정 단계: 피드백 반영해서 수정, 학습 성능 체크

<br/><br/>
## 6. 버전
  - 0.0.1
<br/><br/>

---
본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.

Copyright 2024 엘리스 Inc. All rights reserved.
