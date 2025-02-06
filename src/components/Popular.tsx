import React from "react";

const Popular: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
};

export default Popular;
