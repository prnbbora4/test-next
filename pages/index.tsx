import React from 'react'

const App = () => {

  const data = [
    { name: "p" },
    { name: "b" }
  ]


  return (
    <>
      <div>
        {
          data.map((item, index) => {
            return (
              <p key={index} >{item.name}</p>
            )
          })
        }

      </div>
    </>
  )

}

export default App
