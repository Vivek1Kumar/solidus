import React from 'react';

function searchNavbar(props) {
    return (
        <React.Fragment>
            <div className='m-3 b-3 d-flex justify-content-between'>
                <div>Solidus</div>
                <form class="form-inline">
                    <input class="form-control form-control rounded-0 border-right-1  border-dark" type="text" placeholder="Hoodies, mug, shirt..." />
                    <button class="btn bg-light rounded-0 border-left-0 border-dark" type="submit">Search</button>
                </form>
                <div>Cart</div>
            </div>
            <div className="border-bottom" />
        </React.Fragment>
    );
}

export default searchNavbar;