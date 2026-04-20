import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    loginRequest(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginFailed(state) {
      state.loading = false;
    },
    getUserRequest(state) {
      state.loading = true;
    },
    getUserRequest(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    getUserRequest(state) {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },

    logoutRequest(state) {
      state.loading = true;
    },
    logoutSuccess(state, action) {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    logoutFailed(state) {
      state.loading = false;
    },

    forgotPasswordRequest(state) {
      state.loading = true;
    },
    forgotPasswordSuccess(state, action) {
      state.loading = false;
    },
    forgotPasswordFailed(state) {
      state.loading = false;
    },

    resetPasswordRequest(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    resetPasswordFailed(state) {
      state.loading = false;
    },

    updateProfileRequest(state) {
      state.loading = true;
    },
    updateProfileSuccess(state, action) {
      state.loading = false;

      state.user = action.payload;
    },
    updateProfileFailed(state) {
      state.loading = false;
    },

    updatePasswordRequest(state) {
      state.loading = true;
    },
    updatePasswordSuccess(state, action) {
      state.loading = false;
    },
    updatePasswordFailed(state) {
      state.loading = false;
    },

    resetAuthSlice(state) {
      state.loading = false;
      state.user = state.user;
      state.isAuthenticated = state.isAuthenticated;
    },
  },
});

export default authSlice.reducer;
