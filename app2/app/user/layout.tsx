

export default function ({children} :{
    children : React.ReactNode
}
) {
  return (
    <div>
    <div className="p-4 border-b flex justify-between">
    <div className="div">Medium</div>
    <div className="div">Log In</div>
  </div>
  <div>{children}</div>
  </div>
  )
}


