export default function MainUsed(props){
    return(
        <main class=" ">
        <section class="searchPageContainer container extraWideContainer ">
          <aside class="searchFilter ">
            <section class="filterHeader"><strong><span class="m-hide">فلترة النتائج</span><span class="m-show"><img
                    src="https://syarahcdn.syarah.com/syarah/bundles/backArrfltr.svg" alt="" /><span>ابحث عن سيارتك
                    الجديدة</span></span><span class="resetData">إعادة تعيين</span></strong></section>
            <section class="filterBody" datadatafrom="IsOnlinefalse">
              <div class="toggleSType m-hide">
                <ul>
                  <li><label for="is_online_1">سيارة اونلاين</label></li>
                  <li><label for="is_online_0" class="setBlue">سيارات معارض و افراد</label></li>
                </ul>
              </div>
              <div styles="display:" class="filterAcc expandedFilterAcc "><strong><span>حالة السيارة</span><label><span
                      class="popUpSelection"> مستعملة </span></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter00"
                        name="filter0" /><label for="filter00" class="labelReplacment"></label><label
                        for="filter00">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter01"
                        name="filter0" /><label for="filter01" class="labelReplacment"></label><label
                        for="filter01">جديدة</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter02"
                        name="filter0" /><label for="filter02" class="labelReplacment"></label><label for="filter02">
                        مستعملة </label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>طريقة الدفع</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter20"
                        name="filter2" /><label for="filter20" class="labelReplacment"></label><label
                        for="filter20">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter21"
                        name="filter2" /><label for="filter21" class="labelReplacment"></label><label
                        for="filter21">سيارات تقسيط</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter22"
                        name="filter2" /><label for="filter22" class="labelReplacment"></label><label
                        for="filter22">سيارات نقدا</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter23"
                        name="filter2" /><label for="filter23" class="labelReplacment"></label><label
                        for="filter23">سيارات للتنازل</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  mobileDesignShape">
                <strong><span>الشكل</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter30" name="filter3"
                        data-shape="2" /><label for="filter30" class="labelReplacment"></label><label
                        for="filter30">سيدان</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter31" name="filter3"
                        data-shape="3" /><label for="filter31" class="labelReplacment"></label><label for="filter31">بيك
                        أب</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter32" name="filter3"
                        data-shape="4" /><label for="filter32" class="labelReplacment"></label><label for="filter32">أس
                        يو في</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter33" name="filter3"
                        data-shape="5" /><label for="filter33" class="labelReplacment"></label><label
                        for="filter33">كروس اوفر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter34" name="filter3"
                        data-shape="6" /><label for="filter34" class="labelReplacment"></label><label
                        for="filter34">رياضية</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter35" name="filter3"
                        data-shape="7" /><label for="filter35" class="labelReplacment"></label><label
                        for="filter35">هاتشباك</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter36" name="filter3"
                        data-shape="8" /><label for="filter36" class="labelReplacment"></label><label
                        for="filter36">فان</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>الماركة</span><label></label></strong>
                <div class="filterAccData">
                  <div class="allMakeContainer"><input type="text" class="searchFilterAcc" placeholder="ابحث عن الماركة"
                      value="" />
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter40"
                        name="filter4" /><label for="filter40" class="labelReplacment"></label><label
                        for="filter40">الكل</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter41"
                        name="filter4" data-make="4" /><label for="filter41" class="labelReplacment"></label><label
                        for="filter41">تويوتا</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter42"
                        name="filter4" data-make="60" /><label for="filter42" class="labelReplacment"></label><label
                        for="filter42">هونداي</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter43"
                        name="filter4" data-make="53" /><label for="filter43" class="labelReplacment"></label><label
                        for="filter43">مرسيدس</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter44"
                        name="filter4" data-make="37" /><label for="filter44" class="labelReplacment"></label><label
                        for="filter44">فورد</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter45"
                        name="filter4" data-make="35" /><label for="filter45" class="labelReplacment"></label><label
                        for="filter45">شفروليه</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter46"
                        name="filter4" data-make="58" /><label for="filter46" class="labelReplacment"></label><label
                        for="filter46">نيسان</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter47"
                        name="filter4" data-make="38" /><label for="filter47" class="labelReplacment"></label><label
                        for="filter47">كيا</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter48"
                        name="filter4" data-make="48" /><label for="filter48" class="labelReplacment"></label><label
                        for="filter48">لكزس</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter49"
                        name="filter4" data-make="19" /><label for="filter49" class="labelReplacment"></label><label
                        for="filter49">GMC</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter410"
                        name="filter4" data-make="5" /><label for="filter410" class="labelReplacment"></label><label
                        for="filter410">هوندا</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter411"
                        name="filter4" data-make="51" /><label for="filter411" class="labelReplacment"></label><label
                        for="filter411">مازدا</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter412"
                        name="filter4" data-make="55" /><label for="filter412" class="labelReplacment"></label><label
                        for="filter412">ميتسوبيشي</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter413"
                        name="filter4" data-make="15" /><label for="filter413" class="labelReplacment"></label><label
                        for="filter413">BMW</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter414"
                        name="filter4" data-make="23" /><label for="filter414" class="labelReplacment"></label><label
                        for="filter414">دودج</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter415"
                        name="filter4" data-make="9" /><label for="filter415" class="labelReplacment"></label><label
                        for="filter415">ايسوزو</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter416"
                        name="filter4" data-make="69" /><label for="filter416" class="labelReplacment"></label><label
                        for="filter416">شانجان</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter417"
                        name="filter4" data-make="47" /><label for="filter417" class="labelReplacment"></label><label
                        for="filter417">لاند روفر</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter418"
                        name="filter4" data-make="20" /><label for="filter418" class="labelReplacment"></label><label
                        for="filter418">جيب</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter419"
                        name="filter4" data-make="44" /><label for="filter419" class="labelReplacment"></label><label
                        for="filter419">كرايسلر</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter420"
                        name="filter4" data-make="78" /><label for="filter420" class="labelReplacment"></label><label
                        for="filter420">MG</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter421"
                        name="filter4" data-make="8" /><label for="filter421" class="labelReplacment"></label><label
                        for="filter421">اودي</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter422"
                        name="filter4" data-make="26" /><label for="filter422" class="labelReplacment"></label><label
                        for="filter422">رينو</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter423"
                        name="filter4" data-make="43" /><label for="filter423" class="labelReplacment"></label><label
                        for="filter423">كاديلاك</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter424"
                        name="filter4" data-make="67" /><label for="filter424" class="labelReplacment"></label><label
                        for="filter424">جيلي</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter425"
                        name="filter4" data-make="85" /><label for="filter425" class="labelReplacment"></label><label
                        for="filter425">هافال</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter426"
                        name="filter4" data-make="33" /><label for="filter426" class="labelReplacment"></label><label
                        for="filter426">سوزوكي</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter427"
                        name="filter4" data-make="13" /><label for="filter427" class="labelReplacment"></label><label
                        for="filter427">بورش</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter428"
                        name="filter4" data-make="21" /><label for="filter428" class="labelReplacment"></label><label
                        for="filter428">دايهاتسو</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter429"
                        name="filter4" data-make="40" /><label for="filter429" class="labelReplacment"></label><label
                        for="filter429">فولكس فاجن</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter430"
                        name="filter4" data-make="50" /><label for="filter430" class="labelReplacment"></label><label
                        for="filter430">لينكولن</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter431"
                        name="filter4" data-make="10" /><label for="filter431" class="labelReplacment"></label><label
                        for="filter431">انفنتي</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter432"
                        name="filter4" data-make="56" /><label for="filter432" class="labelReplacment"></label><label
                        for="filter432">ميركوري</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter433"
                        name="filter4" data-make="18" /><label for="filter433" class="labelReplacment"></label><label
                        for="filter433">جريت وول</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter434"
                        name="filter4" data-make="16" /><label for="filter434" class="labelReplacment"></label><label
                        for="filter434">بيجو</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter435"
                        name="filter4" data-make="12" /><label for="filter435" class="labelReplacment"></label><label
                        for="filter435">بنتلي</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter436"
                        name="filter4" data-make="17" /><label for="filter436" class="labelReplacment"></label><label
                        for="filter436">جاغوار</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter437"
                        name="filter4" data-make="36" /><label for="filter437" class="labelReplacment"></label><label
                        for="filter437">شيري</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter438"
                        name="filter4" data-make="39" /><label for="filter438" class="labelReplacment"></label><label
                        for="filter438">فولفو</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter439"
                        name="filter4" data-make="90" /><label for="filter439" class="labelReplacment"></label><label
                        for="filter439">GAC</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter440"
                        name="filter4" data-make="59" /><label for="filter440" class="labelReplacment"></label><label
                        for="filter440">همر</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter441"
                        name="filter4" data-make="57" /><label for="filter441" class="labelReplacment"></label><label
                        for="filter441">ميني</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter442"
                        name="filter4" data-make="66" /><label for="filter442" class="labelReplacment"></label><label
                        for="filter442">فاو</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter443"
                        name="filter4" data-make="41" /><label for="filter443" class="labelReplacment"></label><label
                        for="filter443">فيات</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter444"
                        name="filter4" data-make="25" /><label for="filter444" class="labelReplacment"></label><label
                        for="filter444">رولز رویس</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter445"
                        name="filter4" data-make="52" /><label for="filter445" class="labelReplacment"></label><label
                        for="filter445">مازيراتي</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter446"
                        name="filter4" data-make="68" /><label for="filter446" class="labelReplacment"></label><label
                        for="filter446">كلاسيكية</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter447"
                        name="filter4" data-make="32" /><label for="filter447" class="labelReplacment"></label><label
                        for="filter447">سوبارو</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter448"
                        name="filter4" data-make="82" /><label for="filter448" class="labelReplacment"></label><label
                        for="filter448">JAC</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter449"
                        name="filter4" data-make="70" /><label for="filter449" class="labelReplacment"></label><label
                        for="filter449">ليفان</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter450"
                        name="filter4" data-make="74" /><label for="filter450" class="labelReplacment"></label><label
                        for="filter450">BYD</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter451"
                        name="filter4" data-make="76" /><label for="filter451" class="labelReplacment"></label><label
                        for="filter451">مان</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter452"
                        name="filter4" data-make="95" /><label for="filter452" class="labelReplacment"></label><label
                        for="filter452">جيتور</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter453"
                        name="filter4" data-make="29" /><label for="filter453" class="labelReplacment"></label><label
                        for="filter453">سانج يونج</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter454"
                        name="filter4" data-make="30" /><label for="filter454" class="labelReplacment"></label><label
                        for="filter454">ستيروين</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter455"
                        name="filter4" data-make="99" /><label for="filter455" class="labelReplacment"></label><label
                        for="filter455">ساوايست</label></div>
                    <div class="radioIotionContainer " datadisabled="0"><input type="radio" class="" id="filter456"
                        name="filter4" data-make="98" /><label for="filter456" class="labelReplacment"></label><label
                        for="filter456">جينيسيس</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter457"
                        name="filter4" data-make="31" /><label for="filter457" class="labelReplacment"></label><label
                        for="filter457">سكودا</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter458"
                        name="filter4" data-make="46" /><label for="filter458" class="labelReplacment"></label><label
                        for="filter458">لامبورغيني</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter459"
                        name="filter4" data-make="6" /><label for="filter459" class="labelReplacment"></label><label
                        for="filter459">استون مارتن</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter460"
                        name="filter4" data-make="79" /><label for="filter460" class="labelReplacment"></label><label
                        for="filter460">فوتون</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter461"
                        name="filter4" data-make="42" /><label for="filter461" class="labelReplacment"></label><label
                        for="filter461">فيراري</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter462"
                        name="filter4" data-make="77" /><label for="filter462" class="labelReplacment"></label><label
                        for="filter462">تاتا</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter463"
                        name="filter4" data-make="7" /><label for="filter463" class="labelReplacment"></label><label
                        for="filter463">الفا روميو</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter464"
                        name="filter4" data-make="84" /><label for="filter464" class="labelReplacment"></label><label
                        for="filter464">بيوك</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter465"
                        name="filter4" data-make="80" /><label for="filter465" class="labelReplacment"></label><label
                        for="filter465">جنجو</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter466"
                        name="filter4" data-make="75" /><label for="filter466" class="labelReplacment"></label><label
                        for="filter466">بايك</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter467"
                        name="filter4" data-make="14" /><label for="filter467" class="labelReplacment"></label><label
                        for="filter467">بونتياك</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter468"
                        name="filter4" data-make="86" /><label for="filter468" class="labelReplacment"></label><label
                        for="filter468">CMC</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter469"
                        name="filter4" data-make="81" /><label for="filter469" class="labelReplacment"></label><label
                        for="filter469">جراند تايجر</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter470"
                        name="filter4" data-make="34" /><label for="filter470" class="labelReplacment"></label><label
                        for="filter470">سيات</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter471"
                        name="filter4" data-make="72" /><label for="filter471" class="labelReplacment"></label><label
                        for="filter471">ماكلارين</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter472"
                        name="filter4" data-make="61" /><label for="filter472" class="labelReplacment"></label><label
                        for="filter472">افيكو</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter473"
                        name="filter4" data-make="63" /><label for="filter473" class="labelReplacment"></label><label
                        for="filter473">سمارت</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter474"
                        name="filter4" data-make="73" /><label for="filter474" class="labelReplacment"></label><label
                        for="filter474">فكتوريا اوتو</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter475"
                        name="filter4" data-make="92" /><label for="filter475" class="labelReplacment"></label><label
                        for="filter475">ماكسيس</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter476"
                        name="filter4" data-make="27" /><label for="filter476" class="labelReplacment"></label><label
                        for="filter476">ساب</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter477"
                        name="filter4" data-make="91" /><label for="filter477" class="labelReplacment"></label><label
                        for="filter477">هينو</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter478"
                        name="filter4" data-make="96" /><label for="filter478" class="labelReplacment"></label><label
                        for="filter478">اشوك</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter479"
                        name="filter4" data-make="97" /><label for="filter479" class="labelReplacment"></label><label
                        for="filter479">ماهيندرا</label></div>
                    <div class="radioIotionContainer " datadisabled="2"><input type="radio" class="" id="filter480"
                        name="filter4" data-make="62" /><label for="filter480" class="labelReplacment"></label><label
                        for="filter480">اخرى </label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>المواصفات</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter50"
                        name="filter5" /><label for="filter50" class="labelReplacment"></label><label
                        for="filter50">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter51"
                        name="filter5" /><label for="filter51" class="labelReplacment"></label><label
                        for="filter51">ستاندر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter52"
                        name="filter5" /><label for="filter52" class="labelReplacment"></label><label
                        for="filter52">فل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter53"
                        name="filter5" /><label for="filter53" class="labelReplacment"></label><label for="filter53">نص
                        فل</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>سنة الصنع</span><label></label></strong>
                <div class="filterAccData">
                  <div></div>
                  <div class="yearsContainer">
                    <div><label>من</label>
                      <div class="selectWrapper"><select name="year_from" id="year_from">
                          <option value="">من</option>
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
                    <div><label>الى</label>
                      <div class="selectWrapper"><select name="year_to" id="year_to">
                          <option value="">الى</option>
                          <option value="2022">2022</option>
                        </select></div>
                    </div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>السعر</span><label></label></strong>
                <div class="filterAccData">
                  <div></div>
                  <div class="rangeSliderContainer">
                    <div class="inputContainer"><input type="text" value="2,000" /><input type="text"
                        value="1,601,000" /><span>ريال</span></div>
                    <div class="smallNmberContainer"><span>2,000</span><span><span>اكثر من</span>1,601,000</span></div>
                    <div aria-disabled="false" class="input-range input-range--rtl">
                      <div class="input-range__track input-range__track--background">
                        <div styles="left:0%;width:100%" class="input-range__track input-range__track--active"></div>
                        <span><span class="input-range__slider-container" styles="position:absolute;left:100%"><span
                              class="input-range__label input-range__label--value"><span class="prefix-text">
                              </span><span class="input-range__label-container">2000</span></span>
                            <div aria-valuemax="2000" aria-valuemin="2000" aria-valuenow="2000"
                              class="input-range__slider" draggable="false" role="slider" tabindex="0"></div>
                          </span><span class="input-range__label input-range__label--bottom-min"><span
                              class="prefix-text"> </span><span
                              class="input-range__label-container">2000</span></span></span><span><span
                            class="input-range__slider-container" styles="position:absolute;left:0%"><span
                              class="input-range__label input-range__label--value"><span class="prefix-text">
                              </span><span class="input-range__label-container">1601000</span></span>
                            <div aria-valuemax="1601000" aria-valuemin="1601000" aria-valuenow="1601000"
                              class="input-range__slider" draggable="false" role="slider" tabindex="0"></div>
                          </span><span class="input-range__label input-range__label--bottom-max"><span
                              class="prefix-text"> </span><span
                              class="input-range__label-container">1601000</span></span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>الممشى</span><label></label></strong>
                <div class="filterAccData">
                  <div></div>
                  <div class="rangeSliderContainer">
                    <div class="inputContainer"><input type="text" value="100" /><input type="text"
                        value="1,000,000" /><span>كم</span></div>
                    <div class="smallNmberContainer"><span>100</span><span><span>اكثر من</span>1,000,000</span></div>
                    <div aria-disabled="false" class="input-range input-range--rtl">
                      <div class="input-range__track input-range__track--background">
                        <div styles="left:0%;width:100%" class="input-range__track input-range__track--active"></div>
                        <span><span class="input-range__slider-container" styles="position:absolute;left:100%"><span
                              class="input-range__label input-range__label--value"><span class="prefix-text">
                              </span><span class="input-range__label-container">100</span></span>
                            <div aria-valuemax="100" aria-valuemin="100" aria-valuenow="100" class="input-range__slider"
                              draggable="false" role="slider" tabindex="0"></div>
                          </span><span class="input-range__label input-range__label--bottom-min"><span
                              class="prefix-text"> </span><span
                              class="input-range__label-container">100</span></span></span><span><span
                            class="input-range__slider-container" styles="position:absolute;left:0%"><span
                              class="input-range__label input-range__label--value"><span class="prefix-text">
                              </span><span class="input-range__label-container">1000000</span></span>
                            <div aria-valuemax="1000000" aria-valuemin="1000000" aria-valuenow="1000000"
                              class="input-range__slider" draggable="false" role="slider" tabindex="0"></div>
                          </span><span class="input-range__label input-range__label--bottom-max"><span
                              class="prefix-text"> </span><span
                              class="input-range__label-container">1000000</span></span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>المدينة</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter90"
                        name="filter9" /><label for="filter90" class="labelReplacment"></label><label
                        for="filter90">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter91"
                        name="filter9" /><label for="filter91" class="labelReplacment"></label><label
                        for="filter91">الرياض</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter92"
                        name="filter9" /><label for="filter92" class="labelReplacment"></label><label
                        for="filter92">جدة</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter93"
                        name="filter9" /><label for="filter93" class="labelReplacment"></label><label
                        for="filter93">الاحساء</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter94"
                        name="filter9" /><label for="filter94" class="labelReplacment"></label><label
                        for="filter94">الباحة</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter95"
                        name="filter9" /><label for="filter95" class="labelReplacment"></label><label
                        for="filter95">الدمام</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter96"
                        name="filter9" /><label for="filter96" class="labelReplacment"></label><label
                        for="filter96">الجوف</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter97"
                        name="filter9" /><label for="filter97" class="labelReplacment"></label><label
                        for="filter97">الطائف</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter98"
                        name="filter9" /><label for="filter98" class="labelReplacment"></label><label
                        for="filter98">القصيم</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter99"
                        name="filter9" /><label for="filter99" class="labelReplacment"></label><label
                        for="filter99">المدينة</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter910"
                        name="filter9" /><label for="filter910" class="labelReplacment"></label><label
                        for="filter910">تبوك</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter911"
                        name="filter9" /><label for="filter911" class="labelReplacment"></label><label
                        for="filter911">جازان</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter912"
                        name="filter9" /><label for="filter912" class="labelReplacment"></label><label
                        for="filter912">حائل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter913"
                        name="filter9" /><label for="filter913" class="labelReplacment"></label><label
                        for="filter913">عرعر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter914"
                        name="filter9" /><label for="filter914" class="labelReplacment"></label><label
                        for="filter914">عسير</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter915"
                        name="filter9" /><label for="filter915" class="labelReplacment"></label><label
                        for="filter915">مكة</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter916"
                        name="filter9" /><label for="filter916" class="labelReplacment"></label><label
                        for="filter916">نجران</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter917"
                        name="filter9" /><label for="filter917" class="labelReplacment"></label><label
                        for="filter917">وادي الدواسر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter918"
                        name="filter9" /><label for="filter918" class="labelReplacment"></label><label
                        for="filter918">الخبر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter919"
                        name="filter9" /><label for="filter919" class="labelReplacment"></label><label
                        for="filter919">بيشة</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter920"
                        name="filter9" /><label for="filter920" class="labelReplacment"></label><label
                        for="filter920">النماص</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter921"
                        name="filter9" /><label for="filter921" class="labelReplacment"></label><label
                        for="filter921">صبيا</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter922"
                        name="filter9" /><label for="filter922" class="labelReplacment"></label><label
                        for="filter922">سكاكا</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter923"
                        name="filter9" /><label for="filter923" class="labelReplacment"></label><label
                        for="filter923">أبها</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter924"
                        name="filter9" /><label for="filter924" class="labelReplacment"></label><label
                        for="filter924">القريات</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter925"
                        name="filter9" /><label for="filter925" class="labelReplacment"></label><label
                        for="filter925">حفر الباطن</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter926"
                        name="filter9" /><label for="filter926" class="labelReplacment"></label><label
                        for="filter926">الجبيل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter927"
                        name="filter9" /><label for="filter927" class="labelReplacment"></label><label
                        for="filter927">ينبع</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>اللون</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="mobileColorsLabel m-show"><label for="color_2"><span
                          styles="background-color:#000000"></span><strong>أسود</strong></label><label
                        for="color_1"><span styles="background-color:#FFFFFF"></span><strong>أبيض</strong></label><label
                        for="color_3"><span styles="background-color:#E3E3E3"></span><strong>سلفر</strong></label><label
                        for="color_10"><span
                          styles="background-color:#BDBDBD"></span><strong>رمادي</strong></label><label
                        for="color_6"><span styles="background-color:#0056C1"></span><strong>ازرق</strong></label><label
                        for="color_11"><span styles="background-color:#0E197E"></span><strong>كحلي</strong></label><label
                        for="color_7"><span styles="background-color:#2AA313"></span><strong>أخضر</strong></label><label
                        for="color_12"><span styles="background-color:#1A6A0B"></span><strong>زيتي</strong></label><label
                        for="color_4"><span styles="background-color:#DA3434"></span><strong>أحمر</strong></label><label
                        for="color_5"><span styles="background-color:#873F0B"></span><strong>بني</strong></label><label
                        for="color_13"><span
                          styles="background-color:#ED4E00"></span><strong>برتقالي</strong></label><label
                        for="color_8"><span styles="background-color:#FFE800"></span><strong>أصفر</strong></label><label
                        for="color_14"><span styles="background-color:#FFC700"></span><strong>ذهبي</strong></label><label
                        for="color_15"><span
                          styles="background-color:#E0C8A1"></span><strong>برونزي</strong></label><label
                        for="color_9"><span styles="background-color:"></span><strong>لون آخر</strong></label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter100"
                        name="filter10" /><label for="filter100" class="labelReplacment"></label><label
                        for="filter100">أسود</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter101"
                        name="filter10" /><label for="filter101" class="labelReplacment"></label><label
                        for="filter101">أبيض</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter102"
                        name="filter10" /><label for="filter102" class="labelReplacment"></label><label
                        for="filter102">سلفر</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter103"
                        name="filter10" /><label for="filter103" class="labelReplacment"></label><label
                        for="filter103">رمادي</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter104"
                        name="filter10" /><label for="filter104" class="labelReplacment"></label><label
                        for="filter104">ازرق</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter105"
                        name="filter10" /><label for="filter105" class="labelReplacment"></label><label
                        for="filter105">كحلي</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter106"
                        name="filter10" /><label for="filter106" class="labelReplacment"></label><label
                        for="filter106">أخضر</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter107"
                        name="filter10" /><label for="filter107" class="labelReplacment"></label><label
                        for="filter107">زيتي</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter108"
                        name="filter10" /><label for="filter108" class="labelReplacment"></label><label
                        for="filter108">أحمر</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter109"
                        name="filter10" /><label for="filter109" class="labelReplacment"></label><label
                        for="filter109">بني</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter1010"
                        name="filter10" /><label for="filter1010" class="labelReplacment"></label><label
                        for="filter1010">برتقالي</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter1011"
                        name="filter10" /><label for="filter1011" class="labelReplacment"></label><label
                        for="filter1011">أصفر</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter1012"
                        name="filter10" /><label for="filter1012" class="labelReplacment"></label><label
                        for="filter1012">ذهبي</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter1013"
                        name="filter10" /><label for="filter1013" class="labelReplacment"></label><label
                        for="filter1013">برونزي</label></div>
                    <div class="radioIotionContainer m-hide"><input type="radio" class="" id="filter1014"
                        name="filter10" /><label for="filter1014" class="labelReplacment"></label><label
                        for="filter1014">لون آخر</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>الوارد</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter110"
                        name="filter11" /><label for="filter110" class="labelReplacment"></label><label
                        for="filter110">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter111"
                        name="filter11" /><label for="filter111" class="labelReplacment"></label><label
                        for="filter111">سعودي</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter112"
                        name="filter11" /><label for="filter112" class="labelReplacment"></label><label
                        for="filter112">خليجي</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter113"
                        name="filter11" /><label for="filter113" class="labelReplacment"></label><label
                        for="filter113">اخرى</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>سعة المحرك</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter120"
                        name="filter12" /><label for="filter120" class="labelReplacment"></label><label
                        for="filter120">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter121"
                        name="filter12" /><label for="filter121" class="labelReplacment"></label><label
                        for="filter121">1.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter122"
                        name="filter12" /><label for="filter122" class="labelReplacment"></label><label
                        for="filter122">1.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter123"
                        name="filter12" /><label for="filter123" class="labelReplacment"></label><label
                        for="filter123">1.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter124"
                        name="filter12" /><label for="filter124" class="labelReplacment"></label><label
                        for="filter124">1.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter125"
                        name="filter12" /><label for="filter125" class="labelReplacment"></label><label
                        for="filter125">1.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter126"
                        name="filter12" /><label for="filter126" class="labelReplacment"></label><label
                        for="filter126">1.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter127"
                        name="filter12" /><label for="filter127" class="labelReplacment"></label><label
                        for="filter127">1.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter128"
                        name="filter12" /><label for="filter128" class="labelReplacment"></label><label
                        for="filter128">1.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter129"
                        name="filter12" /><label for="filter129" class="labelReplacment"></label><label
                        for="filter129">1.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1210"
                        name="filter12" /><label for="filter1210" class="labelReplacment"></label><label
                        for="filter1210">1.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1211"
                        name="filter12" /><label for="filter1211" class="labelReplacment"></label><label
                        for="filter1211">2.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1212"
                        name="filter12" /><label for="filter1212" class="labelReplacment"></label><label
                        for="filter1212">2.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1213"
                        name="filter12" /><label for="filter1213" class="labelReplacment"></label><label
                        for="filter1213">2.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1214"
                        name="filter12" /><label for="filter1214" class="labelReplacment"></label><label
                        for="filter1214">2.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1215"
                        name="filter12" /><label for="filter1215" class="labelReplacment"></label><label
                        for="filter1215">2.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1216"
                        name="filter12" /><label for="filter1216" class="labelReplacment"></label><label
                        for="filter1216">2.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1217"
                        name="filter12" /><label for="filter1217" class="labelReplacment"></label><label
                        for="filter1217">2.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1218"
                        name="filter12" /><label for="filter1218" class="labelReplacment"></label><label
                        for="filter1218">2.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1219"
                        name="filter12" /><label for="filter1219" class="labelReplacment"></label><label
                        for="filter1219">2.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1220"
                        name="filter12" /><label for="filter1220" class="labelReplacment"></label><label
                        for="filter1220">2.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1221"
                        name="filter12" /><label for="filter1221" class="labelReplacment"></label><label
                        for="filter1221">3.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1222"
                        name="filter12" /><label for="filter1222" class="labelReplacment"></label><label
                        for="filter1222">3.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1223"
                        name="filter12" /><label for="filter1223" class="labelReplacment"></label><label
                        for="filter1223">3.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1224"
                        name="filter12" /><label for="filter1224" class="labelReplacment"></label><label
                        for="filter1224">3.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1225"
                        name="filter12" /><label for="filter1225" class="labelReplacment"></label><label
                        for="filter1225">3.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1226"
                        name="filter12" /><label for="filter1226" class="labelReplacment"></label><label
                        for="filter1226">3.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1227"
                        name="filter12" /><label for="filter1227" class="labelReplacment"></label><label
                        for="filter1227">3.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1228"
                        name="filter12" /><label for="filter1228" class="labelReplacment"></label><label
                        for="filter1228">3.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1229"
                        name="filter12" /><label for="filter1229" class="labelReplacment"></label><label
                        for="filter1229">3.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1230"
                        name="filter12" /><label for="filter1230" class="labelReplacment"></label><label
                        for="filter1230">3.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1231"
                        name="filter12" /><label for="filter1231" class="labelReplacment"></label><label
                        for="filter1231">4.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1232"
                        name="filter12" /><label for="filter1232" class="labelReplacment"></label><label
                        for="filter1232">4.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1233"
                        name="filter12" /><label for="filter1233" class="labelReplacment"></label><label
                        for="filter1233">4.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1234"
                        name="filter12" /><label for="filter1234" class="labelReplacment"></label><label
                        for="filter1234">4.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1235"
                        name="filter12" /><label for="filter1235" class="labelReplacment"></label><label
                        for="filter1235">4.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1236"
                        name="filter12" /><label for="filter1236" class="labelReplacment"></label><label
                        for="filter1236">4.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1237"
                        name="filter12" /><label for="filter1237" class="labelReplacment"></label><label
                        for="filter1237">4.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1238"
                        name="filter12" /><label for="filter1238" class="labelReplacment"></label><label
                        for="filter1238">4.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1239"
                        name="filter12" /><label for="filter1239" class="labelReplacment"></label><label
                        for="filter1239">4.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1240"
                        name="filter12" /><label for="filter1240" class="labelReplacment"></label><label
                        for="filter1240">4.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1241"
                        name="filter12" /><label for="filter1241" class="labelReplacment"></label><label
                        for="filter1241">5.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1242"
                        name="filter12" /><label for="filter1242" class="labelReplacment"></label><label
                        for="filter1242">5.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1243"
                        name="filter12" /><label for="filter1243" class="labelReplacment"></label><label
                        for="filter1243">5.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1244"
                        name="filter12" /><label for="filter1244" class="labelReplacment"></label><label
                        for="filter1244">5.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1245"
                        name="filter12" /><label for="filter1245" class="labelReplacment"></label><label
                        for="filter1245">5.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1246"
                        name="filter12" /><label for="filter1246" class="labelReplacment"></label><label
                        for="filter1246">5.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1247"
                        name="filter12" /><label for="filter1247" class="labelReplacment"></label><label
                        for="filter1247">5.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1248"
                        name="filter12" /><label for="filter1248" class="labelReplacment"></label><label
                        for="filter1248">5.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1249"
                        name="filter12" /><label for="filter1249" class="labelReplacment"></label><label
                        for="filter1249">5.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1250"
                        name="filter12" /><label for="filter1250" class="labelReplacment"></label><label
                        for="filter1250">5.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1251"
                        name="filter12" /><label for="filter1251" class="labelReplacment"></label><label
                        for="filter1251">6.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1252"
                        name="filter12" /><label for="filter1252" class="labelReplacment"></label><label
                        for="filter1252">6.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1253"
                        name="filter12" /><label for="filter1253" class="labelReplacment"></label><label
                        for="filter1253">6.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1254"
                        name="filter12" /><label for="filter1254" class="labelReplacment"></label><label
                        for="filter1254">6.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1255"
                        name="filter12" /><label for="filter1255" class="labelReplacment"></label><label
                        for="filter1255">6.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1256"
                        name="filter12" /><label for="filter1256" class="labelReplacment"></label><label
                        for="filter1256">6.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1257"
                        name="filter12" /><label for="filter1257" class="labelReplacment"></label><label
                        for="filter1257">6.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1258"
                        name="filter12" /><label for="filter1258" class="labelReplacment"></label><label
                        for="filter1258">6.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1259"
                        name="filter12" /><label for="filter1259" class="labelReplacment"></label><label
                        for="filter1259">6.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1260"
                        name="filter12" /><label for="filter1260" class="labelReplacment"></label><label
                        for="filter1260">6.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1261"
                        name="filter12" /><label for="filter1261" class="labelReplacment"></label><label
                        for="filter1261">7.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1262"
                        name="filter12" /><label for="filter1262" class="labelReplacment"></label><label
                        for="filter1262">7.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1263"
                        name="filter12" /><label for="filter1263" class="labelReplacment"></label><label
                        for="filter1263">7.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1264"
                        name="filter12" /><label for="filter1264" class="labelReplacment"></label><label
                        for="filter1264">7.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1265"
                        name="filter12" /><label for="filter1265" class="labelReplacment"></label><label
                        for="filter1265">7.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1266"
                        name="filter12" /><label for="filter1266" class="labelReplacment"></label><label
                        for="filter1266">7.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1267"
                        name="filter12" /><label for="filter1267" class="labelReplacment"></label><label
                        for="filter1267">7.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1268"
                        name="filter12" /><label for="filter1268" class="labelReplacment"></label><label
                        for="filter1268">7.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1269"
                        name="filter12" /><label for="filter1269" class="labelReplacment"></label><label
                        for="filter1269">7.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1270"
                        name="filter12" /><label for="filter1270" class="labelReplacment"></label><label
                        for="filter1270">7.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1271"
                        name="filter12" /><label for="filter1271" class="labelReplacment"></label><label
                        for="filter1271">8.0</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1272"
                        name="filter12" /><label for="filter1272" class="labelReplacment"></label><label
                        for="filter1272">8.1</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1273"
                        name="filter12" /><label for="filter1273" class="labelReplacment"></label><label
                        for="filter1273">8.2</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1274"
                        name="filter12" /><label for="filter1274" class="labelReplacment"></label><label
                        for="filter1274">8.3</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1275"
                        name="filter12" /><label for="filter1275" class="labelReplacment"></label><label
                        for="filter1275">8.4</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1276"
                        name="filter12" /><label for="filter1276" class="labelReplacment"></label><label
                        for="filter1276">8.5</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1277"
                        name="filter12" /><label for="filter1277" class="labelReplacment"></label><label
                        for="filter1277">8.6</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1278"
                        name="filter12" /><label for="filter1278" class="labelReplacment"></label><label
                        for="filter1278">8.7</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1279"
                        name="filter12" /><label for="filter1279" class="labelReplacment"></label><label
                        for="filter1279">8.8</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1280"
                        name="filter12" /><label for="filter1280" class="labelReplacment"></label><label
                        for="filter1280">8.9</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter1281"
                        name="filter12" /><label for="filter1281" class="labelReplacment"></label><label
                        for="filter1281">9.0</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>نوع الوقود</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter130"
                        name="filter13" /><label for="filter130" class="labelReplacment"></label><label
                        for="filter130">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter131"
                        name="filter13" /><label for="filter131" class="labelReplacment"></label><label
                        for="filter131">بنزين</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter132"
                        name="filter13" /><label for="filter132" class="labelReplacment"></label><label
                        for="filter132">ديزل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter133"
                        name="filter13" /><label for="filter133" class="labelReplacment"></label><label
                        for="filter133">هايبرد/هجين</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter134"
                        name="filter13" /><label for="filter134" class="labelReplacment"></label><label
                        for="filter134">كهرباء</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>الجير</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter140"
                        name="filter14" /><label for="filter140" class="labelReplacment"></label><label
                        for="filter140">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter141"
                        name="filter14" /><label for="filter141" class="labelReplacment"></label><label
                        for="filter141">عادي</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter142"
                        name="filter14" /><label for="filter142" class="labelReplacment"></label><label
                        for="filter142">اوتوماتيك</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:" class="filterAcc  "><strong><span>نوع البائع</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter150"
                        name="filter15" /><label for="filter150" class="labelReplacment"></label><label
                        for="filter150">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter151"
                        name="filter15" /><label for="filter151" class="labelReplacment"></label><label for="filter151">
                        سيارات الأفراد</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter152"
                        name="filter15" /><label for="filter152" class="labelReplacment"></label><label for="filter152">
                        سيارات المعارض</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:none" class="filterAcc  "><strong><span>عدد السليندرات</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter160"
                        name="filter16" /><label for="filter160" class="labelReplacment"></label><label
                        for="filter160">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter161"
                        name="filter16" /><label for="filter161" class="labelReplacment"></label><label
                        for="filter161">3 سيلندر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter162"
                        name="filter16" /><label for="filter162" class="labelReplacment"></label><label
                        for="filter162">4 سيلندر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter163"
                        name="filter16" /><label for="filter163" class="labelReplacment"></label><label
                        for="filter163">6 سيلندر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter164"
                        name="filter16" /><label for="filter164" class="labelReplacment"></label><label
                        for="filter164">8 سيلندر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter165"
                        name="filter16" /><label for="filter165" class="labelReplacment"></label><label
                        for="filter165">10 سيلندر</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter166"
                        name="filter16" /><label for="filter166" class="labelReplacment"></label><label
                        for="filter166">12 سيلندر</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:none" class="filterAcc  "><strong><span>عدد الغمارات</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter170"
                        name="filter17" /><label for="filter170" class="labelReplacment"></label><label
                        for="filter170">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter171"
                        name="filter17" /><label for="filter171" class="labelReplacment"></label><label
                        for="filter171">غمارة</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter172"
                        name="filter17" /><label for="filter172" class="labelReplacment"></label><label
                        for="filter172">غمارتين</label></div>
                  </div>
                </div>
              </div>
              <div styles="display:none" class="filterAcc  "><strong><span>نوع الدفع</span><label></label></strong>
                <div class="filterAccData">
                  <div>
                    <div class="radioIotionContainer "><input type="radio" class="isselectedRadio" id="filter190"
                        name="filter19" /><label for="filter190" class="labelReplacment"></label><label
                        for="filter190">الكل</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter191"
                        name="filter19" /><label for="filter191" class="labelReplacment"></label><label
                        for="filter191">دبل (4x4) </label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter192"
                        name="filter19" /><label for="filter192" class="labelReplacment"></label><label
                        for="filter192">دفع خلفي</label></div>
                    <div class="radioIotionContainer "><input type="radio" class="" id="filter193"
                        name="filter19" /><label for="filter193" class="labelReplacment"></label><label
                        for="filter193">دفع امامي</label></div>
                  </div>
                </div>
              </div>
            </section>
            <section class="filterFooter"><button class="showResults blueBtn"><strong>أظهر النتائج</strong>
                <div><span>9,221</span><span>سيارة</span><img
                    src="https://syarahcdn.syarah.com/syarah/bundles/arrShow.svg" alt="" /></div>
              </button></section>
          </aside>
          <div class="searchResultContainer">
            <div class="searchInfoContainer">
              <h1><span class="carsSearchedName"> حراج سيارات المستعملة للبيع في السعودية </span><span>- </span><span
                  class="numerOfCars">9,221</span> <span>سيارة</span></h1>
              <div class="sortFilterSp m-hide"><span>ترتيب حسب:</span><strong>السيارات الأحدث</strong></div>
            </div>
            <div class="allCarsResult rowLoad"> <a class="singleCarThumbS " styles="padding-bottom:"
                href="/car/10490952?sol=0"><span class="specialTag">مميز</span>
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10490952/0x300/orignal-1628415231-318.jpg" alt="" />
                </div>
                <div><strong><span class="name">شانجان CS95 2019 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">75,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">جدة</span><span class="distance"> مستعملة </span><span class="time"> قبل 8
                      ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10488728?sol=0"><span
                  class="specialTag">مميز</span>
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10488728/0x300/orignal-1628095571-397.jpg" alt="" />
                </div>
                <div><strong><span class="name">فورد فلكس ليمتد مخزن 2015 وكالة على الضمان </span><span
                      class="price"><span class="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span class="location">الرياض</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 9 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/77614?sol=1"><span
                  class="bestPriceTage">مفحوصة</span>
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/77614/0x300/orignal-1625323939-648.jpg" alt="" />
                </div><span class="blueTag"><img class="m-hide"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickgreenCir.svg" alt="" /><img class="m-show"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickBlueCir.svg" alt="" /><span>ضمان استرداد سعر
                    السيارة خلال 5 أيام</span></span>
                <div><strong><span class="name">هونداي اكسنت GL 2020 ستاندر </span><span class="price"><span
                        class="currentPrice" styles="color:#00B658">39,900
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="m-show"></span><span class="location"> مستعملة </span><span class="distance">88,831
                      كم</span><span class="m-show"></span></div>
                </div>
              </a><a class="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/77608?sol=1"><span
                  class="bestPriceTage">مفحوصة</span>
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/77608/0x300/orignal-1625323393-102.jpg" alt="" />
                </div><span class="blueTag"><img class="m-hide"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickgreenCir.svg" alt="" /><img class="m-show"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickBlueCir.svg" alt="" /><span>ضمان استرداد سعر
                    السيارة خلال 5 أيام</span></span>
                <div><strong><span class="name">هونداي اكسنت GL 2020 ستاندر </span><span class="price"><span
                        class="currentPrice" styles="color:#00B658">38,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="m-show"></span><span class="location"> مستعملة </span><span class="distance">85,755
                      كم</span><span class="m-show"></span></div>
                </div>
              </a><a class="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/76788?sol=1"><span
                  class="bestPriceTage">مفحوصة</span>
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/76788/0x300/orignal-1624889087-695.jpg" alt="" />
                  <div class="reservedCarTag m-hide">هذه السيارة محجوزة</div>
                </div>
                <div styles="z-index:9" class="reservedCarTag m-show">هذه السيارة محجوزة</div>
                <div><strong><span class="name">شانجان السفن Basic 2020 ستاندر </span><span class="price"><span
                        class="currentPrice" styles="color:#00B658">27,550
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="m-show"></span><span class="location"> مستعملة </span><span class="distance">50,016
                      كم</span><span class="m-show"></span></div>
                </div>
              </a><a class="singleCarThumbS EmbedThumb" styles="padding-bottom:" href="/car/82800?sol=1"><span
                  class="bestPriceTage">مفحوصة</span>
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/online/posts/82800/0x300/orignal-1627918675-820.jpg" alt="" />
                </div><span class="blueTag"><img class="m-hide"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickgreenCir.svg" alt="" /><img class="m-show"
                    src="https://syarahcdn.syarah.com/syarah/bundles/tickBlueCir.svg" alt="" /><span>ضمان استرداد سعر
                    السيارة خلال 5 أيام</span></span>
                <div><strong><span class="name">تويوتا فورتشنر GX1 2019 ستاندر دبل</span><span class="price"><span
                        class="currentPrice" styles="color:#00B658">87,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="m-show"></span><span class="location"> مستعملة </span><span class="distance">207,071
                      كم</span><span class="m-show"></span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10475078?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10475078/0x300/orignal-1625983091-558.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا لاندكروزر 2006 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span class="location">تبوك</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      1 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492412?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492412/0x300/orignal-1628570985-279.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا لاندكروزر 2011 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">80,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">تبوك</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      8 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492410?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492410/0x300/orignal-1628570749-578.jpg" alt="" />
                </div>
                <div><strong><span class="name">سوناتا 2017. فل كامل بدي وكالة</span><span class="price"><span
                        class="currentPrice" styles="color:">42,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">الخبر</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      14 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492408?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492408/0x300/orignal-1628570287-770.jpg" alt="" />
                </div>
                <div><strong><span class="name">هونداي النترا 2009 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span class="location">جدة</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      34 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10475044?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10475044/0x300/orignal-1625968363-847.jpg" alt="" />
                </div>
                <div><strong><span class="name">كيا اوبتيما 2015</span><span class="price"><span class="currentPrice"
                        styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span class="location">جازان</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      40 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10445728?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10445728/0x300/orignal-1622411334-267.jpg" alt="" />
                </div>
                <div><strong><span class="name">مرسيدس c300 kit amg 2016 وراد أمريكا</span><span class="price"><span
                        class="currentPrice" styles="color:">115,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">جدة</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      43 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10480738?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10480738/0x300/orignal-1627039511-188.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا كامري 2010 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">30,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">الجبيل</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 59 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10487124?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10487124/0x300/orignal-1627916101-696.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا لاندكروزر 2005 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span class="location">الاحساء</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 59 دقيقة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492402?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492402/0x300/orignal-1628566015-514.jpg" alt="" />
                </div>
                <div><strong><span class="name">شانجان ايدو 2021 للبيع الشاص والمكينه والقير سليمه100٪؜</span><span
                      class="price"><span class="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span class="location">الرياض</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10489856?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10489856/0x300/orignal-1628281770-116.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا كورولا ٢٠٢١</span><span class="price"><span class="currentPrice"
                        styles="color:">65,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">جازان</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      1 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492400?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492400/0x300/orignal-1628566618-803.jpg" alt="" />
                </div>
                <div><strong><span class="name">مرسيدس GLC300 4matic 2020 فل خليجي</span><span class="price"><span
                        class="currentPrice" styles="color:">270,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">الدمام</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492396?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492396/0x300/orignal-1628565989-973.jpg" alt="" />
                </div>
                <div><strong><span class="name">مرسيدس GLC 250 d 2018 فل</span><span class="price"><span
                        class="currentPrice" styles="color:">180,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">الدمام</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10475610?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10475610/0x300/orignal-1626025210-455.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا كامري GLX 2012</span><span class="price"><span
                        class="currentPrice" styles="color:">على السوم
                         <span></span>
                      </span></span></strong>
                  <div><span class="location">المدينة</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 1 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10487848?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10487848/0x300/orignal-1627998903-77.jpg" alt="" />
                </div>
                <div><strong><span class="name">شفروليه تاهو LS 2020 ستاندر سعودي</span><span class="price"><span
                        class="currentPrice" styles="color:">160,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">جدة</span><span class="distance"> مستعملة </span><span class="time"> قبل 1
                      ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10450240?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10450240/0x300/orignal-1622991950-536.jpg" alt="" />
                </div>
                <div><strong><span class="name">فورد تورس 2017 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">78,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">عسير</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      1 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492394?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492394/0x300/orignal-1628564221-182.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا برادو 2016 للبيع</span><span class="price"><span
                        class="currentPrice" styles="color:">100,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">الرياض</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 2 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492392?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492392/0x300/orignal-1628564007-280.jpg" alt="" />
                </div>
                <div><strong><span class="name">هيونداي سانتافية</span><span class="price"><span class="currentPrice"
                        styles="color:">57,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">الباحة</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 2 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492390?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492390/0x300/orignal-1628564075-583.jpg" alt="" />
                </div>
                <div><strong><span class="name">تويوتا كامري 2003</span><span class="price"><span class="currentPrice"
                        styles="color:">9,500
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">أبها</span><span class="distance"> مستعملة </span><span class="time"> قبل
                      2 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10492382?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10492382/0x300/orignal-1628562196-678.jpg" alt="" />
                </div>
                <div><strong><span class="name">مازدا 3 2019 للبيع</span><span class="price"><span class="currentPrice"
                        styles="color:">55,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">المدينة</span><span class="distance"> مستعملة </span><span class="time">
                      قبل 2 ساعة
                      
                    </span></div>
                </div>
              </a><a class="singleCarThumbS " styles="padding-bottom:" href="/car/10482794?sol=0">
                <div>
                  <div class="TumbLoadImage-module__animatedBackground___wYC5z"></div><img
                    class="TumbLoadImage-module__loading___3EJWH "
                    src="https://syarahcdn.syarah.com/syarah/posts/10482794/0x300/orignal-1628561501-646.jpg" alt="" />
                </div>
                <div><strong><span class="name">شفروليه سبارك 2012</span><span class="price"><span class="currentPrice"
                        styles="color:">9,000
                         <span>ريال</span>
                      </span></span></strong>
                  <div><span class="location">جدة</span><span class="distance"> مستعملة </span><span class="time"> قبل 2
                      ساعة
                      
                    </span></div>
                </div>
              </a></div>
          </div>
          <div class="fixedFilltersContainer m-show showSpF">
            <div>
              <div class="sortFilterSp m-show"><span>ترتيب حسب:</span><strong>السيارات الأحدث</strong></div><button
                class="filterBtnSP showFltr">فلترة النتائج</button>
            </div>
          </div>
        </section>
      </main>
    )
}