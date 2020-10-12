import styled from 'styled-components'
import { border, borderRadius, fontSize } from 'styled-system'
import PseudoBox from './pseudobox'
import Flex from './flex'

const Container = styled(Flex)`
	${borderRadius}
	${border}
    ${fontSize}
    height: 54px;
`

const Select = styled(PseudoBox).attrs({
	bg: 'transparent',
	as: 'select',
	type: 'select',
	px: 2,
	bg: 'gray.2',
	borderRadius: 2,
	border: 'none',
	height: 54,
	position: 'relative',
	_focus: {
		outline: 'none',
	},
})`
	appearance: none;
	cursor: pointer;

	&:before {
		content: '▼';
	}
`

export default Select
