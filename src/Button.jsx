function Button({
  text = "unassigned",
  color = "gray",
  fontSize = 16,
  handleClick,
  // url = "https://www.theodinproject.com",
  bgcolor = "gray",
}) {
  const buttonstyle = {
    color,
    fontSize: fontSize + "px",
  };
  return (
    <button
      style={buttonstyle}
      onClick={() => {
        handleClick(bgcolor);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
