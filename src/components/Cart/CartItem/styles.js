import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 200,
  },
  cartItem: {},
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  cartActions: {
    justifyContent: "space-between",
    flexDirection: "column",
    
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    padding: 10
  },
}));
