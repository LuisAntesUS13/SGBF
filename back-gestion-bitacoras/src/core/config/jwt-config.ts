import { JWT } from '../util/global-enum';

export default class jwtConfig {
  public static getJwtSecret(): string {
    return process.env.SGBD_JWT_SECRET || JWT.SECRET;
  }
}
