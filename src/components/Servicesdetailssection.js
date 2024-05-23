import React from 'react'

const Servicesdetailssection = ({services}) => {
  return (
    <section className='container py-5 my-4'>
        <h4 className="text-green text-center reveal">Harness renewable energy for a sustainable tomorrow</h4>
        <h1 className="text-center reveal">A New Energy Paradigm</h1>
        <div className="row g-4 py-4">
        {services.map(s=> <div className="col-12 col-md-4 reveal"  key={s.id}>
        <img src={s.image} className="img-fluid border card-img"/>
                <div className="p-4 border card-text">
                    <h3>{s.title}</h3>
                    <p className="py-2 service-cards">{s.content}</p>
                </div>  
        </div>)}
    </div>
    </section>
    
  )
}

export default Servicesdetailssection
