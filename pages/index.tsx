import React from 'react';
import styles from '../styles/home.module.css';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageLayoutWithSEO, AppComponent, Header } from '@components';

const HomePage: React.FunctionComponent<any> = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6'
      />
      <Header text_btn1={t('btn-text1')} text_btn2={t('btn-text2')} />
      <div className={styles.container}>
        <PageLayoutWithSEO
          title={t('title')}
          meta={{
            description: t('description'),
          }}
        />
        <main className={styles.main}>
          <AppComponent />
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
