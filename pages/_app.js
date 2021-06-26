import '../styles/globals.css';
import ChakraWrap from '../utils/ChakraWrap';
import { AppContext } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
    return (
        <AppContext>
            <ChakraWrap>
                <Component {...pageProps} />
            </ChakraWrap>
        </AppContext>
    );
}

export default MyApp
