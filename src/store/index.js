import { createStoreon } from 'storeon'
import { storeonLogger } from 'storeon/devtools'
import layout from './layout.js'
import router from './router.js'

const store = createStoreon([storeonLogger, router, layout])

export default store
