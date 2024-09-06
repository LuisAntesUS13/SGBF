// response.interface.ts
export interface ApiResponse<> {
  message: string;
  data?: any;
  statusCode: number;
}
