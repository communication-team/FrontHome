import Image from 'next/image'
import audi_Container1 from '../public/assest/images/audi_Container1.png'

export default function Container1(props){
    return(
        <section class="section1 ">
            <div class="container">
                <div class="section1Content">
                    <h1><span>اشتري سيارتك من </span><br /><strong>سيارتك</strong></h1><p>جديد أو مستعمل وحنا نوصلها لين عندك</p>
                </div>
                <Image class="m-hide" src={audi_Container1} alt="audi_Container1" />
            </div>
        </section>
    );
}