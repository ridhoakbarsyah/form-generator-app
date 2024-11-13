// import { OptionDto } from "./option.dto";

// export class FieldDTO {
//   type: string;
//   label: string;
//   placeholder?: string;
//   required: boolean;
//   options?: Array<{ label: string; value: string }> | string[];

//   constructor(data: any) {
//     this.type = data.type;
//     this.label = data.label;
//     this.placeholder = data.placeholder;
//     this.required = data.required;
//     this.options = data.options || [];
//   }
// }

export class FieldDTO {
  type: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: Array<{ label: string; value: string }> | string[];

  constructor(data: any) {
    this.type = data.type;
    this.label = data.label;
    this.placeholder = data.placeholder;
    this.required = data.required;
    this.options = data.options || [];
  }
}