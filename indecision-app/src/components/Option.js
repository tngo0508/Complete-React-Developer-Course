import React from "react";

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleAddOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
