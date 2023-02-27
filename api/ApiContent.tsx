import {fetcher} from "./Fetcher";

export interface IGetListContentPrams {
  page?: number;
  perpage: number;
  // search?: string;
}

export interface IListContentResponse {
  response?: {
    current_page?: number;
    data?: IListContentResponse[];
    total: number;
  };
}

export interface IContentByIdItemResponse {
  id: number;
  depth: number;
  step: number;
  type: number;
  parent: number;
  sub_parent: number;
  isused: number;
  parent_category: any;
  type_name: string;
  step_opt: any;
  isused_otp: any;
}

export interface IContentByIdResponse {
  response?: IContentByIdItemResponse;
}

export interface IDeleteContentResponse {
  response?: {
    message: string;
  };
}

export interface ICreatListContent {
  type: number;
  step: number;
  isused: number;
  name_lang: any;
}

export interface INameLang {
  name_vie: string;
  name_ko: string;
}

const path = {
  getListContent: "/category_content/index",
  getContentById: "/category_content/detail",
  deleteContent: "/category_content/delete",
  creatListContent: "/category_content/create",
};

function getListContent(
  params: IGetListContentPrams
): Promise<IListContentResponse> {
  return fetcher({url: path.getListContent, method: "get", params: params});
}

function getContentById(id: number): Promise<IContentByIdResponse> {
  return fetcher({url: path.getContentById, method: "get", params: {id: id}});
}

function deleteContentById(id: number): Promise<IDeleteContentResponse> {
  return fetcher(
    {url: path.deleteContent, method: "delete", params: {id: id}},
    {displaySuccess: true}
  );
}

function creatListContent(body: ICreatListContent): Promise<ICreatListContent> {
  return fetcher(
    {url: path.creatListContent, method: "post", data: body},
    {displaySuccess: true}
  );
}

export {getListContent, getContentById, deleteContentById, creatListContent};
