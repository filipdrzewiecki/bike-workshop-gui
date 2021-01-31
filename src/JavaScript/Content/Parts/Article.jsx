import React from "react"

const part = ({part}) => (
  <div className="article">
    <h1>{part.productId}</h1>
    <p>{part.product}</p>
  </div>
)

export default part