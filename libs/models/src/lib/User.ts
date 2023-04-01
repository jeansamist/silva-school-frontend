import { Person } from "./Person";
import { School } from "./School";
export class User extends Person {
  constructor(
    public override first_name?: string,
    public override last_name?: string,
    public override birthdate?: Date | string,
    public override address?: string,
    public override sex?: string,
    public override status?: string,
    public override email?: string,
    public override phone?: number,
    public schools?: School[],
    public username?: string,
    public password?: string
  ) {
    super(first_name, last_name, birthdate, address, sex, status, email, phone);
    if (this.schools === undefined) {
      this.schools = [];
    }
  }
}
