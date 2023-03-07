import React, {useState} from "react";
import "./index.scss";
import {InputGlobal} from "@app/components/InputGlobal";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {Radio, RadioChangeEvent} from "antd";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import {Formik} from "formik";

export function Address(): JSX.Element {
  const [value, setValue] = useState(1);
  const [isChangeInfor, setIsChangeInfor] = useState<boolean>(false);
  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
  };
  const handleChangeInfor = (): void => {
    setIsChangeInfor(!isChangeInfor);
  };
  const handleCancel = (): void => {
    setIsChangeInfor(!isChangeInfor);
  };
  const handleSave = (): void => {};

  const addressList = [
    {
      title: "Tỉnh",
      placeholder: "Nhập tỉnh",
      type: "input",
      require,
    },
    {
      title: "Thành phố",
      placeholder: "Nhập thành phố",
      type: "input",
      require,
    },
    {
      title: "Quận / Huyện",
      placeholder: "Nhập quận / huyện",
      type: "input",
      require,
    },
    {
      title: "Phường / Xã",
      placeholder: "Nhập phường / Xã",
      type: "input",
    },
    {
      title: "Địa chỉ chi tiết",
      placeholder: "Tên đường / thôn xóm",
      type: "input",
    },
    // {
    //   title: "Giới tính",
    //   type: "radio",
    //   onChangeRadio: onChangeRadio,
    //   radioList: [
    //     {
    //       value: 1,
    //       label: "Nam",
    //     },
    //     {value: 0, label: "Nữ"},
    //   ],
    //   require,
    // },
  ];

  const initialValues = {
    username: "",
    password: "",
    remember: false,
    pass_jwt: "",
  };

  return (
    <div className="address-tab-container">
      <h3>THÊM ĐỊA CHỈ MỚI</h3>
      <div className="main">
        {/* <div className="contact"> */}
        {/*  <h2>Thông tin liên hệ</h2> */}
        {/*  <Formik */}
        {/*    initialValues={initialValues} */}
        {/*    onSubmit={handleSave} */}
        {/*    validateOnChange */}
        {/*    validateOnBlur */}
        {/*    // validationSchema={LoginValidation} */}
        {/*  > */}
        {/*    {({handleSubmit}): JSX.Element => { */}
        {/*      return ( */}
        {/*        <div className="formik-contact-tab-container"> */}
        {/*          <div className="contact-tab-container"> */}
        {/*            {contactList.map((item, index) => ( */}
        {/*              <div key={index}> */}
        {/*                {item.type === "input" && ( */}
        {/*                  <div className="form-item"> */}
        {/*                    <div className="item-detail"> */}
        {/*                      <InputGlobal */}
        {/*                        name="username" */}
        {/*                        placeholder={item.placeholder} */}
        {/*                        // prefix={<UserOutlined />} */}
        {/*                        className="input_login" */}
        {/*                        onPressEnter={(): void => handleSubmit()} */}
        {/*                      /> */}
        {/*                    </div> */}
        {/*                    <ErrorMessageGlobal name="username" /> */}
        {/*                  </div> */}
        {/*                )} */}
        {/*                {item.type === "radio" && ( */}
        {/*                  <div className="form-item"> */}
        {/*                    <div className="title"> */}
        {/*                      <span>{item.title}:</span> */}
        {/*                      {item.require && ( */}
        {/*                        <span */}
        {/*                          style={{ */}
        {/*                            color: "red", */}
        {/*                            marginLeft: 3, */}
        {/*                            fontSize: 15, */}
        {/*                          }} */}
        {/*                        > */}
        {/*                          * */}
        {/*                        </span> */}
        {/*                      )} */}
        {/*                    </div> */}
        {/*                    <div className="item-detail"> */}
        {/*                      <Radio.Group */}
        {/*                        onChange={item.onChangeRadio} */}
        {/*                        value={value} */}
        {/*                      > */}
        {/*                        {item.radioList && */}
        {/*                          item.radioList.map((itemRadio, index) => ( */}
        {/*                            <Radio key={index} value={itemRadio.value}> */}
        {/*                              {itemRadio.label} */}
        {/*                            </Radio> */}
        {/*                          ))} */}
        {/*                      </Radio.Group> */}
        {/*                    </div> */}
        {/*                    <ErrorMessageGlobal name="username" /> */}
        {/*                  </div> */}
        {/*                )} */}
        {/*              </div> */}
        {/*            ))} */}
        {/*          </div> */}
        {/*        </div> */}
        {/*      ); */}
        {/*    }} */}
        {/*  </Formik> */}
        {/* </div> */}
        <div className="address">
          <h2>ĐỊA CHỈ</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSave}
            validateOnChange
            validateOnBlur
            // validationSchema={LoginValidation}
          >
            {({handleSubmit}): JSX.Element => {
              return (
                <div className="formik-address-tab-container">
                  <div className="address-tab-container">
                    {addressList.map((item, index) => (
                      <div key={index}>
                        {item.type === "input" && (
                          <div className="form-item">
                            <div className="title">
                              <span>{item.title}:</span>
                              {item.require && (
                                <span
                                  style={{
                                    color: "red",
                                    marginLeft: 3,
                                    fontSize: 15,
                                  }}
                                >
                                  *
                                </span>
                              )}
                            </div>
                            <div className="item-detail">
                              <InputGlobal
                                name="username"
                                placeholder={item.placeholder}
                                // prefix={<UserOutlined />}
                                className="input_login"
                                onPressEnter={(): void => handleSubmit()}
                              />
                            </div>
                            <ErrorMessageGlobal name="username" />
                          </div>
                        )}
                        {item.type === "radio" && (
                          <div className="form-item">
                            <div className="title">
                              <span>{item.title}:</span>
                              {item.require && (
                                <span
                                  style={{
                                    color: "red",
                                    marginLeft: 3,
                                    fontSize: 15,
                                  }}
                                >
                                  *
                                </span>
                              )}
                            </div>
                            <div className="item-detail">
                              <Radio.Group
                                onChange={item.onChangeRadio}
                                value={value}
                              >
                                {item.radioList &&
                                  item.radioList.map((itemRadio, index) => (
                                    <Radio key={index} value={itemRadio.value}>
                                      {itemRadio.label}
                                    </Radio>
                                  ))}
                              </Radio.Group>
                            </div>
                            <ErrorMessageGlobal name="username" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
      <div className="lineHorizoltal" />
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <div style={{display: "flex"}}>
          <div style={{marginRight: 5}}>
            <ButtonGlobal
              onClick={handleCancel}
              className="btn-cancel"
              title="Huỷ"
              // loading={login.isLoading}
            />
          </div>
          <ButtonGlobal
            onClick={handleSave}
            className="btn-save"
            title="Lưu địa chỉ"
            type="primary-filled"
            // loading={login.isLoading}
          />
          {/* {!isChangeInfor ? ( */}
          {/*  <ButtonGlobal */}
          {/*    onClick={handleChangeInfor} */}
          {/*    className="btn-fix" */}
          {/*    title="Sửa" */}
          {/*    type="primary-filled" */}
          {/*    // loading={login.isLoading} */}
          {/*  /> */}
          {/* ) : ( */}
          {/*  <> */}
          {/*    <div style={{marginRight: 5}}> */}
          {/*      <ButtonGlobal */}
          {/*        onClick={handleCancel} */}
          {/*        className="btn-cancel" */}
          {/*        title="Huỷ" */}
          {/*        // loading={login.isLoading} */}
          {/*      /> */}
          {/*    </div> */}
          {/*    <ButtonGlobal */}
          {/*      onClick={handleSave} */}
          {/*      className="btn-save" */}
          {/*      title="Lưu địa chỉ" */}
          {/*      type="primary-filled" */}
          {/*      // loading={login.isLoading} */}
          {/*    /> */}
          {/*  </> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
