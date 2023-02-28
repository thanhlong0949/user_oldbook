import React from "react";
import "./index.scss";
import {Menu} from "antd";
// eslint-disable-next-line no-duplicate-imports
import type {MenuProps} from "antd";
import {BlockOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

 export const dataList = [
  {
    name: "Kinh tế",
    key: "1",
    children: [
      {
        key: "1.1",
        name: "Nhân vật - bài học kinh doanh",
      },
      {
        key: "1.2",
        name: "Quản trị - lãnh đạo",
      },
      {
        key: "1.3",
        name: "Marketing - bán hàng",
      },
      {
        key: "1.4",
        name: "Khởi nghiệp - làm giàu",
      },
      {
        key: "1.5",
        name: "Phân tích - kinh tế",
      },
    ],
  },
  {
    name: "Văn học",
    key: "2",
    children: [
      {
        key: "2.1",
        name: "Tiểu thuyết",
      },
      {
        key: "2.2",
        name: "Truyện ngắn - tản văn",
      },
      {
        key: "2.3",
        name: "Light Novel",
      },
    ],
  },
  {
    name: "Giáo khoa - Tham khảo",
    key: "3",
    children: [
      {
        key: "3.1",
        name: "Sách tham khảo",
      },
      {
        key: "3.2",
        name: "Mẫu giáo",
      },
      {
        key: "3.3",
        name: "Sách giáo khoa",
      },
      {
        key: "3.4",
        name: "Sách giáo viên",
      },
    ],
  },
  {
    name: "Business, Finance & Management",
    key: "4",
    children: [
      {
        key: "4.1",
        name: "Business",
      },
    ],
  },
  {
    name: "Tiểu sử hồi kí",
    key: "5",
    children: [
      {
        key: "5.1",
        name: "Nghệ thuật - giải trí",
      },
      {
        key: "5.2",
        name: "Câu chuyện cuộc đời",
      },
      {
        key: "5.3",
        name: "Lịch sử - Kinh tế -  Thể thao",
      },
    ],
  },
  {
    name: "Sách học ngoại ngữ",
    key: "6",
    children: [
      {
        key: "6.1",
        name: "Tiếng Anh",
      },
      {
        key: "6.2",
        name: "Tiếng Hoa",
      },
      {
        key: "6.3",
        name: "Tiếng Hàn",
      },
      {
        key: "6.4",
        name: "Tiếng Việt cho người nước ngoài",
      },
    ],
  },
  {
    name: "Thiếu nhi",
    key: "7",
    children: [
      {
        key: "7.1",
        name: "Truyện thiếu nhi",
      },
      {
        key: "7.2",
        name: "Kiến thức - kỹ năng sống cho trẻ",
      },
      {
        key: "7.3",
        name: "Kiến thức Bách Khoa",
      },
    ],
  },
  {
    name: "Personal Development",
    key: "8",
    children: [
      {
        key: "8.1",
        name: "C++ Language",
      },
    ],
  },
  {
    name: "Dictionnaries & Languages",
    key: "9",
    children: [
      {
        key: "9.1",
        name: "Dictionnaries",
      },
    ],
  },
  {
    name: "Nuôi dạy con",
    key: "10",
    children: [
      {
        key: "10.1",
        name: "Nuôi dạy con",
      },
    ],
  },
  {
    name: "Tâm lí - kỹ năng sống",
    key: "11",
    children: [
      {
        key: "1",
        name: "Tâm lí",
      },
    ],
  },
  {
    name: "Fiction",
    key: "12",
    children: [
      {
        key: "1",
        name: "s",
      },
    ],
  },
  {
    name: "Orther",
    key: "13",
    children: [
      {
        key: "1",
        name: "s",
      },
    ],
  },
];

export default function Sidebar(): JSX.Element {
  const router = useRouter();
  const convertItemSidebar = (): MenuProps["items"] => {
    const itemsTmp: MenuProps["items"] = [];
    dataList.forEach((item) => {
      if (item.children) {
        const tmpGrandChidren: MenuProps["items"] = [];
        item.children.forEach((item) => {
          tmpGrandChidren.push(getItem(item.name, item.key));
        });
        itemsTmp.push(getItem(item.name, item.key, null, tmpGrandChidren));
      } else {
        itemsTmp.push(getItem(item.name, item.key));
      }
    });

    return itemsTmp;
  };
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`/?kind=${e?.keyPath[1]}&type=${e.keyPath[0]}`)
    console.log("click ", e);
    

  };
  return (
    <div className="sidebar-container">
      <div style={{width: "270px"}} />
      <div className="menu">
        <div style={{display: "flex"}}>
          <BlockOutlined style={{fontSize: 22, color: "red", marginRight: 5}} />
          <h3>Danh mục sản phẩm</h3>
        </div>
        <Menu
          onClick={onClick}
          style={{width: 256}}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={convertItemSidebar()}
        />
      </div>
    </div>
  );
}
