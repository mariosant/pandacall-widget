import styled from 'styled-components'
import { theme } from 'styled-tools'
import {
    space,
    layout,
    typography,
    fontSize,
    color,
    flexbox,
} from 'styled-system'

const Box = styled('div')({
    boxSizing: 'border-box',
    fontSize: '16px',
    color: theme('colors.text'),
    fontFamily: theme('fonts.body')
}, space, layout, typography, color, flexbox)

export default Box
