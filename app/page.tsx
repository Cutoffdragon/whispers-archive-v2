import Feature from "@/components/hero/feature";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  row-start-2 items-center w-full">
        <Feature />
      </main>
    </div>
  );
}
