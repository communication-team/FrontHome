import Link from 'next/link'
export default function Footer(props) {
    return(
        <footer className="footer">
            <div className="container">
              
                <div className="dataFooterContent">
                    {/* <div> */}
                        <ul>
                            <li>
                                <strong>
                                    <Link href="/">
                                    <a >الرئيسية</a>
                                    </Link>
                                </strong>
                            </li>
                            <li>
                            <strong>
                                  <Link href="/">
                                <a >من نحن</a>
                                </Link>
                            </strong>
                            </li>
                            <li>
                                <strong>
                                    <Link href="https://api.whatsapp.com/send/?phone=%2B962796207201&text&app_absent=0" passHref={true}> 
                                     <a >اتصل بنا</a>
                                    </Link>
                                </strong>
                            </li>
                         
                        </ul>
                   
                            <p>
                                <strong>
                                جميع الحقوق محفوظة
                                </strong>
                                 </p>
                    {/* </div> */}
                </div>
            </div>
                {/* <div className="authenticationMsg">
                    <div className="container">
                        <p><img src="https://syarahcdn.syarah.com/syarah/bundles/greenArmor.svg" alt="" />شركة موقع سيارة لتقنية المعلومات شركة موثقة لدى وزارة التجارة والاستثمار وبدعم من شركة علم, بسجل تجاري رقم 1010538980 </p>
                        <div className="footerWithVat">
                            <a className="vatLink" href="https://syarahcdn.syarah.com/syarah/bundles/GAZT_VAT_Certificate.pdf" target="_blank" without rel="noreferrer">
                                <img width="30px" src="https://syarahcdn.syarah.com/syarah/bundles/Vat.svg" alt="" />
                            </a>
                            <img src="https://syarahcdn.syarah.com/syarah/bundles/saudi_elm.svg" alt="" />
                        </div>
                    </div>
                </div> */}
            </footer>
    )
}