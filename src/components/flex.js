import styled from 'styled-components'
import { flexbox } from 'styled-system'
import Box from './box.js'

const Flex = styled(Box)(flexbox, {
	display: 'flex',
})

export default Flex
