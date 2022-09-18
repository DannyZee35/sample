
import '../components/Footer.css'





export const Footer = () => {
    return (
        <>
            <div className="container-fluid " style={{ backgroundColor: 'black', padding: '50px' }}>
                <div className="row g-5">
                    <div className="col-lg-3  col-sm-3 ">
                        <h5 className="text">PRODUCTS CATEGORIES</h5>
                        <hr className='text' />
                        <p className='text'>Disposable & Catridge</p>
                        <p className='text'>Edibles</p>
                        <p className='text'>Flower</p>
                        <p className='text'>Tincture Spray</p>

                    </div>
                    <div className="col-lg-3 col-sm-3" >
                        <h5 className="text">ABOUT US</h5>
                        <hr className='text' />
                        <p className='text'>About Us</p>
                        <p className='text'>Careers</p>
                        <p className='text'>Terms Of Use</p>
                        <p className='text'>Privacy Policy</p>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <h5 className="text">SOCIAL IMPACT</h5>
                        <hr className='text' />

                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="text">Reach to Us</h5>
                        <hr className='text' />
                        <p className='text'>Keas 69 Str.</p>
                        <p className='text'>15234, Chalandri
                            Athens,</p>
                        <p className='text'>Greece</p>
                        <p className='text'>813-728-1668</p>
                        <p className='text'>info@terpify.com</p>

                    </div>

                </div>
                <h6 className='text text-center mb-5' style={{color:'#1FD14C',fontSize:'3vh'}}>
                    TERPIFY PRIVACY & TERMS
                    Copyright © 2022 | All Rights Reserved | Terpify
                </h6>
                <h6 className='text-center text mb-5'>
                    CANNABIS AND MARIJUANA ARE FOR USE ONLY BY PERSONS 21 YEARS OF AGE OR OLDER. SUCH USE MAY BE PROHIBITED IN YOUR LOCATION. THE STATEMENTS ON THIS WEBSITE HAVE NOT BEEN EVALUATED BY THE FDA. PRODUCTS SOLD OR ADVERTISED ON THIS WEBSITE ARE NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE.
                </h6>

            </div>
        </>
    )
}