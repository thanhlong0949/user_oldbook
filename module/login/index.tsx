import React from "react";
import "./index.scss";
import {Formik} from "formik";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {
  CheckboxGlobal,
  InputGlobal,
  InputPasswordGlobal,
} from "@app/components/InputGlobal";
import {UnlockOutlined, UserOutlined} from "@ant-design/icons";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import ApiUser from "@app/api/ApiUser";
import {useMutation} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "@app/redux/slices/UserSlice";
import {useRouter} from "next/router";
// import {LoginValidation} from "@app/validation/login/LoginValidation";
// import {IRootState} from "@app/redux/store";
import {
  noRememberAccount,
  rememberAccount,
} from "@app/redux/slices/RememberAccountSlice";
import {IRootState} from "@app/redux/store";

interface UserAccount {
  email: string;
  password: string;
  pass_jwt: string;
}

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();

  // const isRemember = useSelector(
  //   (state: IRootState) => state.remember.isRemember
  // );

  const initialValues: UserAccount = {
    email: "",
    password: "",
    pass_jwt: "",
  };

  const handleRegister = (): void => {
    router.push("/register");
  };

  const login = useMutation(ApiUser.login);
  const handleLogin = (value: UserAccount): void => {
    // router.push("/home");
    login.mutate(
      {
        email: value.email.trim(),
        password: value.password.trim(),
      },
      {
        onSuccess: (res) => {
          console.log("res", res);
          console.log("res", res);
          const dataUser = {
            accessToken: res.data.accessToken,
          };
          dispatch(loginUser(dataUser));
          router.push("/");
        },
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validateOnChange
      validateOnBlur
      // validationSchema={LoginValidation}
    >
      {({handleSubmit}): JSX.Element => {
        return (
          <div className="page-login-container">
            <div className="title-login-form">
              <span style={{fontWeight: 600}}>Đăng nhập</span>
              <UserOutlined style={{marginLeft: 5}} />
            </div>
            <span className="text-logo">Chợ sách cũ</span>
            <div className="login-container">
              <div className="login-form-item">
                <InputGlobal
                  name="email"
                  placeholder="Email"
                  prefix={<UserOutlined />}
                  className="input_login"
                  onPressEnter={(): void => handleSubmit()}
                />
                <ErrorMessageGlobal name="email" />
              </div>

              <div className="login-form-item">
                <InputPasswordGlobal
                  name="password"
                  placeholder="Password"
                  prefix={<UnlockOutlined />}
                  className="input_login"
                  onPressEnter={(): void => handleSubmit()}
                />
                <ErrorMessageGlobal name="password" />
              </div>

              <div className="forgot-password-wrap">
                {/* <CheckboxGlobal */}
                {/*  name="remember" */}
                {/*  checked */}
                {/*  onChange={(e): void => handleCheckRemember(e.target.checked)} */}
                {/* > */}
                {/*  Nhớ tài khoản */}
                {/* </CheckboxGlobal> */}
                <div>.</div>

                <div>
                  {/* <span */}
                  {/*  className="forgot-password_link" */}
                  {/*  style={{marginRight: 10}} */}
                  {/* > */}
                  {/*  Quên mật khẩu? */}
                  {/* </span> */}
                  <span
                    onClick={handleRegister}
                    className="forgot-password_link"
                  >
                    Đăng kí
                  </span>
                </div>
              </div>

              <ButtonGlobal
                onClick={handleSubmit}
                className="btn-login"
                title="Đăng nhập"
                type="primary-filled"
                loading={login.isLoading}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
