import { Reset } from 'styled-reset'
import Launcher from './launcher.js'
import PrimaryContainer from './primary-container.js'
import Input from './input.js'
import Avatar from './avatar.js'
import Button from './button.js'
import Box from './box.js'
import Flex from './flex.js'
import StoreProvider from './store-provider.js'
import ThemeProvider from './theme-provider.js'

const App = () => (
	<ThemeProvider>
		<StoreProvider>
			<Reset />
			<h1>It works</h1>
			<PrimaryContainer>
				<Flex flexDirection="column" flexGrow={1} py={3} px={5}>
					<Flex justifyContent="center" mt={2} mb={2}>
						<Avatar src="https://placekitten.com/g/200/200" />
					</Flex>
					<Flex justifyContent="center" mb={6} textAlign="center">
						Interested in buying X? We can call you right now and have a quick
						talk about it.
					</Flex>
					<Flex justifyContent="center" mb={6}>
						<Input preContent="+44" width={1} />
					</Flex>
					<Flex justifyContent="center">
						<Button type="button">Call me</Button>
					</Flex>
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
