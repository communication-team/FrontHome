import Link from 'next/link'

export default function Header (props) {
    return(
        <header class="siteHeader " style={{margin:"0", width:"100%"}}>
            <div class="container innerHdr">
               <span><a href="/" ><img src="/home/mohammad/401/EcommerceProject/frontEnd/FrontHome/public/assets/images/sayartakLogo.svg" alt="" /></a></span>
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
                    <li class="sellCarNewBtn hideBtn"><a href="/login" class="redBtn">
                    <i class="fas fa-user" id='userIcone'></i>
                        اسم المتسخدم 
                        </a>
                    </li>
                    <li class="sellCarNewBtn hideBtn"><a href="/login" class="redBtn">
                        تسجيل دخول 
                        </a>
                        </li>
                    </ul>
            </div>
        </header>
    );
}