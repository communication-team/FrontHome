
import React from "react"
import Link from 'next/link'
import Header from '../components/Header'
import carspec from './ojects'

export default function ForSellNew() {
    


    return (
    
<React.Fragment>
        
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
            <link rel="stylesheet" href="assets/css/app.css"/>
        </head>
        <body style={{direction: 'rtl'}}>
            <Header/>
            {/* <header>
                <a class="brand" href="#">HOT WHEELS</a>
                <ul>
                    <a href="#">HOMEPAGE</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>
                </ul>
            </header> */}
                 {/* <header class="siteHeader " style={{position:'unset',direction:'rtl' , margin:'0',width:'100%',display:'block'}}>
            <div class=" innerHdr" style={{justifyContent:'space-between'}}>
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
                    <li  class="sellCarNewBtn hideBtn"><a href="/create_post" class="redBtn">اعرض سيارتك للبيع</a></li>
                    <li style={{paddingRight:'2%'}}><span class="sideMenuToggle "><img src="https://syarahcdn.syarah.com/syarah/bundles/menuToggle.svg" alt="" /></span>
                    </li>
                    </ul>
            </div>
        </header> */}
                 {/* <Header/> */}
            <section id="intro">
                <h2>اهلا بك في</h2>
                <h1>سيارتك</h1>
                <div class="car-intro">
                    <img class="back-wheel" src="assets/images/wheel-back.png" alt=""/>
                    <img class="front-wheel" src="assets/images/wheel-back.png" alt=""/>
                </div>
                <a class="btn" href="#market" type="submit">انضم الينا</a>
            </section>
            <section id="market">
                <div class="container">
                    <h1>اختر سيارتك الجديدة </h1>
                    <div class="row">
                    {carspec.map((car,index) => (
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card">
                                <div class="market-thumbnail" style={{backgroundImage: `url(./assets/images/cars/${carspec[index].slug}-front.png)` ,backgroundRepeat: 'no-repeat'}}></div>
                                <div class="market-carname">{car.name}</div>
                                <small class="market-year">2021</small>
                                <div class="price">{car.price}JOD</div>
                                {/* <Link href={"/car_show?"+index} params={{id:index}}> */}
                                <Link  href={{ pathname: "/car_show", query: { id: index } }}>

                                <a class="market-buy btn" href="/car_show">شاهد سيارة</a>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>


             <footer style={{direction:'rtl'}} class="footer"><div style={{margin:'0' ,marginBottom:'2%'}} ><img style={{margin:'0 4%'}} src="https://syarahcdn.syarah.com/syarah/bundles/ftrLogo.png" alt="" /><div style={{width:'100vw'}} class="dataFooterContent"><div style={{margin:'0 4%'}}><ul><li><a href="/">الرئيسية</a></li><li><a href="https://syarah.com/site/about">من نحن</a></li><li><a href="https://syarah.com/site/contact">اتصل بنا</a></li><li><a href="https://syarah.com/blog" target="_blank" rel="noopener noreferrer">مدونة سيارة </a></li><li><a href="https://syarah.com/تسويق_بالعمولة" rel="noopener noreferrer">برنامج سيارة للتسويق بالعمولة </a></li></ul><p>شركة سعوديه بسجل تجاري 1010538980 مصدره الرياض</p><div ><a href="https://syarah.com/site/terms" target="_blank" rel="noopener noreferrer">الأحكام والشروط </a> |<a href="https://syarah.com/site/privacy-policy" target="_blank" rel="noopener noreferrer">سياسة الخصوصية </a></div></div><div style={{margin:'0 4%'}}><strong class="greenGrd"><img src="https://syarahcdn.syarah.com/syarah/bundles/greenArmor.svg" alt="" /><span>طرق دفع إلكترونية آمنة</span></strong><ul><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Mada.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Sadad.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Visadark.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/mc.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/paypalstacked.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/BankTransfer.svg" alt="" /></li></ul><p>جميع الحقوق محفوظة لشركة موقع سيارة المحدودة © 2020</p></div></div></div>
      
      </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
            <script src="./assets/js/app.js"></script>
        </body>
        </html>

        </React.Fragment>
    )
  }


