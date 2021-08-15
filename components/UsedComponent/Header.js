import Link from 'next/link'
// import Image from 'next/image'
import Image from "next/dist/client/image"

import logo1 from '/public/assest/images/logo1.png'

export default function HeaderUsed (props) {
    return(
        <header class="siteHeader searchSiteHEader">
            <div class="container innerHdr">
                <span class="SearchHEader">
                    <a href="/">
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/logo.svg" alt="" />
                        {/* <Image styles={{width:50 }} src={logo1} alt="logo" /> */}
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
    );
}