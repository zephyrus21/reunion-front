import { NextPage } from "next";
import { useEffect } from "react";
import {
  typeOptions,
  locationOptions,
  priceOptions,
  bedsOptions,
  bathsOptions,
} from "src/types/data";

const Sorting: NextPage<any> = ({
  setFilteredData,
  data,
  type,
  setType,
  location,
  setLocation,
  price,
  setPrice,
  beds,
  setBeds,
  baths,
  setBaths,
}) => {
  useEffect(() => {
    const filData = data
      ?.filter((item: any) => {
        if (type === "all") return true;

        return item.type === type;
      })
      .filter((item: any) => {
        if (location === "all") return true;

        return item.location === location;
      })
      .filter((item: any) => {
        if (beds === "all") return true;

        return item.beds === beds;
      })
      .filter((item: any) => {
        if (baths === "all") return true;

        return item.baths === baths;
      })
      .filter((item: any) => {
        if (price === "all") return true;
        else if (price === "1" && item.price > 500 && item.price <= 1500)
          return item.price;
        else if (price === "2" && item.price > 1500 && item.price <= 2500)
          return item.price;
        else if (price === "3" && item.price > 2500 && item.price <= 3500)
          return item.price;
      });

    setFilteredData(filData);
  }, [data, type, location, price, beds, baths, setFilteredData]);

  return (
    <div className='p-6 bg-white rounded-lg mt-28 flex gap-4'>
      <div>
        <label className='mb-2 text-sm font-medium text-gray-500'>Types</label>
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
        <label className='mb-2 text-sm font-medium text-gray-500'>Prices</label>
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
  );
};

export default Sorting;
