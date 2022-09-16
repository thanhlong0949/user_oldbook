import React from "react";
import "../../assets/css/Pages/Auth/Login.css"
// import { useDispatch, useSelector } from "react-redux";
// import HobbyList from "../components/Home/HobbyList";
// import {addNewHobby, setActiveHobby} from "../redux/actions/hobby";

Login.propTypes = {

};

// const randomnNumber = () => {
//     return 1000 + Math.trunc((Math.random() * 9000 ));
// }

function Login(props) {
    return (
        <div className="container-login">
            <div className="main-login">
                <div className="detail-login">
                    <div className="col-5 cart-img">
                        <img src={require("../../assets/image/images.png")} alt="" className="img-login"/>
                    </div>
                    <div className="col-7 group-input-login">
                        <div className="group-input-login-detail">
                            <div>
                                <h1 className="text-center font-title">Login</h1>
                            </div>
                            <div className="cart-input-login">
                                <input type="" name="" value="" placeholder="Email" className="input-login"/>
                            </div>
                            <div className="cart-input-login">
                                <input type="" name="" value="" placeholder="Password" className="input-login"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;