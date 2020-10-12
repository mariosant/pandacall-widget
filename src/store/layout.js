const layout = (store) => {
	store.on('@init', () => ({
		error: false,
		maximized: false,
		available: false,
	}))

	store.on('minimize', () => ({
		maximized: false,
	}))

	store.on('maximize', () => ({
		maximized: true,
	}))
}

export default layout
