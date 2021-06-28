import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

// blog 
export const HomeBlogContainer = styled(Flex)`
	cursor: pointer;
	transition: 0.3s;
	flex-direction: column;
	border: 2px dotted #2D3748;

	&:hover {
		background: #2D3748;
	}
`