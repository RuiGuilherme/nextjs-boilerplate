const withTM = require('next-transpile-modules')([
	'@mui/material',
	'@mui/system',
	// If @mui/icons-material is being used
	'@mui/icons-material'
])
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n,
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@mui/styled-engine': '@mui/styled-engine-sc'
		}
		return config
	}
}

module.exports = withTM(nextConfig)
