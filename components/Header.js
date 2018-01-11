import Link from 'next/link'

export default () => (
  <header className="header">
    <div className="container">
      <Link href="/">
        <img src="/static/logo.png" className="header__logo" />
      </Link>
    </div>
    <style jsx>{`
      .header {
        height: 50px;
        background-color: #1889E2;
      }

      .container {
        max-width: 940px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 100%;
      }

      .header__logo {
        width: 114px;
        align-self: center;
      }
    `}</style>
  </header>
)
