import { FieldDTO } from "./field.dto";

export class StepDTO {
  step: number;
  title: string;
  description: string;
  fields: FieldDTO[];

  constructor(data: any) {
    this.step = data.step;
    this.title = data.title;
    this.description = data.description;
    this.fields = data.fields.map((field: any) => new FieldDTO(field));
  }
}
