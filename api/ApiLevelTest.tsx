import {fetcher} from "./Fetcher";

// Level Test Interfaces
export interface GetListLevelTestParams {
  page?: number;
  perpage?: number;
  search?: string;
  level?: number;
}

export interface IgetListLevelTestItem {
  id?: number;
  firstname?: string;
  studentid?: number;
  score?: number;
  level?: string;
  correctanswer?: number;
  phone1?: string;
  email?: string;
}

export interface IgetListLevelTest {
  response?: {
    current_page?: number;
    data?: IgetListLevelTestItem[];
    total?: number;
  };
}
export interface IAnswerQuestion {
  id?: number;
  questionid?: number;
  answer?: number;
  check_correct?: boolean;
}
export interface IGetListDataTestItem {
  id?: number;
  questioncontent?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  correct?: number;
  list?: IAnswerQuestion[];
}
export interface IDataTestByIdResponse {
  response?: {
    data?: IGetListDataTestItem[];
  };
}

export interface IDeleteListLevelTestResponse {
  response?: {
    message: string;
  };
}

// List Question Interfaces
export interface IGetListQuestionParams {
  page?: number;
  perpage?: number;
}

export interface IGetListQuestionItemResponse {
  id: number;
  questioncontent: string;
  urlimgques: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correct: number;
  timecreated: number;
  timemodified: number;
}

export interface IGetListQuestionResponse {
  response: {
    current_page: number;
    data: IGetListQuestionItemResponse[];
    total: number;
  };
}

export interface IQuestionByIdItemResponse {
  id?: number;
  questioncontent?: string;
  urlimgques?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  correct?: number;
  timecreated?: number;
  timemodified?: number;
  pathDesktop?: string;
}

export interface IQuestionByIdResponse {
  response?: IQuestionByIdItemResponse;
}

export interface ICreateQuestionBody {
  id?: number;
  questioncontent?: string;
  urlimgques?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  correct?: number;
  file_desktop?: Blob;
}

export interface IDeleteListQuestionResponse {
  response?: {
    message: string;
  };
}

// suggestion course

export interface IListCourseSuggestionItem {
  id?: number;
  course_id?: number;
  level?: number;
  vi_title?: string;
  type?: string;
  title?: string;
}
export interface IListCourseSuggestionResponse {
  response?: {
    data?: IListCourseSuggestionItem[][];
  };
}

export interface IListScoreLevelItem {
  id?: number;
  level?: number;
  score_from?: number;
  score_to?: number;
}

export interface IListScoreLevelResponse {
  response?: {
    data?: IListScoreLevelItem[];
  };
}

const path = {
  getListLevelTest: "/level_test/index",
  getListDataTestById: "/level_test/detail",
  deleteListLevelTest: "/level_test/delete",
  getListQuestion: "/level_test/index-question",
  getQuestionById: "/level_test/detail-question",
  createQuestion: "/level_test/create-question",
  editQuestion: "/level_test/edit-question",
  deleteListQuestion: "/level_test/delete-question",
  getListCourseSuggestion: "/course-suggest/index-course",
  getListScoreLevel: "/level/index-level",
};

// Level Test Functions
function getListEXam(
  params: GetListLevelTestParams
): Promise<IgetListLevelTest> {
  return fetcher({url: path.getListLevelTest, method: "get", params: params});
}
function getListDataTestById(id: number): Promise<IDataTestByIdResponse> {
  return fetcher({
    url: path.getListDataTestById,
    params: {id: id},
    method: "get",
  });
}

function deleteListLevelTest(body: {
  ids: React.Key[];
}): Promise<IDeleteListLevelTestResponse> {
  return fetcher(
    {url: path.deleteListLevelTest, method: "delete", data: body},
    {displaySuccess: true}
  );
}

// List Question Functions
function getListQuestion(
  params: IGetListQuestionParams
): Promise<IGetListQuestionResponse> {
  return fetcher({
    url: path.getListQuestion,
    params,
    method: "get",
  });
}

function getQuestionById(id: number): Promise<IQuestionByIdResponse> {
  return fetcher({
    url: path.getQuestionById,
    params: {id: id},
    method: "get",
  });
}

function createQuestion(body: FormData): Promise<null> {
  return fetcher(
    {url: path.createQuestion, method: "post", data: body},
    {displaySuccess: true}
  );
}

function editQuestion(body: FormData): Promise<null> {
  return fetcher(
    {url: path.editQuestion, method: "post", data: body},
    {displaySuccess: true}
  );
}

function deleteListQuestion(body: {
  ids: React.Key[];
}): Promise<IDeleteListQuestionResponse> {
  return fetcher(
    {url: path.deleteListQuestion, method: "delete", data: body},
    {displaySuccess: true}
  );
}

// Course Suggestion Functions
function getListCourseSuggestion(): Promise<IListCourseSuggestionResponse> {
  return fetcher({
    url: path.getListCourseSuggestion,
    method: "get",
  });
}

function getListScoreLevel(): Promise<IListScoreLevelResponse> {
  return fetcher({
    url: path.getListScoreLevel,
    method: "get",
  });
}

export {
  getListEXam,
  getListDataTestById,
  deleteListLevelTest,
  getListCourseSuggestion,
  getListQuestion,
  getQuestionById,
  createQuestion,
  editQuestion,
  deleteListQuestion,
  getListScoreLevel,
};
