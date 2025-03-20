// src/store/slices/cardSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../services/api";
import { Card } from "../../types/card";

// src/types/card.ts
//export interface Card {
//id: string;
//name: string;
//position: string;
//company: string;
//contactInfo: string;
//address?: string; // Make optional by adding ?
//contactinfo?: string; // Adjust casing if necessary and make optional
//slug?: string;
//}

interface CardState {
  cards: Card[];
  loading: boolean;
  error: string | null;
}

const initialState: CardState = {
  cards: [],
  loading: false,
  error: null,
};

// Thunks
export const fetchCards = createAsyncThunk<Card[]>(
  "cards/fetchCards",
  async () => {
    const response = await api.get("/cards");
    return response.data;
  }
);

export const createCard = createAsyncThunk<Card, Omit<Card, "id">>(
  "cards/createCard",
  async (cardData) => {
    const response = await api.post("/cards", cardData);
    return response.data;
  }
);

export const deleteCard = createAsyncThunk<string, string>(
  "cards/deleteCard",
  async (id) => {
    await api.delete(`/cards/${id}`);
    return id;
  }
);

export const updateCard = createAsyncThunk<Card, Card>(
  "cards/updateCard",
  async (cardData) => {
    const response = await api.put(`/cards/${cardData.id}`, cardData);
    return response.data;
  }
);

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Card[]>) => {
        state.cards = action.payload;
        state.loading = false;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cards";
      })
      .addCase(createCard.fulfilled, (state, action: PayloadAction<Card>) => {
        state.cards.push(action.payload);
      })
      .addCase(deleteCard.fulfilled, (state, action: PayloadAction<string>) => {
        state.cards = state.cards.filter((card) => card.id !== action.payload);
      })
      .addCase(updateCard.fulfilled, (state, action: PayloadAction<Card>) => {
        const index = state.cards.findIndex(
          (card) => card.id === action.payload.id
        );
        if (index !== -1) {
          state.cards[index] = action.payload;
        }
      });
  },
});

export default cardSlice.reducer;
