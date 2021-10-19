## 프로젝트
지도 API를 이용한 서비스를 구현해보자는 취지로 개발한 프로젝트 입니다.<br />
밖에서 핸드폰 데이터가 떨어져가서 급하게 와이파이가 필요할때, <br />
**서울시의 와이파이가 설치된 곳의 위치 정보를 검색하고 확인** 할 수 있는<br />
카카오 지도 API와 서울시 열린데이터 광장 API를 이용한 **서울시 위치정보확인 프로젝트**입니다.

<br />

#### 사용API
- 카카오 지도 API
- 서울시 열린데이터 광장 API

#### 사용기술
- HTML5 / CSS3
- JavaScript(ES6+)
- React
- Styled-components

<br />
<hr />
<br />

### ⚡ 지도 확대 & 축소
![Animation7_3](https://user-images.githubusercontent.com/29578054/135300175-2a3aa2df-f38a-4169-a871-2b50b62ea96e.gif)
Kakao map api에서 제공하는 **MarkerClusterer를 이용하여 위치 마커 정보를 클러스터화** 하였습니다.<br />
그리고, **useEffect를 이용하여 Zoom Level에 따라 다른 Marker 표시되도록 구현**함으로써<br />
지도의 확대와 축소가 가능하며, 오른쪽 상단의 줌 컨트롤러를 이용하여 확대 축소도 가능합니다.
<br />

### ⚡ 지도 위치검색
![Animation2](https://user-images.githubusercontent.com/29578054/134920746-414b8a2a-1d19-4e62-b0e5-f458f6b2f49a.gif)
<br />
장소 키워드를 입력하면 해당 위치로 지도가 이동, 줌인(zoom-in) 됩니다.
<br />

### ⚡ 사용자 현재 위치 검색
![Animation3](https://user-images.githubusercontent.com/29578054/134920837-bc25e912-bc3f-4756-a1f0-1f5ea9dcda49.gif)
<br />
**geolocation**을 이용함으로써, 사용자의 현재 위치를 보여주도록 구현하였습니다.
<br />

### ⚡ 다크&라이트 모드
![Animation5](https://user-images.githubusercontent.com/29578054/134921021-2094e2b6-eb06-4ad8-8623-411f43c62877.gif)
<br />
**헤더 부분의 스위치**를 통해 다크&라이트 모드 변경이 가능하도록 구현했습니다.
<br />

### ⚡ 반응형 웹
![캡처2](https://user-images.githubusercontent.com/29578054/135106562-c14ae807-96a6-43c3-946c-75a5db6c0923.PNG)
<br />
![캡처3](https://user-images.githubusercontent.com/29578054/135300204-e18d1cfc-b47d-4b24-bab2-881287800567.PNG)
<br />
데스크탑, 아이패드, 모바일 순으로 반응형 웹을 구현하였습니다.
<br />
<br />
<br />

### 🌵 후기
카카오 맵 API를 다루며 서울시 데이터를 지도에 시각적으로 나타내어 사용자 편의 맞게 구성하는 것을 목표로 프로젝트를 개발하였습니다. <br />
평소 코로나 마스크 맵과 같이 사용자가 원하는 데이터를 지도에 띄우고 사용자는 필요한 정보를 주는 서비스를 개발해보고 싶었는데<br />
이번 기회를 SeoulWifi-finder를 개발함으로써 무척 즐거운 경험을 얻을 수 있었습니다.<br />
또한, 이번 프로젝트를 통해서는 지도 API 와 공공 데이터 API의 사용에 대해 이해할 수 있었습니다.<br />
마커정보를 위해 Kakao Map에서 지정한 키가 있는데 position에 new kakao.maps.LatLng(lat, lng)이라는 <br />
생성자 함수에 좌표를 넣어야 하는 것을 모르고 직접 정의했다가 에러가 나 한참을 고생했었습니다. <br />
이를 통해 API를 다루는데 있어서는 해당 API의 룰을 정확히 숙지해야 함을 알게 된 좋은 경험이었습니다.<br />
그리고 처음 프로젝트를 진행했을 당시에는 서울시 열린데이터 광장 API의 data의 개수는 1993개다보니, <br />
totalCount가 end 값을 넘으면 그 이후의 데이터를 받아 올 수 있도록 재귀함수를 통해 <br />
한번의 요청이 최대1000개 까지만 허용함으로써 전체 locations 값을 구현할 수 있었습니다.<br />




