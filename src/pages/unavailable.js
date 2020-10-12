import { useStoreon } from 'storeon/preact'
import Input from 'src/components/input.js'
import Avatar from 'src/components/avatar.js'
import Button from 'src/components/button.js'
import Box from 'src/components/box.js'
import Flex from 'src/components/flex.js'

const Caret = (props) => {
	return (
		<Button color="text" py={0} px={0} bg="transparent" {...props}>
			▼
		</Button>
	)
}

const Page = () => {
	const { dispatch } = useStoreon('dispatch')

	const gotoScheduling = () => dispatch('router/push', ['scheduling'])

	return (
		<Box>
			<Flex justifyContent="center" mb={6} textAlign="center">
				Interested in buying X? We are not around right now, but we can call you
				back.
			</Flex>
			<Flex justifyContent="center" mb={6}>
				<Input preContent="+44" placeholder="7412 1234567" width={1} />
			</Flex>
			<Flex justifyContent="center" mb={6}>
				<Input
					readOnly
					onClick={gotoScheduling}
					postContent={<Caret onClick={gotoScheduling} />}
					placeholder="When to call you?"
					width={1}
				/>
			</Flex>
			<Flex justifyContent="center">
				<Button type="button">Call me back</Button>
			</Flex>
		</Box>
	)
}

export default Page
