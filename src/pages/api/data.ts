import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "src/types/data";

const handler = (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  res.status(200).json([
    {
      id: 1,
      name: "The Mill House",
      address: "123 Main St, New York, NY 10001",
      location: "New York",
      price: 2940,
      popular: true,
      type: "house",
      area: {
        width: 5.4,
        breadth: 6.3,
      },
      beds: "3",
      baths: "4",
    },
    {
      id: 2,
      name: "Holmeswood",
      address: "412 Park Ave, New York, NY 10001",
      location: "New York",
      price: 990,
      popular: true,
      type: "apartment",
      area: {
        width: 2.4,
        breadth: 3.3,
      },
      beds: "2",
      baths: "3",
    },
    {
      id: 3,
      name: "The River Side",
      address: "43 Apple St, Los Angeles, CA 90001",
      location: "Los Angeles",
      price: 2300,
      popular: true,
      type: "house",
      area: {
        width: 4.4,
        breadth: 5.2,
      },
      beds: "3",
      baths: "3",
    },
    {
      id: 4,
      name: "Hunters Wood",
      address: "29 West St, Austin, TX 78701",
      location: "Austin",
      price: 1240,
      popular: true,
      type: "villa",
      area: {
        width: 3.5,
        breadth: 4.2,
      },
      beds: "3",
      baths: "4",
    },
    {
      id: 5,
      name: "Chilliwood",
      address: "South Bank, Austin, TX 78701",
      location: "Austin",
      price: 2240,
      popular: false,
      type: "villa",
      area: {
        width: 3.5,
        breadth: 4.2,
      },
      beds: "2",
      baths: "4",
    },
    {
      id: 6,
      name: "Luke's Wood",
      address: "Devil's Lake, Los Angeles, CA 90001",
      location: "Los Angeles",
      price: 3200,
      popular: false,
      type: "house",
      area: {
        width: 3.5,
        breadth: 4.2,
      },
      beds: "4",
      baths: "5",
    },
    {
      id: 7,
      name: "Mountain View",
      address: "East Park, New York, NY 10001",
      location: "New York",
      price: 2200,
      popular: false,
      type: "villa",
      area: {
        width: 3.5,
        breadth: 4.2,
      },
      beds: "2",
      baths: "4",
    },
    {
      id: 8,
      name: "Leto's Apartment",
      address: "Monte Ave, Los Angeles, CA 90001",
      location: "Los Angeles",
      price: 2400,
      popular: false,
      type: "apartment",
      area: {
        width: 3.5,
        breadth: 4.2,
      },
      beds: "2",
      baths: "2",
    },
  ]);
};

export default handler;
