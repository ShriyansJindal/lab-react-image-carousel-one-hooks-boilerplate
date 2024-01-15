import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index,setindex]=useState(0)
    function handleback(){
        // if(index>0){
        //     setindex(index-1)
        // }
        // else{
        //     setindex(images.length-1)
        // }
        setindex(index>0 ? index-1 :images.length-1 )
    }
    function handleforward (){
        // if(index<images.length-1){
        //     setindex(index+1)
        // }
        // else{
        //     setindex(0)
        // }
        setindex(index<images.length-1 ? index+1 : 0)
    }
    return(
        <>
        <div className="main">
                <div >
                <ArrowBackIosIcon className="arrow" onClick = {handleback}/>
                </div>
                <div className="imagebox">
                    <img src={images[index].img} alt="" />
                </div>
                <div className="imageContainer">
                    <div className="titlebox">
                        <p>{images[index].title}</p>
                    </div>
                    <div className="subtittle">
                        <p>{images[index].subtitle}</p>
                    </div>
                </div>
                <div >
                    <ArrowForwardIosIcon className="arrow" onClick = {handleforward}/>
                </div>
            </div>
        </>
    )
}

export default Carousel;