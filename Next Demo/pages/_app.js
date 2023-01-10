import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      这是全局文件
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
