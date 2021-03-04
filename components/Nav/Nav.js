import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {

    return (
        <div>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                </ul>
            </nav>
        </div>
    )
}