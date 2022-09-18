import '../components/Navbar.css'
import logo from '../assets/logo.png'
import acc from '../assets/person.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'

export const Navbar = () => {

    return (
        <><div className="h-10 topBox"></div>
     

   
            <nav class="p-4 navbar navbar-expand-lg navbar-dark ">
                <div class="container-fluid">
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-3">
                                <a class="nav-link active anchor" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link active anchor" href="#">Blog</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link active anchor" href="#">About Us</a>
                            </li>
                             
                          
                            
                        </ul>
                        <a class="nav-link active" href="#"><img src={logo} className="image"/></a>
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                          
                             <li class="nav-item mx-3">
                                <a class="nav-link active anchor" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link active anchor" href="#">Strains</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link active anchor" href="#">Order Online</a>
                            </li>
                            
                        </ul>
 
                          <i><img src={acc} className='icon-img mx-4'/></i> 
                          <i><img src={search} className='icon-img mx-4'/></i> 
                          <i><img src={cart} className='icon-img mx-4'/></i> 

                    </div>
                </div>
            </nav>
           
        </>
    )
}