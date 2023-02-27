import {fetcher} from "./Fetcher";

export interface IGetListDepartmentItem {
  value: number;
  label: string;
}

export interface IGetListDepartments {
  response: {
    data: IGetListDepartmentItem[];
  };
}

export interface IGetIndexDepartmentsParams {
  search?: string;
  page?: number;
  perpage?: number;
}

export interface IGetIndexDepartmentItem {
  id: number;
  shortname: string;
  href: string;
  txt_name: string;
  agg: string;
}

export interface IGetIndexDepartments {
  response: {
    data: IGetIndexDepartmentItem[];
    total: number;
  };
}

export interface IGetListRoleItem {
  label: string;
  value: number;
}

export interface IGetListRole {
  response: {
    data: IGetListRoleItem[];
  };
}

export interface IGetIndexRolesParams {
  page?: number;
  perpage?: number;
  search?: string;
  id_depart: number;
}

export interface IGetIndexRolesmentsItem {
  id: number;
  shortname: string;
  href: string;
  txt_name: string;
  agg: string;
}

export interface IGetIndexRolesments {
  response: {
    data: IGetIndexRolesmentsItem[];
    total: number;
  };
}

export interface ICreatePermissionBody {
  href?: string;
  txt_vi?: string;
  txt_ko?: string;
  description?: string;
}

export interface IEditPermissionBody {
  id?: number;
  href?: string;
  txt_vi?: string;
  txt_ko?: string;
  description?: string;
}

export interface IEditGroupBody {
  checked?: {
    menu_id?: number;
    group_id?: number[];
  }[];
  uncheck?: {
    menu_id?: number;
    group_id?: number[];
  }[];
}

export interface IDetailPremissionResponse {
  response?: {
    id?: number;
    txt_vi?: string;
    txt_ko?: string;
    description?: string;
    href?: string;
  };
}

export interface ICreateRoleBody {
  name: string[];
  is_main: boolean;
  id_depart: number;
}

const path = {
  getListDepartments: "/departments/list",
  getIndexDepartments: "/departments/index-mmenu",
  getDetailPermission: "/permission/detail",
  deletePermission: "/permission/delete",
  getListRole: "/roles/list",
  getIndexRoles: "/roles/index-mmenu",
  createPermission: "/permission/create",
  editGroup: "/management_menu/group",
  editPermission: "/permission/edit",
  createRole: "/roles/create",
};

function getListDepartments(): Promise<IGetListDepartments> {
  return fetcher({url: path.getListDepartments, method: "get"});
}

function getIndexDepartments(
  params: IGetIndexDepartmentsParams
): Promise<IGetIndexDepartments> {
  return fetcher({
    url: path.getIndexDepartments,
    method: "get",
    params: params,
  });
}

function deletePermission(body: {
  id_depart?: number;
  ids: React.Key[];
}): Promise<unknown> {
  return fetcher(
    {url: path.deletePermission, method: "delete", data: body},
    {displaySuccess: true}
  );
}

function getDetailPremission(params: {
  id: number;
}): Promise<IDetailPremissionResponse> {
  return fetcher({
    url: path.getDetailPermission,
    method: "get",
    params: params,
  });
}

function getListRole(params: {id_depart: number}): Promise<IGetListRole> {
  return fetcher({url: path.getListRole, method: "get", params: params});
}

function getIndexRoles(
  params: IGetIndexRolesParams
): Promise<IGetIndexRolesments> {
  return fetcher({
    url: path.getIndexRoles,
    method: "get",
    params: params,
  });
}

function createPermission(data: ICreatePermissionBody): Promise<unknown> {
  return fetcher(
    {url: path.createPermission, method: "post", data: data},
    {displaySuccess: true}
  );
}

function editPermission(data: IEditPermissionBody): Promise<unknown> {
  return fetcher(
    {url: path.editPermission, method: "post", data: data},
    {displaySuccess: true}
  );
}

function editGroup(data: IEditGroupBody): Promise<unknown> {
  return fetcher(
    {url: path.editGroup, method: "post", data: data},
    {displaySuccess: true}
  );
}

function createRole(data: ICreateRoleBody): Promise<unknown> {
  return fetcher(
    {url: path.createRole, method: "post", data: data},
    {displaySuccess: true}
  );
}

export {
  getListDepartments,
  getIndexDepartments,
  deletePermission,
  getListRole,
  getIndexRoles,
  createPermission,
  editGroup,
  getDetailPremission,
  editPermission,
  createRole,
};
