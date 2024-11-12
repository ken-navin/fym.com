// pages/_app.js
import '../styles/globals.css'; // Import the global CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // Render your components
}

export default MyApp;
