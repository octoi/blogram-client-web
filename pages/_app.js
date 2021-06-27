import '../styles/globals.css';
import ChakraWrap from '../utils/ChakraWrap';
import Header from '../components/header/Header';
import Head from 'next/head';
import { AppContext } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraWrap>
            <Head>
                <title>Blogram</title>
                <meta name="description" content="share your information" />
            </Head>
            <AppContext>
                <Header />
                <Component {...pageProps} />
            </AppContext>
        </ChakraWrap>
    );
}

export default MyApp
