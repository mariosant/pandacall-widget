import { ThemeProvider } from 'styled-components'
import palx from 'palx'

const brand = '#8850BF'
const pallete = palx(brand)

console.log(pallete)

const theme = {
	colors: {
		base: pallete.base,
		text: pallete.black,
		...pallete,
	},
	fonts: {
		body: `'Ubuntu', sans-serif`,
	},
	fontSizes: [11.11, 13.33, 16, 19.2, 23.04, 27.65],
	space: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
	radii: [0, 4, 8, 12, 16],
}

export default ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)
