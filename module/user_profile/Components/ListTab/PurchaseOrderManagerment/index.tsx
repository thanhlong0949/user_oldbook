import React from "react";
import "./index.scss";
import {Tabs, TabsProps} from "antd";
import {TableBuy} from "@app/module/user_profile/Components/TableBuy";

export function PurchaseOrderManagerment(): JSX.Element {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "0",
      label: `TẤT CẢ`,
      children: <TableBuy />,
    },
    {
      key: "1",
      label: `CHỜ XÁC NHẬN`,
      children: <TableBuy />,
    },
    {
      key: "2",
      label: `ĐANG XỬ LÍ`,
      children: <TableBuy />,
    },
    {
      key: "3",
      label: `ĐANG GIAO`,
      children: <TableBuy />,
    },
    {
      key: "4",
      label: `HOÀN THÀNH`,
      children: <TableBuy />,
    },
    {
      key: "5",
      label: `ĐÃ HUỶ`,
      children: <TableBuy />,
    },
    {
      key: "6",
      label: `HOÀN LẠI`,
      children: <TableBuy />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="0" items={items} onChange={onChange} />
    </div>
  );
}
