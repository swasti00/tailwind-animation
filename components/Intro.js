import { Main } from 'next/document'
import  Typewriter  from 'typewriter-effect'


function Intro({show , setShow}) {
    const screen = () => {
      setTimeout(() => {
        setShow(true)
      }, 550)
    }

    return <>
    <div className={`text-white z-50 bg-[#1e1e1e] w-full relative ${show ? "animate-screen" : "h-screen"}`}>
      <div className={`font-[info] font-black top-1/3 text-[40px] left-[42%] ${show ? "hidden" : "absolute"}`}>
      <Typewriter 
          options={{
            strings: ['veriFyd<span style="color: #05FF00;">.store</span>'],
            loop: true,
            autoStart:true,
            cursor:'_',
            delay:70,
            deleteSpeed:20,
            onRemoveNode: screen,
          }}
        />
      </div>
    </div>
    </>
}
export default Intro