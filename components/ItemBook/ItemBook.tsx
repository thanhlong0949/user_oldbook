import React from 'react';
import "./item-book.scss";
import {Image, Avatar, Badge} from "antd";
import {UserOutlined} from "@ant-design/icons";

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

export default function ItemBook({data}: {data: DataType}): JSX.Element {
  return (
    <div className="items">
            <div className="items-user">
                  <Avatar size="small" icon={<UserOutlined/>}/>
                  <div className="name-user"><Badge size='small' count={"Nguyễn Văn A"} color="green"/></div>
            </div>
            <div className="items-book">
              <div className="image">
                <Image width={50} src={data?.image} preview={false} />
              </div>
              <div className="infor-book">
                <div className="infor-left">
                  <div className="name">{data?.name}</div>
                  <div className="des">{data?.description}</div>
                </div>
                <div className="infor-right">
                  <div className="price">{data?.total}</div>
                </div>
              </div>
            </div>
          </div>
  )
}
