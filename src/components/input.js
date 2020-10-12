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

const Input = styled(PseudoBox).attrs({
	bg: 'transparent',
	as: 'input',
	border: 'none',
	_focus: {
		outline: 'none',
	},
	__placeholder: {
		color: 'gray.5',
	},
})``

export default (props) => {
	const { preContent, postContent } = props

	return (
		<Container px={2} bg="gray.2" border="none" borderRadius={2} {...props}>
			<>
				{preContent && (
					<Flex mr={2} alignItems="center">
						{preContent}
					</Flex>
				)}
				<Input {...props} />
				{postContent && (
					<Flex ml={2} alignItems="center">
						{postContent}
					</Flex>
				)}
			</>
		</Container>
	)
}
