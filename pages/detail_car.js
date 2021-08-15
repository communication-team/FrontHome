import Link from 'next/link'
import HeadDeatil from '../components/DetailComponent/HeadDetail'
import BeforeHeaderAndAfterHead from '../components/DetailComponent/afterHead'

export default function detail_car(){
    return(
        <div>
       <HeadDeatil/>
       <body dir="rtl">
      <noscript>
      <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-NN548QV&gtm_auth=ybM2zfdgfSy-hSdyA2ubiw&gtm_preview=env-58&gtm_cookies_win=x"
      height="0"
      width="0"
      styles={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      <div id="root"><div class="hasAuthPad">
        {/* <Header/> */}
        {/* <Main/> */}
        {/* <Footer/> */}
      </div>
      
        </div>
      <div id="BodyPortal"></div>
      <script>
      {/* {script1()} */}
      </script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"67c0a8a39ec74ec2","token":"add90b76559847a1bdd9029d2a71da0c","version":"2021.7.0","si":10}'>
    </script>
      </body>
       </div>
    )
}