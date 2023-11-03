import { TYPES_ACTIONS } from "../../../reducer/actions";
import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { Context } from "../../../store/store";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { toast } from "../../ui/use-toast";

function AddTodo() {
  const { dispatch } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const add = () => {
    if (!inputValue.trim().length) {
      return;
    }
    dispatch({
      type: TYPES_ACTIONS.ADD,
      payload: {
        title: inputValue,
        id: uuidv4(),
        finish: false,
      },
    });
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
    setInputValue("");
  };
  return (
    <div className="flex w-10/12 mx-auto my-4 justify-center gap-x-3">
      <Input
        type="text"
        placeholder={"Todo title ......"}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            add();
          }
        }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={add}>Add</Button>
    </div>
  );
}
export default AddTodo;
