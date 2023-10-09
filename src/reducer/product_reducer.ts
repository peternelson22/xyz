import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
} from '../actions';

export const initialState: AppState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
};

export const reducer = (state: AppState, action: AppAction): AppState => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === PRODUCTS_LOADING) {
    return { ...state, productsLoading: true };
  }

  if (action.type === PRODUCTS_SUCCESS) {
    return { ...state, products: action.payload };
  }

  if (action.type === PRODUCTS_ERROR) {
    return { ...state, productsError: true };
  }

  throw new Error('There is no action matching');
};
