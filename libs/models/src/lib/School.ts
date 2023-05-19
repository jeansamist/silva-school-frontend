import { ClassLevel } from "./ClassLevel";
import { ClassRoom } from "./ClassRoom";
import { User } from "./User";

export class School {
  constructor(
    public id?: number,
    public name?: string,
    public location?: string,
    public image?: string | File,
    public class_levels?: ClassLevel[],
    public users?: User[]
  ) {}
}
