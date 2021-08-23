import CheckoutForm from "./CheckoutForm";
import BookingDetails from "./BookingDetails";
import Confirmation from "./Confirmation";
import Payment from "./Payment";

export const renderRelatedComponent = ({
  user,
  order,
  errorMessage,
  bookingStep,
  handleChange,
  handleSubmit,
  checkoutData,
  handleBackStep,
  handleNextStep,
  handleCaptureCheckout,
  handleSelectChange,
}) => {
  switch (bookingStep) {
    case "order-address":
      return (
        <CheckoutForm
          user={user}
          order={order}
          checkoutData={checkoutData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case "order-details":
      return (
        <BookingDetails
          user={user}
          checkoutData={checkoutData}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCaptureCheckout={handleCaptureCheckout}
        />
      );
    case "order-payment":
      return (
        <Payment
          user={user}
          checkoutData={checkoutData}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCaptureCheckout={handleCaptureCheckout}
        />
      );
    case "confirmation":
      return <Confirmation order={order} errorMessage={errorMessage} />;
    default:
      return null;
  }
};
