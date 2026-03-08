import React from "react";

export default function Layout({ children, currentPageName }) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {children}
    </div>
  );
}
