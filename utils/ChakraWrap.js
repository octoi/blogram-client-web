import { ChakraProvider, extendTheme, Container } from '@chakra-ui/react';

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false
	}
});

export default function ChakraWrap({ children }) {
	return (
		<ChakraProvider theme={theme}>
			<Container maxW="8xl">
				{children}
			</Container>
		</ChakraProvider>
	);
}
