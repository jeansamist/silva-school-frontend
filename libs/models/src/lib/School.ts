import { User } from "./User";

export class School {
  constructor(
    public name?: string,
    public location?: string,
    public image_url?: string,
    public classes?: [],
    public users?: User[],
  ){}
}