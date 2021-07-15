export interface ValidationType {
  [key: string]: {
    value: string;
    msg: string;
  };
}
export interface FieldType {
  type: string;
  label: string;
  name: string;
  validation?: ValidationType;
}
export interface FormProps {
  action: string;
  fields: FieldsType[];
  layout?: string;
  method?: string;
  submitButton?: SubmitButtonType;
  onSubmitForm: (any) => void;
}
export interface SubmitButtonType {
  label?: string;
}
export type GenericObjectType = { [key: string]: any };
export type State = Record<string, unknown>;
export type SetState = (prevState: GenericObjectType) => { [x: string]: string }