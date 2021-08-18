import Link from 'next/link'

import  { useState, useEffect } from 'react'
export default function Header (props) {

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
        <header className="siteHeader " style={{margin:"0"}}>
        <div className=" innerHdr">
           {/* <span><a href="/" ><img src="https://syarahcdn.syarah.com/syarah/bundles/logo.svg" alt="" /></a></span> */}
           <span>
           <Link href="/">
               <a  >
               <img style={{width:'80px'}} src="https://firebasestorage.googleapis.com/v0/b/cars-8ba21.appspot.com/o/sayartakLogo.PNG?alt=media&token=82f9304a-2846-48c4-a791-3edaefc825f8" alt="" />
               {/* <Image id='imageLogo'  src={Logo} alt="audi_Container1" /> */}
                </a>
                
                </Link></span>
            {/* for logo  */}
            <ul style={{
    width: '56%',
    fontSize: '96%',
    fontFamily: 'Changa,sans-serif',
    justifyContent: 'space-between'
}}>
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
                <li className="sellCarNewBtn hideBtn">

                <Link href="/create_post" className="redBtn">
                    <a className="redBtn">اعرض سيارتك للبيع</a>
                    </Link>
                </li>
                {
                    info==''? <li className="sellCarNewBtn hideBtn">
                        
                        <Link href="/login" className="redBtn">
                        <a className="redBtn">
                    تسجيل دخول 
                    </a>
                    </Link>
                    </li>: <li className="sellCarNewBtn hideBtn" onClick={logout}>

                        
                        <Link href="/" className="redBtn" >
                        <a className="redBtn" style={{textAlign: 'center'}}>
                <i className="fas fa-user" id='userIcone'></i>
                    {info}
                    <br/>
                    تسجيل الخروج
                    </a>
                    </Link>
                </li>

                }
               
               
                </ul>
        </div>
    </header>
    );
}