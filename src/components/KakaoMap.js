import React, { useState, useEffect, useRef } from 'react';
const { kakao } = window;

export default function Map({ district, userLocation }) {
  const [map, setMap] = useState(null);
  const [parkLocation, setParkLocation] = useState([]);
  const mapElement = useRef(null);

  // Initialize map
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.5326, 126.99),
      level: 9
    };

    // 지도를 생성
    const map = new kakao.maps.Map(mapElement.current, options);

    // ZoomControl을 생성
    const zoom = new kakao.maps.ZoomControl();
    // 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가
    map.addControl(zoom, kakao.maps.ControlPosition.RIGHT);
    setMap(map);
  }, []);


  return (
    <div ref={mapElement} style={{ width: '100vw', height: '100vh' }}></div>
  );
}
