import Header from "../components/Header"
// import 'assets/css/login.css'
import react, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Login() {

    const [loginuser, setLoginuser] = useState([]);
    const [loginpassword, setLoginpassword] = useState([]);
    const [singuser, setSinguser] = useState([]);
    const [password, setPassword] = useState([]);
    const [copass, setCopass] = useState([]);
    const [email, setemail] = useState([]);





    async function getData() {


        const res = await axios.get('https://carsgallary.herokuapp.com/api/v1/cars/carinfo/' + router.query.post)

            .then(function (response) {
                // handle success
                console.log('fff', response);

                setInfo(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log('ffff', error);

            })
            .then(function () {
                // always executed
            });
    }

    async function login(event) {
        event.preventDefault()


        var formData = new FormData();


        formData.append("username", loginuser);
        formData.append("password", loginpassword);



        axios.post('https://carsgallary.herokuapp.com/api/token/', formData
        ).then(function (response) {

            console.log(response)








            const config = { headers: { "Authorization": 'Bearer ' + response.data.access } };


            axios.get('https://carsgallary.herokuapp.com/api/v1/cars/userinfo/', config)

                .then(function (response2) {
                    // handle success
                    console.log('fff', response2);
                    window.localStorage.setItem('token', JSON.stringify(response.data.access))
                    window.localStorage.setItem('info', JSON.stringify(response2.data))


                })
                .catch(function (error) {
                    // handle error
                    console.log('ffff', error);

                })
                .then(function () {
                    // always executed
                });





        }).catch(function (error) {
            console.log(error)
        });

    }




    async function login(event) {
        event.preventDefault()


        var formData = new FormData();


        formData.append("username", loginuser);
        formData.append("password", loginpassword);



        axios.post('https://carsgallary.herokuapp.com/api/token/', formData
        ).then(function (response) {

            console.log(response)








            const config = { headers: { "Authorization": 'Bearer ' + response.data.access } };


            axios.get('https://carsgallary.herokuapp.com/api/v1/cars/userinfo/', config)

                .then(function (response2) {
                    // handle success
                    console.log('fff', response2);
                    window.localStorage.setItem('token', JSON.stringify(response.data.access))
                    window.localStorage.setItem('info', JSON.stringify(response2.data))
                    window.location = "/"

                })
                .catch(function (error) {
                    // handle error
                    console.log('ffff', error);

                })
                .then(function () {
                    // always executed
                });





        }).catch(function (error) {
            console.log(error)
        });

    }



    function register(event) {


        event.preventDefault()


        var formData1 = new FormData();


        formData1.append("username", 'odai');
        formData1.append("password", '123456');



        axios.post('https://carsgallary.herokuapp.com/api/token/', formData1
        ).then(function (response) {

            console.log(response)







            var formData2 = new FormData();

            formData2.append("username", singuser);
            formData2.append("password", password);
            formData2.append("email", email);
            formData2.append("is_active", 'true');



            axios.post('https://carsgallary.herokuapp.com/api/v1/cars/adduser/', formData2, { headers: { "Authorization": 'Bearer ' + response.data.access } }
            ).then(function (response2) {

                console.log(response2)






                const config = { headers: { "Authorization": 'Bearer ' + response.data.access } };


                axios.get('https://carsgallary.herokuapp.com/api/v1/cars/userinfo/', config)

                    .then(function (response2) {
                        // handle success
                        console.log('fff', response2);


















                        var formData3 = new FormData();


                        formData3.append("username", singuser);
                        formData3.append("password", password);



                        axios.post('https://carsgallary.herokuapp.com/api/token/', formData3
                        ).then(function (response3) {

                            console.log('tttttttttttt', response3)








                            const config = { headers: { "Authorization": 'Bearer ' + response3.data.access } };


                            axios.get('https://carsgallary.herokuapp.com/api/v1/cars/userinfo/', config)

                                .then(function (response4) {
                                    // handle success
                                    console.log('fff', response4);
                                    window.localStorage.setItem('token', JSON.stringify(response3.data.access))
                                    window.localStorage.setItem('info', JSON.stringify(response4.data))
                                    window.location = "/"


                                })
                                .catch(function (error) {
                                    // handle error
                                    console.log('ffff', error);

                                })
                                .then(function () {
                                    // always executed
                                });





                        }).catch(function (error) {
                            console.log('ttttttttttttt', error)
                        });


                        // window.localStorage.setItem('token',JSON.stringify(response.data.access))
                        // window.localStorage.setItem('info',JSON.stringify(response2.data))


                    })
                    .catch(function (error) {
                        // handle error
                        console.log('ffff', error);

                    })
                    .then(function () {
                        // always executed
                    });





            }).catch(function (error) {
                console.log(error)
            });













        }).catch(function (error) {
            console.log(error)
        });




    }

    return (
        <div>

            <Header />
            <html lang="ar" dir="rtl" class=""><head>




                {/* <link href="static/css/login.css" rel="stylesheet"/> */}
                <link rel="stylesheet" href="../assets/css/app.css" />

            </head>
                <body>
                    <div style={{background:"black"}} class="container-fluid header" style={{ marginTop: '3%' }} >
                        <div class="container">

                            <div   class="content" style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>

                                {/* <div class="container" >
                                        <ul class="breadcrumb">
                                        </ul>    </div> */}

                                <div style={{ width: '35%' }}>
                                    <div class="container" >
                                        <div class="clearfix main_titles_box" style={{ width: '468px' }}>
                                            <h1 class="pull-right"><span>دخول</span></h1>
                                        </div>
                                    </div>

                                    <div class="container" >
                                        <div  class="inner_content sa_forms">
                                            <form id="form-login" action="/user/login" method="post" onSubmit={login}>
                                                <input type="hidden" name="_csrf" class="input" value="CepoTPoD1xCQtfrWfY0pWBhZGn5GY1hppMwJvV55ELBqhQsI10_mVPvXma8s4291awNvOAUiHVHVk0vXEjFA6g==" />
                                                <div>

                                                    <div class="col-lg-12 col-md-12">
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">اسم الامستخدم: </div>
                                                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                                                        <div class="form-group field-userloginform-phonenumber required">
                                                            <input style={{ width: '473px' }} class="input" type="text" id="userloginform-phonenumber" class="form-control" onChange={(e) => setLoginuser(e.target.value)} value={loginuser} name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true" />
                                                        </div>                </div>
                                                    <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">كلمة السر: </div>
                                                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                        

                                                            <div class="form-group field-userloginform-password required">
                                                                <input style={{ width: '473px' }} class="input" type="password" id="userloginform-password" class="form-control" onChange={(e) => setLoginpassword(e.target.value)} value={loginpassword} name="UserLoginForm[password]" dir="ltr" aria-required="true" />
                                                            </div>                    <div class="input_elements_lft">
                                                                <button type="button" class="show_password" id="peye"></button>
                                                            
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

                                    </div> </div>







                                <div  style={{ width: '35%' }}>
                                    <div class="clearfix main_titles_box" style={{ width: '468px' }}>
                                        <h1 class="pull-right"><span>تسجيل</span></h1>
                                    </div>
                                    <div class="inner_content sa_forms">
                                        <form id="form-login" action="/user/login" method="post" onSubmit={register}>
                                            <input class="input" type="hidden" name="_csrf" value="CepoTPoD1xCQtfrWfY0pWBhZGn5GY1hppMwJvV55ELBqhQsI10_mVPvXma8s4291awNvOAUiHVHVk0vXEjFA6g==" />
                                            <div>

                                                <div class="col-lg-12 col-md-12">
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">اسم المستخدم: </div>
                                                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                                                    <div class="form-group field-userloginform-phonenumber required">
                                                        <input class="input" type="text" onChange={(e) => setSinguser(e.target.value)} value={singuser} id="userloginform-phonenumber" class="form-control" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true" />
                                                    </div>                </div>
                                                <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                            </div>
                                            <div class="row">
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">البريد الالكتروني: </div>
                                                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                                                        <div class="form-group field-userloginform-phonenumber required">
                                                            <input class="input" type="text" onChange={(e) => setemail(e.target.value)} value={email} id="userloginform-phonenumber" class="form-control" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true" />
                                                        </div>                </div>
                                                    
                                                    <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>


                                                    <div class='row' style={{ width: '495px' }}>
                                                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">كلمة السر: </div>
                                                        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                            <div class="input_elements clearfix">

                                                                <div style={{ width: '480px' }} class="form-group field-userloginform-password required">
                                                                    <input style={{ width: '473px' }}   class="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="userloginform-password" class="form-control" name="UserLoginForm[password]" dir="ltr" aria-required="true" />
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
                                                            <a href="" class=""> <button style={{transform: "translate(20px,-25px)"}} type="submit" class="btn btn-primary">سجل الآن </button>   </a></label>
                                                    </p>
                                                </div>
                                                <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                            </div>
                                        </form>    </div>

                                </div>
                                {/* <div class="help_box">
                                        <a onclick="PushDataLayer('communication.contact','Communication', 'Contact', 'Phone');" href="" class="btn">اتصل بنا للمساعدة</a>

                                    </div> */}




                            </div>

                        </div>

                    </div>
                </body>
            </html>

        </div>

    )
}