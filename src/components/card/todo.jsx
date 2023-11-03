import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";

import { Context } from "../../store/store";
import { useContext, useState } from "react";
import { TYPES_ACTIONS } from "../../reducer/actions";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Todo = ({ title, id, finish }) => {
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { dispatch } = useContext(Context);
  const deleteTodo = () => {
    dispatch({
      type: TYPES_ACTIONS.REMOVE,
      payload: id,
    });
  };
  const editTodo = (finish = false) => {
    dispatch({
      type: TYPES_ACTIONS.EDIT,
      payload: {
        id,
        title: value || title,
        finish: finish,
      },
    });
    setEditMode(false);
  };

  const setEditedTodo = () => {
    setValue(title);
    setEditMode(true);
  };

  return (
    <div className="w-10/12 rounded bg-slate-300 mx-auto p-4 flex justify-between items-center mb-4">
      <div className="flex gap-x-3 items-center">
        <Checkbox
          id="terms1"
          checked={finish}
          onCheckedChange={(isChecked) => editTodo(isChecked)}
        />
        {editMode ? (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTodo();
              }
            }}
          />
        ) : (
          <label
            htmlFor="terms1"
            className={`font-bold text-2xl ${finish ? "line-through" : ""}`}
          >
            {title}
          </label>
        )}
      </div>
      <div className="flex gap-3 items-center">
        {!editMode ? (
          <Button variant="secondary" onClick={setEditedTodo} disabled={finish}>
            <AiOutlineEdit />
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => editTodo()}>
            <AiOutlineCheck />
          </Button>
        )}

        <Button variant="destructive" onClick={deleteTodo}>
          <FaTrashCan />
        </Button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  finish: PropTypes.any,
};
