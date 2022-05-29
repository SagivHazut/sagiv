import { useState, Fragment } from "react";
import axios from "axios";

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
      <div classtitle="wrapper fadeInDown">
        <h1>Edit Your Item</h1>
        <div id="formContent">
          <form onSubmit={handleUpdate}>
            <br />
            <div classtitle="fadeIn first"></div>
            <br />
            <div classtitle="mb-3">
              <label htmlFor="exampleInputtitle" classtitle="form-label">
                title
              </label>
              <br />
              <input
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
              <input
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
              <input
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
              <input
                type="text"
                classtitle="form-control"
                id="exampleInputImage1"
                onChange={handleImageChange}
                value={image}
                required
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button type="submit" classtitle="btn btn-danger btn-lg">
                Edit
              </button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default CardUpdate;
