// Create reducer helper
const createReducer = (initialState: any, handlers: any) => (
  state = initialState,
  action: any
) => {
  const { type } = action;
  if (!handlers.hasOwnProperty(type)) return state;

  return handlers[type](state, action);
};

export { createReducer };
