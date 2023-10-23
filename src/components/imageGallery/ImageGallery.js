import React, { useState } from 'react'
import "./_imageGallery.scss"
import  image1 from "../../images/Gallery/image1.webp"
import  image2 from "../../images/Gallery/image2.webp"
import  image3 from "../../images/Gallery/image3.webp"
import  image4 from "../../images/Gallery/image4.webp"
import  image5 from "../../images/Gallery/image5.webp"
import  image6 from "../../images/Gallery/image6.webp"
import  image7 from "../../images/Gallery/image7.webp"
import  image8 from "../../images/Gallery/image8.webp"
import  image9 from "../../images/Gallery/image9.webp"
import  image10 from "../../images/Gallery/image10.webp"
import  image11 from "../../images/Gallery/image11.webp"
import  image12 from "../../images/Gallery/image12.webp"
import  image13 from "../../images/Gallery/image13.webp"

const ImageGallery = () => {
    const data = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]
    const [imageOpenOrClose, setImageOpenOrClose] = useState(null)
    let [image, setImage] = useState(null)
    let index = null
    const length = data.length - 1

    function nextImage () {
        index = data.findIndex(el => el === image)
        if (index === length) {
            setImage(data[0])
        } else {
            setImage(data[index+1])
        }
        index = null
    }

    function prevImage () {
        index = data.findIndex(el => el === image)
        console.log(index);
        if (index === 0) {
            setImage(data[length])
        } else {
            setImage(data[index-1])
        }
        index = null
    }


    return (
        <div className='gallerieContainer'>
            <div>
            {data.map(x => {
                return <figure key={x} onClick={() => {
                    setImageOpenOrClose(true)
                    setImage(x)
                }}>
                    <img src={x} width="175px" height="100px" alt='quads buggy et autres' />
                </figure>
            })}
            { imageOpenOrClose && (
                <div className='overlayGallery' >
                    <div onClick={()=> setImageOpenOrClose(null)} className='overlayToClose'></div>
                    <img src={image} width="250px" height="150px" alt='quads buggy et autres'/>
                    <i className="fa-solid fa-chevron-right nextImage" onClick={nextImage}></i>
                    <i className="fa-solid fa-chevron-left prevImage" onClick={prevImage}></i>
                    <i className="fa-solid fa-xmark closeOverlay" onClick={()=> setImageOpenOrClose(null)}></i>
                </div>
            )
            }
            </div>
        </div>
    );
};

export default ImageGallery;