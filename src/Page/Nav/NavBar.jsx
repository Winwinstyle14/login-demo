import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <div className="menubar_content">
                <ul className="menubar_list">
                    <li className="menubar_item">
                        <Link to="/" className="menubar_link_a">TRANG CHỦ</Link>
                    </li>
                    <li className="menubar_item">
                        <Link to="/gioithieu" className="menubar_link_a">GIỚI THIỆU</Link>
                    </li>
                    <li className="menubar_item menubar_posi1">
                        <Link to="/shopao" className="menubar_link_a">SHOP ÁO </Link>
                    </li>
                    <li className="menubar_item menubar_posi2">
                        <Link to="/shopquan" className="menubar_link_a">SHOP QUẦN
                        </Link>
                    </li>
                    <li className="menubar_item">
                        <Link to="/tintuc" className="menubar_link_a">TIN TỨC</Link>
                    </li>
                    <li className="menubar_item">
                        <Link to="/lienhe" className="menubar_link_a"> LIÊN HỆ</Link>
                    </li>
                    {/* <li class="nav_bar-btn"><i class="fa-solid fa-bars"></i></li> */}
                </ul>
            </div>
        </div>
    )
}

export default NavBar