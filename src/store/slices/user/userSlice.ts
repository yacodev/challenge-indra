import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/userModels';

const initialState: User = {
  name: '',
  lastName: '',
  birthDay: '',
  phoneNumber: '',
  typeDocument: '',
  documentNumber: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    currentUser: (state, action) => {
      const newUser: User = action.payload;
      return { ...state, ...newUser };
    },
  },
});

export const { currentUser } = userSlice.actions;

export default userSlice.reducer;
