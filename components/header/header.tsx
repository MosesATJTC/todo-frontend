import * as React from 'react';
import { ButtonInput } from '@components';
import { useRouter } from 'next/router';

type HeaderProps = {
  text_btn1: string;
  text_btn2: string;
};

const Header: React.FC<HeaderProps> = ({ text_btn1, text_btn2 }) => {
  const router = useRouter();
  return (
    <header>
      <div className='btn-en'>
        <ButtonInput
          isDisabled={false}
          text={text_btn1}
          onClick={() => router.push('/en')}
        />
      </div>
      <div className='btn-fr'>
        <ButtonInput
          isDisabled={false}
          text={text_btn2}
          onClick={() => router.push('/fr')}
        />
      </div>
    </header>
  );
};

export default Header;
