import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPagination } from "../types/Pagiination";
import { IFilters, IProductBody } from "../types/ProductType";
import { productThunk } from "../actions/ProductAction";

export interface IProductState {
  filter?: IFilters;
  uuid: string;
  product: IProductBody[];
  orderTotal: number;
  pagination: IPagination;
  isLoading: boolean;
}

const initialState: IProductState = {
  filter: {
    category: "",
    sortBy: "",
    max_price: "",
    min_price: "",
    searchText: "",
  },
  uuid: "",
  product: [],
  orderTotal: 0,
  pagination: {
    prevLink: null,
    nextLink: null,
    currentPage: 1,
    totalPages: 1,
  },
  isLoading: false,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<IFilters>) => {
      state.filter = payload;
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },
    updateFilter: (state, { payload }: PayloadAction<Partial<IFilters>>) => {
      state.filter = { ...state.filter, ...payload };
    },    
    setProducts: (state, { payload }: PayloadAction<IProductBody[]>) => {
      state.product = payload;
    },
    setOrderTotal: (state, { payload }: PayloadAction<number>) => {
      state.orderTotal = payload;
    },
    setPagination: (state, { payload }: PayloadAction<IPagination>) => {
      state.pagination = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.uuid = action.meta.requestId;
        state.product = action.payload.products;
        state.pagination = action.payload.pagination;
      });
  },
});

export const filterActions ={ ...filterSlice.actions , productThunk};

export type productState = ReturnType<typeof filterSlice.reducer>;
export const productReducer = filterSlice.reducer;