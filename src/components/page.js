import { useStoreon } from 'storeon/preact'
import cond from 'cond-flow'
import all from 'src/lib/all.js'
import last from 'src/lib/last.js'
import Available from 'src/pages/available.js'
import Unavailable from 'src/pages/unavailable.js'
import Scheduling from 'src/pages/scheduling.js'

const Page = () => {
	const { error, available, router } = useStoreon(
		'error',
		'available',
		'router'
	)

	const [page, params] = last(router)
	const homepageAvailable = all(page === 'home', available)
	const homepageUnavailable = all(page === 'home', available === false)
	const scheduling = page === 'scheduling'

	return cond([
		[error, 'Something went foo.'],
		[homepageAvailable, <Available />],
		[homepageUnavailable, <Unavailable />],
		[scheduling, <Scheduling />],
		[true, <div>Something went foo</div>],
	])
}

export default Page
