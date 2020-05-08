function getStatusVariant(status) {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";

    case "processing":
      return "warning";

    case "failed":
      return "danger";

    default:
      return "";
  }
}

export { getStatusVariant };
