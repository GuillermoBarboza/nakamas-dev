import Head from "next/head";

const HeadMetaTags = ({title}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default HeadMetaTags;
