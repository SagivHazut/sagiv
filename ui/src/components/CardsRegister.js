import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@mui/material";
const CardRegister = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();

  const handleTitleChange = (ev) => {
    setTitle(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };
  const handlepriceChange = (ev) => {
    setPrice(ev.target.value);
  };
  const handleImageChange = (ev) => {
    setImage(ev.target.value);
  };

  const handleSignup = (ev) => {
    ev.preventDefault();
    axios
      .post("/cards", {
        title,
        description,
        price,
        image,
      })
      .then((res) => {
        navigate("/home", { replace: true }, { description, price });
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };

  return (
    <div
      className="wrapper fadeInDown"
      style={{
        margin: "0 auto",
        textAlign: "center",
        marginTop: "10%",
        border: "5px  solid",
        borderRadius: "20%",
      }}
    >
      <h1>Card Maker</h1>
      <div id="formContent">
        <form onSubmit={handleSignup}>
          <div className="fadeIn first"></div>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Title
            </label>
            <br />
            <Input
              type="text"
              className="form-control"
              id="exampleInputName1"
              onChange={handleTitleChange}
              value={title}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription1" className="form-label">
              Description
            </label>
            <br />
            <Input
              type="text"
              className="form-control"
              id="exampleInputDescription1"
              aria-describedby="DescriptionHelp"
              onChange={handleDescriptionChange}
              value={description}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputprice1" className="form-label">
              Price
            </label>{" "}
            <br />
            <Input
              type="number"
              className="form-control"
              id="exampleInputprice1"
              onChange={handlepriceChange}
              value={price}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImage1" className="form-label">
              Image
            </label>
            <br />
            <Input
              type="text"
              className="form-control"
              id="exampleInputImage1"
              onChange={handleImageChange}
              value={image}
              required
            />
          </div>
          <br />
          <Button
            type="submit"
            className="btn btn-danger"
            onSubmit={() => navigate("/home", { replace: true })}
          >
            Create a New Card
          </Button>
        </form>

        <br />
      </div>
    </div>
  );
};

export default CardRegister;
