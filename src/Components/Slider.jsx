import React, {useState,useRef} from 'react'
import image1 from '../assets/Slider/1.png'
import image2 from '../assets/Slider/2.png'
import image3 from '../assets/Slider/3.png'
function Slider(params) {
    const IntervalID = useRef(null)
    let currentImage=1;
    let onceki,prev,next;
    let pos=0;
    let pos2=0;
    let isAnimation=false
    function right() {
        console.log(isAnimation)
        if(!isAnimation){
            isAnimation=true;
        if(currentImage!=1){
            prev=document.getElementById(`${currentImage}`);
            next=document.getElementById(`${currentImage-1}`);
            onceki=prev.style.translate;
            pos2=prev.offsetWidth
            next.style.translate=pos2+"px"
            next.style.display="inline-block"
            prev.style.display="inline-block"
            next.style.position="absolute"
            IntervalID.current = setInterval(()=>{
                pos+=8;
                pos2-=8;
                prev.style.translate=pos+"px"
                next.style.translate=-pos2+"px";
                if(pos >= prev.offsetWidth) {
                    clearInterval(IntervalID.current)
                    prev.style.display="none"
                    console.log(currentImage)
                    prev.style.translate=onceki
                    next.style.translate=onceki
                    pos=0;
                    pos2=0;
                    next.style.position="relative"
                    isAnimation=false
                }
            },1)
            currentImage--;
        } else {isAnimation=false}
    }
    }
    function left() {
        console.log(isAnimation)
        if(!isAnimation){
            isAnimation=true;
        if(currentImage!=3){
            prev=document.getElementById(`${currentImage}`);
            next=document.getElementById(`${currentImage+1}`);
            onceki=prev.style.translate;
            next.style.translate=pos2+"px"
            next.style.display="inline-block"
            prev.style.display="inline-block"
            next.style.position="absolute"
            IntervalID.current = setInterval(()=>{
                pos+=8;
                pos2-=8;
                next.style.translate=pos2+"px";
                prev.style.translate="-"+pos+"px"
                if(pos >= prev.offsetWidth) {
                    clearInterval(IntervalID.current)
                    prev.style.display="none"
                    console.log(currentImage)
                    prev.style.translate=onceki
                    next.style.translate=onceki
                    pos=0;
                    pos2=0;
                    next.style.position="relative"
                    isAnimation=false;
                }
            },1)
            currentImage++;
        }else {isAnimation=false}
    }
    }
    return(<>
        <div className="w-full flex justify-center mb-6" >
            <div className='w-1/3 z-30 bg-white'>
                
            </div>
            <div className="w-128 pt-6 relative">
                <img id='1' className=' relative' src={image1} alt="" />
                <img id='2' className=' hidden relative' src={image2} alt="" />
                <img id='3' className=' hidden relative' src={image3} alt="" />
                <button onClick={()=>left()} className= ' absolute text-3xl pt-6 text-black w-15 rounded-full top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'><span className='bg-white ease-in-out duration-150 w-10 h-10 rounded-full shadow-2xl shadow-black hover:bg-black hover:shadow-none hover:text-white'>←</span></button>
                <button onClick={()=>right()} className=' absolute text-3xl pt-6 text-black w-15 rounded-full top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'><span className='bg-white ease-in-out duration-150 w-10 h-10 rounded-full shadow-2xl shadow-black hover:bg-black hover:drop-shadow-none hover:text-white'>→</span></button>
            </div>
            <div className='w-1/3 z-30 bg-white'>
                
            </div>
        </div>
    </>)
}
export default Slider;