import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import theme from '@/styles/theme/theme'

// https://mui.com/styles/advanced/#next-js
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-BR">
				<Head>
					{/* PWA primary color */}
					<meta content={theme.palette.primary.main} name="theme-color" />
					<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
MyDocument.getInitialProps = async (ctx) => {
	const sheet = new ServerStyleSheet()
	const originalRenderPage = ctx.renderPage

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				// eslint-disable-next-line react/jsx-props-no-spreading
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
			})

		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			)
		}
	} finally {
		sheet.seal()
	}
}
