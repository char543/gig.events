import Image from "next/image";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import "@fontsource/inter";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import useInView from "../hooks/useInView";

export default function Home() {
  // calls to useInView hook
  const [containerRef, isVisible] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  });
  const [containerRef2, isVisible2] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  });
  const [containerRef3, isVisible3] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  });
  const [containerRef4, isVisible4] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  });
  const [containerRef5, isVisible5] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  return (
    <>
      <Navbar />
      <div className="absolute h-full w-full pointer-events-none z-100 mix-blend-overlay bg-[url('../public/noice.avif')]" />
      <div className="bg-[#16161d] bg-[url('../public/mixer-dark-2.avif')] relative -z-10 bg-cover bg-fixed flex flex-col justify-center items-center md:h-[100vh] md:flex-row md:justify-around">
        <div className="gradient-wrapper-left" />
        <div className="sectionContent w-64 flex flex-col items-start m-4 mt-2 md:m-0">
          <h1 className="text-white text-3xl my-10 animate-down transform-gpu">
            Text Here
          </h1>
          <p className="text-white animate-right transform-gpu">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            tenetur natus, explicabo saepe, ratione quisquam nostrum similique
            perferendis reiciendis aspernatur architecto non dolorem molestias
            blanditiis velit consequatur. Eum neque ullam et sed ipsum deleniti
            molestiae, enim inventore autem nulla commodi molestias accusantium!
            Nam, quam eaque quidem praesentium nesciunt laboriosam illo?
          </p>
        </div>
        <div className="sectionContent w-64 flex items-center m-4 mb-2 md:m-0" />
      </div>
      <div className="bg-[#eef1ef] bg-[url('../public/speaker.avif')] relative -z-10 bg-left bg-cover bg-no-repeat bg-fixed flex flex-col justify-center items-center md:h-[80vh] md:flex-row md:justify-around">
        <div className="bg-[#EEF1EF] gradient-wrapper-right" />
        <div className="sectionContent w-64 flex items-center m-4 mt-2 md:m-0" />
        <div
          className="sectionContent w-64 flex flex-col items-start m-4 mb-8 md:m-0"
          ref={containerRef}
        >
          <h1
            className={`text-3xl my-10 ${
              isVisible ? "animate-left transform-gpu" : "hidden"
            }`}
          >
            Text Here
          </h1>
          <p className={`${isVisible ? "animate-up transform-gpu" : "hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            delectus voluptates soluta impedit atque magnam temporibus ut
            expedita eos maxime eius, aliquid eaque! Unde aperiam esse sed
            autem? Vitae, odit aut repudiandae recusandae suscipit, ipsa,
            eveniet eius nisi corrupti eligendi velit a culpa earum accusantium
            dolore sapiente praesentium porro provident!
          </p>
        </div>
      </div>
      <div className="bg-[#16161d] bg-[url('../public/bluewave.avif')] relative -z-10 bg-cover bg-fixed flex flex-col justify-center items-center md:h-[80vh] md:flex-row md:justify-around">
        <div className="gradient-wrapper-left-2" />
        <div className="absolute h-full w-full pointer-events-none z-100 mix-blend-overlay bg-[url('../public/noice.avif')]" />
        <div
          className="sectionContent w-64 flex flex-col items-start m-4 mt-2 md:m-0"
          ref={containerRef2}
        >
          <h1
            className={`text-white text-3xl my-10 ${
              isVisible2 ? "animate-down2 transform-gpu" : "hidden"
            }`}
          >
            Text Here
          </h1>
          <p
            className={`text-white ${
              isVisible2 ? "animate-up transform-gpu" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            tenetur natus, explicabo saepe, ratione quisquam nostrum similique
            perferendis reiciendis aspernatur architecto non dolorem molestias
            blanditiis velit consequatur. Eum neque ullam et sed ipsum deleniti
            molestiae, enim inventore autem nulla commodi molestias accusantium!
            Nam, quam eaque quidem praesentium nesciunt laboriosam illo??
          </p>
        </div>
        <div className="sectionContent w-64 flex items-center m-4 mb-2 md:m-0" />
      </div>
      <div className="bg-[url('../public/f1.avif')] relative -z-10 bg-left bg-contain bg-no-repeat bg-fixed flex flex-col justify-center items-center md:h-[80vh] md:flex-row md:justify-around">
        <div className="bg-[#EEF1EF] gradient-wrapper-right" />
        <div className="sectionContent w-64 flex items-center m-4 mt-2 md:m-0" />
        <div
          className="sectionContent w-64 flex flex-col items-start m-4 mb-8 md:m-0"
          ref={containerRef3}
        >
          <h1
            className={`text-3xl my-10 ${
              isVisible3 ? "animate-down2 transform-gpu" : "hidden"
            }`}
          >
            Text Here
          </h1>
          <p
            className={`${
              isVisible3 ? "animate-left transform-gpu" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            delectus voluptates soluta impedit atque magnam temporibus ut
            expedita eos maxime eius, aliquid eaque! Unde aperiam esse sed
            autem? Vitae, odit aut repudiandae recusandae suscipit, ipsa,
            eveniet eius nisi corrupti eligendi velit a culpa earum accusantium
            dolore sapiente praesentium porro provident!!
          </p>
        </div>
      </div>
      <div
        className="bg-[url('../public/stasys.avif')] bg-no-repeat relative -z-10 bg-cover bg-fixed flex flex-col justify-center items-center h-[700px] md:h-[80vh] md:flex-row md:justify-around"
        style={{ backgroundPosition: "40vw" }}
      >
        <div className="bg-[#16161d] gradient-wrapper-left-3" />
        <div className="absolute h-full w-full pointer-events-none z-[999] mix-blend-overlay bg-[url('../public/noice.avif')]" />
        <div
          className="sectionContent w-64 flex flex-col items-start m-4 mt-2 md:m-0"
          ref={containerRef4}
        >
          <h1
            className={`text-white z-10 text-3xl my-10 ${
              isVisible4 ? "animate-up transform-gpu duration-500" : "hidden"
            }`}
          >
            Text Here
          </h1>
          <p
            className={`z-10 text-white ${
              isVisible4 ? "animate-right transform-gpu duration-500" : "hidden"
            }`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            necessitatibus perferendis ea modi! Tempore, voluptatum voluptate
            laborum sequi delectus expedita hic aliquid, dolorum amet nihil
            totam, est nemo architecto ullam doloribus a adipisci. Minus dolorem
            ratione soluta delectus accusamus, neque quidem, repudiandae
            quaerat, repellat magnam dolores quae incidunt inventore id?
          </p>
        </div>
        <div className="sectionContent w-64 flex items-center m-4 mt-2 md:m-0" />
      </div>
      <div
        className="bg-[url('../public/1210.avif')] relative bg-left-top bg-cover -z-10 bg-no-repeat flex flex-col justify-center items-center md:h-[50vh] md:justify-center"
        style={{
          // backgroundSize: "50% 100%",
          backgroundPosition: "-45vw",
        }}
      >
        <div
          className="absolute bg-[#EEF1EF] gradient-wrapper-right-2"
          ref={containerRef5}
        />
        <h1
          className={`text-3xl my-10 ${
            isVisible5 ? "animate-up transform-gpu" : "hidden"
          }`}
        >
          Title Here
        </h1>
        <p
          className={`flex items-center max-w-2xl m-16 md:m-0 ${
            isVisible5 ? "animate-down2 transform-gpu" : "hidden"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deleniti ea. Sed, minima nisi blanditiis doloribus consequuntur nulla.
          Inventore aperiam tempore recusandae ducimus quis voluptas deserunt
          quibusdam animi rem saepe ullam ipsum quae enim, soluta fugiat alias
          laudantium odit unde voluptatum in autem repellat, laborum quidem
          eius. Optio voluptates odit, est maiores incidunt magni quasi a dolore
          blanditiis delectus, deleniti ea vel eveniet aliquid recusandae
          quisquam quidem saepe pariatur fuga, asperiores repellendus?
          Cupiditate blanditiis, ad minus error sit possimus nemo ullam pariatur
          commodi, temporibus esse dolorum rem at odio mollitia tempore fugit
          provident explicabo. Rem commodi nihil nostrum ut voluptates.
        </p>
      </div>
      <div className="bg-[#EEF1EF] h-[30vh] flex flex-row justify-around items-center">
        <div className="text-[#0967C3]">
          <LinkedInLogoIcon className="m-2 w-10 h-10 hover:scale-110 duration-200" />
        </div>
        <img
          src="insta.svg"
          alt=""
          className="h-10 w-10 hover:scale-110 duration-200"
        />
        <img
          src="twitter.svg"
          alt=""
          className="h-10 w-10 hover:scale-110 duration-200"
        />
        <ArrowRightIcon className="m-2 w-10 h-10 hover:scale-110 duration-200" />
      </div>
      <Footer />
    </>
  );
}
