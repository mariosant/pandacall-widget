import { useStoreon } from 'storeon/preact'
import Select from 'src/components/select.js'
import Avatar from 'src/components/avatar.js'
import Button from 'src/components/button.js'
import Box from 'src/components/box.js'
import Flex from 'src/components/flex.js'

const Page = () => {
	const { dispatch } = useStoreon('dispatch')
	const okay = () => dispatch('router/push', ['home'])

	return (
		<Box>
			<Box mb={6} textAlign="center">
				<p>Let's schedule a call!</p>
				Please use the form below to pick an appropriate time for us to call
				you.
			</Box>
			<Flex justifyContent="center" mb={6}>
				<Select name="date" width={1}>
					<option selected>Next Monday</option>
				</Select>
			</Flex>

			<Flex justifyContent="center" mb={6}>
				<Select name="time" width={1}>
					<option selected>10:00am</option>
					<option>11:00am</option>
				</Select>
			</Flex>

			<Flex justifyContent="center">
				<Button type="button" onClick={okay}>
					Okay
				</Button>
			</Flex>
		</Box>
	)
}

export default Page
