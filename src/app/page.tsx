import Link from "next/link";

export default function Home() {

  let link = ''

  return (
      <main className="flex flex-col justify-center items-center">
        <h1 className="mt-8 mb-20 text-3xl font-bold">Link Sharing</h1>
        <div className="bg-amber-200 flex flex-col justify-center items-center text-black text-lg font-semibold py-6 px-5 rounded-xl w-1/2">
          <Link href={link} target="_blank"></Link>
          <button className="bg-red-800 px-4 py-2 rounded-xl font-semibold text-amber-100 box-pop hover:bg-red-900 hover:text-amber-50 transition duration-300">Copy</button>
          <input></input>
          <button className="bg-red-800 px-4 py-2 rounded-xl font-semibold text-amber-100 box-pop hover:bg-red-900 hover:text-amber-50 transition duration-300">UPDATE</button>
        </div>
      </main>
  );
}
