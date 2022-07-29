import { NextPage } from "next";

type Data = {
  id: number;
  name: String;
  address: String;
  location: String;
  price: number;
  popular: boolean;
  type: String;
  area: {
    width: number;
    breadth: number;
  };
  beds: number;
  baths: number;
};

const Card: NextPage<Data> = (data) => {
  return (
    <div className='flex flex-col border-2 p-4 w-[300px]'>
      {data.popular && <p>Popular</p>}
      <p>${data.price}/month</p>
      <p>{data.name}</p>
      <p>{data.address}</p>
      {/* <p>{data.location}</p> */}
      <div className='flex gap-4'>
        <p>{data.beds}</p>
        <p>{data.baths}</p>
        <p>
          {data.area.width} x {data.area.breadth}
        </p>
      </div>
    </div>
  );
};

export default Card;
