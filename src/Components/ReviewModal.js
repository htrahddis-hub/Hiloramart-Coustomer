import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Rating } from "react-simple-star-rating";

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "55%",
  bgcolor: "#F2F2F2",
  boxShadow: 24,
  p: 4,
  // padding: '0 10px 0 10px',
  borderRadius: "8px",
  border: "none",
  display: "flex",
  flexDirection: "column",
};

const ReviewModal = ({ prevrating, id, handleClose, open }) => {
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(prevrating);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = async () => {};

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="focus"
    >
      <Box sx={style2}>
        <Button
          onClick={handleClose}
          style={{
            width: "30px",
            marginLeft: "auto",
            padding: 0,
            color: "#FF8D22",
          }}
        >
          <CloseIcon style={{ color: "#FF8D22" }} />
        </Button>
        <p className="text-center h4">Rating</p>
        <Rating onClick={handleRating} ratingValue={rating} size={28} />
        <label htmlFor="comment" className="mt-4 mb-3">
          Add a Comment
        </label>
        <input
          id="comment"
          type="text"
          value={comment}
          onChange={handleChange}
        />
        <button className="submit-button">Submit</button>
      </Box>
    </Modal>
  );
};

export default ReviewModal;
