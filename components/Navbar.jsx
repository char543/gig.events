import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <nav className="header h-20 bg-[#16161d] flex items-center md:justify-between md:bg-transparent static md:absolute w-full">
        <Link href="/">
          <a className="text-white text-2xl md:text-4xl ml-10">Gig.events</a>
        </Link>
        {/* menu button */}
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded md:hidden text-white ml-auto hover:text-white outline-none absolute right-3 md:static z-10"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* end button */}

        {/* begin ternary div */}
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          } md:inline-flex md:justify-center m-0 w-40 text-center md:w-full absolute md:static right-0`}
        >
          {/* end ternary div */}

          <div className="text-black z-20 md:text-white flex flex-col absolute m-0 w-64 right-0 top-[40px] md:flex md:flex-row md:mr-24 md:justify-end md:static md:m-auto md:w-full md:h-full h-screen bg-slate-300 rounded-2xl md:bg-transparent">
            <Link href="/">
              <a className="m-4">Home</a>
            </Link>
            <Link href="/">
              <a className="m-4">About</a>
            </Link>
            <Link href="/">
              <a className="m-4">Services</a>
            </Link>
            <Link href="/">
              <a className="m-4">Contact</a>
            </Link>
          </div>
        </div>
        <div className="text-white hidden md:flex flex-row mr-10">
          <LinkedInLogoIcon className="m-2 w-5 h-5" />
          <InstagramLogoIcon className="m-2 w-5 h-5" />
          <TwitterLogoIcon className="m-2 w-5 h-5" />
        </div>
      </nav>
    </>
  );
};
