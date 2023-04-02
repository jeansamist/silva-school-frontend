import { ClassRoom } from "./ClassRoom";
import { User } from "./User";

export class School {
  constructor(
    public id?: string,
    public name?: string,
    public location?: string,
    public image?: string | File,
    public classes?: ClassRoom[],
    public users?: User[]
  ) {}
}
