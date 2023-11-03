import moment from "moment";
import React from "react";

interface Props {
  date: string | undefined;
}
const DisplayDatetime = (props: Props) => {
  const { date } = props;
  return (
    <div>
      <p className="display-time">Time is: {moment(date).format("LL")}</p>
    </div>
  );
};

export default DisplayDatetime;
