import React from 'react';
import Image from 'next/image';
import IMG_CONFIG from './image-config';

type ImageProps = {
  src: string;
  alt: string;
};

const ImageLogo: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={IMG_CONFIG.width}
      height={IMG_CONFIG.height}
    />
  );
};

export default ImageLogo;
