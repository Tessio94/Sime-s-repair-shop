import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto
      h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Sime&apos;s Computer<br/>Repair Shop</h1>
          <address>
            Zadarska 15 B
            Zadar, Zd 23000
          </address>
          <p>Radno vrijeme: svaki dan od 9h do 17h</p>
          <Link href="tel:+38598321321" className="hover:underline">
             098/321/321
          </Link>
        </div>

      </main>

    </div>
  );
}
