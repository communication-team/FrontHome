
import React from "react"
import Link from 'next/link'
import Header from '../components/Header'
import carspec from '../components/ojects'

export default function ForSellNew() {
    


    return (
    
<React.Fragment>
        
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
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
                        <div key={index} className="col-12 col-sm-6 col-lg-4">
                            <div className="card">
                                <div className="market-thumbnail" style={{backgroundImage: `url(./assets/images/cars/${carspec[index].slug}-front.png)` ,backgroundRepeat: 'no-repeat'}}></div>
                                <div className="market-carname">{car.name}</div>
                                <small className="market-year">2021</small>
                                <div className="price">{car.price}JOD</div>
                                {/* <Link href={"/car_show?"+index} params={{id:index}}> */}
                                <Link  href={{ pathname: "/car_show", query: { id: index } }}>

                                <a className="market-buy btn" >شاهد سيارة</a>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            <footer className="footer">
            <div className="container">
              
                <div className="dataFooterContent">
                    {/* <div> */}
                        <ul>
                            <li>
                                <strong>
                                    <Link href="/">
                                    <a >الرئيسية</a>
                                    </Link>
                                </strong>
                            </li>
                            <li>
                            <strong>
                                  <Link href="/">
                                <a >من نحن</a>
                                </Link>
                            </strong>
                            </li>
                            <li>
                                <strong>
                                    <Link href="https://api.whatsapp.com/send/?phone=%2B962796207201&text&app_absent=0" passHref={true}> 
                                     <a >اتصل بنا</a>
                                    </Link>
                                </strong>
                            </li>
                         
                        </ul>
                   
                            <p>
                                <strong>
                                جميع الحقوق محفوظة
                                </strong>
                                 </p>
                    {/* </div> */}
                </div>
            </div>
               
            </footer>
{/* 
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"></script>
            <script src="./assets/js/app.js"></script> */}
        </body>
        </html>

        </React.Fragment>
    )
  }


