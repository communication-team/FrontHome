export default function Header (props) {
    return(
        <header class="siteHeader ">
            <div class="container innerHdr">
                <span><a href="/"><img src="https://syarahcdn.syarah.com/syarah/bundles/logo.svg" alt="" /></a></span>
                <ul>
                    <li><a href="C:\\Users\\Odai\\Desktop\\New folder\\Newfolder\\forsell.html">سيارات جديدة</a></li>
                    <li><a href="C:\\Users\\Odai\\Desktop\\New folder\\Newfolder\\forsell.html">سيارات مستعملة</a></li>
                    <li><a class="onlineHdrLink" href="/post/search?is_online=1">سيارة أونلاين</a></li>
                    <li class="sellCarNewBtn hideBtn"><a href="/post/add-post" class="redBtn">اعرض سيارتك للبيع</a></li>
                    <li><span class="sideMenuToggle "><img src="https://syarahcdn.syarah.com/syarah/bundles/menuToggle.svg" alt="" /></span>
                    </li></ul>
            </div>
        </header>
    );
}