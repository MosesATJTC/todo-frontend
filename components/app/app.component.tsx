import React from 'react';
import { useTranslation } from 'next-i18next';

const AppComponent: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <React.Fragment>
      
        <div className='head'>
          <p className='heading'>{t('title')}</p>
          <p className='sub-head'>
            {t('about_para')}{' '}
            <span>
              <a
                style={{ color: '#7D7D7D' }}
                href='https://github.com/jalantechnologies/boilerplate-next-typescript#readme'>
                {t('readme')}
              </a>
            </span>{' '}
          </p>
        </div>
        <div className='next-logo'></div>
        <div className='base-logo'></div>
        <div className='eslint-logo'></div>
        <div className='storybook-logo'></div>
        <div className='seo-logo'></div>
        <div className='ts-logo'></div>
        <div className='sentry-logo'></div>
        <div className='i18n-logo'></div>
        <div className='jest-logo'></div>
        <div className='formik-logo'></div>
      
    </React.Fragment>
  );
};

export default AppComponent;
