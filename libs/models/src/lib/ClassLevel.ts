import { ClassRoom } from "./ClassRoom";
import { School } from "./School";

export class ClassLevel {
  constructor(
    public id?: number,
    public name?: string,
    public school?: number | School,
    public classrooms?: ClassRoom[],
    public subjects?: [],
    public level?: number,
    public current_price?: number,
    public new_student_price?: number
  ) {}
}
