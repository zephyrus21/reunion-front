import type { NextApiRequest, NextApiResponse } from "next";

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

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
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
      beds: 3,
      baths: 4,
    },
    {
      id: 2,
      name: "Holmeswood",
      address: "412 Park Ave, New York, NY 10001",
      location: "New York",
      price: 1240,
      popular: true,
      type: "apartment",
      area: {
        width: 2.4,
        breadth: 3.3,
      },
      beds: 2,
      baths: 3,
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
      beds: 3,
      baths: 3,
    },
    {
      id: 4,
      name: "Hunters Wood",
      address: "29 West St, Austin, TX 78701",
      location: "Austin",
      price: 1240,
      popular: false,
      type: "villa",
      area: {
        width: 3.5,
        breadth: 4.2,
      },
      beds: 3,
      baths: 4,
    },
  ]);
};

export default handler;
