import React from "react";
import "./index.scss";
import {Formik} from "formik";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {
  InputGlobal,
  CheckboxGlobal,
  InputPasswordGlobal,
} from "@app/components/InputGlobal";
import {UnlockOutlined, UserOutlined} from "@ant-design/icons";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import ApiUser from "@app/api/ApiUser";
import {useMutation} from "react-query";
import {useDispatch} from "react-redux";
// import {loginUser} from "@app/redux/slices/UserSlice";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";
// import {LoginValidation} from "@app/validation/login/LoginValidation";
// import {IRootState} from "@app/redux/store";
import {
  noRememberAccount,
  rememberAccount,
} from "@app/redux/slices/RememberAccountSlice";

interface UserAccount {
  username: string;
  password: string;
  remember: boolean;
  pass_jwt: string;
}

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();

  // const isRemember = useSelector(
  //   (state: IRootState) => state.remember.isRemember
  // );

  const initialValues: UserAccount = {
    username: "",
    password: "",
    remember: false,
    pass_jwt: "",
  };

  const login = useMutation(ApiUser.login);
  const handleLogin = (value: UserAccount): void => {
    router.push("/home");
    // login.mutate(
    //   {
    //     username: value.username.trim(),
    //     password: value.password.trim(),
    //     has_role: true,
    //   },
    //   {
    //     onSuccess: (res) => {
    //       const dataUser = {
    //         accessToken: res.response.access_token,
    //         expires_in: res.response.expires_in,
    //         role: res.role,
    //         pass_jwt: res.response.pass_jwt,
    //       };
    //       dispatch(loginUser(dataUser));
    //       router.push("/");
    //     },
    //   }
    // );
  };

  const handleCheckRemember = (checked: boolean): void => {
    if (checked) {
      dispatch(rememberAccount());
      sessionStorage.removeItem("isRemember");
    } else {
      dispatch(noRememberAccount());
      sessionStorage.setItem("isRemember", "false");
    }
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
                  name="username"
                  placeholder="Username"
                  prefix={<UserOutlined />}
                  className="input_login"
                  onPressEnter={(): void => handleSubmit()}
                />
                <ErrorMessageGlobal name="username" />
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
                <CheckboxGlobal
                  name="remember"
                  checked
                  onChange={(e): void => handleCheckRemember(e.target.checked)}
                >
                  Nhớ tài khoản
                </CheckboxGlobal>

                <span className="forgot-password_link">Quên mật khẩu?</span>
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
