import '../styles/globals.css';
import ChakraWrap from '../utils/ChakraWrap';
import Header from '../components/header/Header';
import { AppContext } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
    return (
        <AppContext>
            <ChakraWrap>
                <Header />
                <Component {...pageProps} />
            </ChakraWrap>
        </AppContext>
    );
}

export default MyApp
