'use client';
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';
  import Link from 'next/link';
  import { RiCustomerService2Fill } from "react-icons/ri";
  import { MdMessage } from "react-icons/md";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-blue-500 text-white px-36">
        <div className="text-lg font-bold ml-20">
          <Link href="/" className="hover:underline">RentaHunt</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline mr-4">Services</Link>
          <Link href="/rentees" className="hover:underline mr-4">About</Link>
          <Link href="/rentees" className="hover:underline mr-4">Become a Rentereer</Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
          <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Inbox"
            labelIcon={<MdMessage />}
            href="/create-organization"
          />
                 <UserButton.Link
            label="Help & Support"
            labelIcon={<RiCustomerService2Fill />}
            href="/create-organization"
          />
        </UserButton.MenuItems>
      </UserButton>
          </SignedIn>
        </div>
      </nav>
    );
  }