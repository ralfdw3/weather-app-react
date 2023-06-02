import "./InputWithImage.css";

const InputWithImage = ({ onClick, onChange, flexDirection }) => {
  return (
    <div
      className="input-with-image-container"
      style={{
        display: "flex",
        flexDirection: flexDirection,
      }}
    >
      <img
        src="src/images/today-forecast/magnifying-glass.png"
        alt="lupa"
        className="magnifying-glass"
        onClick={onClick}
      />
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default InputWithImage;
