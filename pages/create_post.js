import React from "react"
import Link from 'next/link'
import Header from '../components/Header'
import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { app } from "../base";
export default function CreatePost() {

    const db = app.firestore();
  
    useEffect(() => {

       

if(!window.localStorage.info)
{
    window.location='/login'
    return;
}

       
       
    }, [])
    
   
   


    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [tra, setTra] = useState('');
    const [cy, setCy] = useState('');
    const [fule, setFule] = useState('');
    const [cc, setCc] = useState('');
    const [stat, setStat] = useState('');
    const [insure, setInsure] = useState('');
    const [trkh, setTrkh] = useState('');
    const [km, setKm] = useState('');
    const [price, setPrice] = useState('');
    const [pyment, setPyment] = useState('');
    const [location, setLocation] = useState('');

    const [primary_image, setPrimary_image] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');

    

    function saveData(event)
    {
        event.preventDefault();
        // let formData = new FormData();

        // for (const key of Object.keys(this.state.imagesArray)) {
        //     formData.append('imagesArray', this.state.imagesArray[key])
        // }
        // axios.post("https://carsgallary.herokuapp.com/api/v1/cars/carinfo/create", formData, {
        // }).then(response => {
        //     console.log((response.data))
        // })
   console.log("Bearer "+JSON.parse(window.localStorage.getItem('token')))
        var formData = new FormData();
        const config = { headers: { 'Content-Type': 'multipart/form-data',  "Authorization": 'Bearer ' +JSON.parse(window.localStorage.getItem('token')) } };
        //  const config = { headers: { 'Content-Type': 'multipart/form-data',  "Authorization": 'Bearer ' +'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5MjI4NTA0LCJqdGkiOiJjZGJjYzI5YWJiOGU0YTE2OTZmZmM0Y2UwNDkzYTg2MSIsInVzZXJfaWQiOjF9.mFfMxK6iaBFh7cGvYBN89jb5Wzr63u5sscX4hj-u_uY' } };
        
        formData.append("brand", brand);
        formData.append("transmission", tra);
        formData.append("cylinder", cy);
        formData.append("engine_size", cc);
        formData.append("status", stat);
        formData.append("documents", trkh);
        formData.append("insurance", insure);
        formData.append("km", km);
        formData.append("price", price);
        formData.append("payment_type", pyment);
        formData.append("location", location);
        formData.append("id_user_id", JSON.parse(window.localStorage.getItem('info')).id);
        formData.append("title", title);
        formData.append("carModel", model);
        formData.append("phone", phone);
        formData.append("user_name", JSON.parse(window.localStorage.getItem('info')).username);
        formData.append("primary_image", primary_image);
        formData.append("image1", image1);
        formData.append("image2", image2);
        formData.append("image3", image3);
        formData.append("image4", image4);
        formData.append("approved", 'false');
        formData.append("year", year);
        formData.append("color", color);
        formData.append("fuel", fule);


        axios.post('https://carsgallary.herokuapp.com/api/v1/cars/carinfo/create/', formData, config
        ).then(function (response) {

            console.log(response)
            alert("dd")

        }).catch(function (error) {
            console.log(error)
        });

        // axios.post('https://carsgallary.herokuapp.com/api/v1/cars/carinfo/create', {
           
        //         brand: brand,
        //         transmission: tra,
        //         cylinder: cy,
        //         engine_size: cc,
        //         status: stat,
        //         documents: trkh,
        //         insurance: insure,
        //         km: km,
        //         price: price,
        //         payment_type: pyment,
        //         location: location,
        //         id_user_id: 3,
        //         title: title,
        //         carModel: model,
        //         phone: phone,
        //         user_name: name,
        //         primary_image: 'https://cdn05.carsforsale.com/00edeb262c05e5e9b49da5f72446249dc2/480x360/2013-jeep-wrangler-unlimited-sport-4x4-4dr-suv.jpg',
        //         approved: 'false',
        //         year:year,
        //         color:color,
        //         fuel:fule,
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

    
    }






async function onImgChangePrimary(e)
    {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        let temp=await fileRef.getDownloadURL()
        await db.collection("users").doc(file.name+Date.now()).set({
            name: file.name+Date.now(),
            avatar: temp,
          });
          setPrimary_image(temp)
        
    }
    async  function onImgChange1(e)
    {
        
        // setImage1(event.target.files[0])
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        let temp=await fileRef.getDownloadURL()
        await db.collection("users").doc(file.name+Date.now()).set({
            name: file.name+Date.now(),
            avatar: temp,
          });
          setImage1(temp);
    
      
    }
    async  function onImgChange2(e)
    {
        
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        let temp=await fileRef.getDownloadURL()
        await db.collection("users").doc(file.name+Date.now()).set({
            name: file.name+Date.now(),
            avatar: temp,
          });
          setImage2(temp);
 
      
    }
    async   function onImgChange3(e)
    {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        let temp=await fileRef.getDownloadURL()
        await db.collection("users").doc(file.name+Date.now()).set({
            name: file.name+Date.now(),
            avatar: temp,
          });
          setImage3(temp);

      
    }
    async  function onImgChange4(e)
    {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        let temp=await fileRef.getDownloadURL()
        await db.collection("users").doc(file.name+Date.now()).set({
            name: file.name+Date.now(),
            avatar: temp,
          });
          setImage4(temp);

          
      
    }
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
                                <button onclick="PushDataLayer('addpost','Add Post', 'Visit', 'navigation');" href='https://syarah.com/post/selectmake?add_post=1&utm_source=syarah-new&utm_medium' class="btn btn-warning redBtn">اعرض سيارتك عالسوق</button>                </div>
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
  <form action="" onSubmit={saveData}>
  <label for="fname"> عنوان المنشور</label>
    <input type="text" id="title" name="title" placeholder="اودي 97 .."  onChange={(e)=>setTitle(e.target.value)} value={title}/> 
    <label for="fname"> ألاسم</label>
    <input type="text" id="name" name="name" placeholder="اسم البائع.." onChange={(e)=>setName(e.target.value)} value={name}/>
    <label for="lname">رقم الهاتف</label>
    <input type="number" id="phone" name="phone" placeholder="+9627.." onChange={(e)=>setPhone(e.target.value)} value={phone}/>
    <label for="fname"> موديل السيارة</label>
    <input type="text" id="model" name="model" placeholder="فئة السيارة.." onChange={(e)=>setBrand(e.target.value)} value={brand}/>

    <label for="country">براند السيارة</label>
    <select id="brand" name="البراند" onChange={(e)=>setModel(e.target.value)} >
      <option value="هونداي  "> هونداي</option>
      <option value="تويوتا">تويوتا</option>
      <option value="مرسيدس">مرسيدس</option>
      <option value="فورد">فورد</option>
      <option value="شفروليه">شفروليه</option>
      <option value="نيسان">نيسان</option>
      <option value="كيا">كيا</option>
      <option value="لكزس">لكزس</option>
      <option value="GMC">GMC</option>
      <option value="هوندا">هوندا</option>
      <option value="مازدا">مازدا</option>
      <option value="BMW">BMW</option>
      <option value="دودج">دودج</option>
      <option value="ايسوزو">ايسوزو</option>
      <option value="شانجان">شانجان</option>
      <option value="لاند روفر">لاند روفر</option>
      <option value="جيب">جيب</option>
      <option value="كرايسلر">كرايسلر</option>
      <option value="MG">MG</option>
      <option value="اودي">اودي</option>
      <option value="رينو">رينو</option>
      <option value="كاديلاك">كاديلاك</option>
      <option value="جيلي">جيلي</option>
      <option value="هافال">هافال</option>
      <option value="سوزوكي">سوزوكي</option>
      <option value="بورش">بورش</option>
      <option value="دايهاتسو">دايهاتسو</option>
      <option value="فولكس فاجن">فولكس فاجن</option>
      <option value="لينكولن">لينكولن</option>
      <option value="انفنتي">انفنتي</option>
      <option value="ميركوري">ميركوري</option>
      <option value="جريت وول">جريت وول</option>
      <option value="بيجو">بيجو</option>
      <option value="بنتلي">بنتلي</option>
      <option value="جاغوار">جاغوار</option>
      <option value="شيري">شيري</option>
      <option value="فولفو">فولفو</option>
      <option value="فولفو">فولفو</option>
      <option value="همر">همر</option>
      <option value="ميني">ميني</option>
      <option value="فاو">فاو</option>
      <option value="فيات">فيات</option>
      <option value="سوبارو">سوبارو</option>
      <option value="JAC">JAC</option>
      <option value="ستيروين">ستيروين</option>
      <option value="سكودا">سكودا</option>
      <option value="لامبورغيني">لامبورغيني</option>

    </select>
    <label for="year">سنة الصنع</label>
    <input type="number" id="year" name="year" placeholder="سنة الصنع.." onChange={(e)=>setYear(e.target.value)} value={year}/> 
    <label for="color"> اللون</label>
    <input type="text" id="color" name="color" placeholder="car color.." onChange={(e)=>setColor(e.target.value)} value={color}/> 
    <label for="transmission"> نوع ناقل الحركة</label>
    <select id="brand" name="ناقل" onChange={(e)=>setTra(e.target.value)} >
      <option value="اتوماتك  "> اتوماتك</option>
      <option value="يدوي">يدوي</option>


    </select>
    <label for="cylinder"> السلندرات</label>
    <input type="number" id="cylinder" name="cylinder"  placeholder="كم سيلندر .." onChange={(e)=>setCy(e.target.value)} value={cy} /> 
    <label for="fuel"> نوع الوقود</label>
    <input type="text" id="fuel" name="fuel" placeholder="بنزين ولا سولار .." onChange={(e)=>setFule(e.target.value)} value={fule}/>
    <label for="engine"> سعة المحرك</label>
    <input type="number" id="engine" name="engine" placeholder="1.6 لتر.." onChange={(e)=>setCc(e.target.value)} value={cc} />
    <label for="status"> الحالة</label>
    <select id="brand" name="الحالة" onChange={(e)=>setStat(e.target.value)} >
      <option value="جديد  "> جديد</option>
      <option value="مستعمل">مستعمل</option>


    </select>
    <label for="Insurance"> التامين</label>
   
    <select id="brand" name="التامين" onChange={(e)=>setInsure(e.target.value)}>
      <option value="مؤمنه  "> مؤمنه</option>
      <option value="غير مؤمنه">غير مؤمنه</option>

      


    </select>
    <label for="Insurance"> الترخيص</label>
    <select id="brand" name="الترخيص" onChange={(e)=>setTrkh(e.target.value)}>
      <option value="مرخصة  "> مرخصة</option>
      <option value="غير مرخصه">غير مرخصه</option>

      


    </select>
    <label for="km"> ممشى</label>
    <input type="number" id="km" name="km" placeholder="كم كيلو متر ماشية .." onChange={(e)=>setKm(e.target.value)} value={km} />
    <label for="price"> السعر</label>
    <input type="number" id="price" name="price" placeholder="السعر.." onChange={(e)=>setPrice(e.target.value)} value={price}/>
    <label for="Payment type"> طريقة الدفع</label>
    <input type="text" id="Payment type" name="Payment type" placeholder="اقساط ولا كاش.." onChange={(e)=>setPyment(e.target.value)} value={pyment}/>
    <label for="location"> الموقع</label>
    <select id="brand" name="الموقع" onChange={(e)=>setLocation(e.target.value)}>


      <option value="عمان  "> عمان</option>
      <option value="البلقاء">البلقاء</option>
      <option value="الزرقاء">الزرقاء</option>
      <option value="الطفيله">الطفيله</option>
      <option value="معان">معان</option>
      


    </select>
    
    
    
    
    <label for="image"> اضافة صورة الرئيسية</label>
    <input  type="file"  name="imagesArray" onChange={onImgChangePrimary}  accept="image/*" name="image" id="file" ></input>
    <label for="image">  اضافة صورة جانبية</label>
    <input  type="file"  name="imagesArray" onChange={onImgChange1}  accept="image/*" name="image1" id="file1" ></input>
    <label for="image">اضافة صورة جانبية</label>
    <input  type="file"  name="imagesArray" onChange={onImgChange2}  accept="image/*" name="image2" id="file2" ></input>
    <label for="image">اضافة صورة جانبية</label>
    <input  type="file"  name="imagesArray" onChange={onImgChange3}  accept="image/*" name="image3" id="file3" ></input>
    <label for="image">اضافة صورة جانبية</label>
    <input  type="file"  name="imagesArray" onChange={onImgChange4}  accept="image/*" name="image4" id="file4" ></input>
   
    
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


