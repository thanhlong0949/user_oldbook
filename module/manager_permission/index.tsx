import "./index.scss";
import {Button, Image, Pagination} from "antd";
import {useState} from "react";
import {useRouter} from "next/router";
import {DollarCircleOutlined} from "@ant-design/icons";
import {Icon} from "@app/components/Icon";
import {BreakCrumGlobal} from "@app/components/BreakCrumGlobal";

export function ManagerPermission(): JSX.Element {
  const router = useRouter();
  const [dataFilter, setDataFilter] = useState<object>({});

  const toDetailBook = (key: string): void => {
    router.push({
      pathname: "/detail_book",
      query: {key: key},
    });
  };

  console.log("dataFilter", dataFilter);

  const listBook = [
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/4f/87/d7/75d5f3884d462d1b23b7376c5300896f.png.webp",
      title: "Ăn Sạch Sống Xanh, Tâm Lành Trí Khoẻ",
      author: "Instant Research Institude",
      price: "105.900 ₫",
      status: "Bán",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/25/4d/52/6e5a9b48c1316dc3ccc55df2c955ec24.jpg.webp",
      title: "Sách Thay Đổi Cuộc Sống Với Nhân Số Học - Lê Đỗ Quỳnh Hương",
      author: "Instant Research Institude",
      price: "148.100 ₫",
      status: "Bán",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/07/3e/ae/26cc99e58483d0030de5e8dc777e3d81.jpg.webp",
      title: "Sách Người trong muôn nghề",
      author: "Instant Research Institude",
      price: "169.000 ₫",
      status: "Trao đổi",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/e5/b2/ae/5f00f99d3c3a4a610ee50ced11380a20.jpg.webp",
      title:
        "Sách THE MOUNTAIN IS YOU - Nếu Không Giải Quyết Vấn Đề, Bạn Sẽ Trở Thành Vấn Đề - BẢN QUYỀN",
      price: "118.400 ₫",
      author: "Instant Research Institude",
      status: "Bán",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/e0/c1/48/f657027db177f2c205bc46fb728caa63.jpg.webp",
      title: "Làm sạch tâm hồn - Các bài tập thiền ",
      price: "46.000 ₫",
      author: "Instant Research Institude",
      status: "Trao đổi",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/78/97/9e/09dc123679ecd939271fe9a4ee4cb841.jpg.webp",
      title: "Sách Vị Tu Sĩ Bán Chiếc Ferrari (Tái Bản)",
      price: "65.300 ₫",
      author: "Instant Research Institude",
      status: "Bán",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/c9/ae/56/39270337e02960aa4f4938e113e4c5c2.jpg.webp",
      title: "Sách Chữa Lành Nỗi Đau",
      price: "65.300 ₫",
      author: "Instant Research Institude",
      status: "Bán",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/11/37/dc/d6012f5df23081e3e41e43365a380079.jpg.webp",
      title: "Gieo suy nghĩ gặt thành công - Napoleon Hill_ Sách hay mỗi ngày",
      price: "58.000 ₫",
      author: "Instant Research Institude",
      status: "Bán",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/63/8f/cf/555ac6f80db52502513ae753c7d33722.jpg.webp",
      title: "Sách - Những đòn tâm lý trong thuyết phục (Tái bản 2020 - 169k)",
      price: "118.000 ₫",
      author: "Instant Research Institude",
      status: "Bán",
    },
    {
      uri: "https://salt.tikicdn.com/cache/750x750/ts/product/a9/d4/f0/c6cddbe8bc813582cd925251e440d3e8.jpg.webp",
      title:
        "Sách: Cho Đi Và Nhận Lại - Nghệ Thuật Xây Dựng Mối Quan Hệ Nơi Công Sở",
      price: "56.000 ₫",
      author: "Instant Research Institude",
      status: "Bán",
    },
  ];
  return (
    <div className="home-container">
      {/* <FilterBookGlobal */}
      {/*  handleButton={goToSelfBook} */}
      {/*  dataFilter={dataFilter} */}
      {/*  setDataFilter={setDataFilter} */}
      {/* /> */}
      <BreakCrumGlobal listBreakcrum={["Trang chủ", "Tất cả sách"]} />
      <div className="home-list-book">
        {listBook.map((item, index) => (
          <div
            onClick={() => toDetailBook(item.status)}
            className="item-book"
            key={index}
          >
            <Image preview={false} width={160} height={160} src={item.uri} />
            <div className="text-title">{item.title}</div>
            <div className="author">Tác giả:{item.author}</div>
            <div className="row-end">
              <div>
                <div style={{display: "flex", alignItems: "center"}}>
                  <DollarCircleOutlined />
                  <div className="text-align-center">{item.price}</div>
                </div>
                <div>
                  <Icon icon="location" size={18} />
                  <span style={{fontSize: "12px"}}>TPHCM</span>
                </div>
              </div>
              <div>
                <Button
                  style={{
                    borderColor: item.status === "Bán" ? "red" : "blue",
                    color: item.status === "Bán" ? "red" : "blue",
                  }}
                >
                  {item.status}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-home">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}
