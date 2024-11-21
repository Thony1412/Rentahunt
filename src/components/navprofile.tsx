import Link from 'next/link';
// icons
import { CgProfile } from "react-icons/cg";
import { IoRocketOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Navprofile() {
    return(
        <nav className="flex justify-between items-center p-4 bg-blue-500 text-white px-16">
            <div>
            <Link href="/about" className="hover:underline mr-10">
            <CgProfile className="inline-block mr-2" />
            Profile
            </Link>
            
            <Link href="/rentees" className="hover:underline mr-10">
            <IoRocketOutline className="inline-block mr-2"/>
            Services
            </Link>

            <Link href="/rentees" className="hover:underline">
            <IoShareSocialOutline className="inline-block mr-2" />
            Social
            </Link>
            </div>
        </nav>
        

    );
}