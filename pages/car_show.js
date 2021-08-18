import React from "react"

import Link from 'next/link'

import {useState,useEffect} from "react";

import { useRouter } from 'next/router'
import Header from '../components/Header'
import carspec from './ojects'



export default function Car_Show() {
    
    const router = useRouter()
    const [count, setCount] = useState(0);
    const [colorprice,setColorPrice]=useState(0)
    const [sticprice,setsticPrice]=useState(0)
    const [totle,setTotle]=useState(carspec[router.query.id].price)
    var size=25;
    var postionX=50;
    var postionY=50;
    console.log('ffff',router.query.id);
    useEffect(() => {
        var rad = document.querySelectorAll('.cube input');
        var prev = null;


   
        
  


        for (var i = 0; i < rad.length; i++) {
            rad[i].addEventListener('change', function() {
                (prev) ? console.log(prev.value): null;
                if (this !== prev) {
                    prev = this;
                }
                if(this.value == 0) {
                    document.querySelector('.car-paint').style.display = "none";
                }
                else {
                    if(this.value == 1) {
                        document.querySelector('.car-paint').style.display = "block";
                        document.querySelector('.car-paint').style.filter = "brightness(0)";
                    }
                    else {
                        document.querySelector('.car-paint').style.display = "block";
                        document.querySelector('.car-paint').style.filter = "hue-rotate(" + this.value + "deg)";
                    }
                }
                // if(carspec[router.query.id].price >=totle)
                console.log(sticprice+ carspec[router.query.id].price+ 500)
                setTotle(sticprice+ carspec[router.query.id].price+ 500)
                setColorPrice(500)
       

            });
        }
        

      });



    function sizeUp(){

   
        if(size < 50) size +=5
        setCount(count+1)
        displaySticker();

    };
    
    function sizedown(){
   
        if(size > 10) size -=5
        displaySticker();
    };
    
    function stickerUp(){
  
        if(postionY > 10) postionY -=5
        displaySticker();
    };
    
    function stickerDown(){
  
        if(postionY < 100) postionY +=5
        displaySticker();
    };
    
    function stickerRight(){
    
        if(postionX < 100) postionX +=5
        displaySticker();
    };
    
    function stickerLeft(){
     
        if(postionX > 10) postionX -=5
        displaySticker();
    };
    
    function displaySticker(){
        var sticker =document.querySelector('.car-sticker')
        sticker.style.backgroundPosition = postionX +"% " + postionY +"%";
        sticker.style.backgroundSize = size +"%";
       
    }
    let [stickerNo, setStickerNo] = useState(0);

    function nextSticker(){

        if(stickerNo < 17){
            setStickerNo(stickerNo+1)
        }else{
            setStickerNo(0)
        }
        console.log(colorprice+' '+ carspec[router.query.id].price)
        setTotle(colorprice+ carspec[router.query.id].price+ 300)
        setsticPrice(300)
    }
    function prevSticker(){
        if(stickerNo > 1){
            setStickerNo(stickerNo-1)
        }else{
            setStickerNo(17)
        }
        console.log(colorprice+' '+ carspec[router.query.id].price)
        setTotle(colorprice+ carspec[router.query.id].price+ 300)
        setsticPrice(300)
    }

    return (
    

<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="assets/css/app.css"/>
</head>
<body style={{direction: 'rtl'}}>
            <Header/>
{/* <body>
<header className="siteHeader " style={{position:'unset',direction:'rtl' , margin:'0',width:'100%',display:'block'}}>
            <div className=" innerHdr" style={{justifyContent:'space-between'}}>
                <span style={{flexGrow:'1'}}><a href="/"><img src="" alt="" /></a></span>
               
                <ul style={{marginLeft: '-58%',marginBottom:'0',flexGrow:'1'}}>
                    <li>
                    <Link href="/">
                        <a style={{color:'rgb(100, 0, 255)'}}>الصفحة الرئيسية </a>
                    </Link>
                    </li>
                    <li>
                        <Link href='/forsellnew'>
                        <a  style={{color:'rgb(100, 0, 255)'}}>سيارات جديدة </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/forsellused">
                        <a  style={{color:'rgb(100, 0, 255)'}}>سيارات مستعملة </a>
                        </Link>
                    </li>
                    <li  className="sellCarNewBtn hideBtn"><a href="/post/add-post" className="redBtn">اعرض سيارتك للبيع</a></li>
                    <li style={{paddingRight:'2%'}}><span className="sideMenuToggle "><img src="https://syarahcdn.syarah.com/syarah/bundles/menuToggle.svg" alt="" /></span>
                    </li>
                    </ul>
            </div>
        </header> */}
    <section id="car-detail" style={{direction: 'ltr'}}>
        <div className="container">
            <div className="row">
                
                <div className="col-lg-8">
                    <div className="car-editor">
                        <div id="preview">
                            <div className="car-sticker" style={{WebkitMaskImage: "url(" + "./assets/images/cars/" + carspec[router.query.id].slug+ "-side-paint.png" + ")", backgroundImage: "url(" + "./assets/images/stickers/graffit" + stickerNo + ".png" + ")"}}></div>
                            <div className="car-paint" style={{backgroundImage:"url(" + "./assets/images/cars/" + carspec[router.query.id].slug+ "-side-paint.png" + ")" }}></div>
                            <div className="car-preview" style={{backgroundImage:"url(" + "./assets/images/cars/" + carspec[router.query.id].slug+ "-side.png" + ")" }} ></div>
                        </div>
                        <div className="preview-buttons">
                            <button onClick={prevSticker}><i className="fas fa-chevron-left"></i></button>
                            <button onClick={nextSticker}><i className="fas fa-chevron-right"></i></button>
                        </div>
                        <div className="sticker-editor d-flex">
                            <div className="text-center">
                                <button onClick={stickerUp}><i className="fas fa-arrow-up"></i></button>
                                <div className="d-flex align-items-center">
                                    <button onClick={stickerLeft}><i className="fas fa-arrow-left"></i></button>
                                    <button  id="changeSticker" style={{backgroundImage:"url(" + "./assets/images/stickers/graffit" + stickerNo +".png" + ")" }} ></button>
                                    <button onClick={stickerRight}><i className="fas fa-arrow-right"></i></button>
                                </div>
                                <button onClick={stickerDown} ><i className="fas fa-arrow-down"></i></button>
                            </div>
                            <div>
                                <button onClick={sizeUp} className="btn btn-floating"><i className="fas fa-plus"></i></button>
                                <button onClick={sizedown} className="btn btn-floating"><i className="fas fa-minus"></i></button>
                            </div>
                        </div>
                        <div className="cube-paints">
                            <label className="cube" style={{background:'white'}} ><input type="radio" className="radioColor" value="0" name="color"/></label>
                            <label className="cube"  style={{background:'#383837'}} ><input type="radio" className="radioColor" value="1" name="color"/></label>
                            <label className="cube"  style={{background:'#ed3c3a'}} ><input type="radio" className="radioColor" value="2" name="color"/></label>
                            <label className="cube"  style={{background:'#ce533c'}} ><input type="radio" className="radioColor" value="33" name="color"/></label>
                            <label className="cube"  style={{background:'#a18460'}} ><input type="radio" className="radioColor" value="60" name="color"/></label>
                            <label className="cube"  style={{background:'#447433'}} ><input type="radio" className="radioColor" value="84" name="color"/></label>
                            <label className="cube"  style={{background:'#5da08c'}} ><input type="radio" className="radioColor" value="172" name="color"/></label>
                            <label className="cube"  style={{background:' #408085'}} ><input type="radio" className="radioColor" value="182" name="color"/></label>
                            <label className="cube"  style={{background:' #3675c7'}} ><input type="radio" className="radioColor" value="208" name="color"/></label>
                            <label className="cube" style={{background:'#9045de'}} ><input type="radio" className="radioColor" value="272" name="color"/></label>
                            <label className="cube"  style={{background:'#b839da'}} ><input type="radio" className="radioColor" value="289" name="color"/></label>
                            <label className="cube"  style={{background:'#e539b1'}} ><input type="radio" className="radioColor" value="314" name="color"/></label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h1>{carspec[router.query.id].name}</h1>

                    <div>
                        <small><b>سنة الصنع</b></small>
                        <p>{carspec[router.query.id].model}</p>
                    </div>

                    <div>
                        <small><b>سعة المحرك</b></small>
                        <p>{carspec[router.query.id].engine}</p>
                    </div>

                    <div>
                        <small><b>عدد الاحصنة</b></small>
                        <p>{carspec[router.query.id].hourcePower}</p>
                    </div>

                    <div>
                        <small><b>عدد الركاب</b></small>
                        <p>اربعة اشخاص </p>
                    </div>
                    
                    <div className="car-price border p-3">
                        <p className="d-flex justify-content-between mb-2">سعر <span>{carspec[router.query.id].price}</span></p>
                        <p className="d-flex justify-content-between mb-2">اللون <span>+500 JOD</span></p>
                        <p className="d-flex justify-content-between mb-2">ستكرز <span>+300 JOD</span></p>
                        {/* <p className="d-flex justify-content-between mb-3 pb-3 border-bottom">Tax <span>+800 JOD</span></p> */}
                        <p className="d-flex justify-content-between mb-2">المجموع</p>
                        <h2 >{totle+' دينار'}</h2>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn">اشتري</button>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"></script>
    <script src="./assets/js/app.js"></script>
</body>
</html>

     
    )
  }

