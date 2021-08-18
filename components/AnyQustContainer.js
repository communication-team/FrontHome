export default function AnyQustContainer(props){
    return(
        <div className="anyQustContainer">
            <div className="container">
                <div className="callHelpContainer">
                    <i>
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/telephoneRed.svg" alt=""/>
                    </i>
                    <strong>تقدر تشاركنا تجربتك </strong>
                    <p>نخدمك طيلة أيام الاسبوع خلال اوقات العمل التالية:<br/>من السبت حتى الخميس من الساعة 9 صباحاً حتى 9<br/>مساءً, الجمعة من 1 مساءً الى 9:30 مساءً</p>
                    <span>
                        {/* <a href="tel:+962796207201">0796207201</a> */}
                    </span>
                        <a href="https://wa.me/+962796207201" target="_blank" without rel="noreferrer">
                        <img src="https://syarahcdn.syarah.com/syarah/bundles/wpImg.svg" alt=""/>
                        <span>تواصل عبر واتساب</span>
                        </a>
                </div>
            </div>
        </div>
    )
}