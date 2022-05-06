const Button = ({ name, handleClick, customStyle }) => (
  <button className={customStyle} onClick={handleClick}>
    {name}
  </button>
);

Button.defaultProps = {
  customStyle: "btn",
};

export default Button;
