export class GenericReponse<T> {
  message: string;
  success: boolean;
  data: T;
  statusCode: number;
}
