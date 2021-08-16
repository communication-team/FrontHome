export default function HeaderDetail(props){
    return(

        
        <header class="siteHeader ">
            <div class="container innerHdr">
                            <span>
                                <a href="/">
                                {/* <img src="https://syarahcdn.syarah.com/syarah/bundles/logo.svg" alt="" /> */}
                                </a>
                            </span>
                            <ul>
                                <li class="sellCarNewBtn hideBtn">
                                <a href="/post/add-post" class="redBtn">اعرض سيارتك للبيع</a>
                                </li>
                                <li>
                                <span class="sideMenuToggle ">
                                <img src="https://syarahcdn.syarah.com/syarah/bundles/menuToggle.svg" alt="" />
                                </span>
                                </li>
                            </ul>
            </div>
        </header>
  

    )
}