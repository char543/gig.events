import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-center items-center text-white text-xl h-[40vh] bg-bottom bg-cover bg-no-repeat bg-[url('../public/scanner.avif')] md:bg-center">
      <div className="absolute w-full h-full bg-[#16161d] opacity-80" />
      <div className="absolute h-full w-full pointer-events-none z-100 mix-blend-overlay bg-[url('../public/noice.avif')]" />
      <p className="z-10">footer footer footer footer</p>
      <div className="text-white hidden md:flex flex-row z-50">
        <LinkedInLogoIcon className="m-2 w-5 h-5" />
        <InstagramLogoIcon className="m-2 w-5 h-5" />
        <TwitterLogoIcon className="m-2 w-5 h-5" />
        <ArrowRightIcon className="m-2 w-5 h-5" />
      </div>
    </footer>
  );
}
