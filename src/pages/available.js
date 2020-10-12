import Input from 'src/components/input.js'
import Avatar from 'src/components/avatar.js'
import Button from 'src/components/button.js'
import Box from 'src/components/box.js'
import Flex from 'src/components/flex.js'

const Page = () => (
	<Box>
		<Flex justifyContent="center" mb={6} textAlign="center">
			Interested in buying X? We can call you right now and have a quick talk
			about it.
		</Flex>
		<Flex justifyContent="center" mb={6}>
			<Input preContent="+44" placeholder="7412 1234567" width={1} />
		</Flex>
		<Flex justifyContent="center">
			<Button type="button">Call me</Button>
		</Flex>
	</Box>
)

export default Page
