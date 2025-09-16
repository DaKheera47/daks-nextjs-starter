import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="grid min-h-[calc(100vh-56px)] grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
        <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
          <h1 className="text-4xl leading-tight font-bold tracking-tighter sm:text-6xl">
            Get coding, champ
          </h1>
        </main>
      </div>
    </div>
  );
}
