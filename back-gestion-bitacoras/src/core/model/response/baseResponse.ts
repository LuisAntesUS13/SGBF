export declare class BaseResponse<T> {
  statusCode: number;
  message: string;
  data: T | null;
}
