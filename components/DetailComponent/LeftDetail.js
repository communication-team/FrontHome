
export default function ColumnContainerDetail(props){
    return(
 
        <div class="columnContainer">
            <h1 class="movabileHeader">{props.info.title}</h1>
            <div class="priceContainer">
                <div>
                    <span styles="color: rgb(0, 182, 88);"></span>
                    <span>السعر</span>
                    <strong class="priceBeforeTax">{props.info.price}<span>دينار</span></strong>
                </div>
            </div>

            <div class="contaictButtons">
                <a class="whPV blueBtn" href="tel:+966505456784">
                <img width="24" src="https://syarahcdn.syarah.com/syarah/bundles/Call.svg" alt=""/>{props.info.phone}</a>
                <a style ={{direction:'ltr'}}class="whPV greenBtn" href={"https://api.whatsapp.com/send?phone=+962"+props.info.phone}>
                <img width="24" src="https://syarahcdn.syarah.com/syarah/bundles/wpImg.svg" alt=""/>واتساب</a>
            </div>
            <div class="sellerInfo">
                <div class="randomPersonSeller"><span>{props.info.location +' - الاردن'} </span>
                </div>
            </div>
            <div class="reportContainer ">
            </div>
        </div>
     

    )
}