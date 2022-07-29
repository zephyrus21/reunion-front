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
  price: number;
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
  const [type, setType] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [price, setPrice] = useState<string>("all");

  const typeOptions = [
    { label: "All", value: "all" },
    { label: "House", value: "house" },
    { label: "Villa", value: "villa" },
    { label: "Apartment", value: "apartment" },
  ];
  const locationOptions = [
    { label: "All", value: "all" },
    { label: "New York", value: "New York" },
    { label: "Austin", value: "Austin" },
    { label: "Los Angelas", value: "Los Angelas" },
  ];
  const priceOptions = [
    { label: "All", value: "all" },
    { label: "$500 - $1,500", value: "1" },
    { label: "$1,500 - $2,500", value: "2" },
    { label: "$2,500 - $3,500", value: "3" },
  ];

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((res) => setData(res));
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
      if (price === "all") return true;
      else if (price === "1" && item.price > 500 && item.price <= 1500)
        return item.price;
      else if (price === "2" && item.price > 1500 && item.price <= 2500)
        return item.price;
      else if (price === "3" && item.price > 2500 && item.price <= 3500)
        return item.price;
    });

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Head>
        <title>Reunion Front</title>
      </Head>
      {/* <NavBar /> */}
      <div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          {locationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          {priceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='flex gap-10 flex-wrap m-10'>
        {filteredData?.length == 0 ? (
          <p>No houses</p>
        ) : (
          filteredData?.map((item) => <Card key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default Home;
