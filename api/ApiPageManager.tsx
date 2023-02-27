import {fetcher} from "./Fetcher";

export interface IGetListBannerPrams {
  page?: number;
  perpage?: number;
  search?: string;
  site?: number;
  is_used?: number;
  timestart_filter?: number | undefined;
  timeend_filter?: number | undefined;
}
export interface IListBannerItemResponse {
  id?: number;
  itemid?: number;
  name?: string;
  linkurl?: string;
  isused?: number;
  site?: number;
  banner_position?: number;
  startdate?: number;
  enddate?: number;
  orderby?: number;
  pathDesktop?: string;
  pathMobile?: string;
  site_name?: string;
  position_name?: string;
  is_used?: string;
}
export interface IListBannerResponse {
  response?: {
    current_page?: number;
    data?: IListBannerItemResponse[];
    total: number;
  };
}

export interface IBannerByIdItemResponse {
  id?: number;
  itemid?: string;
  is_used?: string;
  isused?: number;
  linkurl?: string;
  name?: string;
  orderby?: number;
  pathDesktop?: string;
  pathMobile?: string;
  position_name?: string;
  site?: number;
  startdate?: number;
  enddate?: number;
  banner_position?: number;
  colorcode?: string;
  search?: number;
}

export interface IBannerByIdResponse {
  response?: IBannerByIdItemResponse;
}

export interface IGetListPopupParams {
  site?: number;
  page?: number;
  perpage?: number;
  search?: string;
  timestart_filter?: number;
  timeend_filter?: number;
  status_filter?: number;
}
export interface IListPopupItemResponse {
  id?: number;
  title?: string;
  timeavailable?: number;
  timedue?: number;
  timecreated?: number;
  site?: number;
  description?: string;
  author?: string;
  status?: number;
  page?: string;
  urlImage?: {
    description?: string;
  };
}
export interface IListPopupResponse {
  response?: {
    current_page?: number;
    data?: IListPopupItemResponse[];
    total: number;
  };
}

export interface IPopupByIdItemResponse {
  id?: number;
  title?: string;
  timeavailable?: number;
  timedue?: number;
  timecreated?: number;
  site?: number;
  description?: string;
  popupwidth?: number;
  popupheight?: number;
  popupx?: number;
  popupy?: number;
  availablescroll?: number;
  page?: string;
  status?: string;
  showscroll?: string;
  urlImage?: {
    link?: string;
    description?: string;
  };
}

export interface IPopupByIdResponse {
  response?: IPopupByIdItemResponse;
}

export interface IDeleteBannerResponse {
  response?: {
    message: string;
  };
}
export interface IDeletePopupResponse {
  response?: {
    message: string;
  };
}
export interface ICreatePopupResponse {
  response?: {
    id: number;
    title: string;
    timeavailable: number;
    timedue: number;
    timecreated: number;
    site: 0;
    description: string;
    popupwidth: number;
    popupheight: number;
    popupx: number;
    popupy: number;
    availablescroll: number;
    page: string;
    status: string;
    showscroll: string;
  };
}

export interface ICreatePopupBody {
  title?: string;
  timedue?: string;
  timeavailable?: string;
  description?: string;
  popupwidth?: string;
  popupheight?: string;
  popupx?: string;
  popupy?: string;
  availablescroll?: number;
}

const path = {
  getListBanner: "/banners_management/index",
  getBannerById: "/banners_management/detail?id=",
  getListPopup: "/popup_management/index",
  getPopupById: "/popup_management/detail?id=",
  deleteBanner: "/banners_management/delete",
  deletePopup: "/popup_management/delete",
  createPopup: "/popup_management/create",
  createBanner: "/banners_management/create",
  editBanner: "/banners_management/edit",
  editPopup: "/popup_management/edit",
  changeStatusPopup: "/popup_management/change-status",
  changeStatusBanner: "/banners_management/change-status",
};

function getListBanner(
  params: IGetListBannerPrams
): Promise<IListBannerResponse> {
  return fetcher({url: path.getListBanner, method: "get", params: params});
}

function getBannerById(id: number): Promise<IBannerByIdResponse> {
  return fetcher({url: path.getBannerById + id, method: "get"});
}

function getListPopup(
  params: IGetListPopupParams
): Promise<IListPopupResponse> {
  return fetcher({url: path.getListPopup, method: "get", params: params});
}

function getPopupById(id: number): Promise<IPopupByIdResponse> {
  return fetcher({url: path.getPopupById + id, method: "get"});
}

function deleteListBanner(body: {
  ids: React.Key[];
}): Promise<IDeleteBannerResponse> {
  return fetcher(
    {url: path.deleteBanner, method: "delete", data: body},
    {displaySuccess: true}
  );
}
function deleteListPopup(body: {
  ids: React.Key[];
}): Promise<IDeletePopupResponse> {
  return fetcher(
    {url: path.deletePopup, method: "delete", data: body},
    {displaySuccess: true}
  );
}

function createPopup(body: FormData): Promise<ICreatePopupResponse> {
  return fetcher(
    {url: path.createPopup, method: "post", data: body},
    {displaySuccess: true}
  );
}

function editPopup(body: FormData): Promise<ICreatePopupResponse> {
  return fetcher(
    {url: path.editPopup, method: "post", data: body},
    {displaySuccess: true}
  );
}

function createBanner(body: FormData): Promise<ICreatePopupResponse> {
  return fetcher(
    {url: path.createBanner, method: "post", data: body},
    {displaySuccess: true}
  );
}

function editBanner(body: FormData): Promise<ICreatePopupResponse> {
  return fetcher(
    {url: path.editBanner, method: "post", data: body},
    {displaySuccess: true}
  );
}
// popup
function changeStatusPopup(body: {
  id: number;
  status: number;
}): Promise<unknown> {
  return fetcher(
    {url: path.changeStatusPopup, method: "post", data: body},
    {displaySuccess: true}
  );
}

// banner
function changeStatusBanner(body: {
  id: number;
  status: number;
}): Promise<unknown> {
  return fetcher(
    {url: path.changeStatusBanner, method: "post", data: body},
    {displaySuccess: true}
  );
}

export {
  getListBanner,
  getBannerById,
  getListPopup,
  getPopupById,
  deleteListBanner,
  deleteListPopup,
  createPopup,
  createBanner,
  editBanner,
  editPopup,
  changeStatusPopup,
  changeStatusBanner,
};
