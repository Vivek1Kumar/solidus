import React from 'react';
import { Link } from 'react-router-dom'
function itmesNavbar() {
    return (
        <div className=" d-flex justify-content-center">
            <Link to="/bag" class="p-2">Bags</Link>
            <Link to="/t-shirts" class="p-2">T-Shirts</Link>
            <Link to="/shirts" class="p-2">Shirts</Link>
            <Link to="/mugs" class="p-2">Mugs</Link>
            <Link to="/hoodie" class="p-2">Hoodie</Link>
            <Link to="/clothing" class="p-2">Clothing</Link>
            <Link to="/caps" class="p-2">Caps</Link>
        </div>        
    );
}






export default itmesNavbar;