import Head from 'next/head'
import HeaderNavbar from '../HeaderNavbar'

export default function Layout({
  children,
  title = 'Estela Estudio de diseño',
  className
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <HeaderNavbar />
      </header>

      <main className={className}>
        
        {children}

      </main>

      <footer></footer>
    </div>
  )
}