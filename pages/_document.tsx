import Document, { Html, Main, NextScript } from 'next/document'
import * as React from 'react';

// noinspection JSUnusedGlobalSymbols
export default class TicketsJSDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <Html>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
