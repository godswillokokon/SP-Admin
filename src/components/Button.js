import React from "react";
import ButtonBlock from "styles/ButtonBlock";
import Loader from "./Loader";

const Button = ({ loading, url, label, icon, children, ...rest }) => {
  if (url) {
    return (
      <ButtonBlock.Link to={url} {...rest} aria-label={label}>
        {loading ? (
          <Loader color="#fff" size={15} />
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </ButtonBlock.Link>
    );
  }
  return (
    <ButtonBlock {...rest} aria-label={label}>
      {loading ? (
        <Loader color="#fff" size={15} />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </ButtonBlock>
  );
};

export default Button;
