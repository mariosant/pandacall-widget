import styled from 'styled-components'
import { border, borderRadius, textStyle } from 'styled-system'
import Box from './box'

const Button = styled(Box)`
	${borderRadius}
	${border}
cursor: pointer;
	text-transform: uppercase;
	height: 54px;
`

export default (props) => (
	<Button
		as="button"
		border="none"
		py={3}
		px={5}
		as="button"
		bg="base"
		color="white"
		borderRadius={2}
		fontWeight="bold"
		{...props}
	>
		{props.children}
	</Button>
)
