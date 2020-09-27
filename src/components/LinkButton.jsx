import React from 'react';
import { withRouter } from 'react-router';

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props;
  return (
    <button
      type="button"
      className="linkButton"
      {...rest}
      onClick={(event) => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
};

export default withRouter(LinkButton);
