const types = action => ({
  default: `${action.toUpperCase()}`,
  fulfilled: `${action.toUpperCase()}_FULFILLED`,
  rejected: `${action.toUpperCase()}_REJECTED`,
  pending: `${action.toUpperCase()}_PENDING`
});

export default types;
