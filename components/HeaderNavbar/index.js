import Link from 'next/link'

const HeaderNavbar = () => {
    return (
        <nav className="px-4 py-2 mb-md-4 d-flex justify-content-between w-100 navbar">
            <div className="hamburger-container d-none">
                <button className="hamburger hamburger--emphatic">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                
            </div>
            <div className="mr-auto">
                <Link href="/">
                    <a><img src="/logoTavomak.svg" alt="Tavomak" style={{ width: '120px' }}/></a>
                </Link>{' '}
            </div>
            <ul className="d-flex mb-0 mr-4">
                {/* <li className="mx-2">
                    <Link href="/about">
                        <a>About</a>
                    </Link>{' '}
                    |
                </li> */}
                <li className="mx-2">
                    <Link href="/behance">
                        <a>Behance</a>
                    </Link>{' '}
                    |
                </li>
                {/* <li className="mx-2">
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>{' '}
                    |
                </li>
                <li className="mx-2">
                    <Link href="/contacto">
                        <a>Contacto</a>
                    </Link>{' '}
                    |
                </li> */}
            </ul>
        </nav>
    )
}
 
export default HeaderNavbar;