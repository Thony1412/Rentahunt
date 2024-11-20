import Hero from "./hero";
export default function Home() {
  return (
    <div className="w-full h-screen min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <div className="flex flex-col items-center justify-center gap-8 mt-10">
        <p className="text-lg text-center">After hero</p>
      </div>
    </div>
  );
}
