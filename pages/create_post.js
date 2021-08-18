import React from "react"

import Header from '../components/Header'
import  { useState, useEffect } from 'react'
import axios from 'axios'

import { app } from "../base";
import Footer from '../components/Footer'
import Head2 from '../components/Head2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CreatePost() {
  const notifyError = () => 
     toast.error("لم يتم حفظ البيانات ! ", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const notifysuccess = () =>
    

    toast.success("تك حفظ بيانات بنجاح ", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
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
        formData.append("status", "مستعمل");
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

          notifysuccess()
            console.log(response)
            
        }).catch(function (error) {
          notifyError()
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
        if(!file) return;
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
        if(!file) return;
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
        if(!file) return;
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
        if(!file) return;
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
        if(!file) return;
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
<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        <html lang="en">
        {/* <head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"/>

        </head> */}
        <Head2/>
            <link rel="stylesheet" href="assets/css/app.css"/>
        <body dir="rtl">
            {/* <header>
                <a className="brand" href="#">HOT WHEELS</a>
                <ul>
                    <a href="#">HOMEPAGE</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>
                </ul>
            </header> */}
                 <Header/>
        
            <main className="">
        <div className="sellCarContainer">
    <div className="container">
        <div>
            <div className="rightSideSellCar">
                <h1>اعرض سيارتك للبيع في اكبر سوق سيارات في المملكة</h1>
                <p>اعرض سيارتك على آلاف المشترين وتواصل معهم بسهولة</p>
                </div>
        </div>
        <div>
            <img src="/assets/images/ttt.png" alt="اعرض سيارتك للبيع" />
        </div>
    </div>
</div>

<br></br>
<br></br>

<div className="divv">
  <form action="" onSubmit={saveData}>
  <label htmlFor="fname"> عنوان المنشور</label>
    <input type="text" id="title" name="title" placeholder="اودي 97 .."  onChange={(e)=>setTitle(e.target.value)} value={title}/> 
    <label htmlFor="fname"> ألاسم</label>
    <input type="text" id="name" name="name" placeholder="اسم البائع.." onChange={(e)=>setName(e.target.value)} value={name}/>
    <label htmlFor="lname">رقم الهاتف</label>
    <input type="number" id="phone" name="phone" placeholder="+9627.." onChange={(e)=>setPhone(e.target.value)} value={phone}/>
    <label htmlFor="fname"> موديل السيارة</label>
    <input type="text" id="model" name="model" placeholder="فئة السيارة.." onChange={(e)=>setBrand(e.target.value)} value={brand}/>

    <label htmlFor="country">براند السيارة</label>
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
    <label htmlFor="year">سنة الصنع</label>
    <input type="number" id="year" name="year" placeholder="سنة الصنع.." onChange={(e)=>setYear(e.target.value)} value={year}/> 
    <label htmlFor="color"> اللون</label>
    <input type="text" id="color" name="color" placeholder="لون السيارة .." onChange={(e)=>setColor(e.target.value)} value={color}/> 
    <label htmlFor="transmission"> نوع ناقل الحركة</label>
    <select id="brand" name="ناقل" onChange={(e)=>setTra(e.target.value)} >
    <option value='' selected hidden>ناقل</option>
      <option value="اتوماتك  ">اتوماتك</option>
      <option value="يدوي">يدوي</option>


    </select>
    <label htmlFor="cylinder"> السلندرات</label>
    <input type="number" id="cylinder" name="cylinder"  placeholder="كم سيلندر .." onChange={(e)=>setCy(e.target.value)} value={cy} /> 
    <label htmlFor="fuel"> نوع الوقود</label>
    <input type="text" id="fuel" name="fuel" placeholder="بنزين ولا سولار .." onChange={(e)=>setFule(e.target.value)} value={fule}/>
    <label htmlFor="engine"> سعة المحرك</label>
    <input type="number" id="engine" name="engine" placeholder="2000 cc .." onChange={(e)=>setCc(e.target.value)} value={cc} />
    {/* <label htmlFor="status"> الحالة</label>
    <select id="brand" name="الحالة" onChange={(e)=>setStat(e.target.value)} >
      <option value="جديد  ">جديد</option>
      <option value="مستعمل">مستعمل</option>


    </select> */}
    <label htmlFor="Insurance"> التامين</label>
   
    <select id="brand" name="التامين" onChange={(e)=>setInsure(e.target.value)}>
    <option value='' selected hidden>التامين</option>
      <option value="مؤمنه  ">مؤمنه</option>
      <option value="غير مؤمنه">غير مؤمنه</option>

      


    </select>
    <label htmlFor="Insurance"> الترخيص</label>
    <select id="brand" name="الترخيص" onChange={(e)=>setTrkh(e.target.value)}>
    <option value='' selected hidden>الترخيص</option>
      <option value="مرخصة  ">مرخصة</option>
      <option value="غير مرخصه">غير مرخصه</option>

      


    </select>
    <label htmlFor="km"> ممشى</label>
    <input type="number" id="km" name="km" placeholder="كم كيلو متر ماشية .." onChange={(e)=>setKm(e.target.value)} value={km} />
    <label htmlFor="price"> السعر</label>
    <input type="number" id="price" name="price" placeholder="السعر.." onChange={(e)=>setPrice(e.target.value)} value={price}/>
    <label htmlFor="Payment type"> طريقة الدفع</label>
    <input type="text" id="Payment type" name="Payment type" placeholder="اقساط ولا كاش.." onChange={(e)=>setPyment(e.target.value)} value={pyment}/>
    <label htmlFor="location"> الموقع</label>
    <select id="brand" name="الموقع" onChange={(e)=>setLocation(e.target.value)}>

<option value='' selected hidden>الموقع</option>
     <option value="عمان">عمان</option>
      <option value="البلقاء">البلقاء</option>
      <option value="الزرقاء">الزرقاء</option>
      <option value="الطفيله">الطفيله</option>
      <option value="معان">معان</option>
      


    </select>
    
    
    
    
    <label htmlFor="file" style={{ backgroundColor: '#4caf50',margin:'0',
      color: 'white',
      padding: '0.5rem',
      textAlign: 'center',
      borderRadius: '0.3rem',
      cursor: 'pointer',
      marginTop: '1rem',
      gridColumnStart: '1',
    gridColumnEnd: '3'}}> اضافة صورة الرئيسية</label>
    <input  type="file"   onChange={onImgChangePrimary}  accept="image/*" name="image" id="file" hidden/>
    <label htmlFor="file1" style={{ backgroundColor: '#4caf50',margin:'0',
      color: 'white',
      padding: '0.5rem',
      textAlign: 'center',
      borderRadius: '0.3rem',
      cursor: 'pointer',
      marginTop: '1rem',
      gridColumnStart: '1',
    gridColumnEnd: '3'}}>  اضافة صورة جانبية</label>
    <input  type="file"   onChange={onImgChange1}  accept="image/*" name="image1" id="file1" hidden></input>
    <label htmlFor="file2" style={{ backgroundColor: '#4caf50',margin:'0',
      color: 'white',
      padding: '0.5rem',
      textAlign: 'center',
      borderRadius: '0.3rem',
      cursor: 'pointer',
      marginTop: '1rem',
      gridColumnStart: '1',
    gridColumnEnd: '3'}}>اضافة صورة جانبية</label>
    <input  type="file"   onChange={onImgChange2}  accept="image/*" name="image2" id="file2" hidden />

    <label htmlFor="file3" style={{ backgroundColor: '#4caf50',margin:'0',
      color: 'white',
      padding: '0.5rem',
      textAlign: 'center',
      borderRadius: '0.3rem',
      cursor: 'pointer',
      marginTop: '1rem',
      gridColumnStart: '1',
    gridColumnEnd: '3'}}>اضافة صورة جانبية</label>
    <input  type="file"   onChange={onImgChange3}  accept="image/*" name="image3" id="file3" hidden/>
    <label htmlFor="file4"   style={{ backgroundColor: '#4caf50',margin:'0',
      color: 'white',
      padding: '0.5rem',
      textAlign: 'center',
      borderRadius: '0.3rem',
      cursor: 'pointer',
      marginTop: '1rem',
      gridColumnStart: '1',
    gridColumnEnd: '3'}}>اضافة صورة جانبية</label>
    <input  type="file"   onChange={onImgChange4}  accept="image/*" name="image4" id="file4"
    
  
    hidden/>
   
   
   
    
    <input type="submit" value="احفظ" style={{ 
      gridColumnStart: '1',
    gridColumnEnd: '3'}}/>
  </form>
</div>
<div id='footerNeedPadding'>
  <Footer/>
</div>
        </main>


{/* 
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"></script>
            <script src="./assets/js/app.js"></script> */}
        </body>
        </html>
        </React.Fragment>
    )
  }


