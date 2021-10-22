import React from 'react';
import Head from 'next/head';

type MetaProps = {
  description: string;
};

type PageLayoutWithSEOProps = {
  title: string;
  meta: MetaProps;
};

const PageLayoutWithSEO: React.FC<PageLayoutWithSEOProps> = ({
  title,
  meta,
}: PageLayoutWithSEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={meta.description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};

export default PageLayoutWithSEO;
