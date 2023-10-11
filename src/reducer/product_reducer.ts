import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from '../utils/actions';

export const initialState: AppState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  productLoading: false,
  productError: false,
  product: [],
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
    return { ...state, productsLoading: false, products: action.payload };
  }

  if (action.type === PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }

  if (action.type === PRODUCT_LOADING) {
    return { ...state, productLoading: true };
  }
  if (action.type === PRODUCT_SUCCESS) {
    return { ...state, productLoading: false, product: action.payload };
  }
  if (action.type === PRODUCT_ERROR) {
    return { ...state, productLoading: false, productError: true };
  }

  throw new Error('There is no action matching');
};
