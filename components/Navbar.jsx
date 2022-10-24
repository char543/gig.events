import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="header h-20 bg-[#1F1F1F] flex items-center md:justify-between">
      <h1 className="text-white text-2xl md:text-4xl ml-10">Gig.events</h1>
      <div className="text-white">
        <a href="/" className="m-4">
          Home
        </a>
        <a href="/" className="m-4">
          About
        </a>
        <a href="/" className="m-4">
          Services
        </a>
        <a href="/" className="m-4">
          Contact
        </a>
      </div>
      <div className="text-white flex flex-row mr-10">
        <LinkedInLogoIcon className="m-2 w-5 h-5" />
        <InstagramLogoIcon className="m-2 w-5 h-5" />
        <TwitterLogoIcon className="m-2 w-5 h-5" />
      </div>
    </div>
  );
}
