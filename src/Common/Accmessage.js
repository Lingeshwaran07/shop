import React from "react";
import { GrStatusGood } from "react-icons/gr";

const Accmessage = (props) => {
  return (
    <div
      style={{
        margin: "0",
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        columnGap: "5px",
      }}
    >
      <p style={{ fontSize: "13px", margin: "0", padding: "4px 6px" }}>
        <GrStatusGood
          style={{ marginRight: "5px", fontSize: "13px",}}
        />
       Hello {props.value}, Your account has been created
      </p>
    </div>
  );
};

export default Accmessage;
