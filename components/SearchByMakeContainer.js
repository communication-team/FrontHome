import Image from 'next/image'
import audi_Container1 from '../public/assets/images/audi_Container1.png'
import jeeplogo from '../public/assets/images/jeeplogo.webp'
import wagenlogo from '../public/assets/images/wagenlogo.png'
import tyotalogo from '../public/assets/images/tyotalogo.webp'
import mazda from '../public/assets/images/mazda.webp'
import marcideslogo from '../public/assets/images/marcideslogo.png'
import chaverlogo from '../public/assets/images/chaverlogo.webp'
import bmwlogo from '../public/assets/images/bmwlogo.png'
import audilogo from '../public/assets/images/audilogo.webp'
// import wagenlogo from '../public/assets/images/wagenlogo.png'






export default function SearchByMakeContainer(props) {
    return(
        <section className="searchByMakeContainer">
            <div className="container">
                <h1 className="big">ابرز الماركات المتوفرة</h1>
                <div className="makesWithLogo">
                    <a className="singleLogoMake" href="/">
                <Image  src={jeeplogo} alt="jeeplogo" styles={{margin:'5px'}} />
                    </a>
                    <a className="singleLogoMake" href="/post/search?is_online=0&amp;make_id=60">
                        <Image  src={wagenlogo} alt="wagenlogo" />                        
                    </a>
                    <a className="singleLogoMake" href="/post/search?is_online=0&amp;make_id=58">
                        <Image  src={tyotalogo} alt="wagenlogo" />
                    </a>
                    <a className="singleLogoMake" href="/post/search?is_online=0&amp;make_id=37">
                    <Image  src={mazda} alt="wagenlogo" />
                    </a>
                    <a className="singleLogoMake" href="/post/search?is_online=0&amp;make_id=38">
                    <Image  src={marcideslogo} alt="wagenlogo" />
                    </a>
                    <a className="singleLogoMake" href="/post/search?is_online=0&amp;make_id=35">
                    <Image  src={chaverlogo} alt="wagenlogo" />
                    </a>
                    <a className="singleLogoMake" href="/post/search?is_online=0&amp;make_id=48">
                    <Image  src={bmwlogo} alt="wagenlogo" />
                    </a>
                    <a className="singleLogoMake" href="/post/search?is_online=0&amp;make_id=69">
                    <Image  src={audilogo} alt="wagenlogo" />
                    </a>
              
                    </div>
                    </div>
                    </section>
    )
}