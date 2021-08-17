import Header from "../components/Header"
import Head2 from "../components/Head2";
// import 'assets/css/login.css'
import react, { useState, useEffect } from 'react'
export default function Login() {

    const [loginuser, setLoginuser] = useState([]);
    const [loginpassword, setLoginpassword] = useState([]);
    const [singuser, setSinguser] = useState([]);
    const [password, setPassword] = useState([]);
    const [copass, setCopass] = useState([]);
    const [email, setemail] = useState([]);
    async function  getData()
    {
       
     
    
         const res= await axios.get('https://carsgallary.herokuapp.com/api/v1/cars/carinfo/'+router.query.post)        
       
        .then( function (response) {
            // handle success
            console.log('fff',response);
          
            setInfo(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log('ffff',error);
           
        })
        .then(function () {
            // always executed
        });
    }
    return (
        <div>
                 {/* <head> </head> */}
                <Head2/>
                <link rel="stylesheet" href="../assets/css/app.css"/>
                <body dir="rtl">
                <Header/>
                <div class="container-fluid header">
                    <div class="container">
                        <div class="content">
                            <div class="container">
                                <ul class="breadcrumb"></ul>
                            </div>
                            <div class="container">
                                <div class="clearfix main_titles_box">
                                    <h1 class="pull-right"><span>دخول</span></h1>
    </div>
</div>

<div class="container">
    <div class="inner_content sa_forms">
        <form id="form-login" action="/user/login" method="post">
<input type="hidden" name="_csrf" value="CepoTPoD1xCQtfrWfY0pWBhZGn5GY1hppMwJvV55ELBqhQsI10_mVPvXma8s4291awNvOAUiHVHVk0vXEjFA6g=="/>       
 <div>

            <div class="col-lg-12 col-md-12">
            </div>

        </div>
                <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">رقم الجوّال: </div>
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    
                        <div class="form-group field-userloginform-phonenumber required">
<input type="text" id="userloginform-phonenumber" class="form-control" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true"/>
</div>                </div>
            <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">كلمة السر: </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div class="input_elements clearfix">

                    <div class="form-group field-userloginform-password required">
<input type="password" id="userloginform-password" class="form-control" name="UserLoginForm[password]" dir="ltr" aria-required="true"/>
</div>                    <div class="input_elements_lft">
                        <button type="button" class="show_password" id="peye"></button>
                    </div>
                </div>  
            </div>
            <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes">
            </div>
        </div>
        
                
                
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles"></div>
 <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <p class="sa_forms_btns">
                               
                                <button type="submit" class="btn btn-primary">دخول</button>                                    
						  		</p>
                            </div>
            <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
        </div>
        </form>    </div>
   
</div>






<div class="container">
<div class="clearfix main_titles_box">
        <h1 class="pull-right"><span>تسجيل</span></h1>
    </div>
    <div class="inner_content sa_forms">
        <form id="form-login" action="/user/login" method="post">
<input type="hidden" name="_csrf" value="CepoTPoD1xCQtfrWfY0pWBhZGn5GY1hppMwJvV55ELBqhQsI10_mVPvXma8s4291awNvOAUiHVHVk0vXEjFA6g=="/>       
 <div>

            <div class="col-lg-12 col-md-12">
            </div>

        </div>
                <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">اسم المستخدم: </div>
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    
                        <div class="form-group field-userloginform-phonenumber required">
<input type="text" id="userloginform-phonenumber" class="form-control" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true"/>
</div>                </div>
            <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
        </div>
        <div class="row">
        <div class="row">
<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">البريد الالكتروني: </div>
<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
    
        <div class="form-group field-userloginform-phonenumber required">
<input type="text" id="userloginform-phonenumber" class="form-control" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true"/>
</div>                </div>
<div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>


<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">رقم الجوّال: </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                
                    <div class="form-group field-userloginform-phonenumber required">
<input type="text" id="userloginform-phonenumber" class="form-control" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true"/>
</div>                </div>
        <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>


<div class='row'>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">كلمة السر: </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div class="input_elements clearfix">

                <div class="form-group field-userloginform-password required">
<input type="password" id="userloginform-password" class="form-control" name="UserLoginForm[password]" dir="ltr" aria-required="true"/>
</div>                    <div class="input_elements_lft">
                    <button type="button" class="show_password" id="peye"></button>
                </div>
            </div>  
        </div>
        </div>
    </div>
        </div>                
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles"></div>
 <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                
                            </div>
            <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
        </div>
        <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles"></div>
<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <p class="sa_forms_btns">
                            <label class="clearfix">
                                 <a href="" class="btn-registration">سجل الآن</a></label>
                              </p>
                        </div>
        <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>

</div>
</body>
</div>
        
            )
}