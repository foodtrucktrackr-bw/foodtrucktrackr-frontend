import React from "react";
import { Button } from "reactstrap";

const TruckListItem = ({ truck, props, deleteCard }) => {
  const starStyle = { fontSize: "20px" };
  const buttonStyle = { backgroundColor: "rgb(0, 85, 200)" };
  return (
    <div>
      <div className="truckListCard">
        <img
          src="https://picsum.photos/300/"
          alt="truckImage"
          className="truckPictures"
        />
        <div className="truckCardText">
          <h3>Truck Name: {truck.truckName}</h3>
          <h4>Distance: {truck.location}</h4>
          <h5>Food Description: {truck.truckDescription}</h5>
          <h5>
            Rating: <i class="fas fa-star 8x" style={starStyle}></i>
            <i class="fas fa-star" style={starStyle}></i>
            <i class="fas fa-star" style={starStyle}></i>
            <i class="fas fa-star" style={starStyle}></i>
            <i class="far fa-star"></i>
          </h5>
          <h5>Price Range: $-$$</h5>
          {props.OperatorDashboard && (
            <>
              <Button className="btn" style={buttonStyle}>
                Promote
              </Button>
              <Button className="btn" style={buttonStyle}>
                Edit
              </Button>
              <Button
                className="btn"
                onClick={deleteCard}
                id={truck.id}
                style={buttonStyle}
              >
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TruckListItem;
