import React from "react";
import { ReactComponent as XwingIcon } from "../assets/icons/xwingIcon.svg";

interface Props {
  page: number;
  prev: boolean;
  next: boolean;
  prevHandler: () => void;
  nextHandler: () => void;
}

function PaginationButtons(props: Props) {
  return (
    <div className="flex justify-center items-center">
      <button
        disabled={!props.prev}
        onClick={props.prevHandler}
        aria-label="previous page"
        className="mr-5 fill-yellow-500 disabled:fill-white/50 duration-200"
      >
        <XwingIcon className="h-8 transform -rotate-90" />
      </button>
      <p aria-label="current page" className="text-lg">
        page: {props.page}
      </p>
      <button
        disabled={!props.next}
        onClick={props.nextHandler}
        aria-label="next page"
        className="ml-5 fill-yellow-500 disabled:fill-white/50 duration-200"
      >
        <XwingIcon className="h-8 transform rotate-90" />
      </button>
    </div>
  );
}

export default PaginationButtons;
