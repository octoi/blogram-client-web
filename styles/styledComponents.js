import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

// blog 
export const HomeBlogContainer = styled(Flex)`
	cursor: pointer;
	transition: 0.3s;
	flex-direction: column;

	&:hover {
		background: var(--chakra-colors-whiteAlpha-200);
	}
`