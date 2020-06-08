import React from "react";
import InputBlock from "styles/InputBlock";

const Select = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  passwordToggle,
  fullWidth,
  options = [],
  hideLabel = true,
  containerClass,
  errorText,
  optgroup = [],
  ...rest
}) => {
  return (
    <InputBlock.Container fullWidth={fullWidth} className={containerClass}>
      <InputBlock.Label htmlFor={name} hide={hideLabel}>
        {label}
      </InputBlock.Label>
      <InputBlock.Select
        name={name}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!errorText}
        {...rest}
      >
        {<option>SELECT {label}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}

        {optgroup.map((option, index) => (
          <optgroup key={index} label={option.name}>
            {option?.options.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </optgroup>
        ))}
      </InputBlock.Select>
      {errorText && <InputBlock.ErrorText>{errorText}</InputBlock.ErrorText>}
    </InputBlock.Container>
  );
};

export default Select;
