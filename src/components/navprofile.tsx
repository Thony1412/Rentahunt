import Link from 'next/link';

export default function Navprofile() {
    return(
        <nav className="flex justify-between items-center p-4 bg-blue-500 text-white px-36">
            <div>
                <Link href="/about" className="hover:underline mr-4">Services</Link>
                <Link href="/rentees" className="hover:underline mr-4">About</Link>
                <Link href="/rentees" className="hover:underline mr-4">Become a Rentereer</Link>
            </div>
        </nav>
    );
}