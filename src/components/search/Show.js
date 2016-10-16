import React from 'react';

const Show = ({
  show,
}) => {
  return (
    <div>{show.show.title}</div>
  )
};

Show.propTypes = {
  show:        React.PropTypes.object.isRequired,
};

export default Show;
