import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const Account = () => {
  const [image, setImage] = useState("");
  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "trendify");
      data.append("cloud_name", "saranadheeraj");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/saranadheeraj/image/upload",
        data
      );
      console.log(response.data.url);
      setImage(response.data.url);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Input
        type="file"
        onChange={(e: any) => {
          setImage(e.target.files[0]);
        }}
      />
      <Button onClick={handleSubmit}>upload</Button>
      {/* <Image src={image} /> */}
    </div>
  );
};

export default Account;
