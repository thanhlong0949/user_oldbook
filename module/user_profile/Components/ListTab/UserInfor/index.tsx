import React, {useState} from "react";
import "./index.scss";
import {InputGlobal} from "@app/components/InputGlobal";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import {Formik} from "formik";
import {Radio, RadioChangeEvent, Upload, InputNumber} from "antd";
import {PlusOutlined} from "@ant-design/icons";

export function UserInfor(): JSX.Element {
  const [isChangeInfor, setIsChangeInfor] = useState<boolean>(false);
  const [value, setValue] = useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleChangeInfor = (): void => {
    setIsChangeInfor(!isChangeInfor);
  };
  const handleCancel = (): void => {
    setIsChangeInfor(!isChangeInfor);
  };
  const handleSave = (): void => {
    setIsChangeInfor(!isChangeInfor);
  };
  const listItem = [
    {
      title: "Avatar",
      placeholder: "Ảnh đại diện",
      type: "avatar",
      require,
    },
    {
      title: "Họ",
      placeholder: "Nhập họ",
      type: "input",
      require,
    },
    {
      title: "Tên",
      placeholder: "Nhập tên",
      type: "input",
      require,
    },
    {
      title: "Số điện thoại",
      placeholder: "Nhập số điện thoại",
      type: "input",
    },
    {
      title: "Email",
      placeholder: "Nhập Email",
      type: "input",
      require,
    },
    {
      title: "Giới tính",
      type: "radio",
      onChangeRadio: onChangeRadio,
      radioList: [
        {
          value: 1,
          label: "Nam",
        },
        {value: 0, label: "Nữ"},
      ],
      require,
    },
    {
      title: "Birthday",
      placeholder: "DD/MM/YYYY",
      type: "input",
      require,
    },
    {
      title: "Rate",
      placeholder: "Rate",
      type: "number",
    },
  ];

  const initialValues = {
    username: "",
    password: "",
    remember: false,
    pass_jwt: "",
  };

  return (
    <div className="user-profile-tab-container">
      <h3>THÔNG TIN TÀI KHOẢN</h3>
      <div style={{display: "flex"}}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSave}
          validateOnChange
          validateOnBlur
          // validationSchema={LoginValidation}
        >
          {({handleSubmit}): JSX.Element => {
            return (
              <div
                className="formik-user-profile-container"
                style={{width: "100%", padding: "0 24px"}}
              >
                <div className="user-profile-container">
                  {listItem.map((item, index) => (
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
                      {item.type === "avatar" && (
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
                            <Upload
                              name="avatar"
                              listType="picture-card"
                              className="avatar-uploader"
                              showUploadList={true}
                              maxCount={1}
                              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              // beforeUpload={beforeUpload}
                              // onChange={handleChange}
                            >
                              {/* {imageUrl ? (
                                <img
                                  src={imageUrl}
                                  alt="avatar"
                                  style={{width: "100%"}}
                                />
                              ) : (
                                uploadButton
                              )} */}
                              <PlusOutlined />
                            </Upload>
                          </div>
                          <ErrorMessageGlobal name="username" />
                        </div>
                      )}
                      {item.type === "number" && (
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
                            <InputNumber
                              min={1}
                              max={100000}
                              defaultValue={1}
                            />
                          </div>
                          <ErrorMessageGlobal name="username" />
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="group-button">
                    {!isChangeInfor ? (
                      <ButtonGlobal
                        onClick={handleChangeInfor}
                        className="btn-fix"
                        title="Sửa"
                        type="primary-filled"
                        // loading={login.isLoading}
                      />
                    ) : (
                      <>
                        <ButtonGlobal
                          onClick={handleCancel}
                          className="btn-cancel"
                          title="Huỷ"
                          // loading={login.isLoading}
                        />
                        <ButtonGlobal
                          onClick={handleSubmit}
                          className="btn-save"
                          title="OK"
                          type="primary-filled"
                          // loading={login.isLoading}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
        {/* <div style={{width: "20%", paddingLeft: 25}}>
          <Image
            preview={false}
            width={200}
            src="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
          />
          <p style={{textAlign: "center", fontSize: 20}}>Rate: 53</p>
        </div> */}
      </div>
    </div>
  );
}
