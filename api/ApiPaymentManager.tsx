import {downloadFile, fetcher} from "./Fetcher";

export interface IGetListPaymentParams {
  page?: number;
  perpage?: number;
  type?: [];
  paymehod?: never[];
  status?: [];
  status1?: string;
  refundtype?: string;
  learningstart?: number;
  learningend?: number;
  stext?: string;
  timestart_filter?: number;
  timeend_filter?: number;
  sortcol?: string;
  isasc?: number;
}

export interface IChangeStatusBody {
  id: number;
  status: number;
}

export interface IListPaymentItemResponse {
  id?: number;
  status?: number;
  timeend: number;
  paycode?: string;
  fullname?: number;
  phone?: string;
  sex?: number;
  email?: string;
  discount?: number;
  buy_date: number;
  paymethod?: string;
  birthday?: string;
  price_new?: number;
  pricemklive?: string;
  category_id?: number;
  title?: string;
  title_mkl?: string;
  category_name?: string;
  city_name?: string;
  price_old?: number;
  year_of_birth: number;
  profit?: number;
}

export interface IListPaymentResponse {
  response?: {
    current_page?: number;
    data?: IListPaymentItemResponse[];
    total?: number;
  };
}

export interface ICreatePaymentBody {
  userid?: number;
  class_id?: number;
  category_id?: number;
  timemodified?: number;
  paymethod?: string;
  profit?: number;
}

export interface IDeletePaymentHistoryResponse {
  message?: object;
}

export interface IValueCreateItemResponse {
  value: number | string;
  label: string;
}

export interface IValueCreateResponse {
  response?: {
    pay_status?: IValueCreateItemResponse[];
    pay_method?: IValueCreateItemResponse[];
  };
}

const path = {
  getListPayment: "/payment_management/index",
  createPayment: "/payment_management/create",
  deletePaymentHistory: "/payment_management/delete",
  getValueCreate: "/payment_management/get-value-create",
  changeStatus: "/payment_management/change-status",
  exportExcel: "/payment_management/export",
};

function getListPayment(
  params: IGetListPaymentParams
): Promise<IListPaymentResponse> {
  return fetcher({url: path.getListPayment, method: "get", params: params});
}

function createPayment(data: ICreatePaymentBody): Promise<null> {
  return fetcher(
    {url: path.createPayment, method: "post", data: data},
    {displaySuccess: true}
  );
}
function deletePaymentHistory(body: {
  ids: any;
}): Promise<IDeletePaymentHistoryResponse> {
  return fetcher(
    {
      url: path.deletePaymentHistory,
      method: "delete",
      data: body,
    },
    {displaySuccess: true}
  );
}

function getValueCreate(): Promise<IValueCreateResponse> {
  return fetcher({url: path.getValueCreate, method: "get"});
}

function changeStatus(body: IChangeStatusBody): Promise<null> {
  return fetcher(
    {url: path.changeStatus, method: "post", data: body},
    {displaySuccess: true}
  );
}

function exportExcel(params?: IGetListPaymentParams): Promise<unknown> {
  return downloadFile({
    url: path.exportExcel,
    params: params,
  });
}

export {
  getListPayment,
  createPayment,
  deletePaymentHistory,
  getValueCreate,
  changeStatus,
  exportExcel,
};
