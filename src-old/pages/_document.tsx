import { CssBaseline } from '@nextui-org/react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		}
	}

	render() {
		return (
			<Html lang="ru">
				<Head>
					{CssBaseline.flush()}
					<link rel="shortcut icon" type="image/png" href="/favicon.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
