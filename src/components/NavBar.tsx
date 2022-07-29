import { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => {
  return (
    <div className='fixed flex w-full justify-between items-center h-20 px-8 md:px-24 bg-white border-b-2 z-20'>
      <Link href={"/"}>
        <p className='text-2xl text-purple-500'>reunion</p>
      </Link>
    </div>
  );
};

export default NavBar;
