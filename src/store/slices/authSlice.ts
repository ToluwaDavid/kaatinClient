import { createSlice, createAsyncThunk, isAction } from "@reduxjs/toolkit";
import { AuthResponse, User } from "../../types/user";
import api, { setAuthToken } from "../../services/api";

export const login = createAsyncThunk<
  AuthResponse,
  { email: string; password: string }
>("auth/login", async (credentials) => {
  const response = await api.post("auth/login", credentials);
  return response.data;
});

export const register = createAsyncThunk<
  AuthResponse,
  { name: string; email: string; password: string }
>("auth/register", async (userdata) => {
  const response = await api.post("auth/register", userdata);
  return response.data;
});

interface AuthState {
  user: User | null;
  token: String | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      setAuthToken(null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
        setAuthToken(action.payload.token);
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
        setAuthToken(action.payload.token);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { AuthResponse, User } from '../../types/user';
// import api, { setAuthToken } from '../../services/api';

// export const login = createAsyncThunk<AuthResponse, { email: string; password: string }>(
//   'auth/login',
//   async (credentials) => {
//     const response = await api.post('/auth/login', credentials);
//     return response.data;
//   }
// );

// export const register = createAsyncThunk<AuthResponse, { name: string; email: string; password: string }>(
//   'auth/register',
//   async (userData) => {
//     const response = await api.post('/auth/register', userData);
//     return response.data;
//   }
// );

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   loading: boolean;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   loading: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//       setAuthToken(null);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         localStorage.setItem('token', action.payload.token);
//         setAuthToken(action.payload.token);
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         localStorage.setItem('token', action.payload.token);
//         setAuthToken(action.payload.token);
//       });
//   },
// }); You can extend the dashboard to manage CRUD

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
