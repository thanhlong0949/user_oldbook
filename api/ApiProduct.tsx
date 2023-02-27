import {downloadFile, fetcher} from "./Fetcher";

export interface IListItemTextbookRespone {
  id: number;
  textbook_name: string;
  author: string;
  code: string;
  isused: number;
  timecreated: number;
  publisheddate: number;
  copyright: string;
  publisher: string;
}

export interface ICreateTextBook {
  textbook_name?: string;
  vi_textbook_name?: string;
  author?: string;
  vi_author?: string;
  text?: string;
  vi_text?: string;
  price?: number;
  isused?: number;
  publisheddate?: number;
  copyright?: number;
  publisher?: number;
}

export interface IEditTextBook {
  id?: string;
  textbook_name?: string;
  vi_textbook_name?: string;
  author?: string;
  vi_author?: string;
  text?: string;
  vi_text?: string;
  price?: number;
  isused?: number;
  publisheddate?: number;
  copyright?: number;
  publisher?: number;
}

export interface IGetListTextbookParams {
  page?: number;
  perpage: number;
  search?: string;
  timestart_filter?: number;
  timeend_filter?: number;
}

export interface IParamUnSearch {
  page?: number;
  perpage: number;
  timestart_filter?: number;
  timeend_filter?: number;
}

export interface IListTextbookRespone {
  response: {
    data?: IListItemTextbookRespone[];
    total?: number;
    current_page?: number;
  };
}

export interface IDeleteTextbookResponse {
  response?: {
    message: string;
  };
}

const path = {
  getListTextbook: "/textbook_registration/index",
  deleteTextbook: "/textbook_registration/delete",
  createTextbook: "/textbook_registration/create",
  getTextbookDetail: "/textbook_registration/detail",
  exportExcelTextBook: "/textbook_registration/export",
  editTextBook: "/textbook_registration/edit",
};

function deleteTextbookById(ids: number[]): Promise<IDeleteTextbookResponse> {
  return fetcher(
    {
      url: path.deleteTextbook,
      method: "delete",
      data: {ids: ids},
    },
    {displaySuccess: true}
  );
}

function createTextBook(body: IEditTextBook): Promise<ICreateTextBook> {
  return fetcher(
    {url: path.createTextbook, method: "post", data: body},
    {displaySuccess: true}
  );
}

function editTextBook(body: IEditTextBook): Promise<IEditTextBook> {
  return fetcher(
    {url: path.editTextBook, method: "post", data: body},
    {displaySuccess: true}
  );
}

function getListTextbook(
  params: IGetListTextbookParams
): Promise<IListTextbookRespone> {
  return fetcher({
    url: path.getListTextbook,
    method: "get",
    params: params,
  });
}

function exportExcelTextBook(
  params?: IGetListTextbookParams
): Promise<unknown> {
  return downloadFile({
    url: path.exportExcelTextBook,
    params: params,
  });
}

function getTextbookById(id: number): Promise<IListTextbookRespone> {
  return fetcher({
    url: path.getTextbookDetail,
    method: "get",
    params: {id: id},
  });
}

export {
  getListTextbook,
  deleteTextbookById,
  createTextBook,
  exportExcelTextBook,
  editTextBook,
  getTextbookById,
};
