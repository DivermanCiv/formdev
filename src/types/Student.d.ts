import { StatusEnum } from './Status.enum';

export interface Student {
  id: number;
  // to remove

  firstName: string;
  lastName: string;
  status: StatusEnum;
}
