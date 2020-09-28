import path from 'path'

export default (config) => {
	config.resolve.alias.src = path.resolve(__dirname, 'src')
}
