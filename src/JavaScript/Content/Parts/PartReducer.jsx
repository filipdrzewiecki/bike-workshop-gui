const modifiedState = {
  parts: [
    { id: 1, productId: "FR-SCOTT-SPARK", product: "frame" },
    { id: 2, productId: "FR-BIANCHI-SPRINT", product: "frame" },
    { id: 3, productId: "FR-BIANCHI-SPRINT", product: "frame" }
  ]
};


export const partReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PARTS":
      return { ...state, payload: action.payload};
    default:
      return state;
  }
};
