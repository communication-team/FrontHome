
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
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="assets/css/app.css"/>
        </head>
        <body style={{direction: 'rtl'}}>
            <Header/>
          
            <section id="intro">
                <h2>اهلا بك في</h2>
                <h1>سيارتك</h1>
                <div className="car-intro">
                    <img className="back-wheel" src="assets/images/wheel-back.png" alt=""/>
                    <img className="front-wheel" src="assets/images/wheel-back.png" alt=""/>
                </div>
                <Link href="/login">
                <a className="btn" href="#market" type="submit">انضم الينا</a>
                </Link>
            </section>
            <section id="market">
                <div className="container">
                    <h1>اختر سيارتك الجديدة </h1>
                    <div className="row">
                    {carspec.map((car,index) => (
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card">
                                <div className="market-thumbnail" style={{backgroundImage: `url(./assets/images/cars/${carspec[index].slug}-front.png)` ,backgroundRepeat: 'no-repeat'}}></div>
                                <div className="market-carname">{car.name}</div>
                                <small className="market-year">2021</small>
                                <div className="price">{car.price}JOD</div>
                                {/* <Link href={"/car_show?"+index} params={{id:index}}> */}
                                <Link  href={{ pathname: "/car_show", query: { id: index } }}>

                                <a className="market-buy btn" href="/car_show">شاهد سيارة</a>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>


             <footer style={{direction:'rtl'}} className="footer"><div style={{margin:'0' ,marginBottom:'2%'}} ><img style={{margin:'0 4%'}} src="https://syarahcdn.syarah.com/syarah/bundles/ftrLogo.png" alt="" /><div style={{width:'100vw'}} className="dataFooterContent"><div style={{margin:'0 4%'}}><ul><li><a href="/">الرئيسية</a></li><li><a href="https://syarah.com/site/about">من نحن</a></li><li><a href="https://syarah.com/site/contact">اتصل بنا</a></li><li><a href="https://syarah.com/blog" target="_blank" without rel="noreferrer" rel="noopener noreferrer">مدونة سيارة </a></li><li><a href="https://syarah.com/تسويق_بالعمولة" rel="noopener noreferrer">برنامج سيارة للتسويق بالعمولة </a></li></ul><p>شركة سعوديه بسجل تجاري 1010538980 مصدره الرياض</p><div ><a href="https://syarah.com/site/terms" target="_blank" without rel="noreferrer" rel="noopener noreferrer">الأحكام والشروط </a> |<a href="https://syarah.com/site/privacy-policy" target="_blank" without rel="noreferrer" rel="noopener noreferrer">سياسة الخصوصية </a></div></div><div style={{margin:'0 4%'}}><strong className="greenGrd"><img src="https://syarahcdn.syarah.com/syarah/bundles/greenArmor.svg" alt="" /><span>طرق دفع إلكترونية آمنة</span></strong><ul><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Mada.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Sadad.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Visadark.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/mc.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/paypalstacked.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/BankTransfer.svg" alt="" /></li></ul><p>جميع الحقوق محفوظة لشركة موقع سيارة المحدودة © 2020</p></div></div></div>
      
      </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"></script>
            <script src="./assets/js/app.js"></script>
        </body>
        </html>

        </React.Fragment>
    )
  }


