import React from 'react'
import Ringloader from 'react-spinners/Cliploader'

const override ={
display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin:"100px auto"
}
const Spinner = ({loading}) => {
  return (
    <div>
      <Ringloader color='#4338csa'
        loading={loading}
        cssOverride={override}
        size={150}
        />
        
        
    </div>
  )
}

export default Spinner
