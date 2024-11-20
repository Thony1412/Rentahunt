import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

interface ListingCardProps {
  imageURL: string;
  title: string;
  price: number;
  location: string;
}

export default function ListingCard({
  imageURL,
  title,
  price,
  location,
}: ListingCardProps) {
  return (
    <div className="w-52 h-80 border-2 rounded-xl flex flex-col shadow-none hover:shadow-md">
      <Image
        src={imageURL}
        alt={title}
        width={300}
        height={300}
        className="aspect-square mb-3 rounded-t-xl"
      />
      <div className="px-3 flex flex-col justify-center">
        <p>{title}</p>
        <p className="text-blue-800">
          {"₱  "}
          {price}
        </p>
        <div className="flex items-center gap-1">
          <FaLocationDot className="fill-red-400" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
