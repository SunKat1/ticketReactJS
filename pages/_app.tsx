import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import { withRouter } from 'next/router'
import * as React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../src/store'
import { AppTypes } from '../src/types/store'

class TicketsJSApp extends App<AppTypes> {
  public static async getInitialProps ({ Component, ctx }: { Component: any, ctx: any }) {
    let pageProps: any = {}
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    } return pageProps
  }

  public render() {
    const { Component, pageProps, store, router } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} router={router} />
        </Provider>
      </Container>
    )
  }
}

export default withRouter(withRedux(configureStore)(TicketsJSApp))
