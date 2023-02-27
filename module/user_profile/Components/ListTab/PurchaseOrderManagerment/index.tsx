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
      label: `HOÀN THÀNH / ĐÃ HUỶ`,
      children: <TableBuy />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}
