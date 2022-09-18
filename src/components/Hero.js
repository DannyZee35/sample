import '../components/Hero.css'
import hero from '../assets/hero.png'


export const Hero = () => {

    return (
        <>
            <div className="container cont px-sm-5">
              
                <div className="row g-5">
                    <div className="col-lg-6 col-sm-12">
                        <h1 className='mb-3'>QUALITY CBD YOU CAN TRUST.</h1>
                        <span className='mb-5'>
                            Comitted with providing highest quality premium broad spectrum CBD products so that you can always count on recieving the best.
                        </span>
                        <a className='button'>Shop Now</a>
                    </div>
                    <div className="col-lg-6 d-sm-none d-md-block ">
                        <img src={hero} height={300} className="hero-img img-fluid" />
                    </div>
                </div>

            </div>
        </>
    )
}