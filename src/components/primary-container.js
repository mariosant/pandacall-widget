import styled from 'styled-components'
import { theme } from 'styled-tools'
import { position, borderRadius } from 'styled-system'
import Flex from './flex.js'

const PrimaryContainer = styled(Flex).attrs({
	position: 'fixed',
	flexDirection: 'column',
	bottom: 90,
	left: '2rem',
})`
	${borderRadius}
	${position}
    
    
    bottom: 90px;
	left: 2rem;
	max-height: calc(90vh - 70px);
	min-height: 400px;
	overflow-y: auto;
	background: linear-gradient(
		180deg,
		${theme('colors.base')} 0%,
		${theme('colors.base')} 75px,
		rgba(255, 255, 255, 1) 75px
	);
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
`

export default ({ children }) => (
	<PrimaryContainer width={375} borderRadius={3}>
		{children}
	</PrimaryContainer>
)
