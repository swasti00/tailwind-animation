import Image from "next/image"
import img from "../images/phone.png"
import { animate, motion ,useScroll } from "framer-motion"
import img1 from "../images/fb.png"
import { useRef } from "react"

function Svg(){
    return(
        <svg className="relative z-20" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="40" height="40"
            viewBox="0 0 48 48"
            style={{fill:"#000000"}}><circle cx="24" cy="24" r="20" fill="#E60023"></circle><path fill="#FFF" d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z">
    </path></svg>
    )
}


const svgVariants = {
    hidden: { opacity:0 },
    visible: { opacity: 1 },
    transition: { duration: 1 }
}


const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0 
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 0.6,
            duration: 2,
            ease: "easeInOut"
        } 
    }
}

function SvgMotion({ children }) {
    return(
        <motion.div className="absolute top-[40vh] w-screen h-[50vh] "
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        variants={svgVariants}>
            { children }
        </motion.div>
    )
}

function Motion({ children }) {
    return (
        <motion.div className="absolute top-[40vh] w-full h-[50vh] z-20" 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {
                    opacity:0,
                    // rotate: -360,
                },
                visible: {
                    opacity: 1,
                    // rotate: 0,
                    transition:{
                        duration: 1,
                        delay: 2,
                        ease: "easeInOut"
                    }
                }
            }}
            >
                    { children }
        </motion.div>
    )
} 

function Demo() {
    return (
        <div className="h-screen w-screen bg-[#020513] relative">
           
            <div className="relative top-[15%] z-50 w-[18%] h-[70%]  left-1/2 transform -translate-x-1/2 ">
                <Image src={img} layout="fill" alt="phone" />
            </div>
            <Motion>
                <div className="absolute top-[-35%] rounded-[10px] z-20 left-[22.3%] w-[120px] h-[170px] bg-white">
                    <Image className="rounded-[10px]" src={img1} layout="fill" alt="fb" />                
                </div>
                <div className="absolute top-[35%] rounded-[10px] z-20 right-[17.2%] w-[120px] h-[170px] bg-white">
                    <Image className="rounded-[10px]" src={img1} layout="fill" alt="fb" />
                </div>
                <div className="absolute top-[45%] rounded-[10px] z-20 left-[8.8%] w-[120px] h-[170px] bg-white">
                    <Image className="rounded-[10px]" src={img1} layout="fill" alt="fb" />
                </div>
                <div className="absolute top-[-20%] right-[25%] rounded-[10px] w-[35px] h-[35px]">
                    <Svg />
                </div>
                <div className="absolute top-[-53%] right-[31%] rounded-[10px] w-[35px] h-[35px]">
                    <Svg />
                </div>
            </Motion>                
            <SvgMotion>
                <svg className="absolute top-[-57%] right-[5.5%] " width="38%" height="30%">
                    <defs>
                            <linearGradient id="e3" x1="0" y1="82%" x2="30%" y2="33%" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#020513" offset="0" />
                                    <stop stopColor="#3f5787" offset="1" />
                            </linearGradient>
                    </defs>
                    <motion.line x1="0" y1="82%" x2="30%" y2="33%" stroke="url(#e3)" strokeWidth="1.6"
                            variants={pathVariants}
                            viewport={{ once: true }} />
                </svg>
                <svg className="absolute top-[20%] right-[0] " width="45%" height="30%">
                    <defs>
                        <linearGradient id="e" x1="0" y1="0" x2="75%" y2="80%" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#020513" offset="0" />
                            <stop stopColor="#3f5787" offset="1" />
                        </linearGradient>
                    </defs>
                    <motion.line x1="-10%" y1="0" x2="45%" y2="80%" stroke="url(#e)" strokeWidth="1.5"
                    variants={pathVariants}
                    viewport={{ once: true }}/>
                </svg>
                <svg className="absolute top-[25%] left-[16%] " width="45%" height="50%">
                    <defs>
                        
                        <linearGradient id="e2"  x1='69%' y1='-17%' x2='0' y2='80%' gradientUnits="userSpaceOnUse">
                            <stop stopColor="#020513" offset="0" />
                            <stop stopColor="#3f5787" offset="1" />
                        </linearGradient>
                    </defs>
                    <motion.line x1='69%' y1='-11%' x2='0' y2='80%' stroke="url(#e2)"  strokeWidth="2"  
                    variants={pathVariants} 
                    viewport={{ once: true }} />
                </svg>
                <svg className="absolute top-[10%] left-[2%] " width="45%" height="50%">
                    <defs>
                        <linearGradient id="e1" x1='89%' y1='33%' x2='0' y2='-80%' gradientUnits="userSpaceOnUse">
                            <stop stopColor="#020513" offset="0" />
                            <stop stopColor="#3f5787" offset="1" />
                        </linearGradient>
                    </defs>
                <motion.line x1='89%' y1='33%' x2='0' y2='-80%' stroke="url(#e1)"  strokeWidth="2"  
                    variants={pathVariants} 
                    viewport={{ once: true }} />
                </svg>
                <svg className="absolute top-[-13%] right-[0] " width="45%" height="30%">
                    <defs>
                        <linearGradient id="e" x1="0" y1="82%" x2="30%" y2="33%" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#020513" offset="0" />
                            <stop stopColor="#3f5787" offset="1" />
                        </linearGradient>
                    </defs>
                    <motion.line x1="0%" y1="62%" x2="55%" y2="-23%" stroke="url(#e)" strokeWidth="1.5"
                    variants={pathVariants}
                    viewport={{ once: true }}/>
                </svg>
            </SvgMotion>
            <h1>Is it Safe ?</h1>
        </div>
        
    )
}
export default Demo