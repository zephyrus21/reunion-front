import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        {/* Using 'Inter' as default font-family*/}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymus'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
