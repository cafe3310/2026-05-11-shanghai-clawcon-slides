import React from 'react';
import SlideWrapper from '../../SlideWrapper';

interface ImageSlideProps {
  imageSrc: string;
}

export default function ImageSlide({ imageSrc }: ImageSlideProps) {
  return (
    <SlideWrapper backgroundColor="bg-black">
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img 
          src={imageSrc} 
          alt="Slide Content" 
          className="w-full h-full object-contain"
        />
      </div>
    </SlideWrapper>
  );
}
