interface IPaginationMeta {
  totalData?: number;
  totalPage?: number;
  page: number;
  prevLink: string | null;
  nextLink: string | null;
}

export interface IBasicResponse {
  code: number;
  msg: string;
  data?: unknown;
  error?: { message: string };
  meta?: IPaginationMeta;
}
