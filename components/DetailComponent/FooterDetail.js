import Link from 'next/link'
export default function FooterDetail(props) {
    return (
        <footer className="footer">
            <div className="container">
                <img src="https://syarahcdn.syarah.com/syarah/bundles/ftrLogo.png" alt="" />
                <div className="dataFooterContent"><div><ul><li>
                    <Link href="/">
                    <a >الرئيسية</a>
                    </Link>
                    </li><li>
                        <Link href="/">
                    <a >من نحن</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/">
                        <a >اتصل بنا</a>
                        </Link>
                        </li>
                        <li>
                        <a href="https://syarah.com/blog" target="_blank"  rel="noreferrer" >مدونة سيارة </a></li><li>
                            <a href="https://syarah.com/تسويق_بالعمولة" rel="noopener noreferrer">برنامج سيارة للتسويق بالعمولة </a>
                            </li></ul><p>شركة سعوديه بسجل تجاري 1010538980 مصدره الرياض</p><div>
                                <a href="https://syarah.com/site/terms" target="_blank"  rel="noreferrer">الأحكام والشروط </a>
                                 |<a href="https://syarah.com/site/privacy-policy" target="_blank"  rel="noreferrer">سياسة الخصوصية </a>
                                 </div></div><div><strong className="greenGrd"><img src="https://syarahcdn.syarah.com/syarah/bundles/greenArmor.svg" alt="" /><span>طرق دفع إلكترونية آمنة</span></strong><ul><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Mada.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Sadad.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/Visadark.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/mc.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/paypalstacked.svg" alt="" /></li><li><img src="https://syarahcdn.syarah.com/syarah/bundles/BankTransfer.svg" alt="" /></li></ul><p>جميع الحقوق محفوظة لشركة موقع سيارة المحدودة © 2020</p></div></div></div>
        </footer>
    )
}