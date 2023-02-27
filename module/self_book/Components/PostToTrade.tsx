import React, {useEffect, useState} from "react";
import "../index.scss";
import Navbar from "@app/components/Layout/Navbar/Navbar";
import {
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  message,
  Upload,
  Button,
} from "antd";
import {
  CloseOutlined,
  LoadingOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type {UploadChangeParam} from "antd/es/upload";
import type {RcFile, UploadFile, UploadProps} from "antd/es/upload/interface";
import {useRouter} from "next/router";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
export function PostToTrade(): JSX.Element {
  const router = useRouter();
  const [sellOrTrade, setSellOrderTrade] = useState<string>(""); // trade - sell - " "
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [valueItemBook, setValueItemBook] = useState<string>("");
  const [arrayBookName, setArrayBookName] = useState([]);
  const handleAddBook = (): void => {
    console.log("handleAddBook");
    setIsDisable(false);
    setIsAdd(true);
  };

  console.log("arrayBookName", arrayBookName);
  const handleSubmitNameBook = (): void => {
    setIsDisable(true);
    setIsAdd(false);
    if (valueItemBook !== " ") {
      setArrayBookName((arrayBookName: any) => [
        ...arrayBookName,
        valueItemBook,
      ]);
    } else {
      setIsDisable(true);
    }
    setValueItemBook("");
  };

  const clearItemBook = (key: any): void => {
    const arrayBookNameTmp = arrayBookName;
    arrayBookNameTmp.pop(key);
    setArrayBookName(arrayBookNameTmp);
    // setArrayBookName(arrayBookNameTmp);
    console.log("sss", arrayBookNameTmp, arrayBookNameTmp.length);
  };

  // console.log("arrayBookName", arrayBookName);

  const handleCancel = (): void => {
    setSellOrderTrade("");
  };
  const handleSubmit = (): void => {
    setArrayBookName([]);
    router.push("/manager_permission");
    console.log("handel submit");
  };

  const handleChangeUploadImage: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const dataList = [
    {
      label: "Tiểu thuyết",
      value: "1",
    },
    {
      label: "Khoa học công nghệ",
      value: "2",
    },
    {
      label: "Kinh tế",
      value: "a",
    },
    {
      label: "Văn học nghệ thuật",
      value: "3",
    },
    {
      label: "Lịch sử",
      value: "4",
    },
    {
      label: "Truyện ",
      value: "5",
    },
    {
      label: "Tâm linh",
      value: "6",
    },
    {
      label: "Du Lịch",
      value: "7",
    },
    {
      label: "Tâm Lý",
      value: "8",
    },
    {
      label: "Giáo dục",
      value: "9",
    },
    {
      label: "Pháp Luật ",
      value: "10",
    },
    {
      label: "Âm Nhạc",
      value: "11",
    },
    {
      label: "Kiểm tra",
      value: "12",
    },
    {
      label: "Adult",
      value: "13",
    },
    {
      label: "Y tế, sức khỏe, thể dục",
      value: "14",
    },
    {
      label: "Khoa Học Viễn tưỡng",
      value: "15",
    },
  ];
  return (
    <div>
      <div className="item-formik">
        <div className="action-item" />
      </div>
      <div className="item-formik">
        <div className="title-text">
          <p>Add Category</p>
        </div>
        <div className="action-item">
          <Select
            defaultValue="Tiểu thuyết"
            style={{width: 120}}
            onChange={handleChange}
            options={dataList}
          />
        </div>
      </div>
      {/* <div className="item-formik"> */}
      {/*  <div className="title-text"> */}
      {/*    <p>Book Details</p> */}
      {/*  </div> */}
      {/*  <div className="action-item"> */}
      {/*    <Radio.Group onChange={onChange} value={value}> */}
      {/*      <Space direction="vertical"> */}
      {/*        <Radio value={1}>Enter book details manually</Radio> */}
      {/*        <Radio value={2}> */}
      {/*          Automatically; by just typing the ISBN number */}
      {/*        </Radio> */}
      {/*      </Space> */}
      {/*    </Radio.Group> */}
      {/*  </div> */}
      {/* </div> */}
      <div className="item-formik">
        <div className="title-text">
          <p>ISBN</p>
        </div>
        <div className="action-item">
          <Input placeholder="Enter 13 digit ISBN number" />
        </div>
      </div>
      <div className="item-formik">
        <div className="title-text">
          <p>Book Type</p>
        </div>
        <div className="action-item">
          <Select
            defaultValue="lucy"
            style={{width: 120}}
            onChange={handleChange}
            options={[
              {value: "jack", label: "Jack"},
              {value: "lucy", label: "Lucy"},
              {value: "Yiminghe", label: "yiminghe"},
              {value: "disabled", label: "Disabled", disabled: true},
            ]}
          />
        </div>
      </div>
      <div className="item-formik">
        <div className="title-text">
          <p>Book Condition</p>
        </div>
        <div className="action-item">
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Đã sử dụng</Radio>
            <Radio value={2}>Còn mới</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="item-formik">
        <div className="title-text">
          <p>Upload Photos</p>
        </div>
        <div className="action-item">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChangeUploadImage}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{width: "100%"}} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
      </div>

      <div className="item-formik">
        <div className="title-text">
          <p>Initial Price</p>
        </div>
        <div className="action-item">
          <Input placeholder="Enter initial price" />
        </div>
      </div>
      <div>
        <div className="item-formik">
          <div className="title-text">
            <p>Category book to trade</p>
          </div>
          <div className="action-item">
            <Select
              mode="multiple"
              allowClear
              style={{width: "100%"}}
              placeholder="Please select"
              onChange={handleChange}
              options={dataList}
            />
          </div>
        </div>
        <div className="item-formik">
          <div className="title-text">
            <p>Name book to trade</p>
          </div>
          <div className="action-item">
            <Input
              onChange={(e) => {
                setValueItemBook(e.target.value);
                console.log("value", e.target.value);
              }}
              value={valueItemBook}
              disabled={isDisable}
              placeholder="Enter name book to trade"
            />
            {!isAdd ? (
              <PlusCircleOutlined
                className="icon-add"
                onClick={handleAddBook}
                style={{fontSize: 18}}
              />
            ) : (
              <Button
                onClick={handleSubmitNameBook}
                className="button-submit"
                type="primary"
              >
                Thêm
              </Button>
            )}

            <div className="row-name-book">
              {arrayBookName.length > 0 &&
                arrayBookName.map((item, index) => (
                  <div key={index} className="item">
                    <span>{item}</span>
                    {item !== undefined && (
                      <CloseOutlined
                        onClick={() => clearItemBook(index)}
                        style={{fontSize: 14}}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <div>
          <Button onClick={handleCancel} style={{marginRight: "5px"}}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            style={{marginRight: "5px"}}
            type="primary"
          >
            ok
          </Button>
        </div>
      </div>
    </div>
  );
}
