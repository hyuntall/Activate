### 공개SW 개발자 대회 출품작

# 행복한 동네
이 프로젝트는 시청이나 주민센터와 같은 공공기관에서의 활용을 기대하며
주민들의 삶의 질을 향상시키는 것이 목적이다.


## 주요 기능

* 유저가 어플의 불안모드 버튼을 클릭 할 경우, 연동되어 있는 중앙 웹에서 그 신호를 수신할 수 있다.
* 웹에서는 위치 추적을 통해, 불안신호를 보낸 유저의 위치를 빠르게 파악할 수 있다.
* 주변 생활 환경에서 불편함을 겪는 사항을 어플을 통해 사진과 함께 제보할 수 있다.
* 

## Architecture

![Architecture](https://user-images.githubusercontent.com/79295851/132521189-001f09e7-a232-400e-a260-def48f2c7f60.png)




## 앱 기능과 사용법


<img src="https://user-images.githubusercontent.com/79295851/132519430-ecb023b8-a1d3-4474-9d9f-c2616e358489.jpg"  width="300" height="600">

-처음 사용할 유저들은 회원가입을 해야한다.
입력받을 폼의 항목으로는, 휴대폰번호, 비밀번호, 이름, 성별 등이 있다.
사용자가 입력했던 비밀번호와 비밀번호 확인란의 내용이 같으면 PutUserData 함수가 호출되어 회원 가입란의 공란을 검사하지만, 내용이 다를 시에는 “비밀번호를 다시 확인해주세요“
라는 문구가 출력된다.
회원가입의 조건을 충족했을 경우, handleSignUp함수를 통해 내용을 검사하고 계정이 생성된다. 




<img src="https://user-images.githubusercontent.com/79295851/132524248-ca222d5f-f635-4a0f-9c9a-0b3b7d7bfab7.jpg"  width="300" height="600">

-회원가입 시 입력받은 휴대폰번호와 비밀번호를 통해 로그인할 수 있다.




<img src="https://user-images.githubusercontent.com/79295851/132520731-2c616363-e45d-46e1-aecf-360997c176a6.jpg"  width="300" height="600">

-불안신호 카테고리이다.
아래의 불안모드 버튼을 눌러서 사용자의 위급 신호를 보낼 수 있다.
화살표 아이콘은 전 화면인 카테고리 씬으로 이동하게끔 한다.




<img src="https://user-images.githubusercontent.com/79295851/132520824-0fe8f7e7-90af-4c06-b0a6-da9c6c3dfd27.jpg"  width="300" height="600">

-환경건의 카테고리이다.
사진을 업로드하여 글과 함께 제보내용을 전달할 수 있도록 하며
TextInput 부분에서 텍스트를 입력받을 수 있고,
아래에 있는 카메라 아이콘을 클릭 시, 사용자의 카메라를 활성화 시켜
사진을 촬영하거나 불러올 수 있게끔 할 것이다.
글을 바로 저장할 수도 있고, 미완성된 글을 임시저장하는 기능도 있다.



## 웹 기능과 사용법
(웹 화면, 코드 캡쳐)

-웹의 상단 로고 밑에 Home, Safety, Environment, Contact의
4가지 카테고리가 있으며, 그 아래의 이미지들은 모바일 어플에 대한 홍보자료와 다운로드 QR 이미지이다.
Safety 카테고리를 클릭 시, 구글 맵에 기반한 지도가 표시된다.
어플에서 유저가 불안신호를 보낼 시, 이 카테고리에서 마커를 통해 위치를 확인할 수 있다.




## 향후 일정




