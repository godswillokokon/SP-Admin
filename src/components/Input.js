import React from "react";
import InputBlock from "styles/InputBlock";
import PasswordToggle from "./PasswordToggle";

const Input = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  passwordToggle,
  fullWidth,
  hideLabel = true,
  containerClass,
  errorText,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(type === "text");

  return (
    <InputBlock.Container fullWidth={fullWidth} className={containerClass}>
      <InputBlock.Label htmlFor={name} hide={hideLabel}>
        {label}
      </InputBlock.Label>
      <InputBlock
        name={name}
        fullWidth={fullWidth}
        type={passwordToggle ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autocomplete="off"
        error={!!errorText}
        {...rest}
      />
      {passwordToggle && (
        <PasswordToggle
          initialValue={showPassword}
          onChange={(v) => setShowPassword(v)}
        />
      )}
      {errorText && <InputBlock.ErrorText>{errorText}</InputBlock.ErrorText>}
    </InputBlock.Container>
  );
};

export default Input;
