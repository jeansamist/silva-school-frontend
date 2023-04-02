import { User } from "./User";

export class School {
  constructor(
    public id?: string,
    public name?: string,
    public location?: string,
    public image?: string | File,
    public classes?: [],
    public users?: User[]
  ) {}
}
