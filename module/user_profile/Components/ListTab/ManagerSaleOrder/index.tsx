import React from "react";
import "./index.scss";
import {Tabs, TabsProps} from "antd";
import {TableSale} from "@app/module/user_profile/Components/TableSale";

export function ManagerSaleOrder(): JSX.Element {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `CHỜ XÁC NHẬN`,
      children: <TableSale />,
    },
    {
      key: "2",
      label: `ĐANG XỬ LÍ`,
      children: <TableSale />,
    },
    {
      key: "3",
      label: `ĐANG GIAO`,
      children: <TableSale />,
    },
    {
      key: "4",
      label: `HOÀN THÀNH / ĐÃ HUỶ`,
      children: <TableSale />,
    },
  ];
  return (
    <div className="manager-sale-order">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}
