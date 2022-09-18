import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'
import r from '../assets/r.png'
import i from '../assets/i.png'

import '../components/NewArrivals.css'


export const NewArrivals=()=>{

    return(
        <>
         <div className="container my-5 p-3">
                <h2 className='text-center mb-5'>New NewArrivals</h2>
                <div className="row g-5 gx-5   ">
                    <div className="col-lg-3 col-sm-12 ">
                        <img src={a1} height={300} width={300} className="mb-5 bg" />

                        <h5>CBD Face</h5>
                       <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                       <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>
                    <div className="col-lg-3 col-sm-12" >
                        <img src={a2} height={300} width={300} className="mb-5 bg" />
                        <h5>Body</h5>
                        <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                        <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <img src={a3} height={300} width={300} className="mb-5 bg" />
                        <h5>Hash Oil</h5>
                        <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                        <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <img src={a4} height={300} width={300} className="mb-5 bg" />
                        <h5>Biscuit</h5>
                        <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                        <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>
                </div>
                <div className="row g-5 gx-5   ">
                    <div className="col-lg-3 col-sm-12 ">
                        <img src={a1} height={300} width={300} className="mb-5 bg" />

                        <h5>CBD Face</h5>
                       <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                       <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>
                    <div className="col-lg-3 col-sm-12" >
                        <img src={a2} height={300} width={300} className="mb-5 bg" />
                        <h5>Body</h5>
                        <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                        <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <img src={a3} height={300} width={300} className="mb-5 bg" />
                        <h5>Hash Oil</h5>
                        <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                        <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <img src={a4} height={300} width={300} className="mb-5 bg" />
                        <h5>Biscuit</h5>
                        <a className="pointer"><img src={r} height={20} className="mb-5  " /> </a> 
                        <div className="d-flex  justify-content-between">
                       <h6 className="bold">$30.00</h6>
                       <a className="pointer"><img src={i} height={50} className="mb-5  " /> </a> 

                       </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center'>

                    <a className='button2' style={{color:'white',backgroundColor:'black'}}>View All</a>
                </div>

            </div>
        </>
    )
}