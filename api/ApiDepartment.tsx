import {fetcher} from "./Fetcher";

export interface IListDepartmentParams {
  page?: number;
  perpage?: number;
}

export interface IListDepartmentItemResponse {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  timecreated?: number;
  total?: number;
}

export interface IListDepartmentResponse {
  response?: {
    data?: IListDepartmentItemResponse[];
    total?: number;
  };
}

export interface IListRolesItemResponse {
  id?: number;
  name?: string;
  timecreated?: number;
  total?: number;
}

export interface IListRolesResponse {
  response?: {
    data?: IListRolesItemResponse[];
    total?: number;
  };
}

export interface ICreateDepartmentBody {
  name: string;
  phone?: string;
  email?: string;
}

export interface IEditDepartmentBody {
  id: React.Key;
  name: string;
  phone?: string;
  email?: string;
}

export interface IEditRoleBody {
  id: number;
  name: string;
  is_main: boolean;
  id_depart: number;
}

export interface ICreateRoleBody {
  name: string[];
  is_main: boolean;
  id_depart: number;
}

const path = {
  getListDepartment: "/departments/index",
  getListRoles: "/departments/group-roles",
  createDepartment: "/departments/create",
  deleteDepartment: "/departments/delete",
  editDepartment: "/departments/edit",
  deleteRoles: "/roles/delete",
  editRole: "/roles/edit",
  createRole: "/roles/create",
};

// department
function getListDepartment(
  params?: IListDepartmentParams
): Promise<IListDepartmentResponse> {
  return fetcher({
    url: path.getListDepartment,
    method: "get",
    params: params,
  });
}

function createDepartment(body: ICreateDepartmentBody): Promise<unknown> {
  return fetcher(
    {url: path.createDepartment, method: "post", data: body},
    {displaySuccess: true}
  );
}

function editDepartment(body: IEditDepartmentBody): Promise<unknown> {
  return fetcher(
    {url: path.editDepartment, method: "post", data: body},
    {displaySuccess: true}
  );
}

function deleteDepartment(body: {ids: React.Key[]}): Promise<unknown> {
  return fetcher(
    {url: path.deleteDepartment, method: "delete", data: body},
    {displaySuccess: true}
  );
}

// roles
function getListRoles(id: number): Promise<IListRolesResponse> {
  return fetcher({
    url: path.getListRoles,
    method: "get",
    params: {id: id},
  });
}

function deleteRoles(body: {ids: React.Key[]}): Promise<unknown> {
  return fetcher(
    {url: path.deleteRoles, method: "delete", data: body},
    {displaySuccess: true}
  );
}

function editRole(data: IEditRoleBody): Promise<unknown> {
  return fetcher(
    {url: path.editRole, method: "post", data: data},
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
  getListDepartment,
  getListRoles,
  createDepartment,
  deleteDepartment,
  editDepartment,
  deleteRoles,
  editRole,
  createRole,
};
