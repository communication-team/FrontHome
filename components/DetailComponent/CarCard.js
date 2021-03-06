import ColumnContainerDetail from '../DetailComponent/LeftDetail'
// components/DetailComponent/LeftDetail.js
import React from "react"
import react, { useState, useEffect } from 'react'
export default function CarCard(props){

    const [images, setImages] = useState([]);


    useEffect(() => {

        setImages([props.info.primary_image,
            props.info.image1,
            props.info.image2,
            props.info.image3,
            props.info.image4])
     

       
       
       
    }, [images])

    function changeImage(event)
    {

       console.log(images)
        if(event.target.id=='prv')
        {
            let image=document.getElementById('changeimages')
            let number=parseInt(image.name)

            
            if(number>0 && number<images.length)
            {
                number=number-1
                console.log(number)
                image.src=images[number]
                image.name=number
                document.getElementById('number').innerHTML=number+1
            }
            else if (number==0)
            {
                console.log(number)
                image.src=images[images.length-1]
                image.name=images.length-1
                document.getElementById('number').innerHTML=images.length
            }
           
            
            
          
        }else{
            let image=document.getElementById('changeimages')
            let number=parseInt(image.name)
            if(number>=0 && number<images.length-1)
            {
                number=number+1
                console.log(number)
                image.src=images[number]
                image.name=number
                document.getElementById('number').innerHTML=number+1
            }
            else if (number==images.length-1)
            {
                console.log(number)
                image.src=images[0]
                image.name=0
                document.getElementById('number').innerHTML=1
            }
           
        }

        
    }
    return(
        <React.Fragment>

            
        <div >
            


            
            <section className="PVSliderSection">
            <div className="mainSliderConatinerCC ">
                <div className="bigImgCC">
                <div className="innerCCBI">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="" id='changeimages' style={{    objectFit: 'cover'}} name="1" src={props.info.primary_image} alt="" />
                    <div className="imageCameraIIIg">
                    </div>
                </div>
                <div className="crntImgCC">
                    <span id="number">1</span>
                    <span>????</span>
                    <span>{images.length}</span>
                </div>
                <span className="rightShiftCC" id="prv" onClick={changeImage}>
                </span>
                <span className="leftShiftCC" id="nex" onClick={changeImage}>
                </span>
                </div>
                <div className="allThumbContainer">
                <div className="thumbCC">
                    <div className="ThumbWrapperCC">
                    <div className="singleThumbCC activeCC has360Image ">
                        <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                        </div>
                        <img className="" src={props.info.image1} alt="" />
                    </div>
                    <div className="singleThumbCC activeCC has360Image ">
                        <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                        </div>
                        <img className="" src={props.info.image2} alt="" />
                    </div>
                    <div className="singleThumbCC activeCC has360Image ">
                        <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                        </div>
                        <img className="" src={props.info.image3} alt="" />
                    </div>
                    <div className="singleThumbCC activeCC has360Image ">
                        <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                        </div>
                        <img className="" src={props.info.image4} alt="" />
                    </div>
                    {/* <div className="singleThumbCC   hasVideo">
                        <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                        </div>
                        <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x300/orignal-1625408738-279.jpeg" alt="" />
                    </div>
                    <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323939-648.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323941-901.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323942-180.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323939-587.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323939-24.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323941-264.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323938-347.jpg" alt=""/>
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323939-520.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323940-271.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323933-717.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323981-616.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323982-228.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323982-452.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323981-66.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323982-783.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323972-217.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323982-259.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323978-137.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323976-104.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323973-168.jpg" alt="" />
                </div>
                <div className="singleThumbCC   ">
                    <div className="TumbLoadImage-module__animatedBackground___wYC5z">
                    </div>
                    <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x154/orignal-1625323979-669.jpg" alt="" />
                </div>
                 */}
                 </div>
            </div>
            </div>
        </div>
        </section>
        <section className="carInfoCC"><h2><span>???????????? ??????????????</span></h2><div className="carDetailesCC">
                    <div>
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/Key.svg" alt="" />
                        <label>??????????????:</label><strong>{props.info.carModel}</strong>
                    </div>
                    
                    <div><img src="https://syarahcdn.syarah.com/syarah/bundles/Extention.svg" alt="" /><label>??????????:</label><strong>{props.info.brand}</strong>
                    </div>
                    <div>
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/Model.svg" alt="" /><label>??????????????:</label><strong>{props.info.year}</strong>
                    </div>
                   
                    <div>
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/Color.svg" alt="" /><label>??????????:</label><strong>{props.info.color}</strong>
                    </div>
                  
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/fuel.svg" alt="" /><label>?????? ????????????:</label><strong>{props.info.fuel}</strong>
                        </div>
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/Gear.svg" alt="" /><label>?????? ??????????:</label><strong>{props.info.transmission}</strong>
                        </div>
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/Cylinder.svg" alt="" /><label>?????? ??????????????????:</label><strong>{props.info.cylinder}</strong>
                        </div>
                        <div>
                            <img src="https://syarahcdn.syarah.com/syarah/bundles/engine_size.svg" alt="" /><label>?????? ????????????:</label><strong>{props.info.engine_size}</strong>
                        </div>
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/car book.svg" alt="" /><label>????????????:</label><strong> {props.info.status} </strong>
                        </div>
                        <div>
                            <img src="https://syarahcdn.syarah.com/syarah/bundles/meter.svg" alt="" /><label>????????????:</label><strong>{props.info.km} ????</strong>
                        </div>
                    </div>
                <div>
            </div>
        </section>
    </div>
  
    <ColumnContainerDetail info={props.info}/>
    </React.Fragment>
    )
}