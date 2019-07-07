import App, { Container } from 'next/app'
import * as React from 'react'

export default class TicketsJSApp extends App {
  public static async getInitialProps ({ Component, ctx }: { Component: any, ctx: any }) {
    let pageProps: any = {}
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    } return pageProps
  }

  public render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
