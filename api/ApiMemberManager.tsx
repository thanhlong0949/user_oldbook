import {downloadFile, fetcher} from "./Fetcher";
import {Moment} from "moment";

export interface IChangeStatusBody {
  id: number;
  status: number;
}

// Personal Member Interfaces
export interface IGetListPersonalMemberParams {
  tab?: string;
  page?: number;
  perpage?: number;
  type_participation?: string;
  type_member?: string;
  search?: string;
  sort_field?: string;
  isasc?: number;
  timestart_filter?: number;
  timeend_filter?: number;
}

export interface IListPersonalMemberItemResponse {
  key_id?: string;
  id?: number;
  joinstatus?: string;
  auth?: string;
  sns?: string;
  usergroup?: string;
  username?: string;
  sex?: string;
  fullname?: string;
  birthday?: string;
  email?: string;
  phone1?: string;
  login_number: number;
  timecreated: number;
  lastaccess: number;
  employer_id?: number;
  profit: number;
  number_payment: number;
}
export interface ICreatePersonalMemberResponse {
  response?: {
    id?: number;
    joinstatus?: string;
    firstname?: string;
    birthday?: number;
    address?: string;
    district?: number;
    city?: number;
    usergroup?: string;
    sex?: number;
    email?: string;
    username?: string;
    fullname?: string;
    password?: string;
    phone?: string;
  };
}

export interface IListPersonalMemberResponse {
  response?: {
    current_page?: number;
    data?: IListPersonalMemberItemResponse[];
    total?: number;
  };
}
export interface IListDataPersonalMemberItemResponse {
  value: string;
  label: number | string;
}
export interface IListDataPersonalMemberResponse {
  response?: {
    current_page?: number;
    data?: {
      join_status: IListDataPersonalMemberItemResponse[];
      user_groups: IListDataPersonalMemberItemResponse[];
      gender: IListDataPersonalMemberItemResponse[];
    };
    total?: number;
  };
}
export interface IPersonalMemberByIdItemResponse {
  id?: number;
  joinstatus?: string;
  firstname?: string;
  birthday?: number;
  address?: string;
  district?: number;
  username?: string;
  email?: string;
  password?: string;
  sex?: string;
  fullname?: string;
  usergroup?: string;
  city?: number;
  phone?: string;
}
export interface IPersonalMemberByIdResponse {
  response?: IPersonalMemberByIdItemResponse;
}

// Teacher Managerment Interfaces
export interface IGetListTeacherMemberParams {
  tab?: string;
  search?: string;
  page?: number;
  perpage?: number;
  status?: number | string;
  timestart_filter?: number;
  timeend_filter?: number;
}

export interface IListTeacherMemberItemResponse {
  id?: number;
  username?: string;
  fullname?: string;
  sex?: string;
  phone1?: string;
  rate?: string;
  auth?: string;
  nationality?: string;
  lastaccess?: number;
  timecreated?: number;
  email?: string;
  birthday?: number;
  teachinglevel?: number[];
  status?: number;
  certificate?: string;
  experience_name?: string;
}
export interface IListTeacherMemberResponse {
  response?: {
    current_page?: number;
    data?: IListTeacherMemberItemResponse[];
    total?: number;
  };
}

export interface ITeacherMemberByIdItemResponse {
  key_id?: string;
  login_number?: number;
  certificate?: number;
  id?: number;
  username?: string;
  fullname?: string;
  timecreated?: number;
  password?: string;
  email?: string;
  phone1?: string;
  birthday?: number;
  lastaccess?: number;
  sex?: number;
  status?: number;
  country?: number;
  nationality?: string;
  teachingtype?: string[];
  teaching_level?: number[];
  rate?: string;
  oneline_vi?: string;
  oneline_ko?: string;
  profile_vi?: string;
  profile_ko?: string;
  comment_vi?: string;
  comment?: string;
  avatar_image?: string;
}

export interface ITeacherMemberByIdResponse {
  response?: ITeacherMemberByIdItemResponse;
}

export interface IDeletePersonalMemberResponse {
  response?: {
    message: string;
  };
}
export interface IDeleteTeacherMemberResponse {
  response?: {
    message: string;
  };
}

export interface ILevelTeacherMemberItemResponse {
  value: number;
  label: string;
}
export interface ILevelTeacherMemberResponse {
  response?: {
    data: ILevelTeacherMemberItemResponse[];
  };
}
export interface ICertificateTeacherMemberItemResponse {
  value: number;
  label: string;
}
export interface ICertificateTeacherMemberResponse {
  response?: {
    data: ICertificateTeacherMemberItemResponse[];
  };
}
export interface ICreateTeacherMemberResponse {
  response?: {
    id: number;
    luid: number;
    username: string;
    email: string;
    password: string;
    sex: string;
    firstname: string;
    lastname: string;
    usergroup: string;
    address: string;
    address_detail: string;
    phone1: string;
    phone2: string;
    auth: string;
    lastaccess: number;
    timecreated: number;
    sns: string;
  };
}

// Admin Managerment Interfaces
export interface IAdminMemberParams {
  page?: number;
  perpage?: number;
  search?: string;
}
export interface IAdminMemberItem {
  id?: number;
  confirmed?: number;
  username?: string;
  department?: string;
  sex?: string | null;
  fullname?: string;
  birthday?: string;
  email?: string;
  phone?: string;
  login_number?: number;
  timecreated?: number;
  lastaccess?: number;
}
export interface IAdminMemberResponse {
  response?: {
    current_page?: number;
    data?: IAdminMemberItem[];
    total?: number;
  };
}

export interface IAdminMemberByIdItemResponse {
  id?: number;
  username?: string;
  fullname?: string;
  phone?: string;
  password?: string;
  sex?: string;
  email?: string;
  email2?: string;
  address?: string;
  district?: number;
  city?: number;
  department_id?: number;
  group_id?: number;
  group_name?: string;
  birthday?: number;
  avatar_url?: string;
}
export interface ICreateAdminMemberBody {
  id?: number;
  username?: string;
  fullname?: string;
  phone?: string;
  password?: string;
  sex?: number;
  email?: string;
  group_id?: number;
  department_id?: number;
  birthday?: number;
  address?: string;
  department?: [number | undefined, number | undefined];
  district?: number;
  city?: number;
}
export interface IAdminMemberByIdResponse {
  response?: IAdminMemberByIdItemResponse;
}

export interface IDeleteAdminMemberResponse {
  response?: {
    message: string;
  };
}

// Company Member Interfaces
export interface IGetListCompanyMemberParams {
  site?: number;
  page?: number;
  perpage?: number;
  search?: string;
  status?: number;
  city?: number;
  field?: number;
  timestart_filter?: number;
  timeend_filter?: number;
}

export interface IListCompanyMemberItemResponse {
  key_id?: string;
  id?: number;
  username?: string;
  phone1?: string;
  lastaccess?: number;
  company_email?: string;
  status?: number;
  company_address?: string;
  employer_id?: number;
  company_name?: string;
  approval_date?: number;
  company_logo?: string;
  active_type?: number;
  cityArea?: string;
  field?: string;
}

export interface IListCompanyMemberResponse {
  response?: {
    current_page?: number;
    data?: IListCompanyMemberItemResponse[];
    total?: number;
  };
}

export interface ICompanyMemberByIdItemResponse {
  id?: number;
  key_id?: string;
  user_id?: string;
  username?: string;
  representativeName?: string;
  department?: string;
  phone?: string;
  lastaccess?: number;
  company_address?: string;
  company_email?: string;
  employer_id?: string;
  company_name?: string;
  approval_date?: number;
  confirmed_employer?: number;
  country_id?: number;
  company_logo?: string;
  city_id?: number;
  skill_groups?: number[];
}

export interface ICompanyMemberByIdResponse {
  response?: ICompanyMemberByIdItemResponse;
}

export interface ICompanyMemberBody {
  id?: number;
  username?: string;
  password?: string;
  phone?: string;
  fullname?: string;
  email?: string;
  company_name?: string;
  company_address?: string;
  city?: number;
  skill_groups?: number[];
}

export interface IDeleteCompanyMemberResponse {
  response?: {
    message: string;
  };
}

const path = {
  getListPersonalMember: "/personal_member_management/index",
  getListDataPersonalMember: "personal_member_management/list-data",
  getPersonalMemberById: "/personal_member_management/detail",
  deleteListMemberManager: "/personal_member_management/delete",
  createPersonalMember: "/personal_member_management/create",
  editPersonalMember: "/personal_member_management/edit",
  getListCompanyMember: "/company_management/index",
  getCompanyMemberById: "/company_management/detail?id=",
  createCompanyMember: "/company_management/create",
  editCompanyMember: "/company_management/edit",
  deleteListCompanyManager: "/company_management/delete",
  changeStatusCompanyMember: "/company_management/change-status",
  exportExcelCompanyManager: "/company_management/export",
  getListTeacherMember: "/teacher_management/index",
  getTeacherMemberById: "/teacher_management/detail",
  createTeacherMember: "/teacher_management/create",
  editTeacherMember: "/teacher_management/edit",
  changeStatusTeacherMember: "/teacher_management/change-status",
  deleteListTeacherMemberManager: "/teacher_management/delete",
  exportExcelTeacherMember: "/teacher_management/export",
  getLevelTeacherMember: "/teacher_management/get-level-teacher",
  getCertificateTeacherMember: "/teacher_management/get-certificate",
  getListAdminInfor: "/admin_management/index",
  getAdminMemberById: "/admin_management/detail?id=",
  createAdminMember: "/admin_management/create",
  editAdminMember: "/admin_management/edit",
  deleteListAdminMember: "/admin_management/delete",
  exportExcelPersonalMember: "/personal_member_management/export",
};

// Personal Member functions
function getListPersonalMember(
  params: IGetListPersonalMemberParams
): Promise<IListPersonalMemberResponse> {
  return fetcher({
    url: path.getListPersonalMember,
    method: "get",
    params: params,
  });
}
function getPersonalMemberById(
  id: number
): Promise<IPersonalMemberByIdResponse> {
  return fetcher({
    url: path.getPersonalMemberById,
    params: {id: id},
    method: "get",
  });
}
function getListDataPersonalMember(): Promise<IListDataPersonalMemberResponse> {
  return fetcher(
    {url: path.getListDataPersonalMember, method: "get"},
    {displayError: true}
  );
}
function deleteListMemberManager(body: {
  ids: React.Key[];
}): Promise<IDeletePersonalMemberResponse> {
  return fetcher(
    {url: path.deleteListMemberManager, method: "delete", data: body},
    {displaySuccess: true, typeSuccess: "delete"}
  );
}
export interface FormValuePersonalMember {
  id?: number;
  usergroup?: string;
  username?: string;
  fullname?: string;
  password?: string;
  birthday?: Moment;
  phone?: string;
  email?: string;
  sex?: number;
  address?: string;
  // pageRegister?: string;
  joinstatus?: string;
  city?: number;
  district?: number;
}
function createPersonalMember(
  body: FormValuePersonalMember
): Promise<ICreatePersonalMemberResponse> {
  return fetcher(
    {url: path.createPersonalMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "add"}
  );
}
function editPersonalMember(
  body: FormValuePersonalMember
): Promise<ICreatePersonalMemberResponse> {
  return fetcher(
    {url: path.editPersonalMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "update"}
  );
}

function exportExcelPersonalMember(
  params: IGetListPersonalMemberParams
): Promise<unknown> {
  return downloadFile({url: path.exportExcelPersonalMember, params: params});
}

// Admin Management functions
function getListAdminInfor(
  params: IAdminMemberParams
): Promise<IAdminMemberResponse> {
  return fetcher(
    {url: path.getListAdminInfor, method: "get", params},
    {displayError: true}
  );
}
function getAdminMemberById(
  idAdminMember: number
): Promise<IAdminMemberByIdResponse> {
  return fetcher(
    {url: path.getAdminMemberById + idAdminMember, method: "get"},
    {displayError: true}
  );
}
function createAdminMember(
  body: ICreateAdminMemberBody
): Promise<IAdminMemberByIdItemResponse> {
  return fetcher(
    {url: path.createAdminMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "add"}
  );
}
function editAdminMember(
  body: ICreateAdminMemberBody
): Promise<IAdminMemberByIdItemResponse> {
  return fetcher(
    {url: path.editAdminMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "update"}
  );
}
function deleteListAdminMember(body: {
  ids: React.Key[];
}): Promise<IDeleteAdminMemberResponse> {
  return fetcher(
    {url: path.deleteListAdminMember, method: "delete", data: body},
    {displaySuccess: true, typeSuccess: "delete"}
  );
}

// Company Member functions
function getListCompanyMember(
  params: IGetListCompanyMemberParams
): Promise<IListCompanyMemberResponse> {
  return fetcher(
    {url: path.getListCompanyMember, method: "get", params},
    {displayError: true}
  );
}

function getCompanyMemberById(
  idCompanyMember: number
): Promise<ICompanyMemberByIdResponse> {
  return fetcher(
    {url: path.getCompanyMemberById + idCompanyMember, method: "get"},
    {displayError: true}
  );
}

function createCompanyMember(body: ICompanyMemberBody): Promise<null> {
  return fetcher(
    {url: path.createCompanyMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "add"}
  );
}

function editCompanyMember(body: ICompanyMemberBody): Promise<null> {
  return fetcher(
    {url: path.editCompanyMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "update"}
  );
}

function deleteListCompanyManager(body: {
  ids: React.Key[];
}): Promise<IDeleteCompanyMemberResponse> {
  return fetcher(
    {url: path.deleteListCompanyManager, method: "delete", data: body},
    {displaySuccess: true, typeSuccess: "delete"}
  );
}

function changeStatusCompanyMember(body: IChangeStatusBody): Promise<null> {
  return fetcher(
    {url: path.changeStatusCompanyMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "update"}
  );
}

function exportExcelCompanyManager(
  params?: IGetListCompanyMemberParams
): Promise<unknown> {
  return downloadFile({
    url: path.exportExcelCompanyManager,
    params: params,
  });
}

// Teacher Member
function getListTeacherMember(
  params: IGetListTeacherMemberParams
): Promise<IListTeacherMemberResponse> {
  return fetcher(
    {url: path.getListTeacherMember, method: "get", params: params},
    {displayError: true}
  );
}
function getTeacherMemberById(id: number): Promise<ITeacherMemberByIdResponse> {
  return fetcher({
    url: path.getTeacherMemberById,
    params: {id: id},
    method: "get",
  });
}
function getListLevelTeacherMember(): Promise<ILevelTeacherMemberResponse> {
  return fetcher({
    url: path.getLevelTeacherMember,
    method: "get",
  });
}
function getListCertificateTeacherMember(): Promise<ICertificateTeacherMemberResponse> {
  return fetcher({
    url: path.getCertificateTeacherMember,
    method: "get",
  });
}
function deleteListTeacherMemberManager(body: {
  ids: React.Key[];
}): Promise<IDeleteTeacherMemberResponse> {
  return fetcher(
    {url: path.deleteListTeacherMemberManager, method: "delete", data: body},
    {displaySuccess: true, typeSuccess: "delete"}
  );
}

function createTeacherMember(
  body: FormData
): Promise<ICreateTeacherMemberResponse> {
  return fetcher(
    {url: path.createTeacherMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "add"}
  );
}

function editTeacherMember(
  body: FormData
): Promise<ICreateTeacherMemberResponse> {
  return fetcher(
    {url: path.editTeacherMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "update"}
  );
}

function changeStatusTeacherMember(body: IChangeStatusBody): Promise<null> {
  return fetcher(
    {url: path.changeStatusTeacherMember, method: "post", data: body},
    {displaySuccess: true, typeSuccess: "update"}
  );
}

function exportExcelTeacherMember(
  params: IGetListTeacherMemberParams
): Promise<unknown> {
  return downloadFile({
    url: path.exportExcelTeacherMember,
    params: params,
  });
}

export {
  getListPersonalMember,
  getListDataPersonalMember,
  getPersonalMemberById,
  deleteListMemberManager,
  createPersonalMember,
  editPersonalMember,
  getListCompanyMember,
  getCompanyMemberById,
  createCompanyMember,
  editCompanyMember,
  deleteListCompanyManager,
  changeStatusCompanyMember,
  exportExcelCompanyManager,
  getListLevelTeacherMember,
  getListCertificateTeacherMember,
  getListAdminInfor,
  getAdminMemberById,
  createAdminMember,
  editAdminMember,
  deleteListAdminMember,
  getListTeacherMember,
  deleteListTeacherMemberManager,
  getTeacherMemberById,
  createTeacherMember,
  editTeacherMember,
  changeStatusTeacherMember,
  exportExcelTeacherMember,
  exportExcelPersonalMember,
};
