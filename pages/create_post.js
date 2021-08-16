import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import React from "react"
import Link from 'next/link'
import Header from '../components/Header'
export default function CreatePost() {
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
        <body dir="rtl">
            {/* <header>
                <a class="brand" href="#">HOT WHEELS</a>
                <ul>
                    <a href="#">HOMEPAGE</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>
                </ul>
            </header> */}
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
                    
                    </ul>
            </div>
        </header>
        
            <main class="">
        <div class="sellCarContainer">
    <div class="container">
        <div>
            <div class="rightSideSellCar">
                <h1>اعرض سيارتك للبيع في اكبر سوق سيارات في المملكة</h1>
                <p>اعرض سيارتك على آلاف المشترين وتواصل معهم بسهولة</p>
                <div class="btnsContQ">
                                <a onclick="PushDataLayer('addpost','Add Post', 'Visit', 'navigation');" href='https://syarah.com/post/selectmake?add_post=1&utm_source=syarah-new&utm_medium' class="btn btn-warning redBtn">اعرض سيارتك عالسوق</a>                </div>
            </div>
        </div>
        <div>
            <img src="/assets/images/ttt.png" alt="اعرض سيارتك للبيع" />
        </div>
    </div>
</div>

<br></br>
<br></br>

<div class="divv">
  <form action="/action_page.php">
  <label for="fname"> عنوان المنشور</label>
    <input type="text" id="title" name="title" placeholder="اودي 97 .."/> 
    <br></br>
    <label for="fname"> ألاسم</label>
    <input type="text" id="name" name="name" placeholder="اسم البائع.."/>
    <br></br>
    <label for="lname">رقم الهاتف</label>
    <input type="number" id="phone" name="phone" placeholder="+9627.."/>
    <br></br>
    <label for="fname"> موديل السيارة</label>
    <input type="text" id="model" name="model" placeholder="فئة السيارة.."/>
    <br></br>

    <label for="country">براند السيارة</label>
    <select id="brand" name="البراند">
      <option value="audi">Audi</option>
      <option value="bmw">BMW</option>
      <option value="mercedes">Mercedes</option>
      <option value="mazda">Mazda</option>
      <option value="toyota">Toyota</option>
      <option value="honda">Honda</option>
      <option value="hyundai">Hyundai</option>
      <option value="volvo">Volvo</option>
      <option value="gulf">gulf</option>
      <option value="peugeot">peugeot</option>
      <option value="kia">Kia</option>
      <option value="jeep">jeep</option>
    </select>
    <br></br>
    <label for="year">سنة الصنع</label>
    <input type="number" id="year" name="year" placeholder="سنة الصنع.."/> 
    <br></br>
    <label for="color"> اللون</label>
    <input type="text" id="color" name="color" placeholder="car color.."/> 
    <br></br>
    <label for="transmission"> نوع ناقل الحركة</label>
    <input type="text" id="transmission" name="transmission" placeholder="اتوماتيك ولا مانيوال.."/> 
    <br></br>
    <label for="cylinder"> السلندرات</label>
    <input type="text" id="cylinder" name="cylinder" placeholder="كم سيلندر .."/> 
    <br></br>
    <label for="fuel"> نوع الوقود</label>
    <input type="text" id="fuel" name="fuel" placeholder="بنزين ولا سولار .."/>
    <br></br>
    <label for="engine"> سعة المحرك</label>
    <input type="text" id="engine" name="engine" placeholder="1.6 لتر.."/>
    <br></br>
    <label for="status"> الحالة</label>
    <input type="text" id="status" name="status" placeholder="مستعمل ولا جديد.."/>
    <br></br>
    <label for="Insurance"> الكفالة</label>
    <input type="text" id="Insurance" name="Insurance" placeholder="مكفولة ؟.."/>
    <br></br>
    <label for="km"> ممشى</label>
    <input type="text" id="km" name="km" placeholder="كم كيلو متر ماشية .."/>
    <br></br>
    <label for="price"> السعر</label>
    <input type="number" id="price" name="price" placeholder="السعر.."/>
    <br></br>
    <label for="Payment type"> طريقة الدفع</label>
    <input type="text" id="Payment type" name="Payment type" placeholder="اقساط ولا كاش.."/>
    <br></br>
    <label for="location"> الموقع</label>
    <input type="text" id="location" name="location" placeholder="وين موجودة السيارة.."/>
    <br></br>
    <label for="image">اضافة صورة</label>
    <input type="file"  accept="image/*" name="image" id="file" ></input>
    <br></br>
    
    <input type="submit" value="Submit"/>
  </form>
</div>
        </main>
              


             <footer style={{direction:'rtl'}} class="footer"><div style={{margin:'0' ,marginBottom:'2%'}} ><img style={{margin:'0 4%'}} src="https://syarahcdn.syarah.com/syarah/bundles/ftrLogo.png" alt="" /><div style={{width:'100vw'}} class="dataFooterContent"><div style={{margin:'0 4%'}}><ul><li><a href="/">الرئيسية</a></li><li><a href="https://syarah.com/site/about">من نحن</a></li><li><a href="https://syarah.com/site/contact">اتصل بنا</a></li><li><a href="https://syarah.com/blog" target="_blank" rel="noopener noreferrer">مدونة سيارة </a></li><li><a href="https://syarah.com/تسويق_بالعمولة" rel="noopener noreferrer">برنامج سيارة للتسويق بالعمولة </a></li></ul><p>شركة سعوديه بسجل تجاري 1010538980 مصدره الرياض</p><div ><a href="https://syarah.com/site/terms" target="_blank" rel="noopener noreferrer">الأحكام والشروط </a> |<a href="https://syarah.com/site/privacy-policy" target="_blank" rel="noopener noreferrer">سياسة الخصوصية </a></div></div><div style={{margin:'0 4%'}}><strong class="greenGrd"><img src="https://syarahcdn.syarah.com/syarah/bundles/greenArmor.svg" alt="" /><span>طرق دفع إلكترونية آمنة</span></strong><ul><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Mada.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Sadad.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Visadark.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/mc.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/paypalstacked.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/BankTransfer.svg" alt="" /></li></ul><p>جميع الحقوق محفوظة لشركة موقع سيارة المحدودة © 2020</p></div></div></div>
      
      </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
            <script src="./assets/js/app.js"></script>
        </body>
        </html>

        </React.Fragment>
    )
  }


