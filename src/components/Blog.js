import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'





export const Blog=()=>{

    return(
        <>
         <div className="container my-5 p-3">
                <h2 className=' my-5'>Blog Posts</h2>
                <div className="row g-5">
                    <div className="col-lg-4  col-sm-12 ">
                        <img src={b1} height={300}   className="mb-5 img-fluid" />
                        <h5>Hemp plant vs. cannabis </h5>
                        <p>By Tom Drew. 25th July 2022</p>

                    </div>
                    <div className="col-lg-4 col-sm-12" >
                        <img src={b2} height={300}  className="mb-5 img-fluid" />
                        <h5>CBD products that helps you sleeps better</h5>
                        <p>By Tom Drew. 25th July 2022.</p>

                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <img src={b3} height={300}  className="mb-5 img-fluid" />
                        <h5>Cannabis commercial products</h5>
                        <p>By Tom Drew. 25th July 2022</p>
                    </div>

                     
                </div>
                <div className='d-flex align-items-center justify-content-center'>

                    <a className='button2' style={{backgroundColor:'black'}}>Read More</a>
                </div>

            </div>
        </>
    )
}