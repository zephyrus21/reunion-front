import { NextPage } from "next";
import { Data } from "src/types/data";

const Card: NextPage<Data> = (data) => {
  return (
    <div className='flex flex-col border-2 rounded-lg p-4 w-[300px] relative gap-2 bg-white'>
      {data.popular && (
        <p className='absolute top-2 right-2 bg-purple-400 py-1 px-4 rounded-lg'>
          Popular
        </p>
      )}
      <p className='text-3xl text-purple-500'>
        ${data.price}
        <span className='text-neutral-400 text-sm'> / month</span>
      </p>
      <p className='text-2xl'>{data.name}</p>
      <p className='text-neutral-500'>{data.address}</p>
      {/* <p>{data.location}</p> */}
      <div className='flex gap-4 justify-center'>
        <p className='text-neutral-400 text-sm'>{data.beds} Beds</p>
        <p className='text-neutral-400 text-sm'>{data.baths} Bathrooms</p>
        <p className='text-neutral-400 text-sm'>
          {data.area.width} x {data.area.breadth} m²
        </p>
      </div>
    </div>
  );
};

export default Card;
