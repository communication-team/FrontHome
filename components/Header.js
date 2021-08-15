import Link from 'next/link'

export default function Header (props) {
    return(
        <header class="siteHeader ">
            <div class="container innerHdr">
                <span><a href="/"><img src="" alt="" /></a></span>
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
                    <li class="sellCarNewBtn hideBtn"><a href="/post/add-post" class="redBtn">اعرض سيارتك للبيع</a></li>
                    <li><span class="sideMenuToggle "><img src="https://syarahcdn.syarah.com/syarah/bundles/menuToggle.svg" alt="" /></span>
                    </li>
                    </ul>
            </div>
        </header>
    );
}