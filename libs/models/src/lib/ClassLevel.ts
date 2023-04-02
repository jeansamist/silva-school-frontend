import { School } from "./School";

export class ClassLevel {
  constructor(
    public name?: string,
    public school?: number | School,
    public subjects?: [],
    public level?: number,
    public current_price?: number,
    public new_student_price?: number
  ) {}
}
