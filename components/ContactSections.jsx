import {
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  HomeIcon,
} from "@radix-ui/react-icons";

export default function AboutSections() {
  return (
    <>
      <div className="bg-[#16161d] h-screen w-screen flex flex-col justify-center items-center">
        <div className="absolute h-screen w-screen pointer-events-none z-100 mix-blend-overlay bg-[url('../public/noice.avif')] opacity-60" />
        <div className="text m-12 flex justify-center items-center flex-col">
          <h1 className="text-white text-5xl font-bold text-center">
            Get in touch
          </h1>
          <div className="border-b-2 m-4 w-64 flex justify-center items-center" />
          <p className="w-96 text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam
            quae eum, enim fugiat ex itaque saepe unde asperiores quam!
          </p>
        </div>
        <div className="container flex flex-row lg:flex-col justify-center items-center sm:max-w-64 w-full">
          <div className="wrapper text-white flex gap-12 flex-col lg:flex-row m-12">
            <div className="hover:-translate-y-2 duration-200 w-72 border-[1px] rounded-lg py-4 px-6 bg-slate-800">
              <div className="text-green-500">
                <img
                  src="phone.svg"
                  alt=""
                  className="w-10 h-10 absolute fill-green-500"
                />
              </div>
              <div className="w-10 h-10" />
              <h1 className="text-2xl font-bold">Phone</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt tempore, autem nulla voluptate dolores cum minus
                explicabo totam quidem?
              </p>
            </div>
            <div className="hover:-translate-y-2 duration-200 w-72 border-[1px] rounded-lg py-4 px-6 bg-slate-800">
              <div className="text-blue-300">
                <EnvelopeClosedIcon className="h-10 w-10 absolute" />
              </div>
              <div className="w-10 h-10" />
              <h1 className="text-2xl font-bold">Email</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt tempore, autem nulla voluptate dolores cum minus
                explicabo totam quidem?
              </p>
            </div>
            <div className="hover:-translate-y-2 duration-200 w-72 border-[1px] rounded-lg py-4 px-6 bg-slate-800">
              <div className="flex text-amber-400">
                <HomeIcon className="h-10 w-10 absolute" />
              </div>
              <div className="w-10 h-10" />
              <h1 className="text-2xl font-bold">Address</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt tempore, autem nulla voluptate dolores cum minus
                explicabo totam quidem?
              </p>
            </div>
          </div>
          <div className="wrapper text-white flex gap-12 flex-col lg:flex-row">
            <div className="hover:-translate-y-2 duration-200 w-72 border-[1px] rounded-lg py-4 px-6 bg-slate-800">
              <div className="text-[#0967C3] absolute">
                <LinkedInLogoIcon className="h-10 w-10" />
              </div>
              <div className="w-10 h-10" />
              <h1 className="text-2xl font-bold">LinkedIn</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt tempore, autem nulla voluptate dolores cum minus
                explicabo totam quidem?
              </p>
            </div>
            <div className="hover:-translate-y-2 duration-200 w-72 border-[1px] rounded-lg py-4 px-6 bg-slate-800">
              <img src="twitter.svg" alt="" className="h-10 w-10 absolute" />
              <div className="w-10 h-10" />
              <h1 className="text-2xl font-bold">Twitter</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt tempore, autem nulla voluptate dolores cum minus
                explicabo totam quidem?
              </p>
            </div>
            <div className="hover:-translate-y-2 duration-200 w-72 border-[1px] rounded-lg py-4 px-6 bg-slate-800">
              <img src="insta.svg" alt="" className="h-10 w-10 absolute" />
              <div className="w-10 h-10" />
              <h1 className="text-2xl font-bold">Instagram</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt tempore, autem nulla voluptate dolores cum minus
                explicabo totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
