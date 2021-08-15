import Image from "next/dist/client/image"
<<<<<<< HEAD
import Used_Car from '../public/assets/images/Used-Car.png'
<Image src={Used_Car} alt="Used_Car" />
=======
import Used_Car from '../public/assest/images/Used-Car.png'

>>>>>>> 14c1df406c1623c7177cc1a842e41fc1d9690789


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
                        <a class="whtBtn" href="/post/search?is_online=1">القي نظرة, تصفح </a>
                    </div>
                    <div class="singleService">
                        <div>
                            <div>
                                    <img src="https://syarahcdn.syarah.com/syarah/bundles/s2.png" alt=""/>
                                    {/* <img src="https://syarahcdn.syarah.com/syarah/bundles/s2.png" alt=""/> */}
                            </div>
                        </div>
                            <h3>سيارات المعارض</h3><p>تحب تشوف السيارة بعينك؟ تفضل على المعرض </p>
                                <a class="whtBtn" href="/post/search?is_online=0">تصفح حراج السيارات الجديدة </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}