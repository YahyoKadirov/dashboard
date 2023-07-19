import './navbar.scss'
import { Search, Budilni } from '../assets/styles/icons'
import  rasm  from '../assets/images/m header.svg'

const Navbar = () => {
    return  (
        
            <div className="navbar">
           <div className="navbar-item-1">
             <h2>Overwiew</h2>
           </div>
           <div className="navbar-item-2">
            <div className="box1">
                <span><Search /></span>
                <Budilni />
            </div>
            <div className="box2">
                <h3>Jones Ferdinand</h3>
                <div><img className='rasm' src={rasm} alt="rasm" /></div>
            </div>
           </div>
           <div className='navbar-2'>
                <div className="navbarbox">
                    <h4>Unresolved</h4>
                    <h1>60</h1>
                </div>
                <div className="navbarbox">
                    <h4>Overdue</h4>
                    <h1>16</h1>
                </div>
                <div className="navbarbox">
                    <h4>Open</h4>
                    <h1>43</h1>
                </div>
                <div className="navbarbox">
                    <h4>On hold</h4>
                    <h1>64</h1>
                </div>
           </div>
        </div>
        
    )
}
export default Navbar