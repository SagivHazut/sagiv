import { useState, Fragment } from "react";
import axios from "axios";
import { Input, Button } from "@mui/material";

const CardUpdate = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [image, setImage] = useState(props.image);
  const URL = "http://localhost:8181/api/cards/";
  const { item, onUpdateUser } = props;

  const handletitleChange = (ev) => {
    setTitle(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };
  const handlePriceChange = (ev) => {
    setPrice(ev.target.value);
  };
  const handleImageChange = (ev) => {
    setImage(ev.target.value);
  };

  const handleUpdate = () => {
    onUpdateUser(
      axios
        .patch(`${URL}${item._id}`, { title, description, price, image })
        .then(() => {})

        .catch((err) => {
          if (err.response) {
          }
        })
    );
  };

  return (
    <Fragment>
      <div classtitle="wrapper fadeInDown" style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "30%" }}>Edit Your Item</h1>
        <div id="formContent">
          <form onSubmit={handleUpdate}>
            <div classtitle="fadeIn first"></div>
            <div classtitle="mb-3">
              <label htmlFor="exampleInputtitle" classtitle="form-label">
                Title
              </label>
              <br />
              <Input
                type="text"
                classtitle="form-control"
                id="exampleInputtitle"
                onChange={handletitleChange}
                value={title}
                required
              />
            </div>
            <div classtitle="mb-3">
              <label htmlFor="exampleInputDescription1" classtitle="form-label">
                Description
              </label>
              <br />
              <Input
                type="text"
                classtitle="form-control"
                id="exampleInputDescription1"
                aria-describedby="DescriptionHelp"
                onChange={handleDescriptionChange}
                value={description}
                required
              />
            </div>
            <div classtitle="mb-3">
              <label htmlFor="exampleInputPrice1" classtitle="form-label">
                Price
              </label>
              <br />
              <Input
                type="number"
                classtitle="form-control"
                id="exampleInputPrice1"
                onChange={handlePriceChange}
                value={price}
                required
              />
            </div>
            <div classtitle="mb-3">
              <label htmlFor="exampleInputImage1" classtitle="form-label">
                Image
              </label>
              <br />
              <Input
                type="text"
                classtitle="form-control"
                id="exampleInputImage1"
                onChange={handleImageChange}
                value={image}
                required
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <Button type="submit" classtitle="btn btn-danger btn-lg">
                Edit
              </Button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default CardUpdate;
