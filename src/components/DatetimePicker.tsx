import React, { useEffect, useState } from "react";
import "./datetimepicker.css";
import DisplayDatetime from "./DisplayDatetime";
import moment from "moment";

const DatetimePicker = () => {
  const [date, setDate] = useState<string>();

  const handleChangeDatetime = (e: any) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    let timeStamp = new Date();
    setDate(moment(timeStamp).format("YYYY-MM-DD"));
  }, []);

  return (
    <div>
      <input
        value={date}
        onChange={handleChangeDatetime}
        type="date"
        className="datetime-picker-container"
      />
      <DisplayDatetime date={date} />
    </div>
  );
};

export default DatetimePicker;
