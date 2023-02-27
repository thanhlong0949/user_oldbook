import React from "react";
import "./index.scss";
import {ColumnsType} from "antd/es/table";
import {Image, Switch, Table} from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  EditOutlined,
} from "@ant-design/icons";
import FilterGroupGlobal from "@app/components/FilterGroupGlobal";

interface DataType {
  key: string;
  name: string;
  image: string;
  address: string;
  description: string;
  transport: string;
  phoneNumber: string;
  total: string;
}

export function HistoryPost(): JSX.Element {
  const handleSearch = (valueSearch: string): void => {
    console.log("Ssss");
  };
  const listSearchText = [
    {
      placeHolder: "Tìm kiếm...",
      onSearch: handleSearch,
      maxLength: 255,
      tooltip: "Từ khóa: Tiêu đề",
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      width: 270,
      align: "center",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (_, dataIndex) => (
        <div>
          <Image
            width={150}
            height={150}
            preview={false}
            src={dataIndex.image}
          />
        </div>
      ),
      align: "center",
      width: 200,
    },
    {
      title: "Mô tả",
      key: "description",
      dataIndex: "description",
      align: "center",
      render: (_, dataIndex) => <div>Phân loại: {dataIndex.description}</div>,
      width: 250,
    },
    {
      title: "Thời gian đăng",
      dataIndex: "time_created",
      key: "time_created",
      align: "center",
      width: 200,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      width: 200,
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "action",
      align: "center",
      render: () => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Switch defaultChecked onChange={onChange} />
          </div>
          <div style={{marginLeft: 8}}>
            <EditOutlined style={{fontSize: 22, color: "blue"}} />
          </div>
        </div>
      ),
      fixed: "right",
      width: 120,
    },
  ];
  const data = [
    {
      name: "Áo khoác thời trang 007",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
      description: "bìa cứng, mua lẻ",
      time_created: "12/02/2023",
      status: "Đã bán",
    },
    {
      name: "Áo khoác thời trang 007",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
      description: "bìa cứng, mua lẻ",
      time_created: "12/02/2023",
      status: "Đã trao đổi",
    },
    {
      name: "Áo khoác thời trang 007",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
      description: "bìa cứng, mua lẻ",
      time_created: "12/02/2023",
      status: "Còn hàng",
    },
  ];

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="item-trade-buy-container">
      <FilterGroupGlobal listSearchText={listSearchText} />
      <Table
        style={{marginTop: 10}}
        scroll={{x: 1300}}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
