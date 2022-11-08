import Image from "next/image";
import { Navbar } from "./Navbar";
import {
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import useInView from "../hooks/useInView";

export default function Home() {
  const [containerRef, isVisible] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  const [containerRef2, isVisible2] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  const [containerRef3, isVisible3] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  return (
    <>
      <Navbar />
      <div className="bg-[#16161d] bg-[url('../public/mixer-dark.jpg')] relative -z-10 bg-cover bg-fixed flex flex-col justify-center items-center md:h-[100vh] md:flex-row md:justify-around">
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
      <div className="bg-[#eef1ef] bg-[url('../public/speaker.jpg')] relative -z-10 bg-left bg-cover bg-no-repeat bg-fixed flex flex-col justify-center items-center md:h-[80vh] md:flex-row md:justify-around isVisible">
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
      <div className="bg-[#16161d] bg-[url('../public/bluewave.jpg')] relative -z-10 bg-cover bg-fixed flex flex-col justify-center items-center md:h-[80vh] md:flex-row md:justify-around">
        <div className="gradient-wrapper-left-2" />
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
      <div className="bg-[url('../public/f1.jpg')] relative -z-10 bg-left bg-contain bg-no-repeat bg-fixed flex flex-col justify-center items-center md:h-[80vh] md:flex-row md:justify-around">
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
        className="relative -z-10 bg-[url('../public/stasys.jpg')] bg-no-repeat flex flex-col justify-center items-center h-[500px] md:h-[70vh] md:flex-row md:justify-around"
        style={{ backgroundPosition: "40vw" }}
      >
        <div className="bg-[#16161d] gradient-wrapper-left-3" />
        {/* <div className="sectionContent w-64 flex items-center m-4 mb-2 md:m-0 z-10">
          <Image
            src="/club3.jpg"
            alt="club3"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center mx-4 my-2 md:m-0 z-10">
          <Image
            src="https://source.unsplash.com/random"
            alt="random"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center m-4 mt-2 md:m-0 z-10">
          <Image
            src="https://source.unsplash.com/random"
            alt="random"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div> */}
      </div>
      <div
        className="bg-[url('../public/1210.jpg')] relative bg-left-top bg-cover -z-10 bg-no-repeat flex flex-col justify-center items-center md:h-[50vh] md:justify-center"
        style={{
          // backgroundSize: "50% 100%",
          backgroundPosition: "-45vw",
        }}
      >
        <div className="absolute bg-[#EEF1EF] gradient-wrapper-right-2" />
        <h1 className="text-3xl my-10">Title Here</h1>
        <p className="flex items-center max-w-2xl m-16 md:m-0">
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
        <ArrowLeftIcon className="m-2 w-10 h-10" />
        <ArrowUpIcon className="m-2 w-10 h-10" />
        <ArrowDownIcon className="m-2 w-10 h-10" />
        <ArrowRightIcon className="m-2 w-10 h-10" />
      </div>
      <footer className="relative flex flex-col justify-center items-center text-white text-xl h-[40vh] bg-bottom bg-cover bg-no-repeat bg-[url('../public/scanner.jpg')] md:bg-center">
        <div className="absolute w-full h-full bg-[#16161d] opacity-80" />
        <p className="z-10">footer footer footer footer</p>
        <div className="flex mt-12 z-10">
          <ArrowLeftIcon className="m-2" />
          <ArrowUpIcon className="m-2" />
          <ArrowDownIcon className="m-2" />
          <ArrowRightIcon className="m-2" />
        </div>
      </footer>
    </>
  );
}

//background-position:50vw
//background-size:contain
//background-attachment:fixed
