import { StoreContext } from 'storeon/preact'
import store from 'src/store/index.js'

export default ({ children }) => (
	<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)
