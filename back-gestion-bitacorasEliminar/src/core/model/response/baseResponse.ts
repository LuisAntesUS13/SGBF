export declare class BaseResponse<T> {
  statusCode: number;
  message: string;
  success: boolean;
  data: T | null;
}
