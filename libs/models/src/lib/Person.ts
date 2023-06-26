export class Person {
  constructor(
    public first_name?: string,
    public last_name?: string,
    public birthdate?: Date | string,
    public address?: string,
    public sex?: string,
    public status?: string,
    public email?: string,
    public phone?: number | string,
    public avatar?: string
  ) {}
}
