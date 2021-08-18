
export default function ColumnContainerDetail(props){
    return(
 
        <div className="columnContainer">
            <h1 className="movabileHeader">{props.info.title}</h1>
            <div className="priceContainer">
                <div>
                    <span styles="color: rgb(0, 182, 88);"></span>
                    <span>السعر</span>
                    <strong className="priceBeforeTax">{props.info.price}<span>دينار</span></strong>
                </div>
            </div>

            <div className="contaictButtons">
                <a className="whPV blueBtn" href="tel:+966505456784">
                <img width="24" src="https://syarahcdn.syarah.com/syarah/bundles/Call.svg" alt=""/>{props.info.phone}</a>
                <a style ={{direction:'ltr'}}className="whPV greenBtn" href={"https://api.whatsapp.com/send?phone=+962"+props.info.phone}>
                <img width="24" src="https://syarahcdn.syarah.com/syarah/bundles/wpImg.svg" alt=""/>واتساب</a>
            </div>
            <div className="sellerInfo">
                <div className="randomPersonSeller"><span>{props.info.location +' - الاردن'} </span>
                </div>
            </div>
            <div className="reportContainer ">
            </div>
        </div>
     

    )
}