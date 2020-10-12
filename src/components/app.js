import { Reset } from 'styled-reset'
import Launcher from './launcher.js'
import PrimaryContainer from './primary-container.js'
import StoreProvider from './store-provider.js'
import ThemeProvider from './theme-provider.js'
import Avatar from './avatar.js'
import Box from './box.js'
import Flex from './flex.js'
import Page from './page.js'

const App = () => (
	<ThemeProvider>
		<StoreProvider>
			<Reset />
			<PrimaryContainer>
				<Flex flexDirection="column" flexGrow={1} py={3} px={5}>
					<Flex justifyContent="center" mt={2} mb={2}>
						<Avatar src="https://placekitten.com/g/200/200" />
					</Flex>
					<Page />
				</Flex>
				<Flex justifyContent="center" p={3}>
					<Box color="gray.3" fontSize={1}>
						Powered by Pandasise
					</Box>
				</Flex>
			</PrimaryContainer>
			<Launcher />
		</StoreProvider>
	</ThemeProvider>
)

export default App
