import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="header h-20 bg-[#1F1F1F] flex justify-between items-center">
        <h1 className="text-white text-4xl mx-10">Gig.events</h1>
      </div>
      <div className="bg-[#EEF1EF] h-96 flex flex-row justify-around">
        <div className="sectionContent w-64 flex items-center">
          <Image
            src="/club1.jpg"
            alt="club1"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center">
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
      <div className="bg-[#1F1F1F] h-96 flex flex-row justify-around">
        <div className="sectionContent w-64 flex items-center">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            delectus voluptates soluta impedit atque magnam temporibus ut
            expedita eos maxime eius, aliquid eaque! Unde aperiam esse sed
            autem? Vitae, odit aut repudiandae recusandae suscipit, ipsa,
            eveniet eius nisi corrupti eligendi velit a culpa earum accusantium
            dolore sapiente praesentium porro provident!
          </p>
        </div>
        <div className="sectionContent w-64 flex items-center">
          <Image
            src="/club2.jpg"
            alt="club2"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="bg-[#EEF1EF] h-96 flex flex-row justify-around">
        <div className="sectionContent w-64 flex items-center">
          <Image
            src="/club3.jpg"
            alt="club3"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center">
          <Image
            src="https://source.unsplash.com/random"
            alt="random"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
        <div className="sectionContent w-64 flex items-center">
          <Image
            src="https://source.unsplash.com/random"
            alt="random"
            width="250px"
            height="250px"
            className="rounded-md"
          />
        </div>
      </div>
      <footer className="flex justify-center items-center text-white text-xl h-20 bg-[#1F1F1F]">
        footer footer footer
      </footer>
    </>
  );
}
