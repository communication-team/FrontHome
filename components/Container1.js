import Image from 'next/image'
import audi_Container1 from '../public/assets/images/audi_Container1.png'

export default function Container1(props){
    return(
        <section className="section1 ">
            <div className="container" style={{lineHeight:'3rem'}}>
                <div className="section1Content">
                    <h1>
                        <span > اشتري سيارتك من  </span>
                        <strong>سيارتك</strong>
                    </h1>
                    <p>جديد أو مستعمل</p>
                </div>
                <div id='imageContainer'>
                <Image className="m-hide" styles={{width:'50%'}} src={audi_Container1} alt="audi_Container1" />
                </div>
            </div>
        </section>
    );
}