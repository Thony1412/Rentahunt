import ListingCard from "@/components/listing-card";

export default function Hero() {
  return (
    <div className="h-full w-full min-h-full bg-[#f3f9ff] grid grid-cols-12 items-start py-20 px-36">
      <div className="w-full col-span-12 text-gray-900">
        <p className="text-lg">This Week's Featured Listings:</p>
        <div className="flex gap-4 w-full mt-8">
          <ListingCard
            imageURL="/listing-test-images/a.png"
            title="Doms' Chairs Rentals"
            price={1000}
            location="Basna, Angono Rizal"
          />{" "}
          <ListingCard
            imageURL="/listing-test-images/b.png"
            title="Doms' Chairs Rentals"
            price={1000}
            location="Basna, Angono Rizal"
          />{" "}
          <ListingCard
            imageURL="/listing-test-images/c.png"
            title="Doms' Chairs Rentals"
            price={1000}
            location="Basna, Angono Rizal"
          />{" "}
          <ListingCard
            imageURL="/listing-test-images/d.png"
            title="Doms' Chairs Rentals"
            price={1000}
            location="Basna, Angono Rizal"
          />
          <ListingCard
            imageURL="/listing-test-images/b.png"
            title="Doms' Chairs Rentals"
            price={1000}
            location="Basna, Angono Rizal"
          />{" "}
        </div>
      </div>
    </div>
  );
}
