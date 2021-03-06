const initialState = {
  open: false,
  onSelectAction: 'set'
};

const productPicker = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_PRODUCT_PICKER_STATE':
      return {
        open: !state.open,
        onSelectAction: action.onSelectAction ? action.onSelectAction : state.onSelectAction
      };
    // Always close the resource picker after products have been selected
    case 'SET_SELECTED_PRODUCTS':
    case 'ADD_SELECTED_PRODUCTS':
      return {
        ...state,
        open: false
      }
    default:
      return state;
  }
};

export default productPicker;