import React from "react";
import {Button, Image, Input} from "antd";
import {PhoneOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";
import Config from "@app/config";

export default function Navbar(): JSX.Element {
  const router = useRouter();
  const avatar =
    "https://anhdep.tv/attachments/0aac3787f518616d28029ce80066622a-jpeg.23908/";
  const toSelfBook = (): void => {
    router.push("/self_book");
  };
  const goToHomePage = (): void => {
    router.push("/home");
  };
  const goToLoginPage = (): void => {
    router.push("/login");
  };
  const goToRegisterPage = (): void => {
    router.push("/register");
  };
  const goToUserProfile = (): void => {
    router.push("/user_profile");
  };
  return (
    <div className="navbar" style={{height: Config.HEIGHT_NAVBAR}}>
      <div onClick={goToHomePage} className="logo">
        <Image
          // style={{borderRadius: 10}}
          width={80}
          height={40}
          preview={false}
          src={avatar}
        />
        {/* <img src="" alt="" /> */}
      </div>
      <div className="search-navbar">
        <Input
          placeholder="Tìm Kiếm Sách ..."
          className="input-search"
          prefix={<SearchOutlined />}
        />
        <div onClick={toSelfBook} className="button-search">
          <Button>Tìm kiếm</Button>
        </div>
        <div onClick={toSelfBook} className="button-self-book">
          <Button>Bán sách</Button>
        </div>
      </div>
      <div className="action-navbar">
        <Icon icon="Bell" size={15} color="white" />
        <div className="contact-navbar">
          <span className="text-contact">Liên Hệ</span>
          <PhoneOutlined style={{color: "white"}} />
        </div>
        <div className="author-navbar">
          <div onClick={goToUserProfile} className="border-icon-user">
            <UserOutlined style={{fontSize: 16}} />
          </div>
          <span onClick={goToLoginPage} className="text-hover">
            Đăng nhập
          </span>
          <span className="vertical">|</span>
          <span onClick={goToRegisterPage} className="text-hover">
            Đăng kí
          </span>
        </div>
      </div>
    </div>
  );
}
