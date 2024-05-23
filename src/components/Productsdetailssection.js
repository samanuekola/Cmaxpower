import React from 'react'

const Productsdetailssection = ({items}) => {
  return (
    <div className='container'>
      {items.map(i=>
        <div className="row py-5 align-items-center reveal" key={i.id}>
            <h3 className="py-3">{i.title}</h3>
            <div className="col-12 col-md-6">
                <img src={i.image} className="img-fluid rounded"/>

            </div>
            <div className="col-12 col-md-6">
                <p>
                    {i.content}
                </p>
                
            </div>
        
        </div>
      )}
    </div>
  )
}

export default Productsdetailssection
