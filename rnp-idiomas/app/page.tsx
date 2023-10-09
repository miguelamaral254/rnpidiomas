import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-center bg-red-400">
        <h1>HOME PAGE</h1>
      </div>
      
      {/* Banner section */}
      <section className="flex justify-center bg-blue-400">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Image
            src={require("./src/images/IMG_6126-1035x425.jpeg")}
            alt="img"
            className="w-auto"
          />
        </div>
      </section>
      {/* End Banner section */}
      
      {/* Content section */}
      <section className="flex justify-center bg-blue-400">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            Lorem Ipsum
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quo
            iure nobis alias reprehenderit quibusdam, reiciendis quaerat quis
            labore ratione eligendi iste vel ex eaque velit, illo ipsam beatae
            aperiam!
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Image src={require("./src/images/rec-n-play-2022-3.jpg")} alt="img" />
        </div>
      </section>
      {/* End Content section */}
      {/* Content section */}
      <section className="flex justify-center bg-blue-400">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Image src={require("./src/images/rec-n-play-2022-3.jpg")} alt="img" />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            Lorem Ipsum
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quo
            iure nobis alias reprehenderit quibusdam, reiciendis quaerat quis
            labore ratione eligendi iste vel ex eaque velit, illo ipsam beatae
            aperiam!
          </p>
        </div>
      </section>
      {/* End Content section */}
    </div>
  );
}
