import "./index.css";

const PropertyTypes = () => (
  <div className="property-types-container">
    <p className="property-types-para">Create OMs and Ads For</p>
    <h1 className="property-types-heading">
      Various Real Estate Property Types
    </h1>
    <div className="property-cards-container">
      <div className="property-card">
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728904574/Vector_ywibtw.png"
          className="card-image-property"
          alt="card"
        />
        <p className="card-text">Retail</p>
      </div>
      <div className="property-card">
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728904652/house_1_1_tscmv1.png"
          className="card-image-property"
          alt="card"
        />
        <p className="card-text">Multi-family</p>
      </div>
      <div className="property-card">
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728904707/building_1_1_tf6ehc.png"
          className="card-image-property"
          alt="card"
        />
        <p className="card-text">Office</p>
      </div>
      <div className="property-card">
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728904968/warehouse_1_1_bcr3ar.png"
          className="card-image-property"
          alt="card"
        />
        <p className="card-text">Industrial</p>
      </div>
      <div className="property-card">
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728904867/hotel_1_1_hwyro3.png"
          className="card-image-property"
          alt="card"
        />
        <p className="card-text">Hotel</p>
      </div>
      <div className="property-card">
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728904908/land_1_1_iudbmw.png"
          className="card-image-property"
          alt="card"
        />
        <p className="card-text">Land</p>
      </div>
    </div>
  </div>
);

export default PropertyTypes;
