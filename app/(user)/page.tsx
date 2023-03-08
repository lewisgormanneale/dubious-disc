export default async function Home() {
  return (
    <div className="flex flex-col justify-start items-center">
      <section className="flex flex-col justify-start items-center text-white my-5">
        <h1 className="text-green-300 text-2xl text-center font-bold">
          Welcome to Gracidea.com
        </h1>
        <p>Your source for Pokémon Tools, Resources and News</p>
      </section>
      <section className=" flex flex-col w-full h-96">
        {/* <h2 className="text-xl font-bold text-center text-green-300 ml-4">
          News
        </h2> */}
      </section>
    </div>
  );
}
