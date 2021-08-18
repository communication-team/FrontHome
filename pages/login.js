import Header from "../components/Header"
import Head2 from "../components/Head2";
// import 'assets/css/login.css'
import react, { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {

    const [loginuser, setLoginuser] = useState([]);
    const [loginpassword, setLoginpassword] = useState([]);
    const [singuser, setSinguser] = useState([]);
    const [password, setPassword] = useState([]);
    const [copass, setCopass] = useState([]);
    const [email, setemail] = useState([]);


    const notify = () => toast.error("Your Password and Username not correct ! ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const notifyRe = () => toast.error("Try to add different informations ! ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    async function getData() {


        const res = await axios.get('https://carsgallary.herokuapp.com/api/v1/cars/carinfo/' + router.query.post)

            .then(function (response) {
                // handle success
                console.log('fff', response);

                setInfo(response.data)
            })
            .catch(function (error) {
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
                    notify()
                    console.log('ffff', error);

                })
                .then(function () {
                    // always executed
                });





        }).catch(function (error) {
            notify()
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
                notifyRe()
                console.log(error)
            });













        }).catch(function (error) {
            console.log(error)
        });




    }

    return (
        <div>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

<ToastContainer />
            <html lang="ar" dir="rtl" className="">
            <Head2/>

                <body>
                    <div id='HeaderNeedSpace'>
                    <Header />
                    </div>
                <link rel="stylesheet" href="../assets/css/app.css" />
                {/* <link href="static/css/login.css" rel="stylesheet"/> */}
                    <div  className="container-fluid" style={{ marginTop: '3%' }} >
                        <div className="container">

                            <div   className="content" style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>

                                {/* <div className="container" >
                                        <ul className="breadcrumb">
                                    </ul>    </div> */}

                                <div style={{ width: '35%' }}>
                                    <div className="container" >
                                        <div className="clearfix main_titles_box" style={{ width: '468px' }}>
                                            <h1 className="pull-right"><span>دخول</span></h1>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div  className="inner_content sa_forms">
                                            <form id="form-login" action="/user/login" method="post" onSubmit={login}>
                                                <input type="hidden" name="_csrf" className="input" value="CepoTPoD1xCQtfrWfY0pWBhZGn5GY1hppMwJvV55ELBqhQsI10_mVPvXma8s4291awNvOAUiHVHVk0vXEjFA6g==" />
                                                <div>

                                                    <div className="col-lg-12 col-md-12">
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">اسم الامستخدم: </div>
                                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                                                        <div className="form-group field-userloginform-phonenumber required">
                                                            <input style={{ width: '473px' }}  type="text" id="userloginform-phonenumber" className="form-control input" onChange={(e) => setLoginuser(e.target.value)} value={loginuser} name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true" />
                                                        </div>                </div>
                                                    <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">كلمة السر: </div>
                                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                        

                                                            <div className="form-group field-userloginform-password required">
                                                                <input style={{ width: '473px' }}  type="password" id="userloginform-password" className="form-control input" onChange={(e) => setLoginpassword(e.target.value)} value={loginpassword} name="UserLoginForm[password]" dir="ltr" aria-required="true" />
                                                            </div>                    <div className="input_elements_lft">
                                                                <button type="button" className="show_password" id="peye"></button>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes">
                                                    </div>
                                                </div>



                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles"></div>
                                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                        <p className="sa_forms_btns">

                                                            <button type="submit" className="btn btn-primary">دخول</button>
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                                </div>
                                            </form>    </div>

                                    </div> </div>







                                <div  style={{ width: '35%' }}>
                                    <div className="clearfix main_titles_box" style={{ width: '468px' }}>
                                        <h1 className="pull-right"><span>تسجيل</span></h1>
                                    </div>
                                    <div className="inner_content sa_forms">
                                        <form id="form-login" action="/user/login" method="post" onSubmit={register}>
                                            <input className="input" type="hidden" name="_csrf" value="CepoTPoD1xCQtfrWfY0pWBhZGn5GY1hppMwJvV55ELBqhQsI10_mVPvXma8s4291awNvOAUiHVHVk0vXEjFA6g==" />
                                            <div>

                                                <div className="col-lg-12 col-md-12">
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">اسم المستخدم: </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                                                    <div className="form-group field-userloginform-phonenumber required">
                                                        <input  type="text" onChange={(e) => setSinguser(e.target.value)} value={singuser} id="userloginform-phonenumber" className="form-control input" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true" />
                                                    </div>                </div>
                                                <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                            </div>
                                            <div className="row">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">البريد الالكتروني: </div>
                                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                                                        <div className="form-group field-userloginform-phonenumber required">
                                                            <input type="text" onChange={(e) => setemail(e.target.value)} value={email} id="userloginform-phonenumber" className="input form-control" name="UserLoginForm[phoneNumber]" dir="ltr" aria-required="true" />
                                                        </div>                </div>
                                                    
                                                    <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>


                                                    <div className='row' style={{ width: '495px' }}>
                                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles">كلمة السر: </div>
                                                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                            <div className="input_elements clearfix">

                                                                <div style={{ width: '480px' }} className="form-group field-userloginform-password required">
                                                                    <input style={{ width: '473px' }}    type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="userloginform-password" className="form-control input" name="UserLoginForm[password]" dir="ltr" aria-required="true" />
                                                                </div>                    <div className="input_elements_lft">
                                                                    <button type="button" className="show_password" id="peye"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles"></div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                                                </div>
                                                <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sa_forms_titles"></div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <p className="sa_forms_btns">
                                                        <label className="clearfix">
                                                            <a href="" className=""> <button style={{transform: "translate(20px,-25px)"}} type="submit" className="btn btn-primary">سجل الآن </button>   </a></label>
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 sa_forms_notes"></div>
                                            </div>
                                        </form>    </div>

                                </div>
                                {/* <div className="help_box">
                                        <a onclick="PushDataLayer('communication.contact','Communication', 'Contact', 'Phone');" href="" className="btn">اتصل بنا للمساعدة</a>

                                    </div> */}




                            </div>

                        </div>

                    </div>
                    <div id='footerNeedPadding'>

                    <Footer/>
                    </div>
                </body>
            </html>

        </div>

    )
}