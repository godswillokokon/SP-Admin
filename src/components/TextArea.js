import React from "react";
import TextAreaBlock from "styles/TextAreaBlock";

const TextArea = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  fullWidth,
  hideLabel = true,
  containerClass,
  errorText,
  ...rest
}) => {
  return (
    <TextAreaBlock.Container fullWidth={fullWidth} className={containerClass}>
      <TextAreaBlock.Label htmlFor={name} hide={hideLabel}>
        {label}
      </TextAreaBlock.Label>
      <TextAreaBlock
        name={name}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!errorText}
        {...rest}
      />
      {errorText && (
        <TextAreaBlock.ErrorText>{errorText}</TextAreaBlock.ErrorText>
      )}
    </TextAreaBlock.Container>
  );
};

export default TextArea;
