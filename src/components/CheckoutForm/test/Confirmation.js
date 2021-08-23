import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Confirmation = ({ order, errorMessage }) => {
  if (errorMessage) {
    return (
      <div className="confirmation">
        <Typography variant="h5">Error: {errorMessage}</Typography>
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </div>
    );
  }
  return (
    <div className="confirmation">
      <Typography variant="h5">
        Thank you 
        for your purchase!
      </Typography>
      <Button component={Link} variant="contained" type="button" to="/products">
        Continue shopping
      </Button>
    </div>
  );
};

export default Confirmation;
