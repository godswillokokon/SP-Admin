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

function getCity(addressArray) {
  let city = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (
      addressArray[i].types[0] &&
      "administrative_area_level_2" === addressArray[i].types[0]
    ) {
      city = addressArray[i].long_name;
      return city;
    }
  }
}

function getState(addressArray) {
  let state = "";
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_1" === addressArray[i].types[0]
      ) {
        state = addressArray[i].long_name;
        if (state === "Federal Capital Territory") {
          return "FCT";
        } else return state + " State";
      }
    }
  }
}

function getCountry(addressArray) {
  let country = "";
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && "country" === addressArray[i].types[0]) {
        country = addressArray[i].long_name;
        return country;
      }
    }
  }
}

export { getStatusVariant, getCity, getState, getCountry };
