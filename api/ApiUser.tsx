import {fetcher} from "./Fetcher";
import store from "../redux/store";

export interface ILoginBody {
  username: string;
  password: string;
  has_role: boolean;
}
export interface ILoginResponse {
  response: {
    access_token: string;
    expires_in: number;
    pass_jwt: string;
  };
  role: any;
}

export interface IParamsGetUser {
  sort?: string[];
  searchFields?: string[];
  pageSize?: number;
  pageNumber?: number;
  disablePagination?: boolean;
  search?: string;
  searchType?: string;
}

export interface IGetUserResponse {
  response?: {
    data?: {
      id?: number;
      firstname?: string;
      email?: string;
      url_image?: string;
    };
  };
}

export interface IRegisterBody {
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
}

const path = {
  getUser: "/auth/get-user",
  login: "/auth/login",
  register: "/auth/register-user",
};

function register(body: IRegisterBody): Promise<never> {
  return fetcher({url: path.register, method: "post", data: body});
}

function login(body: ILoginBody): Promise<ILoginResponse> {
  return fetcher(
    {url: path.login, method: "post", data: body},
    {displayError: true}
  );
}

function getUser(): Promise<IGetUserResponse> {
  return fetcher({url: path.getUser, method: "get"});
}

function isLogin(): boolean {
  const {user} = store.getState();
  return !!user?.accessToken;
}

export default {
  login,
  isLogin,
  getUser,
  register,
};
