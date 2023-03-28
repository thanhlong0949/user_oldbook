import "./index.scss";
import {Button, Image, Pagination, Upload} from "antd";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {DollarCircleOutlined} from "@ant-design/icons";
import {Icon} from "@app/components/Icon";
import {BreakCrumGlobal} from "@app/components/BreakCrumGlobal";
// import {useSelector} from "react-redux";
// import {IRootState} from "@app/redux/store";
import ApiBook from "@app/api/ApiBook";
import {useSelector} from "react-redux";

export function ManagerPermission(): JSX.Element {
  const router = useRouter();
  const category = useSelector((state: any) => state.category);
  // const [dataFilter, setDataFilter] = useState<object>({});
  // const [category, setCategory] = useState<any>([]);
  const [listBookInitial, setListBookInitial] = useState<any>([]);
  const [listBook, setListBook] = useState<any>([]);
  const [pageSize, setPageSize] = useState(20);
  const [pageCurent, setPageCurent] = useState(1);
  const [path, setPath] = useState<string[]>(["Trang chủ", "Tất cả sách"]);

  const toDetailBook = (item: any): void => {
    router.push({
      pathname: "/detail_book",
      query: {key: item.form, postId: item.id, bookId: item.bookList[0].id},
    });
  };
  // const isRemember = useSelector((state: IRootState) => state.user);

  // console.log("state.user", isRemember);

  // console.log("dataFilter", dataFilter);

  const handleChangePage = (page: number, pageSizeNew: number) => {
    if (page !== pageCurent || pageSizeNew !== pageSize) {
      setPageSize(pageSizeNew);
      setPageCurent(page);
      setListBook(
        listBookInitial.slice((page - 1) * pageSizeNew, page * pageSizeNew)
      );
    }
  };

  const handleGetPath = () => {
    const temp = [];
    let paths = category.find((e: any) => e.id == router.query.kind);
    if (paths) {
      temp.push(paths.name);
      if (paths?.subcategoryList) {
        temp.push(
          paths.subcategoryList.find((e: any) => e.id == router.query.type)
            ?.name
        );
      }
    }
    setPath(temp);
  };

  useEffect(() => {
    if (!!router.query.search) {
      ApiBook.searchPost(router.query.search as string).then((res: any) => {
        setListBook(res?.slice(0, pageSize));
        setListBookInitial(res);
        setPath(["Trang chủ", "Tìm kiếm"]);
      });
    } else if (!!router.query.kind) {
      ApiBook.getKindBook(router.query.type).then((res: any) => {
        setListBookInitial(res);
        setListBook(res?.slice(0, pageSize));
        handleGetPath();
      });
    } else {
      if (window.history.state.as === "/") {
        ApiBook.getAllPost().then((res: any) => {
          setListBook(res?.slice(0, pageSize));
          setListBookInitial(res);
        });
        setPath(["Trang chủ", "Tất cả sách"]);
      }
    }
  }, [router.query]);

  return (
    <div className="home-container">
      {/* <FilterBookGlobal */}
      {/*  handleButton={goToSelfBook} */}
      {/*  dataFilter={dataFilter} */}
      {/*  setDataFilter={setDataFilter} */}
      {/* /> */}
      <BreakCrumGlobal listBreakcrum={path} />
      <div className="home-list-book">
        {listBook.map((item: any, index: number) => (
          <div
            onClick={() => toDetailBook(item)}
            className="item-book"
            key={index}
          >
            <Image
              preview={false}
              width={160}
              height={160}
              src={item.imageUrl}
            />
            <div className="text-title">{item.title}</div>
            <div className="row-end">
              <div>
                <div style={{display: "flex", alignItems: "center"}}>
                  <DollarCircleOutlined />
                  <div className="text-align-center">
                    {item.price ?? "Chưa có giá"}
                  </div>
                </div>
                <div>
                  <Icon icon="location" size={18} />
                  <span style={{fontSize: "12px"}}>{item.location}</span>
                </div>
              </div>
              <div>
                <Button
                  style={{
                    borderColor: item.form === "bán" ? "red" : "blue",
                    color: item.form === "bán" ? "red" : "blue",
                  }}
                >
                  {item.form === "bán" ? "Bán" : "Trao đổi"}
                </Button>
              </div>
            </div>
            <div className="author">
              <span>Người đăng:</span>
              {item.userName}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-home">
        <Pagination
          responsive
          current={pageCurent}
          total={listBookInitial.length}
          pageSize={pageSize}
          onChange={(page, PageSizes) => {
            handleChangePage(page, PageSizes);
          }}
        />
      </div>
    </div>
  );
}
