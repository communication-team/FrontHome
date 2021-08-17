import Link from 'next/link'
// import Image from 'next/image'
import Image from "next/dist/client/image"

// import logo1 from '../public/assets/images/logo1.png'

export default function HeaderUsed (props) {
    return(
        <header class="siteHeader ">
            <div class="container innerHdr">
               <span><a href="/"><img src="logo.png" alt="" /></a></span>
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
                    <li class="sellCarNewBtn hideBtn"><a href="/create_post" class="redBtn">اعرض سيارتك للبيع</a></li>
                    <li class="sellCarNewBtn hideBtn"><a href="/login" class="redBtn">تسجيل دخول</a></li>
                    </ul>
            </div>
        </header>
    );
}