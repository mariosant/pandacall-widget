import styled from 'styled-components'
import { border, borderRadius } from 'styled-system'
import Box from './box'

const Avatar = styled(Box)`
${borderRadius}
${border}
`

export default (props) => <Avatar as="img" bg="grey.0" width="100px" border="4px solid white" borderRadius="50%" {...props} />
