import { NextPage } from "next";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <main className='mx-4 w-full flex'>
      <section>
        <Image 
          src="./public/images/crown.svg"
          alt=""
          width={50}
          height={50}
        />
      </section>
    </main>
  )
}

export default Header