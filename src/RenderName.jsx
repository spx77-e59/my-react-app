import PropTypes from "prop-types";

const RenderName = ({ name, age }) => {
  return (
    <div>
      {name} {age}
    </div>
  );
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

RenderName.defaultProps = {
  age: 18,
};

export default RenderName;
