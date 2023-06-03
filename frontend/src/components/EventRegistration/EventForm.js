import {  TextField } from "@mui/material";
import React from "react";
import { DatePicker, Space, Input, TimePicker, Upload, Button, Radio } from 'antd';
import { UploadOutlined } from "@mui/icons-material";




const EventForm = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const [img, setImg] = React.useState(null)
    const [radio, setRadio] = React.useState('One Time')
    const handleRadioButton = (e) => { 
        setRadio(e.target.value)
    }
    console.log(radio)
    // console.log(img)
    const plainOptions = ['One Time', 'Recurring'];
    return (
        <div style={{ height: "100dvh", backgroundColor:"#ffff"}}>
            <div className="container py-5" style={{
                textAlign: "center",
                paddingTop: "50px",
               
            }}>
                <h2>
                    <span>Register your Event 📅</span>
                </h2>
            </div>
            <div className="container  py-3" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"
            }}>

                <Input placeholder="Event Title" name="eventTitle" type='text'
                    // onChange={(e) => handleFormData(e)}
                    style={{ width: "735px", height: '60px' }}
                />
                <Input placeholder="Decsription" name="description" type='text'
                    // onChange={(e) => handleFormData(e)}
                    style={{ width: "735px", height: '60px' }}
                />
                <Space direction="vertical" style={{ width: "735px", height: '60px', display: "flex" }}>
                    <div className="dateandtime" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",

                    }}>
                        <DatePicker status="" style={{ width: '47%', height: '60px', }}
                        // onChange={(e) => handleFormData(e)}
                        />
                        <TimePicker status=""
                            style={{ width: '47%', height: '60px', color: "black !important" }}
                        // onChange={(e) => handleFormData(e)}
                        />
                    </div>
                </Space>
                <Input placeholder="Duration in Days" name="duration" type='number'
                    // onChange={(e) => handleFormData(e)}
                    style={{ width: "735px", height: '60px' }}
                />
                <Upload
                    action="http://localhost:3000"
                    listType="picture"
                    // defaultFileList={[...fileList]}
                    maxCount={1}
                    accept=" .jpg, .jpeg, .png"
                    beforeUpload={(file) => {
                        console.log(file);
                        setImg(file)
                        return false;
                    }}

                >
                    <Button icon={<UploadOutlined />}
                        style={{ width: "735px", height: '60px' }}
                    >Upload Your Event Poster</Button>
                </Upload>

                <Input placeholder="Max Participants" name="maxParticipants" type='number'
                    // onChange={(e) => handleFormData(e)}
                    style={{ width: "735px", height: '60px' }}
                />

                <Radio.Group options={plainOptions}
                    onChange={handleRadioButton} defaultValue={setRadio}
                    style={{ width: "735px", height: '60px' }}
                />
                <Button type="primary" block style={{ width: "735px", height: '60px' }} >
                    Create Event
                </Button>


            </div>
        </div>
    );
};

export default EventForm;
