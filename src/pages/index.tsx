import Card from "@components/Card";
import NavBar from "@components/NavBar";
import Sorting from "@components/Sorting";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  bathsOptions,
  bedsOptions,
  Data,
  locationOptions,
  priceOptions,
  typeOptions,
} from "src/types/data";

const Home: NextPage = () => {
  const [data, setData] = useState<Data[]>();
  const [filteredData, setFilteredData] = useState<Data[]>();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [price, setPrice] = useState<string>("all");
  const [beds, setBeds] = useState<string>("all");
  const [baths, setBaths] = useState<string>("all");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch("/api/data");
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-slate-100'>
      <Head>
        <title>Reunion Front</title>
      </Head>
      <NavBar />

      <Sorting
        setFilteredData={setFilteredData}
        data={data}
        type={type}
        setType={setType}
        location={location}
        setLocation={setLocation}
        price={price}
        setPrice={setPrice}
        beds={beds}
        setBeds={setBeds}
        baths={baths}
        setBaths={setBaths}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex gap-10 flex-wrap m-10 justify-center'>
          {filteredData?.length == 0 ? (
            <p>No houses</p>
          ) : (
            filteredData?.map((item) => <Card key={item.id} {...item} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
