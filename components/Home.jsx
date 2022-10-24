import Image from "next/image";
import { Navbar } from "./Navbar";
import {
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#EEF1EF] flex flex-col justify-center items-center md:h-96 md:flex-row md:justify-around">
        <div className="sectionContent w-64 flex items-center m-4 mb-2 md:m-0">
          <Image
            src="/club1.jpg"
            alt="club1"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center m-4 mt-2 md:m-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            tenetur natus, explicabo saepe, ratione quisquam nostrum similique
            perferendis reiciendis aspernatur architecto non dolorem molestias
            blanditiis velit consequatur. Eum neque ullam et sed ipsum deleniti
            molestiae, enim inventore autem nulla commodi molestias accusantium!
            Nam, quam eaque quidem praesentium nesciunt laboriosam illo?
          </p>
        </div>
      </div>
      <div className="bg-[#1F1F1F] flex flex-col justify-center items-center md:h-96 md:flex-row md:justify-around">
        <div className="sectionContent w-64 flex items-center m-4 mb-2 md:m-0">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            delectus voluptates soluta impedit atque magnam temporibus ut
            expedita eos maxime eius, aliquid eaque! Unde aperiam esse sed
            autem? Vitae, odit aut repudiandae recusandae suscipit, ipsa,
            eveniet eius nisi corrupti eligendi velit a culpa earum accusantium
            dolore sapiente praesentium porro provident!
          </p>
        </div>
        <div className="sectionContent w-64 flex items-center m-4 mt-2 md:m-0">
          <Image
            src="/club2.jpg"
            alt="club2"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="bg-[#EEF1EF] flex flex-col justify-center items-center md:h-96 md:flex-row md:justify-around">
        <div className="sectionContent w-64 flex items-center m-4 mb-2 md:m-0">
          <Image
            src="/club3.jpg"
            alt="club3"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center mx-4 my-2 md:m-0">
          <Image
            src="https://source.unsplash.com/random"
            alt="random"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center m-4 mt-2 md:m-0">
          <Image
            src="https://source.unsplash.com/random"
            alt="random"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="bg-[#1F1F1F] flex justify-center items-center md:h-96 md:justify-around">
        <p className="text-white flex items-center max-w-2xl m-10 md:m-0">
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
      <div className="bg-[#EEF1EF] h-32 flex flex-row justify-around items-center">
        <ArrowLeftIcon className="m-2 w-10 h-10" />
        <ArrowUpIcon className="m-2 w-10 h-10" />
        <ArrowDownIcon className="m-2 w-10 h-10" />
        <ArrowRightIcon className="m-2 w-10 h-10" />
      </div>
      <footer className="flex flex-col justify-center items-center text-white text-xl h-64 bg-[#1F1F1F]">
        <p>footer footer footer footer</p>
        <div className="flex mt-12">
          <ArrowLeftIcon className="m-2" />
          <ArrowUpIcon className="m-2" />
          <ArrowDownIcon className="m-2" />
          <ArrowRightIcon className="m-2" />
        </div>
      </footer>
    </>
  );
}
