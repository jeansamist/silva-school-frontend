import { Person } from "./Person";
import { ClassRoom } from "./ClassRoom";
export class Student extends Person {
  constructor(
    public override first_name?: string,
    public override last_name?: string,
    public override birthdate?: Date | string,
    public override address?: string,
    public override sex?: string,
    public override status?: string,
    public override email?: string,
    public override phone?: number,
    public classroom?: ClassRoom | number,
    public register?: boolean,
    public id?: number | string
  ) {
    super(first_name, last_name, birthdate, address, sex, status, email, phone);
  }
}
