import Image from "next/dist/client/image"

import Used_Car from '../public/assets/images/Used-Car.png'
import Link from 'next/link'
<Image src={Used_Car} alt="Used_Car" />



export default function OurServices(props) {
    return(
        <section className="ourServices">
            <div className="container">
                <h1 className="big">خدماتنا</h1>
                <div className="servicesContent">
                    <div className="singleService">
                        <div>
                            <div>
                                {/* <img src="https://syarahcdn.syarah.com/syarah/bundles/s1.png" alt=""/> */}
                                    <Image src={Used_Car} alt="Used_Car" />
                                </div>
                        </div>
                        <h3>تشكيلة منوعة للسيارات المتسعملة </h3><p>تصفح من بيتك </p>
                        <Link className="whtBtn" href="/forsellused">
                        <a  >
                            
                            القي نظرة, تصفح </a>
                            </Link>
                    </div>
                    <div className="singleService">
                        <div>
                            <div>
                                    <img src="https://syarahcdn.syarah.com/syarah/bundles/s2.png" alt=""/>
                            </div>
                        </div>
                            <h3>سيارات المعارض</h3><p>تحب تشوف السيارة بعينك؟ تفضل على المعرض </p>
                                <Link className="whtBtn" href="/forsellnew">
                                <a className="whtBtn" >
                                    تصفح حراج السيارات الجديدة </a>
                                    </Link>
                        </div>
                    </div>
                </div>
        </section>
    )
}