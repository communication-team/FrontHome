
import  { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
export default function MainUsed(props) {

    const [post, setPost] = useState([]);
    const [pyment, setPyment] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [km, setKm] = useState('');
    const [location, setLocation] = useState('');
    

    useEffect(() => {

       


        getData('')
       
       
    }, [])

function toggaleImage(data)
{
    setPost(data)
    const highlightedItems = document.querySelectorAll(".TumbLoadImage-module__loading___3EJWH");

    highlightedItems.forEach(function(userItem) {
        userItem.className='';
 
    } );
}
    async function  getData(filt)
    {
        let url=''
        if(filt=='')
        url='https://carsgallary.herokuapp.com/api/v1/cars/carinfo'
        else
        url='https://carsgallary.herokuapp.com/api/v1/cars/carinfo'+filt
         const res= await axios.get(url)        
       
        .then( function (response) {
            // handle success
            console.log('fff',response);
             toggaleImage(response.data)
            // setPost(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log('ffff',error);
           
        })
        .then(function () {
            // always executed
        });
    }


    function filter(event) {
        let target = event.target; // where was the click?
    
        if (target.tagName == 'STRONG')
        {  // not on TD? Then we're not interested
        // console.log('ggggggggggg',event.currentTarget.parentNode )
        console.log('ggggggggggg',event.target.parentNode )
        // console.log('ggggggggggg', event.target.parentNode.classList.toggle("mobileDesignShape"))
        event.target.parentNode.classList.toggle("expandedFilterAcc")
        }
 
       
      };


      function getpyment(value)
      {
     setPyment(value)
     console.log(pyment);
      }


      function getbrand(value)
      {
         
          
        setBrand(value)
        console.log(brand);
    
      }


      function getyear(event)
      {
         
          
        setYear(event.target.value)
        console.log(year);
    
      }


      function getlocation(value)
      {
         
          
        setLocation(value)
        console.log(location);
    
      }

      function getInput(event)
      {
          event.preventDefault()
            console.log(year)
            let url='?'
            if(brand!='')
            url+='carModel='+brand+'&'
            if(pyment!='')
            url+='payment_type='+pyment+'&'
            if(year!='')
            url+='year='+year+'&'
            if(price!='')
            url+='price='+price+'&'
            if(km!='')
            url+='km='+km+'&'
            if(location!='')
            url+='location='+location+'&'


        
     
       

      
        // const [location, setLocation] = useState('');
    
            getData(url)
      }

    return (
        <main className=" ">
            <section className="searchPageContainer container extraWideContainer ">
                <aside className="searchFilter " style={{overflowX:'scroll'}}>
                    <section className="filterHeader"><strong><span className="m-hide">فلترة النتائج</span><span className="m-show"><img
                        src="https://syarahcdn.syarah.com/syarah/bundles/backArrfltr.svg" alt="" /><span>ابحث عن سيارتك
                            الجديدة</span></span><span className="resetData"></span></strong></section>
                   <form  onSubmit={getInput}>
                    <section onClick={filter} className="filterBody" datadatafrom="IsOnlinefalse">
                      
                        <div styles="display:" className="filterAcc  "><strong><span>طريقة الدفع</span><label></label></strong>
                            <div className="filterAccData">
                                <div>
                                    <div className="radioIotionContainer "><input onClick={()=>getpyment('')} type="radio" className="" id="filter20"
                                        name="filter2" /><label htmlFor="filter20" className="labelReplacment"></label><label
                                            htmlFor="filter20">الكل</label></div>

                                    <div className="radioIotionContainer "><input onClick={()=>getpyment('تقسيط')} type="radio" className="" id="filter21"
                                        name="filter2" /><label htmlFor="filter21" className="labelReplacment"></label><label
                                            htmlFor="filter21">سيارات تقسيط</label></div>

                                    <div className="radioIotionContainer "><input onClick={()=>getpyment('نقدا')} type="radio" className="" id="filter22"
                                        name="filter2" /><label htmlFor="filter22" className="labelReplacment"></label><label
                                            htmlFor="filter22">سيارات نقدا</label></div>
                                    
                                </div>
                            </div>
                        </div>
                    
                        <div styles="display:" className="filterAcc  "><strong><span>الماركة</span><label></label></strong>
                            <div className="filterAccData">
                                <div className="allMakeContainer">
                                  
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter40"
                                        name="filter4" /><label htmlFor="filter40" className="labelReplacment"></label><label
                                            htmlFor="filter40">الكل</label></div>

                                    <div className="radioIotionContainer " onClick={()=>getbrand('تويوتا')} datadisabled="0"><input type="radio" className="" id="filter41"
                                        name="filter4" data-make="4" /><label htmlFor="filter41" className="labelReplacment"></label><label
                                            htmlFor="filter41">تويوتا</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('هونداي')} datadisabled="0"><input type="radio" className="" id="filter42"
                                        name="filter4" data-make="60" /><label htmlFor="filter42" className="labelReplacment"></label><label
                                            htmlFor="filter42">هونداي</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('مرسيدس')}  datadisabled="0"><input type="radio" className="" id="filter43"
                                        name="filter4" data-make="53" /><label htmlFor="filter43" className="labelReplacment"></label><label
                                            htmlFor="filter43">مرسيدس</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('فورد')}  datadisabled="0"><input type="radio" className="" id="filter44"
                                        name="filter4" data-make="37" /><label htmlFor="filter44" className="labelReplacment"></label><label
                                            htmlFor="filter44">فورد</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('شفروليه')}  datadisabled="0"><input type="radio" className="" id="filter45"
                                        name="filter4" data-make="35" /><label htmlFor="filter45" className="labelReplacment"></label><label
                                            htmlFor="filter45">شفروليه</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('نيسان')} datadisabled="0"><input type="radio" className="" id="filter46"
                                        name="filter4" data-make="58" /><label htmlFor="filter46" className="labelReplacment"></label><label
                                            htmlFor="filter46">نيسان</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('كيا')} datadisabled="0"><input type="radio" className="" id="filter47"
                                        name="filter4" data-make="38" /><label htmlFor="filter47" className="labelReplacment"></label><label
                                            htmlFor="filter47">كيا</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('لكزس')} datadisabled="0"><input type="radio" className="" id="filter48"
                                        name="filter4" data-make="48" /><label htmlFor="filter48" className="labelReplacment"></label><label
                                            htmlFor="filter48">لكزس</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('GMC')} datadisabled="0"><input type="radio" className="" id="filter49"
                                        name="filter4" data-make="19" /><label htmlFor="filter49" className="labelReplacment"></label><label
                                            htmlFor="filter49">GMC</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('هوندا')} datadisabled="0"><input type="radio" className="" id="filter410"
                                        name="filter4" data-make="5" /><label htmlFor="filter410" className="labelReplacment"></label><label
                                            htmlFor="filter410">هوندا</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('مازدا')} datadisabled="0"><input type="radio" className="" id="filter411"
                                        name="filter4" data-make="51" /><label htmlFor="filter411" className="labelReplacment"></label><label
                                            htmlFor="filter411">مازدا</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('ميتسوبيشي')}  datadisabled="0"><input type="radio" className="" id="filter412"
                                        name="filter4" data-make="55" /><label htmlFor="filter412" className="labelReplacment"></label><label
                                            htmlFor="filter412">ميتسوبيشي</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('BMW')}  datadisabled="0"><input type="radio" className="" id="filter413"
                                        name="filter4" data-make="15" /><label htmlFor="filter413" className="labelReplacment"></label><label
                                            htmlFor="filter413">BMW</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('دودج')}  datadisabled="0"><input type="radio" className="" id="filter414"
                                        name="filter4" data-make="23" /><label htmlFor="filter414" className="labelReplacment"></label><label
                                            htmlFor="filter414">دودج</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('ايسوزو')}  datadisabled="0"><input type="radio" className="" id="filter415"
                                        name="filter4" data-make="9" /><label htmlFor="filter415" className="labelReplacment"></label><label
                                            htmlFor="filter415">ايسوزو</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('شانجان')} datadisabled="0"><input type="radio" className="" id="filter416"
                                        name="filter4" data-make="69" /><label htmlFor="filter416" className="labelReplacment"></label><label
                                            htmlFor="filter416">شانجان</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('لاند روفر')} datadisabled="0"><input type="radio" className="" id="filter417"
                                        name="filter4" data-make="47" /><label htmlFor="filter417" className="labelReplacment"></label><label
                                            htmlFor="filter417">لاند روفر</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('جيب')}datadisabled="0"><input type="radio" className="" id="filter418"
                                        name="filter4" data-make="20" /><label htmlFor="filter418" className="labelReplacment"></label><label
                                            htmlFor="filter418">جيب</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('كرايسلر')} datadisabled="0"><input type="radio" className="" id="filter419"
                                        name="filter4" data-make="44" /><label htmlFor="filter419" className="labelReplacment"></label><label
                                            htmlFor="filter419">كرايسلر</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('MG')} datadisabled="0"><input type="radio" className="" id="filter420"
                                        name="filter4" data-make="78" /><label htmlFor="filter420" className="labelReplacment"></label><label
                                            htmlFor="filter420">MG</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('اودي')} datadisabled="0"><input type="radio" className="" id="filter421"
                                        name="filter4" data-make="8" /><label htmlFor="filter421" className="labelReplacment"></label><label
                                            htmlFor="filter421">اودي</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('رينو')} datadisabled="0"><input type="radio" className="" id="filter422"
                                        name="filter4" data-make="26" /><label htmlFor="filter422" className="labelReplacment"></label><label
                                            htmlFor="filter422">رينو</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('كاديلاك')} datadisabled="0"><input type="radio" className="" id="filter423"
                                        name="filter4" data-make="43" /><label htmlFor="filter423" className="labelReplacment"></label><label
                                            htmlFor="filter423">كاديلاك</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('جيلي')}  datadisabled="0"><input type="radio" className="" id="filter424"
                                        name="filter4" data-make="67" /><label htmlFor="filter424" className="labelReplacment"></label><label
                                            htmlFor="filter424">جيلي</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('هافال')}  datadisabled="0"><input type="radio" className="" id="filter425"
                                        name="filter4" data-make="85" /><label htmlFor="filter425" className="labelReplacment"></label><label
                                            htmlFor="filter425">هافال</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('سوزوكي')} datadisabled="2"><input type="radio" className="" id="filter426"
                                        name="filter4" data-make="33" /><label htmlFor="filter426" className="labelReplacment"></label><label
                                            htmlFor="filter426">سوزوكي</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('بورش')} datadisabled="0"><input type="radio" className="" id="filter427"
                                        name="filter4" data-make="13" /><label htmlFor="filter427" className="labelReplacment"></label><label
                                            htmlFor="filter427">بورش</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('دايهاتسو')} datadisabled="2"><input type="radio" className="" id="filter428"
                                        name="filter4" data-make="21" /><label htmlFor="filter428" className="labelReplacment"></label><label
                                            htmlFor="filter428">دايهاتسو</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('فولكس فاجن')} datadisabled="0"><input type="radio" className="" id="filter429"
                                        name="filter4" data-make="40" /><label htmlFor="filter429" className="labelReplacment"></label><label
                                            htmlFor="filter429">فولكس فاجن</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('لينكولن')} datadisabled="0"><input type="radio" className="" id="filter430"
                                        name="filter4" data-make="50" /><label htmlFor="filter430" className="labelReplacment"></label><label
                                            htmlFor="filter430">لينكولن</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('انفنتي')} datadisabled="0"><input type="radio" className="" id="filter431"
                                        name="filter4" data-make="10" /><label htmlFor="filter431" className="labelReplacment"></label><label
                                            htmlFor="filter431">انفنتي</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('ميركوري')} datadisabled="2"><input type="radio" className="" id="filter432"
                                        name="filter4" data-make="56" /><label htmlFor="filter432" className="labelReplacment"></label><label
                                            htmlFor="filter432">ميركوري</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('جريت وول')} datadisabled="0"><input type="radio" className="" id="filter433"
                                        name="filter4" data-make="18" /><label htmlFor="filter433" className="labelReplacment"></label><label
                                            htmlFor="filter433">جريت وول</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('بيجو')} datadisabled="0"><input type="radio" className="" id="filter434"
                                        name="filter4" data-make="16" /><label htmlFor="filter434" className="labelReplacment"></label><label
                                            htmlFor="filter434">بيجو</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('بنتلي')}  datadisabled="2"><input type="radio" className="" id="filter435"
                                        name="filter4" data-make="12" /><label htmlFor="filter435" className="labelReplacment"></label><label
                                            htmlFor="filter435">بنتلي</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('جاغوار')}  datadisabled="0"><input type="radio" className="" id="filter436"
                                        name="filter4" data-make="17" /><label htmlFor="filter436" className="labelReplacment"></label><label
                                            htmlFor="filter436">جاغوار</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('شيري')}  datadisabled="0"><input type="radio" className="" id="filter437"
                                        name="filter4" data-make="36" /><label htmlFor="filter437" className="labelReplacment"></label><label
                                            htmlFor="filter437">شيري</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('فولفو')}  datadisabled="2"><input type="radio" className="" id="filter438"
                                        name="filter4" data-make="39" /><label htmlFor="filter438" className="labelReplacment"></label><label
                                            htmlFor="filter438">فولفو</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('GAC')} datadisabled="0"><input type="radio" className="" id="filter439"
                                        name="filter4" data-make="90" /><label htmlFor="filter439" className="labelReplacment"></label><label
                                            htmlFor="filter439">GAC</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('همر')}  datadisabled="2"><input type="radio" className="" id="filter440"
                                        name="filter4" data-make="59" /><label htmlFor="filter440" className="labelReplacment"></label><label
                                            htmlFor="filter440">همر</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('ميني')}  datadisabled="0"><input type="radio" className="" id="filter441"
                                        name="filter4" data-make="57" /><label htmlFor="filter441" className="labelReplacment"></label><label
                                            htmlFor="filter441">ميني</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('فاو')}  datadisabled="0"><input type="radio" className="" id="filter442"
                                        name="filter4" data-make="66" /><label htmlFor="filter442" className="labelReplacment"></label><label
                                            htmlFor="filter442">فاو</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('فيات')}  datadisabled="0"><input type="radio" className="" id="filter443"
                                        name="filter4" data-make="41" /><label htmlFor="filter443" className="labelReplacment"></label><label
                                            htmlFor="filter443">فيات</label></div>
                                    
                                  
                                    
                                    <div className="radioIotionContainer " onClick={()=>getbrand('سوبارو')} datadisabled="2"><input type="radio" className="" id="filter447"
                                        name="filter4" data-make="32" /><label htmlFor="filter447" className="labelReplacment"></label><label
                                            htmlFor="filter447">سوبارو</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('JAC')} datadisabled="2"><input type="radio" className="" id="filter448"
                                        name="filter4" data-make="82" /><label htmlFor="filter448" className="labelReplacment"></label><label
                                            htmlFor="filter448">JAC</label></div>
                               
                                  
                                  
                                    <div className="radioIotionContainer "  onClick={()=>getbrand('ستيروين')}  datadisabled="2"><input type="radio" className="" id="filter454"
                                        name="filter4" data-make="30" /><label htmlFor="filter454" className="labelReplacment"></label><label
                                            htmlFor="filter454">ستيروين</label></div>
                                    
                                  
                                    <div className="radioIotionContainer " onClick={()=>getbrand('سكودا')} datadisabled="2"><input type="radio" className="" id="filter457"
                                        name="filter4" data-make="31" /><label htmlFor="filter457" className="labelReplacment"></label><label
                                            htmlFor="filter457">سكودا</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getbrand('لامبورغيني')} datadisabled="2"><input type="radio" className="" id="filter458"
                                        name="filter4" data-make="46" /><label htmlFor="filter458" className="labelReplacment"></label><label
                                            htmlFor="filter458">لامبورغيني</label></div>

                  
                                   
                                </div>
                            </div>
                        </div>
                        
                        <div styles="display:" className="filterAcc  "><strong><span>سنة الصنع</span><label></label></strong>
                            <div className="filterAccData">
                                <div></div>
                                <div className="yearsContainer" style={{justifyContent:'center'}}>
                                    <div>
                                        <div className="selectWrapper"><select name="year_from" id="year_from" onChange={getyear}>
                                            <option value="">سنه</option>
                                            <option value="2022" data-index="0">2022</option>
                                            <option value="2021" data-index="1">2021</option>
                                            <option value="2020" data-index="2">2020</option>
                                            <option value="2019" data-index="3">2019</option>
                                            <option value="2018" data-index="4">2018</option>
                                            <option value="2017" data-index="5">2017</option>
                                            <option value="2016" data-index="6">2016</option>
                                            <option value="2015" data-index="7">2015</option>
                                            <option value="2014" data-index="8">2014</option>
                                            <option value="2013" data-index="9">2013</option>
                                            <option value="2012" data-index="10">2012</option>
                                            <option value="2011" data-index="11">2011</option>
                                            <option value="2010" data-index="12">2010</option>
                                            <option value="2009" data-index="13">2009</option>
                                            <option value="2008" data-index="14">2008</option>
                                            <option value="2007" data-index="15">2007</option>
                                            <option value="2006" data-index="16">2006</option>
                                            <option value="2005" data-index="17">2005</option>
                                            <option value="2004" data-index="18">2004</option>
                                            <option value="2003" data-index="19">2003</option>
                                            <option value="2002" data-index="20">2002</option>
                                            <option value="2001" data-index="21">2001</option>
                                            <option value="2000" data-index="22">2000</option>
                                            <option value="1999" data-index="23">1999</option>
                                            <option value="1998" data-index="24">1998</option>
                                            <option value="1997" data-index="25">1997</option>
                                            <option value="1996" data-index="26">1996</option>
                                            <option value="1995" data-index="27">1995</option>
                                            <option value="1994" data-index="28">1994</option>
                                            <option value="1993" data-index="29">1993</option>
                                            <option value="1992" data-index="30">1992</option>
                                            <option value="1991" data-index="31">1991</option>
                                            <option value="1990" data-index="32">1990</option>
                                        </select></div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div styles="display:" className="filterAcc  "><strong><span>السعر</span><label></label></strong>
                            <div className="filterAccData">
                                <div></div>
                                <div className="rangeSliderContainer">
                                    <div className="inputContainer">
                                      
                                    <input type="text"
                                     onChange={(e)=>setPrice(e.target.value)} value={price} /><span>دينار </span></div>
                                
                                </div>
                            </div>
                        </div>
                        <div styles="display:" className="filterAcc  "><strong><span>الممشى</span><label></label></strong>
                            <div className="filterAccData">
                                <div></div>
                                <div className="rangeSliderContainer">
                                    <div className="inputContainer"><input onChange={(e)=>setKm(e.target.value)} value={km} type="text" /><span>كم</span></div>
                               
                                </div>
                            </div>
                        </div>
                        <div styles="display:" className="filterAcc  "><strong><span>المدينة</span><label></label></strong>
                            <div className="filterAccData">
                                <div>
                                    <div className="radioIotionContainer " onClick={()=>getlocation('')}><input type="radio" className="" id="filter90"
                                        name="filter9" /><label htmlFor="filter90" className="labelReplacment"></label><label
                                            htmlFor="filter90">الكل</label></div>
                                    <div className="radioIotionContainer  " onClick={()=>getlocation('عمان')}><input type="radio" className="" id="filter91"
                                        name="filter9" /><label htmlFor="filter91" className="labelReplacment"></label><label
                                            htmlFor="filter91">عمان</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getlocation('البلقاء')}><input type="radio" className="" id="filter92"
                                        name="filter9" /><label htmlFor="filter92" className="labelReplacment"></label><label
                                            htmlFor="filter92">البلقاء</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getlocation('الزرقاء')}><input type="radio" className="" id="filter93"
                                        name="filter9" /><label htmlFor="filter93" className="labelReplacment"></label><label
                                            htmlFor="filter93">الزرقاء</label></div>
                                    <div className="radioIotionContainer " onClick={()=>getlocation('الطفيله')}><input type="radio" className="" id="filter94"
                                        name="filter9" /><label htmlFor="filter94" className="labelReplacment"></label><label
                                            htmlFor="filter94">الطفيله</label></div>
                                    <div className="radioIotionContainer "  onClick={()=>getlocation('معان')}><input type="radio" className="" id="filter95"
                                        name="filter9" /><label htmlFor="filter95" className="labelReplacment"></label><label
                                            htmlFor="filter95">معان</label></div>
                                    
                                   
                                </div>
                            </div>
                        </div>
                
                       
                        {/* <div styles="display:" className="filterAcc  "><strong><span>سعة المحرك</span><label></label></strong>
                            <div className="filterAccData">
                                <div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter120"
                                        name="filter12" /><label htmlFor="filter120" className="labelReplacment"></label><label
                                            htmlFor="filter120">الكل</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter121"
                                        name="filter12" /><label htmlFor="filter121" className="labelReplacment"></label><label
                                            htmlFor="filter121">1.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter122"
                                        name="filter12" /><label htmlFor="filter122" className="labelReplacment"></label><label
                                            htmlFor="filter122">1.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter123"
                                        name="filter12" /><label htmlFor="filter123" className="labelReplacment"></label><label
                                            htmlFor="filter123">1.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter124"
                                        name="filter12" /><label htmlFor="filter124" className="labelReplacment"></label><label
                                            htmlFor="filter124">1.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter125"
                                        name="filter12" /><label htmlFor="filter125" className="labelReplacment"></label><label
                                            htmlFor="filter125">1.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter126"
                                        name="filter12" /><label htmlFor="filter126" className="labelReplacment"></label><label
                                            htmlFor="filter126">1.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter127"
                                        name="filter12" /><label htmlFor="filter127" className="labelReplacment"></label><label
                                            htmlFor="filter127">1.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter128"
                                        name="filter12" /><label htmlFor="filter128" className="labelReplacment"></label><label
                                            htmlFor="filter128">1.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter129"
                                        name="filter12" /><label htmlFor="filter129" className="labelReplacment"></label><label
                                            htmlFor="filter129">1.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1210"
                                        name="filter12" /><label htmlFor="filter1210" className="labelReplacment"></label><label
                                            htmlFor="filter1210">1.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1211"
                                        name="filter12" /><label htmlFor="filter1211" className="labelReplacment"></label><label
                                            htmlFor="filter1211">2.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1212"
                                        name="filter12" /><label htmlFor="filter1212" className="labelReplacment"></label><label
                                            htmlFor="filter1212">2.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1213"
                                        name="filter12" /><label htmlFor="filter1213" className="labelReplacment"></label><label
                                            htmlFor="filter1213">2.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1214"
                                        name="filter12" /><label htmlFor="filter1214" className="labelReplacment"></label><label
                                            htmlFor="filter1214">2.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1215"
                                        name="filter12" /><label htmlFor="filter1215" className="labelReplacment"></label><label
                                            htmlFor="filter1215">2.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1216"
                                        name="filter12" /><label htmlFor="filter1216" className="labelReplacment"></label><label
                                            htmlFor="filter1216">2.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1217"
                                        name="filter12" /><label htmlFor="filter1217" className="labelReplacment"></label><label
                                            htmlFor="filter1217">2.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1218"
                                        name="filter12" /><label htmlFor="filter1218" className="labelReplacment"></label><label
                                            htmlFor="filter1218">2.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1219"
                                        name="filter12" /><label htmlFor="filter1219" className="labelReplacment"></label><label
                                            htmlFor="filter1219">2.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1220"
                                        name="filter12" /><label htmlFor="filter1220" className="labelReplacment"></label><label
                                            htmlFor="filter1220">2.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1221"
                                        name="filter12" /><label htmlFor="filter1221" className="labelReplacment"></label><label
                                            htmlFor="filter1221">3.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1222"
                                        name="filter12" /><label htmlFor="filter1222" className="labelReplacment"></label><label
                                            htmlFor="filter1222">3.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1223"
                                        name="filter12" /><label htmlFor="filter1223" className="labelReplacment"></label><label
                                            htmlFor="filter1223">3.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1224"
                                        name="filter12" /><label htmlFor="filter1224" className="labelReplacment"></label><label
                                            htmlFor="filter1224">3.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1225"
                                        name="filter12" /><label htmlFor="filter1225" className="labelReplacment"></label><label
                                            htmlFor="filter1225">3.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1226"
                                        name="filter12" /><label htmlFor="filter1226" className="labelReplacment"></label><label
                                            htmlFor="filter1226">3.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1227"
                                        name="filter12" /><label htmlFor="filter1227" className="labelReplacment"></label><label
                                            htmlFor="filter1227">3.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1228"
                                        name="filter12" /><label htmlFor="filter1228" className="labelReplacment"></label><label
                                            htmlFor="filter1228">3.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1229"
                                        name="filter12" /><label htmlFor="filter1229" className="labelReplacment"></label><label
                                            htmlFor="filter1229">3.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1230"
                                        name="filter12" /><label htmlFor="filter1230" className="labelReplacment"></label><label
                                            htmlFor="filter1230">3.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1231"
                                        name="filter12" /><label htmlFor="filter1231" className="labelReplacment"></label><label
                                            htmlFor="filter1231">4.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1232"
                                        name="filter12" /><label htmlFor="filter1232" className="labelReplacment"></label><label
                                            htmlFor="filter1232">4.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1233"
                                        name="filter12" /><label htmlFor="filter1233" className="labelReplacment"></label><label
                                            htmlFor="filter1233">4.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1234"
                                        name="filter12" /><label htmlFor="filter1234" className="labelReplacment"></label><label
                                            htmlFor="filter1234">4.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1235"
                                        name="filter12" /><label htmlFor="filter1235" className="labelReplacment"></label><label
                                            htmlFor="filter1235">4.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1236"
                                        name="filter12" /><label htmlFor="filter1236" className="labelReplacment"></label><label
                                            htmlFor="filter1236">4.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1237"
                                        name="filter12" /><label htmlFor="filter1237" className="labelReplacment"></label><label
                                            htmlFor="filter1237">4.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1238"
                                        name="filter12" /><label htmlFor="filter1238" className="labelReplacment"></label><label
                                            htmlFor="filter1238">4.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1239"
                                        name="filter12" /><label htmlFor="filter1239" className="labelReplacment"></label><label
                                            htmlFor="filter1239">4.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1240"
                                        name="filter12" /><label htmlFor="filter1240" className="labelReplacment"></label><label
                                            htmlFor="filter1240">4.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1241"
                                        name="filter12" /><label htmlFor="filter1241" className="labelReplacment"></label><label
                                            htmlFor="filter1241">5.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1242"
                                        name="filter12" /><label htmlFor="filter1242" className="labelReplacment"></label><label
                                            htmlFor="filter1242">5.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1243"
                                        name="filter12" /><label htmlFor="filter1243" className="labelReplacment"></label><label
                                            htmlFor="filter1243">5.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1244"
                                        name="filter12" /><label htmlFor="filter1244" className="labelReplacment"></label><label
                                            htmlFor="filter1244">5.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1245"
                                        name="filter12" /><label htmlFor="filter1245" className="labelReplacment"></label><label
                                            htmlFor="filter1245">5.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1246"
                                        name="filter12" /><label htmlFor="filter1246" className="labelReplacment"></label><label
                                            htmlFor="filter1246">5.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1247"
                                        name="filter12" /><label htmlFor="filter1247" className="labelReplacment"></label><label
                                            htmlFor="filter1247">5.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1248"
                                        name="filter12" /><label htmlFor="filter1248" className="labelReplacment"></label><label
                                            htmlFor="filter1248">5.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1249"
                                        name="filter12" /><label htmlFor="filter1249" className="labelReplacment"></label><label
                                            htmlFor="filter1249">5.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1250"
                                        name="filter12" /><label htmlFor="filter1250" className="labelReplacment"></label><label
                                            htmlFor="filter1250">5.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1251"
                                        name="filter12" /><label htmlFor="filter1251" className="labelReplacment"></label><label
                                            htmlFor="filter1251">6.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1252"
                                        name="filter12" /><label htmlFor="filter1252" className="labelReplacment"></label><label
                                            htmlFor="filter1252">6.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1253"
                                        name="filter12" /><label htmlFor="filter1253" className="labelReplacment"></label><label
                                            htmlFor="filter1253">6.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1254"
                                        name="filter12" /><label htmlFor="filter1254" className="labelReplacment"></label><label
                                            htmlFor="filter1254">6.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1255"
                                        name="filter12" /><label htmlFor="filter1255" className="labelReplacment"></label><label
                                            htmlFor="filter1255">6.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1256"
                                        name="filter12" /><label htmlFor="filter1256" className="labelReplacment"></label><label
                                            htmlFor="filter1256">6.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1257"
                                        name="filter12" /><label htmlFor="filter1257" className="labelReplacment"></label><label
                                            htmlFor="filter1257">6.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1258"
                                        name="filter12" /><label htmlFor="filter1258" className="labelReplacment"></label><label
                                            htmlFor="filter1258">6.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1259"
                                        name="filter12" /><label htmlFor="filter1259" className="labelReplacment"></label><label
                                            htmlFor="filter1259">6.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1260"
                                        name="filter12" /><label htmlFor="filter1260" className="labelReplacment"></label><label
                                            htmlFor="filter1260">6.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1261"
                                        name="filter12" /><label htmlFor="filter1261" className="labelReplacment"></label><label
                                            htmlFor="filter1261">7.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1262"
                                        name="filter12" /><label htmlFor="filter1262" className="labelReplacment"></label><label
                                            htmlFor="filter1262">7.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1263"
                                        name="filter12" /><label htmlFor="filter1263" className="labelReplacment"></label><label
                                            htmlFor="filter1263">7.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1264"
                                        name="filter12" /><label htmlFor="filter1264" className="labelReplacment"></label><label
                                            htmlFor="filter1264">7.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1265"
                                        name="filter12" /><label htmlFor="filter1265" className="labelReplacment"></label><label
                                            htmlFor="filter1265">7.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1266"
                                        name="filter12" /><label htmlFor="filter1266" className="labelReplacment"></label><label
                                            htmlFor="filter1266">7.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1267"
                                        name="filter12" /><label htmlFor="filter1267" className="labelReplacment"></label><label
                                            htmlFor="filter1267">7.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1268"
                                        name="filter12" /><label htmlFor="filter1268" className="labelReplacment"></label><label
                                            htmlFor="filter1268">7.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1269"
                                        name="filter12" /><label htmlFor="filter1269" className="labelReplacment"></label><label
                                            htmlFor="filter1269">7.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1270"
                                        name="filter12" /><label htmlFor="filter1270" className="labelReplacment"></label><label
                                            htmlFor="filter1270">7.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1271"
                                        name="filter12" /><label htmlFor="filter1271" className="labelReplacment"></label><label
                                            htmlFor="filter1271">8.0</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1272"
                                        name="filter12" /><label htmlFor="filter1272" className="labelReplacment"></label><label
                                            htmlFor="filter1272">8.1</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1273"
                                        name="filter12" /><label htmlFor="filter1273" className="labelReplacment"></label><label
                                            htmlFor="filter1273">8.2</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1274"
                                        name="filter12" /><label htmlFor="filter1274" className="labelReplacment"></label><label
                                            htmlFor="filter1274">8.3</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1275"
                                        name="filter12" /><label htmlFor="filter1275" className="labelReplacment"></label><label
                                            htmlFor="filter1275">8.4</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1276"
                                        name="filter12" /><label htmlFor="filter1276" className="labelReplacment"></label><label
                                            htmlFor="filter1276">8.5</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1277"
                                        name="filter12" /><label htmlFor="filter1277" className="labelReplacment"></label><label
                                            htmlFor="filter1277">8.6</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1278"
                                        name="filter12" /><label htmlFor="filter1278" className="labelReplacment"></label><label
                                            htmlFor="filter1278">8.7</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1279"
                                        name="filter12" /><label htmlFor="filter1279" className="labelReplacment"></label><label
                                            htmlFor="filter1279">8.8</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1280"
                                        name="filter12" /><label htmlFor="filter1280" className="labelReplacment"></label><label
                                            htmlFor="filter1280">8.9</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter1281"
                                        name="filter12" /><label htmlFor="filter1281" className="labelReplacment"></label><label
                                            htmlFor="filter1281">9.0</label></div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div styles="display:" className="filterAcc  "><strong><span>نوع الوقود</span><label></label></strong>
                            <div className="filterAccData">
                                <div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter130"
                                        name="filter13" /><label htmlFor="filter130" className="labelReplacment"></label><label
                                            htmlFor="filter130">الكل</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter131"
                                        name="filter13" /><label htmlFor="filter131" className="labelReplacment"></label><label
                                            htmlFor="filter131">بنزين</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter132"
                                        name="filter13" /><label htmlFor="filter132" className="labelReplacment"></label><label
                                            htmlFor="filter132">ديزل</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter133"
                                        name="filter13" /><label htmlFor="filter133" className="labelReplacment"></label><label
                                            htmlFor="filter133">هايبرد/هجين</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter134"
                                        name="filter13" /><label htmlFor="filter134" className="labelReplacment"></label><label
                                            htmlFor="filter134">كهرباء</label></div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div styles="display:" className="filterAcc  "><strong><span>الجير</span><label></label></strong>
                            <div className="filterAccData">
                                <div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter140"
                                        name="filter14" /><label htmlFor="filter140" className="labelReplacment"></label><label
                                            htmlFor="filter140">الكل</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter141"
                                        name="filter14" /><label htmlFor="filter141" className="labelReplacment"></label><label
                                            htmlFor="filter141">عادي</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter142"
                                        name="filter14" /><label htmlFor="filter142" className="labelReplacment"></label><label
                                            htmlFor="filter142">اوتوماتيك</label></div>
                                </div>
                            </div>
                        </div> */}
{/*                        
                        <div styles="display:none" className="filterAcc  "><strong><span>عدد السليندرات</span><label></label></strong>
                            <div className="filterAccData">
                                <div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter160"
                                        name="filter16" /><label htmlFor="filter160" className="labelReplacment"></label><label
                                            htmlFor="filter160">الكل</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter161"
                                        name="filter16" /><label htmlFor="filter161" className="labelReplacment"></label><label
                                            htmlFor="filter161">3 سيلندر</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter162"
                                        name="filter16" /><label htmlFor="filter162" className="labelReplacment"></label><label
                                            htmlFor="filter162">4 سيلندر</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter163"
                                        name="filter16" /><label htmlFor="filter163" className="labelReplacment"></label><label
                                            htmlFor="filter163">6 سيلندر</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter164"
                                        name="filter16" /><label htmlFor="filter164" className="labelReplacment"></label><label
                                            htmlFor="filter164">8 سيلندر</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter165"
                                        name="filter16" /><label htmlFor="filter165" className="labelReplacment"></label><label
                                            htmlFor="filter165">10 سيلندر</label></div>
                                    <div className="radioIotionContainer "><input type="radio" className="" id="filter166"
                                        name="filter16" /><label htmlFor="filter166" className="labelReplacment"></label><label
                                            htmlFor="filter166">12 سيلندر</label></div>
                                </div>
                            </div>
                        </div> */}
                        <section className="filterFooter"><button style={{display: 'block'}} className="showResults greenBtn">
                        <span>ابحث</span>
                    </button></section>
                    </section>
                       </form>
                    <section className="filterFooter" style={{position: 'absolute',
    bottom: '0',
    width: '100%'
}}><button className="showResults blueBtn"><strong>أظهر النتائج</strong>
                        <div><span>{post.length}</span><span>سيارة</span><img
                            src="https://syarahcdn.syarah.com/syarah/bundles/arrShow.svg" alt="" /></div>
                    </button></section>
                </aside>
                <div className="searchResultContainer">
                   
                    <div className="allCarsResult rowLoad">
                        {post.length!=0?
                            post.map((items,i)=>
                            {
return (
    <Link key={i}  href={{ pathname: '/detail_car', query: { post: items.id_info } }}>
    
    {/* href={'/detail_car?'+items.id_info} */}
<a className="singleCarThumbS " styles="padding-bottom:"
                            href="/car/10490952?sol=0">
                            <div>
                                <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                                    className="TumbLoadImage-module__loading___3EJWH "
                                    src={items.primary_image} alt="" />
                            </div>
                            <div><strong><span className="name">{items.title}</span><span className="price"><span
                                className="currentPrice" styles="color:">{items.price}
                                <span>دينار اردني</span>
                            </span></span></strong>
                                <div>
                                    <span className="location">
                                        {items.location}</span>
                                    {/* <span className="distance">
                                         {items.status=='false'?'مستعملة':'جديده'} </span>
                                          */}
                                         {/* <span className="time"> قبل 8 */}
                                    {/* ساعة */}

                                {/* </span> */}
                                </div>
                            </div>
                        </a></Link>)
                            })
                        :<h1 style={{position: 'absolute',
                            backgroundColor: 'transparent',
                            fontSize: 'revert',
                            right: '49%',
                            top:'48%'}}>جاري تحميل البيانات  </h1>}

                        
                        {/*
              <a className="singleCarThumbS " styles="padding-bottom:" href="/car/10488728?sol=0"><span
                  className="specialTag">مميز</span>
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10488728/0x300/orignal-1628095571-397.jpg" alt="" />
                </div>
                <div><strong><span className="name">فورد فلكس ليمتد مخزن 2015 وكالة على الضمان </span><span
                      className="price"><span className="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span className="location">الرياض</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 9 ساعة
                      
                    </span></div>
                </div>
              </a>
              <a className="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/77614?sol=1"><span
                  className="bestPriceTage">مفحوصة</span>
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/77614/0x300/orignal-1625323939-648.jpg" alt="" />
                </div><span className="blueTag"><img className="m-hide"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickgreenCir.svg" alt="" /><img className="m-show"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickBlueCir.svg" alt="" /><span>ضمان استرداد سعر
                    السيارة خلال 5 أيام</span></span>
                <div><strong><span className="name">هونداي اكسنت GL 2020 ستاندر </span><span className="price"><span
                        className="currentPrice" styles="color:#00B658">39,900
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="m-show"></span><span className="location"> مستعملة </span><span className="distance">88,831
                      كم</span><span className="m-show"></span></div>
                </div>
              </a><a className="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/77608?sol=1"><span
                  className="bestPriceTage">مفحوصة</span>
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/77608/0x300/orignal-1625323393-102.jpg" alt="" />
                </div><span className="blueTag"><img className="m-hide"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickgreenCir.svg" alt="" /><img className="m-show"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickBlueCir.svg" alt="" /><span>ضمان استرداد سعر
                    السيارة خلال 5 أيام</span></span>
                <div><strong><span className="name">هونداي اكسنت GL 2020 ستاندر </span><span className="price"><span
                        className="currentPrice" styles="color:#00B658">38,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="m-show"></span><span className="location"> مستعملة </span><span className="distance">85,755
                      كم</span><span className="m-show"></span></div>
                </div>
              </a><a className="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/76788?sol=1"><span
                  className="bestPriceTage">مفحوصة</span>
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/76788/0x300/orignal-1624889087-695.jpg" alt="" />
                  <div className="reservedCarTag m-hide">هذه السيارة محجوزة</div>
                </div>
                <div styles="z-index:9" className="reservedCarTag m-show">هذه السيارة محجوزة</div>
                <div><strong><span className="name">شانجان السفن Basic 2020 ستاندر </span><span className="price"><span
                        className="currentPrice" styles="color:#00B658">27,550
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="m-show"></span><span className="location"> مستعملة </span><span className="distance">50,016
                      كم</span><span className="m-show"></span></div>
                </div>
              </a><a className="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/82800?sol=1"><span
                  className="bestPriceTage">مفحوصة</span>
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/82800/0x300/orignal-1627918675-820.jpg" alt="" />
                </div><span className="blueTag"><img className="m-hide"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickgreenCir.svg" alt="" /><img className="m-show"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickBlueCir.svg" alt="" /><span>ضمان استرداد سعر
                    السيارة خلال 5 أيام</span></span>
                <div><strong><span className="name">تويوتا فورتشنر GX1 2019 ستاندر دبل</span><span className="price"><span
                        className="currentPrice" styles="color:#00B658">87,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="m-show"></span><span className="location"> مستعملة </span><span className="distance">207,071
                      كم</span><span className="m-show"></span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10475078?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10475078/0x300/orignal-1625983091-558.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا لاندكروزر 2006 للبيع</span><span className="price"><span
                        className="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span className="location">تبوك</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      1 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492412?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492412/0x300/orignal-1628570985-279.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا لاندكروزر 2011 للبيع</span><span className="price"><span
                        className="currentPrice" styles="color:">80,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">تبوك</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      8 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492410?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492410/0x300/orignal-1628570749-578.jpg" alt="" />
                </div>
                <div><strong><span className="name">سوناتا 2017. فل كامل بدي وكالة</span><span className="price"><span
                        className="currentPrice" styles="color:">42,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">الخبر</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      14 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492408?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492408/0x300/orignal-1628570287-770.jpg" alt="" />
                </div>
                <div><strong><span className="name">هونداي النترا 2009 للبيع</span><span className="price"><span
                        className="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span className="location">جدة</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      34 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10475044?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10475044/0x300/orignal-1625968363-847.jpg" alt="" />
                </div>
                <div><strong><span className="name">كيا اوبتيما 2015</span><span className="price"><span className="currentPrice"
                        styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span className="location">جازان</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      40 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10445728?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10445728/0x300/orignal-1622411334-267.jpg" alt="" />
                </div>
                <div><strong><span className="name">مرسيدس c300 kit amg 2016 وراد أمريكا</span><span className="price"><span
                        className="currentPrice" styles="color:">115,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">جدة</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      43 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10480738?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10480738/0x300/orignal-1627039511-188.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا كامري 2010 للبيع</span><span className="price"><span
                        className="currentPrice" styles="color:">30,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">الجبيل</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 59 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10487124?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10487124/0x300/orignal-1627916101-696.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا لاندكروزر 2005 للبيع</span><span className="price"><span
                        className="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span className="location">الاحساء</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 59 دقيقة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492402?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492402/0x300/orignal-1628566015-514.jpg" alt="" />
                </div>
                <div><strong><span className="name">شانجان ايدو 2021 للبيع الشاص والمكينه والقير سليمه100٪؜</span><span
                      className="price"><span className="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span className="location">الرياض</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10489856?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10489856/0x300/orignal-1628281770-116.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا كورولا ٢٠٢١</span><span className="price"><span className="currentPrice"
                        styles="color:">65,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">جازان</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      1 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492400?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492400/0x300/orignal-1628566618-803.jpg" alt="" />
                </div>
                <div><strong><span className="name">مرسيدس GLC300 4matic 2020 فل خليجي</span><span className="price"><span
                        className="currentPrice" styles="color:">270,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">الدمام</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492396?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492396/0x300/orignal-1628565989-973.jpg" alt="" />
                </div>
                <div><strong><span className="name">مرسيدس GLC 250 d 2018 فل</span><span className="price"><span
                        className="currentPrice" styles="color:">180,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">الدمام</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10475610?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10475610/0x300/orignal-1626025210-455.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا كامري GLX 2012</span><span className="price"><span
                        className="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span className="location">المدينة</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10487848?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10487848/0x300/orignal-1627998903-77.jpg" alt="" />
                </div>
                <div><strong><span className="name">شفروليه تاهو LS 2020 ستاندر سعودي</span><span className="price"><span
                        className="currentPrice" styles="color:">160,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">جدة</span><span className="distance"> مستعملة </span><span className="time"> قبل 1
                      ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10450240?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10450240/0x300/orignal-1622991950-536.jpg" alt="" />
                </div>
                <div><strong><span className="name">فورد تورس 2017 للبيع</span><span className="price"><span
                        className="currentPrice" styles="color:">78,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">عسير</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      1 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492394?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492394/0x300/orignal-1628564221-182.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا برادو 2016 للبيع</span><span className="price"><span
                        className="currentPrice" styles="color:">100,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">الرياض</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 2 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492392?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492392/0x300/orignal-1628564007-280.jpg" alt="" />
                </div>
                <div><strong><span className="name">هيونداي سانتافية</span><span className="price"><span className="currentPrice"
                        styles="color:">57,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">الباحة</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 2 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492390?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492390/0x300/orignal-1628564075-583.jpg" alt="" />
                </div>
                <div><strong><span className="name">تويوتا كامري 2003</span><span className="price"><span className="currentPrice"
                        styles="color:">9,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">أبها</span><span className="distance"> مستعملة </span><span className="time"> قبل
                      2 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10492382?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492382/0x300/orignal-1628562196-678.jpg" alt="" />
                </div>
                <div><strong><span className="name">مازدا 3 2019 للبيع</span><span className="price"><span className="currentPrice"
                        styles="color:">55,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">المدينة</span><span className="distance"> مستعملة </span><span className="time">
                      قبل 2 ساعة
                      
                    </span></div>
                </div>
              </a><a className="singleCarThumbS " styles="padding-bottom:" href="/car/10482794?sol=0">
                <div>
                  <div className="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    className="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10482794/0x300/orignal-1628561501-646.jpg" alt="" />
                </div>
                <div><strong><span className="name">شفروليه سبارك 2012</span><span className="price"><span className="currentPrice"
                        styles="color:">9,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span className="location">جدة</span><span className="distance"> مستعملة </span><span className="time"> قبل 2
                      ساعة
                      
                    </span></div>
                </div>
              </a> */}





                    </div>
                </div>
                <div className="fixedFilltersContainer m-show showSpF">
                    <div>
                        <div className="sortFilterSp m-show"><span>ترتيب حسب:</span><strong>السيارات الأحدث</strong></div><button
                            className="filterBtnSP showFltr">فلترة النتائج</button>
                    </div>
                </div>
            </section>
        </main>
    )
}