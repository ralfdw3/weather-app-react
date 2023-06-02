import "./ClimateData.css";

const ClimateData = ({ imageSrc, imageAlt, value, title }) => {
  return (
    <div className="climate-container">
      <img src={imageSrc} alt={imageAlt} />
      <span className="percentage">{value}%</span>
      <span className="climate-data">{title}</span>
    </div>
  );
};

export default ClimateData;
