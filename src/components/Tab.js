import React, { useState } from "react";

const Tab = ({children}) => {
  const [highlightStyle, setHighLightStyle] = useState({left: 0, opacity: 0})

  const moveHighLight = (e) => {
    setHighLightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  }

  const hideHighLight = (e) => {
    setHighLightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }

  return (
    <div className="tab" onMouseMove={moveHighLight} onMouseOut={hideHighLight}>
      <div className="highlight" style={highlightStyle} />
      <a>{children}</a>
    </div>
  )
}

export default Tab;