import React, { useState } from "react";
import { trucks as data } from "../dummy-data";
import TruckListItem from "./TruckListItem";

const TruckList = (props) => {
  const [truckList, setTruckList] = useState(data);

  const deleteCard = (e) => {
    setTruckList(
      truckList.filter((truck) => {
        return truck.id.toString() !== e.target.id;
      })
    );
  };

  return (
    <div>
      <div className="truckListCardContainer">
        {truckList.map((truck) => (
          <TruckListItem
            truck={truck}
            deleteCard={deleteCard}
            props={props}
            key={truck.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TruckList;
