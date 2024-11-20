"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MdDashboardCustomize } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-36 bg-blue-500 text-white">
      <div className="text-lg font-bold left-200">
        <Link href="/" className="hover:underline text-xl font-bold font-sans">
          RentaHunt
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/about" className="hover:underline">
          Services
        </Link>
        <Link href="/rentees" className="hover:underline">
          About
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Link
                label="Dashboard"
                labelIcon={<MdDashboardCustomize />}
                href="/dashboard"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
