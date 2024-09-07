import idImage from "@/public/assets/idCard.png"
import Image from "next/image";


export default function Home() {

  return (
    <main>
      <div className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error nobis eligendi illum pariatur! Sequi quis recusandae iusto atque ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa qui facere labore, nobis non sapiente harum ipsum fugiat. Est neque, itaque quaerat similique perspiciatis ratione libero optio explicabo provident reiciendis?
      </div>

      <div className="">
        <Image placeholder="blur" className="rounded-lg" src={idImage} alt="Id card image"></Image>
      </div>
    </main>
  );
}
