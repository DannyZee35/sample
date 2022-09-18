import '../components/Discount.css'
import dis from '../assets/dis.png'



export const Discount = ()=>{

    return(
     <>
     <div className="container my-5 p-3 con">
                 <div className="row g-5 con">
                    <div className="col-lg-6 col-sm-12 ">
                        <p className="mb-4 span" style={{color:'#F6730A'}}>
                        SPECIAL OFFER
                        </p>
                        <p className="mb-4 span" style={{color:'#60820E'}}>
                        Registered Members
                        </p>
                        <h2 className="mb-4">
                        Get 10% discount  on 1 order.
                        </h2>
                        <a className='button3'>
                            Shop Now
                        </a>
                    </div>
                    <div className="col-lg-6 col-sm-12" >
                    <img src={dis} height={300}  className="mb-5 img-fluid " />


                    </div>

                     
                </div>
                

            </div>
     </>
    )
}