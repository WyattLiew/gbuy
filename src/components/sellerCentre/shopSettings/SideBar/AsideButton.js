import React from "react";
import { Button } from "react-bootstrap";
import { TextIndentLeft, TextIndentRight } from "react-bootstrap-icons";

const AsideButton = ({ collapsed, handleCollapsedChange }) => {
  return (
    <div
      className="mt-2"
      style={{ position: "relative", height: "0", width: "0", zIndex: 100 }}
    >
      <Button className="menu__button" onClick={handleCollapsedChange}>
        {collapsed ? (
          <TextIndentLeft size={30} />
        ) : (
          <TextIndentRight size={30} />
        )}
      </Button>
    </div>
  );
};

export default AsideButton;
