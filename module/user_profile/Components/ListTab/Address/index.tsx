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
      <h3>Danh sách địa chỉ</h3>
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
