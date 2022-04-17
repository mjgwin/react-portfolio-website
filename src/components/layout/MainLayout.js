import React from 'react'

const MainLayout = (props) => {
  return (
    <div className="bg-cover bg-background-nav">
        {props.children}
    </div>
  )
}

export default MainLayout