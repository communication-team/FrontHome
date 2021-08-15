import React from "react"


import Link from 'next/link'
import {useState,useEffect} from "react";




export default function Car_Show() {

    const [count, setCount] = useState(0);
    var size=25;
    var postionX=50;
    var postionY=50;

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

    return (
    

<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
    <link rel="stylesheet" href="assets/css/app.css"/>
</head>
<body>
<header class="siteHeader " style={{position:'unset',direction:'rtl' , margin:'0',width:'100%',display:'block'}}>
            <div class=" innerHdr" style={{justifyContent:'space-between'}}>
                <span style={{flexGrow:'1'}}><a href="/"><img src="" alt="" /></a></span>
                {/* for logo  */}
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
                    <li  class="sellCarNewBtn hideBtn"><a href="/post/add-post" class="redBtn">اعرض سيارتك للبيع</a></li>
                    <li style={{paddingRight:'2%'}}><span class="sideMenuToggle "><img src="https://syarahcdn.syarah.com/syarah/bundles/menuToggle.svg" alt="" /></span>
                    </li>
                    </ul>
            </div>
        </header>
    <section id="car-detail" style={{direction: 'ltr'}}>
        <div class="container">
            <div class="row">
                
                <div class="col-lg-8">
                    <div class="car-editor">
                        <div id="preview">
                            <div class="car-sticker" style={{WebkitMaskImage: "url(" + "./assets/images/cars/toyota-avalon-side-paint.png" + ")", backgroundImage: "url(" + "./assets/images/stickers/graffit1.png" + ")"}}></div>
                            <div class="car-paint" style={{backgroundImage:"url(" + "./assets/images/cars/toyota-avalon-side-paint.png" + ")" }}></div>
                            <div class="car-preview" style={{backgroundImage:"url(" + "./assets/images/cars/toyota-avalon-side.png" + ")" }} ></div>
                        </div>
                        <div class="preview-buttons">
                            <button><i class="fas fa-chevron-left"></i></button>
                            <button><i class="fas fa-chevron-right"></i></button>
                        </div>
                        <div class="sticker-editor d-flex">
                            <div class="text-center">
                                <button onClick={stickerUp}><i class="fas fa-arrow-up"></i></button>
                                <div class="d-flex align-items-center">
                                    <button onClick={stickerLeft}><i class="fas fa-arrow-left"></i></button>
                                    <button  id="changeSticker" style={{backgroundImage:"url(" + "./assets/images/stickers/graffit1.png" + ")" }} ></button>
                                    <button onClick={stickerRight}><i class="fas fa-arrow-right"></i></button>
                                </div>
                                <button onClick={stickerDown} ><i class="fas fa-arrow-down"></i></button>
                            </div>
                            <div>
                                <button onClick={sizeUp} class="btn btn-floating"><i class="fas fa-plus"></i></button>
                                <button onClick={sizedown} class="btn btn-floating"><i class="fas fa-minus"></i></button>
                            </div>
                        </div>
                        <div class="cube-paints">
                            <label class="cube" style={{background:'white'}} ><input type="radio" class="radioColor" value="0" name="color"/></label>
                            <label class="cube"  style={{background:'#383837'}} ><input type="radio" class="radioColor" value="1" name="color"/></label>
                            <label class="cube"  style={{background:'#ed3c3a'}} ><input type="radio" class="radioColor" value="2" name="color"/></label>
                            <label class="cube"  style={{background:'#ce533c'}} ><input type="radio" class="radioColor" value="33" name="color"/></label>
                            <label class="cube"  style={{background:'#447433'}} ><input type="radio" class="radioColor" value="84" name="color"/></label>
                            <label class="cube"  style={{background:' #3675c7'}} ><input type="radio" class="radioColor" value="208" name="color"/></label>
                            <label class="cube" style={{background:'#9045de'}} ><input type="radio" class="radioColor" value="272" name="color"/></label>
                            <label class="cube"  style={{background:'#b839da'}} ><input type="radio" class="radioColor" value="289" name="color"/></label>
                            <label class="cube"  style={{background:'#e539b1'}} ><input type="radio" class="radioColor" value="314" name="color"/></label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <h1>BMW Z3</h1>

                    <div>
                        <small><b>Year</b></small>
                        <p>2018</p>
                    </div>

                    <div>
                        <small><b>Engine size</b></small>
                        <p>500CC</p>
                    </div>

                    <div>
                        <small><b>Fuel</b></small>
                        <p>Disel</p>
                    </div>

                    <div>
                        <small><b>Passnger</b></small>
                        <p>4 People</p>
                    </div>
                    
                    <div class="car-price border p-3">
                        <p class="d-flex justify-content-between mb-2">Car <span>20,000 JOD</span></p>
                        <p class="d-flex justify-content-between mb-2">Paint <span>500 JOD</span></p>
                        <p class="d-flex justify-content-between mb-2">Sticker <span>300 JOD</span></p>
                        <p class="d-flex justify-content-between mb-3 pb-3 border-bottom">Tax <span>800 JOD</span></p>
                        <p class="d-flex justify-content-between mb-2">Total Price</p>
                        <h2>21,600 JOD</h2>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn">CHECKOUT</button>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    <script src="./assets/js/app.js"></script>
</body>
</html>

     
    )
  }

