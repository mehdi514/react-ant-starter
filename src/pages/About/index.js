import React, { useContext } from "react";
import { Typography } from "antd";

//stylesheet
import "./about.css";
import { UserContext } from "../../UserContext";

const { Title } = Typography;

export default (props) => {
  const msg = useContext(UserContext);
  console.log(Object.keys(msg));
  console.log(msg);
  // console.log(props);
  return (
    <div className="about">
      <Title className="text-center" level={4}>
        About Us!
      </Title>
      <p>
        Personal Loan Account multi-byte Wooden drive Shoes Intelligent Wooden
        Computer PNG Strategist Tuna Garden AGP 1080p driver Refined
        recontextualize clear-thinking array Chair silver Cheese compress
        auxiliary Track Senior feed invoice.
      </p>
      <div>
        {msg.sophia.surname} {msg.john.surname}
      </div>
    </div>
  );
};
