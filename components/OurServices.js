import Image from "next/dist/client/image"
import Used_Car from '../public/assest/images/Used-Car.png'
<Image src={Used_Car} alt="Used_Car" />


export default function OurServices(props) {
    return(
        <section class="ourServices">
            <div class="container">
                <h1 class="big">خدماتنا</h1>
                <div class="servicesContent">
                    <div class="singleService">
                        <div>
                            <div><img src="https://syarahcdn.syarah.com/syarah/bundles/s1.png" alt=""/></div>
                        </div>
                        <h3>سيارة اونلاين</h3><p> مباشرة وانت قاعد في بيتك </p>
                        <a class="whtBtn" href="/post/search?is_online=1">اشتري سيارتك الحين</a>
                    </div>
                    <div class="singleService">
                        <div>
                            <div>
                                    <img src="https://syarahcdn.syarah.com/syarah/bundles/s2.png" alt=""/>
                            </div>
                        </div>
                            <h3>سيارات المعارض</h3><p>إذا كنت او ذوقك. </p>
                                <a class="whtBtn" href="/post/search?is_online=0">تصفح حراج السيارات</a>
                        </div>
                    </div>
                </div>
        </section>
    )
}