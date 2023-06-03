import { Controller, Scene } from "react-scrollmagic"
import { Timeline, Tween } from 'react-gsap';
import Client from "./Client";
import Image from "next/image";
import img from "../images/bg.png";
import img2 from "../images/bg-removebg-preview (3).png"


function Trigger() { 

  
    return (
      <>
      <div id="trigger" className="w-full top-[20vh] bg-[#020513] md:top-[10vh] h-screen relative" >
              <Controller>
                <Scene duration={100} 
                        triggerElement="#trigger"
                        offset={150} 
                        pin={{pushFollowers:false}}
                        >
                          <div className="z-10  w-full h-screen md:h-[50vh] relative" >
                           <Image rel="preload" src={img} layout="fill" />
                          </div>
                            
                        </Scene>
                        </Controller>
                        <Controller>
                        <Scene duration={100} 
                        offset={150} 
                        triggerElement="#trigger"
                        pin={{pushFollowers:false}}
                        >
                            <div id="toggle" rel="preload" className="z-40 w-full h-screen md:h-[50vh] absolute top-0 ">
                            <Image rel="preload" src={img2} layout="fill" />
                            </div>
                        </Scene>
                        </Controller>

              <Controller>
              <div className=" z-30 w-full h-screen md:h-[50vh] absolute top-0 bg-transparent">
                <Scene duration={50} offset={200} triggerElement="#toggle" >
                {(progress) => (
            <Tween
            from={{
              css: {
                opacity: '0',
                zIndex:"0",
                top:"25.1%",
              },
              ease: 'Circ.easeOutExpo',
            }}
            to={{
              css: {
                opacity: '1',
                top:"25%",
                zIndex:"0"
              },
              ease: 'Circ.easeOutExpo',
            }}
              totalProgress={progress}
              paused>
                <div className="relative w-[8%] h-[20%] top-[25%] bg-white left-[10%]">
                </div>
              
            </Tween>
                )}  
                  </Scene>
                  <Scene duration={50}  offset={200} triggerElement="#toggle"  >
                {(progress) => (
            <Tween
            from={{
              css: {
                opacity: '0',
                zIndex:"0",
                top:"30.1%",
              },
              ease: 'Circ.easeOutExpo',
            }}
            to={{
              css: {
                opacity: '1',
                top:"30%",
                zIndex:"0"
              },
              ease: 'Circ.easeOutExpo',
            }}
              totalProgress={progress}
              paused>
                <div className="relative w-[8%] h-[20%] top-[30%] bg-white left-[73%]">
                </div>
              
            </Tween>
                )}  
                  </Scene>
                  <Scene duration={50}  offset={200} triggerElement="#toggle" >
                {(progress) => (
            <Tween
            from={{
              css: {
                opacity: '0',
                zIndex:"0",
                top:"28.1%",
              },
              ease: 'Circ.easeOutExpo',
            }}
            to={{
              css: {
                opacity: '1',
                top:"28%",
                zIndex:"0"
              },
              ease: 'Circ.easeOutExpo',
            }}
              totalProgress={progress}
              paused>
                <div className="relative w-[8%] h-[20%] top-[28%] bg-white left-[17%]">
                </div>
              
            </Tween>
                )}  
                  </Scene>
                  </div>
                  </Controller>
                  
            </div>
            </>
    )
}
export default Trigger