'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { getDoc, doc, setDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"

export default function Home() {

  const [link, setLink] = useState('')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDBData = async () => {
      const docSnap = await getDoc(doc(db, 'link', 'link'))
      setLink(docSnap.data()?.link)
      setLoading(false)
    }
    getDBData()
  },[])

  const handleChange = (event: any) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    AddDBData(input)
    setLink(input)
    setInput('')
  }

  const AddDBData = async (newLink: string) => {
    await setDoc(doc(db, 'link', 'link'), {link : newLink})
  }

  const copyText = () => {
    navigator.clipboard.writeText(link)
    document.getElementById('copy-confirm')!.style.visibility = 'visible'
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="mt-8 mb-20 text-3xl font-bold">Link Sharing</h1>
      <div className="bg-amber-200 flex flex-col justify-center items-center gap-4 text-black text-lg font-semibold mx-4 py-6 px-5 rounded-xl w-97 md:w-3/4 lg:w-7/12 xl:w-1/2">
      {loading ? <h1>Loading...</h1> :
        <>
          {link == '' ? <h1>No Link</h1> :
          <>
            <Link href={link} target="_blank">{link}</Link>
            <button onClick={copyText} className="bg-red-800 px-4 py-2 rounded-xl font-semibold text-amber-100 box-pop hover:bg-red-900 hover:text-amber-50 transition duration-300">Copy</button>
          </>}
          <h2 id='copy-confirm' className="text-gray-700 text-sm -my-3 invisible">Link Copied</h2>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5">
            <input onChange={handleChange} value={input} placeholder='New Link' required className="bg-amber-100 w-11/12 box-pop px-4 py-2 rounded-xl font-semibold outline-none focus:ring focus:ring-gray-300 transition duration-300 sm:w-5/6 lg:w-9/12"></input>
            <button className="bg-red-800 px-4 py-2 rounded-xl font-semibold text-amber-100 box-pop hover:bg-red-900 hover:text-amber-50 transition duration-300">Update</button>
          </form>
        </>}
      </div>
    </main>
  );
}
