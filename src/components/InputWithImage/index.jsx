import "./InputWithImage.css";

const InputWithImage = ({ onClick, onChange, flexDirection, width }) => {
  return (
    <div
      className="input-with-image-container"
      style={{
        flexDirection: flexDirection,
        width: width,
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
