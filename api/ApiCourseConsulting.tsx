import {downloadFile, fetcher} from "./Fetcher";

export interface IGetListCourseConsultingParams {
  page?: number;
  perpage?: number;
  search?: string;
  timestart_filter?: number;
  timeend_filter?: number;
}

export interface IGetListCourseConsultingItemResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  page_register: string;
  category_id: string;
  category_name: string;
  message: string;
  created_at: number;
}

export interface IGetListCourseConsultingResponse {
  response?: {
    current_page?: number;
    data?: IGetListCourseConsultingItemResponse[];
    total?: number;
  };
}

export interface ICourseConsultingByIdItemResponse {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  page_register?: string;
  category_name?: string;
  message?: string;
  created_at?: string;
}

export interface ICourseConsultingByIdResponse {
  response: ICourseConsultingByIdItemResponse;
}

export interface IDeleteListCourseConsultingResponse {
  response?: {
    message: string;
  };
}

const path = {
  getListCourseConsulting: "/course_consulting/index",
  getCourseConsultingById: "/course_consulting/detail",
  deleteListCourseConsulting: "/course_consulting/delete",
  exportExcel: "/course_consulting/export",
};

function getListCourseConsulting(
  params: IGetListCourseConsultingParams
): Promise<IGetListCourseConsultingResponse> {
  return fetcher({
    url: path.getListCourseConsulting,
    method: "get",
    params: params,
  });
}

function getCourseConsultingById(
  id: number
): Promise<ICourseConsultingByIdResponse> {
  return fetcher({
    url: path.getCourseConsultingById,
    params: {id},
    method: "get",
  });
}

function deleteListCourseConsulting(body: {
  ids: React.Key[];
}): Promise<IDeleteListCourseConsultingResponse> {
  return fetcher(
    {url: path.deleteListCourseConsulting, method: "delete", data: body},
    {displaySuccess: true}
  );
}

function exportExcel(
  params?: IGetListCourseConsultingParams
): Promise<unknown> {
  return downloadFile({
    url: path.exportExcel,
    params,
  });
}

export {
  getListCourseConsulting,
  getCourseConsultingById,
  deleteListCourseConsulting,
  exportExcel,
};
