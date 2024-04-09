export interface FormUser {
  typeDocument: string;
  documentNumber: string;
  phoneNumber: string;
}

export interface FormUserAction {
  type: string;
  field: string;
  payload: string;
}

export interface FormUserError {
  field: string;
  isValid: boolean;
}
