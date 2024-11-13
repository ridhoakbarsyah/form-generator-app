export class OptionDto {
  label: string;
  value: string | number;

  constructor(data: Partial<OptionDto>) {
    this.label = data.label ?? "";
    this.value = data.value ?? "";
  }
}
