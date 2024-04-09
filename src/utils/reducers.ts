import {
  FormUser,
  FormUserAction,
  FormUserError,
} from '../models/formUserModel';

export const reducerForm = (
  state: FormUser,
  { type, field, payload }: FormUserAction
) => {
  switch (type) {
    case 'inputChange':
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};

export const reducerErrorForm = (
  state: FormUserError[],
  { type, field }: FormUserAction
) => {
  switch (type) {
    case 'inputError':
      state &&
        (state.find((value: FormUserError) => value.field === field)!.isValid =
          false);
      return [...state];
    case 'inputValid':
      state &&
        (state.find((value: FormUserError) => value.field === field)!.isValid =
          true);
      return [...state];
    default:
      return state;
  }
};
