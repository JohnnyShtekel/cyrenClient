import React from 'react';





const styles = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: 20 + 'px',
    color: '#08489D'
}

const Menu = (props) => {

    return (
        <nav>
            <div className=" blue-grey darken-3 nav-wrapper">
                <a  className="brand-logo"><img src="//i.imgur.com/kLOD26r.png" height="64" width="64"/></a>
                <ul className="left hide-on-med-and-down">
                    <li><h6>1 | POS: 1</h6></li>
                </ul>
            </div>
        </nav>
    );
};
export default Menu;
