import ColumnContainerDetail from '../DetailComponent/LeftDetail'
// components/DetailComponent/LeftDetail.js
import React from "react"
import react, { useState, useEffect } from 'react'
export default function CarCard(props){

    const [gg, setGg] = useState([]);


    function changeImage(event)
    {
        alert()
        console.log(event.target)
        
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
                    <img className="" src={props.info.primary_image} alt="" />
                    <div className="imageCameraIIIg">
                    </div>
                </div>
                <div className="crntImgCC">
                    <span>1</span>
                    <span>من</span>
                    <span>23</span>
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
                        <img className="TumbLoadImage-module__loading___3EJWH " src="https://syarahcdn.syarah.com/online/posts/77614/0x300/orignal-1625323939-648.jpg" alt="" />
                    </div>
                    <div className="singleThumbCC   hasVideo">
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
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="carInfoCC"><h2><span>تفاصيل السيارة</span></h2><div className="carDetailesCC">
                    <div>
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/Key.svg" alt="" />
                        <label>الماركة:</label><strong>{props.info.carModel}</strong>
                    </div>
                    
                    <div><img src="https://syarahcdn.syarah.com/syarah/bundles/Extention.svg" alt="" /><label>الفئة:</label><strong>{props.info.brand}</strong>
                    </div>
                    <div>
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/Model.svg" alt="" /><label>الموديل:</label><strong>{props.info.year}</strong>
                    </div>
                   
                    <div>
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/Color.svg" alt="" /><label>اللون:</label><strong>{props.info.color}</strong>
                    </div>
                  
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/fuel.svg" alt="" /><label>نوع الوقود:</label><strong>{props.info.fuel}</strong>
                        </div>
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/Gear.svg" alt="" /><label>نوع القير:</label><strong>{props.info.transmission}</strong>
                        </div>
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/Cylinder.svg" alt="" /><label>عدد السلندرات:</label><strong>{props.info.cylinder}</strong>
                        </div>
                        <div>
                            <img src="https://syarahcdn.syarah.com/syarah/bundles/engine_size.svg" alt="" /><label>حجم المحرك:</label><strong>{props.info.engine_size}</strong>
                        </div>
                        <div><img src="https://syarahcdn.syarah.com/syarah/bundles/car book.svg" alt="" /><label>الحالة:</label><strong> {props.info.status} </strong>
                        </div>
                        <div>
                            <img src="https://syarahcdn.syarah.com/syarah/bundles/meter.svg" alt="" /><label>الممشى:</label><strong>{props.info.km} كم</strong>
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