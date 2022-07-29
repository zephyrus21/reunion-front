import Card from "@components/Card";
import NavBar from "@components/NavBar";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

type Data = {
  id: number;
  name: String;
  address: String;
  location: String;
  price: String;
  popular: boolean;
  type: String;
  area: {
    width: number;
    breadth: number;
  };
  beds: number;
  baths: number;
}[];

const Home: NextPage = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Head>
        <title>Reunion Front</title>
      </Head>
      {/* <NavBar /> */}
      <div className='flex gap-10 flex-wrap m-10'>
        {data?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
