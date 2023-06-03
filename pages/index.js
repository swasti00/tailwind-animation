import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import Head from "next/head";
import Main from "../components/Main";
export default function Home() {
  const [show, setShow] = useState(false)

  return (
  <>
  <Head>
    <title>Shop</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@900&display=swap" rel="stylesheet" />  
    </Head>
   <div className="bg-[#020513]">
   <Main />
    {/* <Intro show={show} setShow={setShow} /> 
    {show ? <Main /> :""} */}
   </div>
  </>
)
}
