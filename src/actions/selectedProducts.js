export const setSelectedProducts = (selectedProducts) => {
  return {
    type: 'SET_SELECTED_PRODUCTS',
    selectedProducts: selectedProducts
  };
};

export const removeSelectedProduct = (id) => {
  return {
    type: 'REMOVE_SELECTED_PRODUCT',
    id: id
  }
}

export const addProductQuestion = (questionItem) => {
  return {
    type: 'ADD_PRODUCT_QUESTION',
    option: questionItem.option,
    question: questionItem.question,
    answerMapping: questionItem.answerMapping,
    id: questionItem.productId
  }
}