import styled from 'styled-components'
import { border, borderRadius, fontSize } from 'styled-system'
import Box from './box'

const InputComponent = styled(Box)`
    ${borderRadius}
    ${border}
    ${fontSize}
    height: 54px;
`

export default (props) => <InputComponent px={2} as="input" bg="gray.2" border="none" borderRadius={2} {...props} />
