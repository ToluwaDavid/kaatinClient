import { createSlice, createAsyncThunk, isAction } from "@reduxjs/toolkit";
import { AuthResponse, User } from "../../types/user";
import api, { setAuthToken } from "../../services/api";
import { toast } from "react-toastify";

export const login = createAsyncThunk<
  AuthResponse,
  { email: string; password: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await api.post("auth/login", credentials);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Login Failed"
    );
  }
});

export const register = createAsyncThunk<
  AuthResponse,
  {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
    company: string;
    address: string;
    phone: string;
    website?: string;
    secretAnswer: string;
    slug?: string;
  }
>("auth/register", async (userdata, thunkAPI) => {
  try {
    const response = await api.post("auth/register", userdata);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Registration failed"
    );
  }
});

export const fetchProfile = createAsyncThunk<User>(
  "auth/fetchProfile",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/user/profile"); // Backend endpoint
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to fetch user profile");
    }
  }
);

export const updateProfile = createAsyncThunk<
  User, // Return type
  Partial<User>, // Payload argument type
  { rejectValue: string } // For rejection error
>("auth/updateProfile", async (userData, thunkAPI) => {
  try {
    const response = await api.put("/user/update", userData);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Profile update failed"
    );
  }
});

// export const updateProfile = createAsyncThunk<
//   User, // Return type
//   Partial<User>, // Arg type
//   { rejectValue: string }
// >("auth/updateProfile", async (updatedData, thunkAPI) => {
//   try {
//     const response = await api.put("/user/update", updatedData);
//     return response.data;
//   } catch (err: any) {
//     return thunkAPI.rejectWithValue(
//       err.response?.data?.message || "Update failed"
//     );
//   }
// });

interface AuthState {
  user: User | null;
  token: String | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
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
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
        setAuthToken(action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
        setAuthToken(action.payload.token);
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(action.payload));
        toast.success("✅ Profile updated");
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("❌ Update failed");
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
