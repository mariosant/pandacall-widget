const router = (store) => {
	store.on('@init', () => ({
		router: [['home', {}]],
	}))

	store.on('router/push', ({ router }, [page, params = {}]) => {
		return {
			router: [...router, [page, params]],
		}
	})

	store.on('router/replace', ({ router }, [page, params = {}]) => {
		return {
			router: [...router.slice(0, -1), [page, params]],
		}
	})

	store.on('router/back', ({ router }) => {
		return {
			router: router.slice(0, -1),
		}
	})
}

export default router
