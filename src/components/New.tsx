import React from "react";

const New: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
};

export default New;
