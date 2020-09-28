import { createStoreon } from 'storeon'

const layout = (store) => {
	store.on('@init', () => ({
		maximized: false,
	}))

	store.on('minimize', () => ({
		maximized: false,
	}))

	store.on('maximize', () => ({
		maximized: true,
	}))
}

const store = createStoreon([layout])

export default store
