import { ClassLevel } from "./ClassLevel";
import { Student } from "./Student";

export class ClassRoom {
  constructor(public id?: number, public name?: string, public class_level?: number | ClassLevel, public students?: Student[] | number[]) {}
}
