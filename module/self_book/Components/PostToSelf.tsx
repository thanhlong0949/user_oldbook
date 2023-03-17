import React, {useState} from "react";
import {SelfOneBook} from "@app/module/self_book/Components/SelfOneBook";
import {Button, Image, Input, Select, Upload} from "antd";
import {
  BookOutlined,
  DollarCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./indexPostToSelf.scss";

export function PostToSelf(): JSX.Element {
  const [value, setValue] = useState<number | undefined>(undefined);
  const [keyPage, setKeyPage] = useState("view"); // view || post
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [listBook, setListBook] = useState([
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/4f/87/d7/75d5f3884d462d1b23b7376c5300896f.png.webp",
      title: "Ăn Sạch Sống Xanh, Tâm Lành Trí Khoẻ",
      author: "Instant Research Institude",
      price: "105.900 ₫",
      status: "Bán",
      category: "Tiểu thuyết",
    },
  ]);
  console.log("value", value);

  const handleReset = (): void => {
    setKeyPage("view");
  };

  const handleAddBook = (): void => {
    setKeyPage("post");
  };

  const handleChangeUploadImage = (): void => {};

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Tải ảnh lên</div>
    </div>
  );

  return (
    <div className="post-to-self-container">
      {keyPage === "view" ? (
        <div>
          <div
            style={{
              marginBottom: 20,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={handleReset}
              style={{
                marginRight: "5px",
              }}
              type="primary"
            >
              Đăng bán
            </Button>
            <Button
              onClick={handleAddBook}
              style={{
                marginRight: "5px",
              }}
              type="primary"
            >
              Thêm sách
            </Button>
          </div>
          <div className="item-formik">
            <div className="title-text">
              <span>Danh mục sách</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Select
                defaultValue="Tiểu thuyết"
                style={{width: 120}}
                // onChange={handleChange}
                // options={dataList}
              />
            </div>
          </div>
          <div className="item-formik">
            <div className="title-text">
              <span>Thể loại sách</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Input placeholder="Nhập thể loại sách" />
            </div>
          </div>
          <div className="item-formik">
            <div className="title-text">
              <span>Tiêu đề bài đăng</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Input placeholder="Nhập thể loại sách" />
            </div>
          </div>
          <div className="item-formik">
            <div className="title-text">
              <span>Ảnh bài đăng</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                // beforeUpload={beforeUpload}
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
              <span>Thể loại sách</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Input placeholder="Nhập thể loại sách" />
            </div>
          </div>
          <div className="item-formik">
            <div className="title-text">
              <span>Gía gốc</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Input placeholder="Nhập giá gốc" />
            </div>
          </div>
          <div className="item-formik">
            <div className="title-text">
              <span>Gía bán</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Input placeholder="Nhập giá" />
            </div>
          </div>
          <div className="item-formik">
            <div className="title-text">
              <span>Thêm địa chỉ</span>
              <span className="require">*</span>
            </div>
            <div className="action-item">
              <Input placeholder="Số nhà - tên đường - phường/xã - quận/huyện - tỉnh/TP" />
            </div>
          </div>

          {value === undefined && (
            <div className="home-list-book">
              {listBook.map((item, index) => (
                <div className="item-book" key={index}>
                  {/* <div className="icon-delete">
                    <CloseCircleOutlined />
                  </div> */}
                  <Image
                    preview={false}
                    width={160}
                    height={160}
                    src={item.uri}
                  />
                  <div className="text-title">{item.title}</div>
                  <div className="author">
                    Tác giả:{item.author} - (còn mới)
                  </div>
                  <div className="row-end">
                    <div>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <DollarCircleOutlined />
                        <div className="text-align-center">{item.price}</div>
                      </div>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <BookOutlined />
                        <div className="text-align-center">{item.category}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <SelfOneBook
          setListBook={setListBook}
          setKeyPage={setKeyPage}
          handleReset={handleReset}
        />
      )}

      {/* {value === 2 && <SelfSetBook handleReset={handleReset} />} */}
    </div>
  );
}
