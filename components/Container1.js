import Image from 'next/image'
import audi_Container1 from '../public/assets/images/audi_Container1.png'

export default function Container1(props){
    return(
        <section class="section1 ">
            <div class="container" style={{lineHeight:'3rem'}}>
                <div class="section1Content">
                    <h1>
                        <span >اشتري سيارتك  </span>
                        {/* <br /> */}
                        <span>من </span>
                        {/* <br /> */}
                        <strong>سيارتك</strong>
                    </h1>
                    <p>جديد أو مستعمل</p>
                </div>
                <Image class="m-hide" src={audi_Container1} alt="audi_Container1" />
            </div>
        </section>
    );
}