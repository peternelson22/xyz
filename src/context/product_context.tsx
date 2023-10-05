import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/product_reducer';

const ProductsContext = createContext({});

export const ProductProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };
  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductsContext);
