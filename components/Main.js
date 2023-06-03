import { useEffect, useState } from "react"
import  {Typewriter}  from "react-typewriting-effect"
// import Trigger from "./Trigger"
import Demo from "./Demo"

function Main() {
    const [show, setShow] = useState(false)
    const [ start , setStart ] = useState(false)
    const [main , setMain] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setMain(true);
        }, 1000)
        setTimeout(() => {
            setShow(true)
        },2300)
        setTimeout(() => {
            setStart(true)
        },3900)
    })

    return <>
        <div className="text-center bg-[#020513] absolute justify-center top-0 w-full h-screen font-medium overflow-hidden">
            <div className="relative box-content overflow-y-scroll pr-[17px] h-screen w-full">
            <div className="top-[25vh] md:top-[10vh] w-full h-[77vh] bg-[#020513] md:h-[57vh] relative" >
                <div className={`text-[20px]  ${main ? "animate-question" : "hidden"}`}>
                    <h3 className="text-white font-[info]">found a product,</h3>
                    <h3 className="text-white font-[info]" >but don't trust if it's legit?</h3>
                </div>
                <div className={`text-white font-mono top-[6vh] relative ${show ? "animate-intro" : "hidden"}`}>
                {show ? <Typewriter 
                        string="introducing"
                        cursor="_"
                        cursorClassName="animate-blink"
                    /> : "" }
                </div>
                <div className={`top-[14vh] text-white relative ${start ? "animate-title md:animate-title1" : "hidden"}`}>
                    <h1 className="relative font-black text-white font-[info] mt-2 text-7xl md:text-4xl">shop
                    <span className="text-[#05FF00]">.store</span></h1>
                    {/* <Trigger /> */}
                    <br />
                    <Demo />
                </div>
            </div>
            
            </div>
            
        </div>
    </>
}
export default Main