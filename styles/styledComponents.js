import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

// login

export const LoginStyledFlex = styled(Flex)`
	width: 30%;

	@media (max-width: 1446px) { width: 40%; }
	@media (max-width: 1000px) { width: 50%; }
	@media (max-width: 860px) { width: 90%; }
`