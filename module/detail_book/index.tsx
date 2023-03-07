import React, {useState} from "react";
import "./index.scss";
import Navbar from "@app/components/Layout/Navbar/Navbar";
import {Button, Image, Select} from "antd";
import {
  CheckCircleFilled,
  DollarCircleOutlined,
  EyeOutlined,
  GlobalOutlined,
  HeartOutlined,
  MoneyCollectOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useRouter} from "next/router";
import {BreakCrumGlobal} from "@app/components/BreakCrumGlobal";

export function DetailBook(): JSX.Element {
  const router = useRouter();
  const keyPage = router.query.key;
  const imagePreview = [
    {
      url: "https://bizweb.dktcdn.net/100/415/039/products/dac-nhan-tam-biamem2019-76k-bia1.jpg?v=1625125173703",
    },
    {
      url: "https://salt.tikicdn.com/cache/280x280/ts/product/05/3f/91/9e0157711ad88490a2497018aaf79bad.png.webp",
    },
    {
      url: "https://salt.tikicdn.com/cache/280x280/ts/product/15/28/5d/d086661715806b0cd6053f2a40c5e1a4.jpg.webp",
    },
  ];
  const [imageCurent, setImageCurent] = useState(
    "https://bizweb.dktcdn.net/100/415/039/products/dac-nhan-tam-biamem2019-76k-bia1.jpg?v=1625125173703"
  );
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

  const handleListImage = () => {
    return imagePreview.map((el, index) => (
      <div
        className="item-book"
        onClick={() => setImageCurent(el.url)}
        key={index}
      >
        <Image width={50} height={70} preview={false} src={el.url} />
      </div>
    ));
  };
  return (
    <div className="detail-book-container-new">
      <Navbar />
      <div className="self-book">
        <BreakCrumGlobal
          listBreakcrum={
            keyPage === "Bán"
              ? ["Trang chủ", "Tất cả sách", "Bán sách"]
              : ["Trang chủ", "Tất cả sách", "Trao đổi"]
          }
        />
        <div className="main">
          <div className="image-book">
            <div className="icon">
              <div className="group-icon">
                <ShareAltOutlined style={{fontSize: "25px", width: "45px"}} />
                <HeartOutlined style={{fontSize: "25px"}} />
              </div>
            </div>
            <div className="image">
              <div style={{display: "flex", justifyContent: "center"}}>
                <Image
                  width={200}
                  height={260}
                  preview={false}
                  src={imageCurent}
                />
              </div>
              <div className="horizontalLine" />
              <div className="group-image-preview">{handleListImage()}</div>
            </div>
          </div>
          <div className="detail-book">
            <h2 style={{color: "#333"}}>
              Youth Railway Recruitment Board Reasoning Chapterwise Solved
              Papers
            </h2>
            {keyPage === "Bán" ? (
              <div className="price">
                <DollarCircleOutlined />
                <span style={{marginLeft: "5px"}}>275$</span>
              </div>
            ) : (
              <div>
                <Button type="primary" icon={<MoneyCollectOutlined />}>
                  Trao đổi
                </Button>
                <Button
                  style={{marginLeft: 7}}
                  type="primary"
                  onClick={() => router.push("/chat-seller")}
                >
                  Chat với người bán
                </Button>
              </div>
            )}

            {keyPage === "Bán" ? (
              <div className="button-sale">
                <Button type="primary" icon={<MoneyCollectOutlined />}>
                  Mua ngay
                </Button>
                <Button
                  style={{marginLeft: 7}}
                  type="primary"
                  onClick={() => router.push("/chat-seller")}
                >
                  Chat với người bán
                </Button>
              </div>
            ) : (
              <div />
            )}

            <div className="group-text">
              <div className="row-text">
                <div className="title">Tên</div>
                <div className="detail">Đắc Nhân Tâm</div>
              </div>
              <div className="row-text">
                <div className="title">Người đăng</div>
                <div className="detail">NaN</div>
              </div>
              <div className="row-text">
                <div className="title">Ngày đăng</div>
                <div className="detail">10/02/2023</div>
              </div>
              <div className="row-text">
                <div className="title">Thể loại sách</div>
                <div className="detail">Bìa cứng</div>
              </div>
              <div className="row-text">
                <div className="title">Tình trạng</div>
                <div className="detail">Còn mới</div>
              </div>
              <div className="row-text">
                <div className="title">Thể loại</div>
                <div className="detail">Sách tự sự</div>
              </div>
              <div className="row-text">
                <div className="title">Tác giả</div>
                <div className="detail">Dale Carnegie</div>
              </div>
              <div className="row-text">
                <div className="title">Ngôn ngữ</div>
                <div className="detail"> Tiếng Anh</div>
              </div>
              {keyPage !== "Bán" && (
                <div>
                  <div className="row-text">
                    <div className="title">Thể loại sách</div>
                    <div className="detail">
                      <Select
                        mode="multiple"
                        allowClear
                        style={{width: "50%"}}
                        placeholder="Please select"
                        onChange={() => console.log("select category")}
                        options={dataList}
                      />
                    </div>
                  </div>
                  <div className="row-text">
                    <div className="title">Tên sách</div>
                    <div className="detail">
                      <Select
                        mode="multiple"
                        allowClear
                        style={{width: "50%"}}
                        placeholder="Please select"
                        onChange={() => console.log("select category")}
                        options={dataList}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="description">
          <div className="left">
            <h3>Mô tả</h3>
            <p>Dehli univercity MIL HILDI</p>
            <p className="detail">
              When you call, don't forget to mention that you found this ad on
              Clankart.
            </p>
            <div className="row-info">
              <span>Id: 2701675580987505</span>
              <span>Ngày đăng: Sun, 05 Feb 2023</span>
              <div style={{display: "flex", alignItems: "center"}}>
                <EyeOutlined style={{fontSize: 18, marginRight: "2px"}} />
                <span>20 lượt xem</span>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>Liên hệ</h3>
            <div className="row1">
              <div className="icon">
                <UserOutlined style={{fontSize: 20}} />
              </div>
              <div className="detail-icon">
                <h4>Anaya</h4>
                <CheckCircleFilled
                  style={{marginRight: 4, marginLeft: 4, color: "#26a541"}}
                />
                <h5>Xác thực</h5>
              </div>
            </div>
            <div className="row1">
              <div className="icon">
                <GlobalOutlined style={{fontSize: 20}} />
              </div>
              <div className="detail-icon">
                <h5>North West Delhi (110009), DELHI</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
