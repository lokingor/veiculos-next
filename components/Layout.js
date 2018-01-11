import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <style jsx global>{`
      * { box-sizing: border-box; margin: 0; padding: 0 }
      body {
        background-color: #F1F4F9;
        font-family: Arial;
      }
      .container {
        max-width: 940px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Layout
