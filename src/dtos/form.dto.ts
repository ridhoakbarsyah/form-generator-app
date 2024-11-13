import { StepDTO } from "./step.dto";

export class FormDTO {
  steps: StepDTO[];

  constructor(data: any[]) {
    this.steps = data.map((step) => new StepDTO(step));
  }
}

const formData = [
  {
    step: 1,
    title: "Personal Information",
    description: "Please fill out your personal information",
    fields: [
      {
        type: "textfield",
        label: "Name",
        placeholder: "Enter your name",
        required: true,
      },
      {
        type: "radio",
        label: "Gender",
        required: true,
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ],
      },
    ],
  },
  {
    step: 2,
    title: "Additional Information",
    description: "Please provide additional details",
    fields: [
      {
        type: "textarea",
        label: "Description",
        placeholder: "Enter a description",
        required: false,
      },
      {
        type: "autocomplete",
        label: "Title",
        placeholder: "Enter a title",
        required: true,
        options: ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."],
      },
    ],
  },
];

// Membuat instance dari FormDTO
const formDTO = new FormDTO(formData);

console.log(formDTO);