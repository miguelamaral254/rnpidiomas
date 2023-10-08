import Image from "next/image";


export default function Home() {
  return <>
  <div className='container'>
    <div className="w-full flex justify-center bg-red-400">
      <h1>HOME PAGE</h1>
    </div>
    {/*Banner section*/}
    <section className=" flex justify-center bg-blue-400">
      <div className="container flex w-auto bg-white">
        <Image src={require("./src/images/BO_9020-1024x683.jpg")}
        alt="img"
        className="h-1/2"
        />
      </div>
      

    </section>
    {/*Banner section*/}
    <section className="container">
      <div>
        <div>
          <h1>lorem h1</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quo iure nobis alias reprehenderit quibusdam, reiciendis quaerat quis labore ratione eligendi iste vel ex eaque velit, illo ipsam beatae aperiam!</p>
        </div>
        
      </div>
    </section>


  </div>
  </>
}
