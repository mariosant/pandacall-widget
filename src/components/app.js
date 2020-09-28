import { Reset } from 'styled-reset'
import Launcher from './launcher.js'
import StoreProvider from './store-provider.js'
import ThemeProvider from './theme-provider.js'

const App = () => (
	<ThemeProvider>
		<StoreProvider>
			<Reset />
			<h1>It works</h1>
			<Launcher />
		</StoreProvider>
	</ThemeProvider>
)

export default App
