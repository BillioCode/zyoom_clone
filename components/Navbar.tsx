import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between items-center fixed z-50 w-full bg-[var(--dark-1)] px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={36}
          height={36}
          alt="Zyoom Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Zyoom
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
