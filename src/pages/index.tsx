import Card from "@components/Card";
import NavBar from "@components/NavBar";
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
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [price, setPrice] = useState<string>("all");
  const [beds, setBeds] = useState<string>("all");
  const [baths, setBaths] = useState<string>("all");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((res) => setData(res));
    setLoading(false);
  }, []);

  const filteredData = data
    ?.filter((item) => {
      if (type === "all") return true;

      return item.type === type;
    })
    .filter((item) => {
      if (location === "all") return true;

      return item.location === location;
    })
    .filter((item) => {
      if (beds === "all") return true;

      return item.beds === beds;
    })
    .filter((item) => {
      if (baths === "all") return true;

      return item.baths === baths;
    })
    .filter((item) => {
      if (price === "all") return true;
      else if (price === "1" && item.price > 500 && item.price <= 1500)
        return item.price;
      else if (price === "2" && item.price > 1500 && item.price <= 2500)
        return item.price;
      else if (price === "3" && item.price > 2500 && item.price <= 3500)
        return item.price;
    });

  return (
    <div className='flex flex-col items-center min-h-screen bg-slate-100'>
      <Head>
        <title>Reunion Front</title>
      </Head>
      <NavBar />
      <div className='p-6 bg-white rounded-lg mt-28 flex gap-4'>
        <div>
          <label className='mb-2 text-sm font-medium text-gray-500'>
            Types
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='bg-transparent border-0 text-gray-900 text-sm rounded-lg block w-28 p-2'>
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='mb-2 text-sm font-medium text-gray-500'>
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='bg-transparent border-0 text-gray-900 text-sm rounded-lg block w-28 p-2'>
            {locationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='mb-2 text-sm font-medium text-gray-500'>
            Prices
          </label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='bg-transparent border-0 text-gray-900 text-sm rounded-lg block w-28 p-2'>
            {priceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='mb-2 text-sm font-medium text-gray-500'>Beds</label>
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className='bg-transparent border-0 text-gray-900 text-sm rounded-lg block w-28 p-2'>
            {bedsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='mb-2 text-sm font-medium text-gray-500'>
            Bathrooms
          </label>
          <select
            value={baths}
            onChange={(e) => setBaths(e.target.value)}
            className='bg-transparent border-0 text-gray-900 text-sm rounded-lg block w-28 p-2'>
            {bathsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

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
