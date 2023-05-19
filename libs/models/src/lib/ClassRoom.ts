import { ClassLevel } from "./ClassLevel";

export class ClassRoom {
  constructor(public id?: number, public name?: string, public class_level?: number | ClassLevel) {}
}
