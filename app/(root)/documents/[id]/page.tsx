import Header from "@/components/Header";
import { Editor } from "@/components/editor/Editor";
import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="doocument-title">This is a fake document</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
