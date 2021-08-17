import Link from 'next/link'

export default function Header (props) {
    return(
        <header class="siteHeader ">
            <div class="container innerHdr">
               <span><a href="/"><img src="syartak.jpg" alt="" /></a></span>
                {/* for logo  */}
                <div style={{width: '170px', marginLeft:'655px'}}>
                <img style={{height: '60px'}} src="../assets/images/syartak.jpg" alt=""/></div>
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
                    <li><span class="sideMenuToggle "><img src="https://syarahcdn.syarah.com/syarah/bundles/menuToggle.svg" alt="" /></span>
                    </li>
                    </ul>
            </div>
        </header>
    );
}