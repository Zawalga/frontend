import React, { useEffect, useState } from "react";
import { Form, Button, Input } from "antd";
import axios from "axios";
const BASE_URL = "http://localhost:3001/admin/";
export function ImageUpload() {
  const [fileName, setFileName] = useState();
  const [file, setFile] = useState();
  const [allImage, setAllImage] = useState([]);
  const getimage = async () => {
    await axios.get(BASE_URL + "/getImage").then((res) => {
      const data = res.data;
      setAllImage(data);
    });
  };
  useEffect(() => {
    getimage();
  }, []);
  console.log(allImage);
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.getAll("image");
    console.log(formData.getAll("image"));
    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }

    await axios.post(BASE_URL + "uploadImage", formData).then((res) => {
      console.log(res);
    });
  };

  const handleFormSubmit = () => {
    console.log("kekl");
  };
  return (
    <div>
      <Form onFinish={handleFormSubmit}>
        <Form.Item label="Username" name="username">
          <Input type="file" onChange={(e) => handleUploadImage(e)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {allImage.map((value, i) => {
        <div key={i}>
          <div className="">a</div>
        </div>;
      })}
    </div>
  );
}
