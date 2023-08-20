import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import Button from "../../ui/Button";
/* eslint-disable react/prop-types */
function UpdateCartQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;
