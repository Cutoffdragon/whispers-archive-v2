import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {

    return (

        <nav id={styles.navbar} className='fixed w-full max-w-screen md:w-full z-100'>
            <ul className='flex my-2 w-full justify-between'>
                <div className="flex flex-row md:justify-start gap-4 px-2 lg:px-5">
                    <li className={`${styles.navFont} mainFont md:mx-10`}><Link href="/">Home</Link></li>
                    <li className={`${styles.navFont} mainFont md:mx-10`}><Link href="/archive">Stories</Link></li>
                </div>
            </ul>
        </nav>

    )
}