import '../components/News.css'


export const News=()=>{

    return(
        <>
        
        <div className="container-fluid   p-5 newsCont ">
                 <div className="row g-5 px-5">
                    <div className="col-lg-6  col-sm-12 ">
                         <h5 style={{color:"white"}}>Subscribe to Our Newsletter</h5>
                        <p  style={{color:"white"}}>Get update on our new products and latest offers</p>

                    </div>
                    <div className="col-lg-6 col-sm-12" >
                        <div className='d-flex align-items-center justify-content-center flex-lg-row  flex-sm-column flex-column'>
                        <input placeholder='Your Email' className="input-box"/>
                        <a className='button5'>Subscribe</a>
                        </div>
                       

                    </div>

                     

                     
                </div>
                

            </div>
        </>
    )
}