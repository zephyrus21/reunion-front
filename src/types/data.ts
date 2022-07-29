export type Data = {
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
  beds: String;
  baths: String;
};

export const typeOptions = [
  { label: "All", value: "all" },
  { label: "House", value: "house" },
  { label: "Villa", value: "villa" },
  { label: "Apartment", value: "apartment" },
];
export const locationOptions = [
  { label: "All", value: "all" },
  { label: "New York", value: "New York" },
  { label: "Austin", value: "Austin" },
  { label: "Los Angelas", value: "Los Angelas" },
];
export const priceOptions = [
  { label: "All", value: "all" },
  { label: "$500 - $1,500", value: "1" },
  { label: "$1,500 - $2,500", value: "2" },
  { label: "$2,500 - $3,500", value: "3" },
];
export const bedsOptions = [
  { label: "All", value: "all" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
];
export const bathsOptions = [
  { label: "All", value: "all" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
];
