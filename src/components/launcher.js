import styled from 'styled-components'
import {
	flexbox,
	typography,
	space,
	border,
	color,
	position,
} from 'styled-system'
import { FiPhone } from 'react-icons/fi'

const Launcher = styled('button')`
	display: flex;
	cursor: pointer;
	${flexbox}
	${border}
    ${space}
    ${color}
    ${position}
    ${typography}
`

export default () => (
	<Launcher
		bg="base"
		color="white"
		padding={3}
		border="none"
		borderRadius="100%"
		position={'absolute'}
		bottom={0}
		left={0}
		fontSize={30}
	>
		<FiPhone />
	</Launcher>
)
