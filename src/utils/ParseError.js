const parseError = (err) => {
  if (err?.response?.data?.error) {
    const message = err.response.data.error;
    return message;
  }
};

export default parseError;
