import Snackbar from "@mui/material/Snackbar";

const SnackBar = ({ message, open, onClose }) => {
  const position = {
    vertical: "top",
    horizontal: "right",
  };

  return (
    <Snackbar
      anchorOrigin={position}
      autoHideDuration={3000}
      open={open}
      message={message}
      onClose={onClose}
    />
  );
};

export default SnackBar;
