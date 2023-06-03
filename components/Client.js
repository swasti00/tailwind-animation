import Image from "next/image"
import img from "../images/2.png"
import img1 from "../images/img.png"
import img2 from "../images/1.png"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
function Client() {
    return(
        <div id="client">
        <div className="bg-[#020513] w-[full] h-[100vh] relative content-center">
            <Controller>
                <Scene duration={100}  triggerElement="#client" >
                {(progress) => (
                    <Tween  from={{
              css: {
                opacity: '0',
                top:"25vh"
              },
              ease: 'Circ.easeOutExpo',
            }}
            to={{
              css: {
                opacity: '1',
                top:"20vh"
              },
              ease: 'Circ.easeOutExpo',
            }}
              totalProgress={progress}
              paused>
                    <div className="w-[900px] left-[280px] h-[40vh] relative top-[20vh]  grid gap-2 grid-cols-3 grid-rows-1">
            <div className=" w-[200px] h-[230px] p-4 pt-8 rounded-[25px] bg-[#0d161d] " >
                <Image src={img} width={100} height={100} alt="safe_transaction" />
                <h1 className="font-bold">Safe and reliable transfers</h1>
            </div>
            <div className=" w-[200px] h-[230px] p-4 pt-8 rounded-[25px] bg-[#0d161d]" >
                <Image src={img1} width={130} height={100} alt="routes" />
                <h1 className="font-bold">Safe and reliable transfers</h1>
            </div>
            <div className=" w-[200px] h-[230px] p-4 pt-8 rounded-[25px] bg-[#0d161d]" >
                <Image src={img2} width={150} height={100} alt="routes" />
                <h1 className="font-bold">Safe and reliable transfers</h1>
            </div>
        </div>
                    </Tween>
                    )}
                </Scene>
            </Controller>
            
        </div>
        </div>
    )   
}
export default Client