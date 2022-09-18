import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.png'
import '../components/Category.css'



export const Category = () => {

    return (
        <>
            <div className="container my-5 p-3">
                <h2 className='text-center my-5'>SHOP BY CATEGORY</h2>
                <div className="row g-5">
                    <div className="col-lg-3 col-sm-12 ">
                        <img src={pic1} height={300} width={300} className="mb-5" />
                        <h5>CBD Face</h5>
                    </div>
                    <div className="col-lg-3 col-sm-12" >
                        <img src={pic2} height={300} width={300} className="mb-5" />
                        <h5>Body</h5>

                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <img src={pic3} height={300} width={300} className="mb-5" />
                        <h5>Hash Oil</h5>

                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <img src={pic4} height={300} width={300} className="mb-5" />
                        <h5>Biscuit</h5>

                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center'>

                    <a className='button2'>Shop Organic Hemp Extract</a>
                </div>

            </div>
        </>
    )
}