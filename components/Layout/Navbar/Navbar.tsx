import React,{useEffect, useState} from "react";
import {Avatar, Button, Image, Input, Dropdown, Space, Modal} from "antd";
import {
  PhoneOutlined,
  SearchOutlined,
  UserOutlined,
  DownOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";
import Config from "@app/config";
// import store from "@app/redux/store";
import {useSelector} from "react-redux";
import { logout } from "@app/api/Fetcher";

export default function Navbar(): JSX.Element {
  const router = useRouter();
  const [search, setSearch] = useState<string>();
  const [defaultSeach, setDefaultSeach]= useState(router.query.search);
  const user = useSelector((state: any) => state.user);
  const avatar =
    user?.imageUrl === "null"
      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHKlouvigPKl5alhVxMYIR06b5zfylHBLzA&usqp=CAU"
      : user?.imageUrl;

      const items = [
        {
          key: "1",
          label: <div className="" onClick={() => router.push("user_profile")}>Thông tin cá nhân</div>,
          icon: <InfoCircleOutlined />,
        },
        {
          key: "2",
          label: (
            <div
              className=""
              onClick={() => {
                const showConfirm = () => {
                  Modal.confirm({
                    title: "Bạn chắc chắn muốn đăng xuất?",
                    icon: <ExclamationCircleFilled />,
                    onOk() {
                      logout();
                      window.location.reload();
                    },
                    onCancel() {
                      // console.log('Cancel');
                    },
                  });
                };
                showConfirm();
              }}
            >
              Đăng xuất
            </div>
          ),
          icon: <LogoutOutlined />,
          //   disabled: true,
        },
      ];

  const toPageSearch = (): void => {
    if(!search){
      // router.push(`/`);
    }
    else{
      router.push(`/?search=${search}`);
    }
  };
  const toSelfBook = (): void => {
    router.push(`/self_book`);
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

  useEffect(() => {
    setDefaultSeach(router.query.search);
  },[router.query])

  return (
    <div className="navbar" style={{height: Config.HEIGHT_NAVBAR}}>
      <div onClick={goToHomePage} className="logo">
        <Image
          width={80}
          height={40}
          preview={false}
          src={avatar}
        />
      </div>
      <div className="search-navbar">
        <Input
          placeholder="Tìm Kiếm Sách ..."
          className="input-search"
          prefix={<SearchOutlined />}
          value={search || defaultSeach }
          onChange={(e) => {
            if(e.target.value){
              setSearch(e.target.value)
            }
            else{
              setDefaultSeach("");
              setSearch("");
            }
          }}
        />
        <div onClick={() => toPageSearch()} className="button-search">
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
          {user?.accesstoken ? (
            <div className="author-infor">
              <Dropdown menu={{items}}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar icon={<UserOutlined />} src={avatar} />
                    {user.name.slice(0, 15) +
                      (user.name?.length > 15 ? "..." : "")}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          ) : (
            <div className="author-login-resgister">
              {/* <div onClick={goToUserProfile} className="border-icon-user">
                <UserOutlined style={{fontSize: 16}} />
              </div> */}
              <span onClick={goToLoginPage} className="text-hover">
                Đăng nhập
              </span>
              <span className="vertical">|</span>
              <span onClick={goToRegisterPage} className="text-hover">
                Đăng kí
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
