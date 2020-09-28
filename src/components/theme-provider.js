import { ThemeProvider } from 'styled-components'
import palx from 'palx'

const brand = '#1b005b'

const theme = {
    colors: {
        ...palx(brand)
    }
}

export default ({children}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
