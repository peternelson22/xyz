import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, reducer } from '../reducer/product_reducer';
import { products_url as url } from '../utils/constants';
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

const ProductsContext = createContext({});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const fetchProducts = async (url: string) => {
    dispatch({ type: PRODUCTS_LOADING });
    try {
      const res = await fetch(url);
      const products = await res.json();
      dispatch({ type: PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url: string) => {
    dispatch({ type: PRODUCT_LOADING });
    try {
      const res = await fetch(url);
      const product = await res.json();
      dispatch({ type: PRODUCT_SUCCESS, payload: product });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductsContext);
