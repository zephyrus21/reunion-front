import { NextPage } from "next";
import Image from "next/image";
import { Data } from "src/types/data";

const Card: NextPage<Data> = (data) => {
  return (
    <div className='flex flex-col border-2 rounded-xl w-[300px] relative bg-white'>
      {data.popular && (
        <p className='absolute top-2 right-2 bg-purple-400 py-1 px-4 rounded-lg text-white z-10'>
          Popular
        </p>
      )}
      <Image
        src='/house.jpeg'
        alt='house'
        height={360}
        width={540}
        className='rounded-t-lg'
      />
      <div className='p-4 flex flex-col gap-3'>
        <p className='text-3xl text-purple-500'>
          ${data.price}
          <span className='text-neutral-400 text-sm'> / month</span>
        </p>
        <p className='text-2xl'>{data.name}</p>
        <p className='text-neutral-500'>{data.address}</p>
        {/* <p>{data.location}</p> */}
        <div className='flex gap-4 justify-center border-t pt-3'>
          <p className='text-neutral-400 text-sm'>{data.beds} Beds</p>
          <p className='text-neutral-400 text-sm'>{data.baths} Bathrooms</p>
          <p className='text-neutral-400 text-sm'>
            {data.area.width} x {data.area.breadth} m²
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
