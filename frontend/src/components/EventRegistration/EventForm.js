import { TextField } from "@mui/material";
import React from "react";
import { DatePicker, Space } from "antd";

const EventForm = () => {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="container py-5">
        <h2>Register your Event here!</h2>
      </div>
      <div className="container  py-3">
        <TextField
          id="outlined-basic"
          label="Event Title"
          name="eventTitle"
          type="text"
          // onChange={(e) => handleFormData(e)}
          // onBlur={ValidateFrom}
          variant="outlined"
          style={{ width: "735px" }}
          // error={formError === 'password' ? true : false}
        />
        <TextField
          id="outlined-basic"
          label="Decsription"
          name="description"
          type="text"
          // onChange={(e) => handleFormData(e)}
          // onBlur={ValidateFrom}
          variant="outlined"
          style={{ width: "735px" }}
          // error={formError === 'password' ? true : false}
        />
        <Space direction="vertical" style={{ width: "735px", height: "60px" }}>
          <DatePicker
            status=""
            style={{ width: "100%", height: "60px", color: "black !important" }} // onChange={(e) => handleFormData(e)}
          />
        </Space>
      </div>
    </>
  );
};

export default EventForm;
