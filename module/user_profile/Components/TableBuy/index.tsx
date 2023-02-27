import React from "react";
import "./index.scss";
import {ColumnsType} from "antd/es/table";
import {Image, Table} from "antd";
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

export function TableBuy(): JSX.Element {
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
      title: "Vận chuyển",
      dataIndex: "transport",
      key: "transport",
      align: "center",
      width: 200,
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
      width: 200,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      align: "center",
      width: 200,
    },
    {
      title: "Tổng cộng",
      dataIndex: "total",
      key: "total",
      align: "center",
      width: 200,
    },
  ];
  const data = [
    {
      name: "Áo khoác thời trang 007",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
      description: "bìa cứng, mua lẻ",
      transport: "Giao hàng nhanh",
      phoneNumber: "0379544861",
      address: "Quận 2, TPHCM",
      total: "500.316VNĐ",
    },
    {
      name: "Áo khoác thời trang 007",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
      description: "bìa cứng, mua lẻ",
      transport: "Giao hàng nhanh",
      phoneNumber: "0379544861",
      address: "Quận 2, TPHCM",
      total: "500.316VNĐ",
    },
    {
      name: "Áo khoác thời trang 007",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
      description: "bìa cứng, mua lẻ",
      transport: "Giao hàng nhanh",
      phoneNumber: "0379544861",
      address: "Quận 2, TPHCM",
      total: "500.316VNĐ",
    },
  ];
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
