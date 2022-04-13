import '@/styles/global.css'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/styles/theme/theme'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	)
}

export default appWithTranslation(MyApp)
