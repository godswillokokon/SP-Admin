export function formatMoney(number) {
  var decimalplaces = 2;
  var decimalcharacter = ".";
  var thousandseparater = ",";
  number = parseFloat(number);
  var sign = number < 0 ? "-" : "";
  var formatted = number.toFixed(decimalplaces).toString();
  if (decimalcharacter.length && decimalcharacter !== ".") {
    formatted = formatted.replace(/\./, decimalcharacter);
  }
  var integer = "";
  var fraction = "";
  var strnumber = formatted.toString();
  var dotpos = decimalcharacter.length
    ? strnumber.indexOf(decimalcharacter)
    : -1;
  if (dotpos > -1) {
    if (dotpos) {
      integer = strnumber.substr(0, dotpos);
    }
    fraction = strnumber.substr(dotpos + 1);
  } else {
    integer = strnumber;
  }
  if (integer) {
    integer = String(Math.abs(integer));
  }
  while (fraction.length < decimalplaces) {
    fraction += "0";
  }
  let temparray = [];
  while (integer.length > 3) {
    temparray.unshift(integer.substr(-3));
    integer = integer.substr(0, integer.length - 3);
  }
  temparray.unshift(integer);
  integer = temparray.join(thousandseparater);
  return sign + integer;
}
