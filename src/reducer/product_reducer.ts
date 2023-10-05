export const initialState = {
  isSidebarOpen: false,
};

export const reducer = (state: any, action: { type: string }) => {
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false };
  }

  throw new Error('There is no state');
};
