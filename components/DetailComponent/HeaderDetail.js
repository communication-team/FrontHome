import Link from 'next/link'
import react, { useState, useEffect } from 'react'
export default function HeaderDetail(props){
    const [info, setInfo] = useState('');

    

    useEffect(() => {
        if(window.localStorage.info)
      setInfo(JSON.parse(window.localStorage.getItem('info')).username)
     
     
  }, [])


  function logout(e)
  {
    e.preventDefault();
    window.localStorage.removeItem('info')
    window.localStorage.removeItem('token')
    window.location='/'
  }
    return(
        <header class="siteHeader " style={{margin:"0"}}>
            <div class="container innerHdr">
               {/* <span><a href="/" ><img src="https://syarahcdn.syarah.com/syarah/bundles/logo.svg" alt="" /></a></span> */}
               <span>
                   <a href="/" >
                   <img style={{width:'80px'}} src="https://firebasestorage.googleapis.com/v0/b/cars-8ba21.appspot.com/o/sayartakLogo.PNG?alt=media&token=82f9304a-2846-48c4-a791-3edaefc825f8" alt="" />
                   {/* <Image id='imageLogo'  src={Logo} alt="audi_Container1" /> */}
                    </a></span>
                {/* for logo  */}
                <ul>
                    <li>
                    <Link href="/">
                        <a>الصفحة الرئيسية </a>
                    </Link>
                    </li>
                    <li>
                        <Link href='/forsellnew'>
                        <a>سيارات جديدة </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/forsellused">
                        <a>سيارات مستعملة </a>
                        </Link>
                    </li>
                    <li class="sellCarNewBtn hideBtn">
                        <a href="/create_post" class="redBtn">اعرض سيارتك للبيع</a>
                    </li>
                    {
                        info==''? <li class="sellCarNewBtn hideBtn"><a href="/login" class="redBtn">
                        تسجيل دخول 
                        </a>
                        </li>: <li class="sellCarNewBtn hideBtn" onClick={logout}>
                            <a href="/" class="redBtn" style={{textAlign: 'center'}}>
                    <i class="fas fa-user" id='userIcone'></i>
                        {info}
                        <br/>
                        تسجيل الخروج
                        </a>
                    </li>

                    }
                   
                   
                    </ul>
            </div>
        </header>
    );
    // return(

        
    //     <header class="siteHeader ">
    //         <div class="container innerHdr">
    //                         <span>
    //                             <a href="/">
    //                             {/* <img src="https://syarahcdn.syarah.com/syarah/bundles/logo.svg" alt="" /> */}
    //                             </a>
    //                         </span>
    //                         <ul>
    //                 <li>
    //                 <Link href="/">
    //                     <a>الصفحة الرئيسية </a>
    //                 </Link>
    //                 </li>
    //                 <li>
    //                     <Link href='/forsellnew'>
    //                     <a>سيارات جديدة </a>
    //                     </Link>
    //                 </li>
    //                 <li>
    //                     <Link href="/forsellused">
    //                     <a>سيارات مستعملة </a>
    //                     </Link>
    //                 </li>
    //                 <li class="sellCarNewBtn hideBtn">
    //                     <a href="/create_post" class="redBtn">اعرض سيارتك للبيع</a>
    //                 </li>
    //                 <li class="sellCarNewBtn hideBtn"><a href="/login" class="redBtn">
    //                 <i class="fas fa-user" id='userIcone'></i>
    //                     اسم المتسخدم 
    //                     </a>
    //                 </li>
    //                 <li class="sellCarNewBtn hideBtn"><a href="/login" class="redBtn">
    //                     تسجيل دخول 
    //                     </a>
    //                     </li>
    //                 </ul>
    //         </div>
    //     </header>
  

    // )
}