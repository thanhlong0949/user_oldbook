import React, {useState} from "react";
import {SelfOneBook} from "@app/module/self_book/Components/SelfOneBook";
import {Button, Image} from "antd";
import {SelfSetBook} from "@app/module/self_book/Components/SelfSetBook";
import {
  BookOutlined,
  CloseCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import {Icon} from "@app/components/Icon";
import "./indexPostToSelf.scss";

export function PostToSelf(): JSX.Element {
  const [value, setValue] = useState<number | undefined>(undefined);
  const [keyPage, setKeyPage] = useState("view"); // view || post
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

  const listBook11 = [
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/4f/87/d7/75d5f3884d462d1b23b7376c5300896f.png.webp",
      title: "Ăn Sạch Sống Xanh, Tâm Lành Trí Khoẻ",
      author: "Instant Research Institude",
      price: "105.900 ₫",
      status: "Bán",
      category: "Tiểu thuyết",
    },
    // {
    //   uri: "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/25/4d/52/6e5a9b48c1316dc3ccc55df2c955ec24.jpg.webp",
    //   title: "Sách Thay Đổi Cuộc Sống Với Nhân Số Học - Lê Đỗ Quỳnh Hương",
    //   author: "Instant Research Institude",
    //   price: "148.100 ₫",
    //   status: "Bán",
    //   category: "Tiểu thuyết"
    // },
    // {
    //   uri: "https://salt.tikicdn.com/cache/750x750/ts/product/07/3e/ae/26cc99e58483d0030de5e8dc777e3d81.jpg.webp",
    //   title: "Sách Người trong muôn nghề",
    //   author: "Instant Research Institude",
    //   price: "169.000 ₫",
    //   status: "Trao đổi",
    //   category: "Tiểu thuyết"
    // },
  ];

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
