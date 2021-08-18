import Image from "next/dist/client/image"

import Used_Car from '../public/assets/images/Used-Car.png'
<Image src={Used_Car} alt="Used_Car" />



export default function OurServices(props) {
    return(
        <section class="ourServices">
            <div class="container">
                <h1 class="big">خدماتنا</h1>
                <div class="servicesContent">
                    <div class="singleService">
                        <div>
                            <div>
                                {/* <img src="https://syarahcdn.syarah.com/syarah/bundles/s1.png" alt=""/> */}
                                    <Image src={Used_Car} alt="Used_Car" />
                                </div>
                        </div>
                        <h3>تشكيلة منوعة للسيارات المتسعملة </h3><p>تصفح من بيتك </p>
                        <a class="whtBtn" href="/forsellnew">القي نظرة, تصفح </a>
                    </div>
                    <div class="singleService">
                        <div>
                            <div>
                                    <img src="https://syarahcdn.syarah.com/syarah/bundles/s2.png" alt=""/>
                            </div>
                        </div>
                            <h3>سيارات المعارض</h3><p>تحب تشوف السيارة بعينك؟ تفضل على المعرض </p>
                                <a class="whtBtn" href="/forsellused">تصفح حراج السيارات الجديدة </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}