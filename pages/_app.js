import '../styles/globals.css';
import ChakraWrap from '../utils/ChakraWrap';
import Header from '../components/header/Header';
import { AppContext } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraWrap>
            <AppContext>
                <Header />
                <Component {...pageProps} />
            </AppContext>
        </ChakraWrap>
    );
}

export default MyApp
