import React, { useState, useEffect, useRef } from 'react';
import { findWifiLocations } from '../services/wifiAPI';
const { kakao } = window;

export default function Map({ district, userLocation }) {
  const [map, setMap] = useState(null);
  const [wifiLocation, setWifiLocation] = useState([]);
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

  // Fetch API location data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await findWifiLocations();
        // handle success
        console.log(locations);
        setWifiLocation(locations);
        console.log(3);
      } catch (error) {
        // handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Create clusterer and set markers
  useEffect(() => {
    if (map !== null) {
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 6, // 클러스터 할 최소 지도 레벨
      });
      const markers = wifiLocation.map(el => {
        // 마커를 생성합니다
        return new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.WGS84_Y, el.WGS84_X),
          //마커에 hover시 나타날 title
          title: el.NAME_ENG
        });
      });

      clusterer.addMarkers(markers);
    }
  }, [wifiLocation, map]);


  return (
    <div ref={mapElement} style={{ width: '100vw', height: '100vh' }}></div>
  );
}
