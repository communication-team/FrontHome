import Image from 'next/image'

import jeeplogo from '../public/assets/images/jeeplogo.webp'
import wagenlogo from '../public/assets/images/wagenlogo.png'
import tyotalogo from '../public/assets/images/tyotalogo.webp'
import mazda from '../public/assets/images/mazda.webp'
import marcideslogo from '../public/assets/images/marcideslogo.png'
import chaverlogo from '../public/assets/images/chaverlogo.webp'
import bmwlogo from '../public/assets/images/bmwlogo.png'
import audilogo from '../public/assets/images/audilogo.webp'
import Link from 'next/link'






export default function SearchByMakeContainer(props) {
    return(
        <section className="searchByMakeContainer">
            <div className="container">
                <h1 className="big">ابرز الماركات المتوفرة</h1>
                <div className="makesWithLogo">

                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake">
                <Image  src={jeeplogo} alt="jeeplogo" styles={{margin:'5px'}} />
                    </a>
                    </Link>

                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake" >
                        <Image  src={wagenlogo} alt="wagenlogo" />                        
                    </a>

                    </Link>
                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake" >
                        <Image  src={tyotalogo} alt="wagenlogo" />
                    </a>
                    </Link>
                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake" >
                    <Image  src={mazda} alt="wagenlogo" />
                    </a>
                    </Link>
                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake" >
                    <Image  src={marcideslogo} alt="wagenlogo" />
                    </a>
                    </Link>
                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake" >
                    <Image  src={chaverlogo} alt="wagenlogo" />
                    </a>
                    </Link>
                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake" >
                    <Image  src={bmwlogo} alt="wagenlogo" />
                    </a>
                    </Link>
                    <Link className="singleLogoMake" href="/forsellnew">
                    <a className="singleLogoMake" >
                    <Image  src={audilogo} alt="wagenlogo" />
                    </a>
              </Link>
              
                    </div>
                    </div>
                    </section>
    )
}