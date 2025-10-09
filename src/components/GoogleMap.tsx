'use client';

import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useMemo } from 'react';

interface GoogleMapComponentProps {
  address?: string;
  className?: string;
  locale?: string; // 언어 설정을 위한 locale
}

// 기본 위치 설정 (추후 실제 주소의 좌표로 변경 필요)
const DEFAULT_CENTER = {
  lat: 37.349689, // 서울 시청 기본 좌표 (예시)
  lng: 127.111272
};

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  clickableIcons: true,
  scrollwheel: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'on' }],
    },
  ],
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
};

export default function GoogleMapComponent({ 
  address = "대한민국 그린수소",
  className = "",
  locale = "ko" // 기본값 한국어
}: GoogleMapComponentProps) {
  const [selectedMarker, setSelectedMarker] = useState(false);

  // Google Maps API 로드 (locale에 따라 언어 자동 변경)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    language: locale, // 동적으로 언어 설정
  });

  const center = useMemo(() => DEFAULT_CENTER, []);

  if (loadError) {
    return (
      <div className={`flex items-center justify-center bg-red-50 ${className}`}>
        <div className="text-center p-8">
          <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-600 font-medium mb-2">
            {locale === 'ko' ? '지도를 불러올 수 없습니다' : 'Unable to load map'}
          </p>
          <p className="text-sm text-red-500">
            {locale === 'ko' ? 'Google Maps API 키를 확인해주세요' : 'Please check Google Maps API key'}
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <div className="text-center p-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-sky-600 border-t-transparent mb-4"></div>
          <p className="text-gray-600 font-medium">
            {locale === 'ko' ? '지도 로딩 중...' : 'Loading map...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={mapOptions}
      >
        {/* 마커 추가 */}
        <Marker
          position={center}
          onClick={() => setSelectedMarker(true)}
          animation={google.maps.Animation.DROP}
        />

        {/* 정보 창 */}
        {selectedMarker && (
          <InfoWindow
            position={center}
            onCloseClick={() => setSelectedMarker(false)}
          >
            <div className="p-2">
              <h3 className="font-bold text-gray-900 mb-1">{address}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {locale === 'ko' ? '대한민국 그린수소 본사' : 'Korea Green Hydrogen Headquarters'}
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-600 hover:text-sky-700 font-medium inline-flex items-center"
              >
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {locale === 'ko' ? '길찾기' : 'Get Directions'}
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

