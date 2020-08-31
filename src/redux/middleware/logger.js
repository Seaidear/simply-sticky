const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action: ', action);
  console.log('The new state', store.getState());
  console.groupEnd();

  return next(action);
};

export default logger;
