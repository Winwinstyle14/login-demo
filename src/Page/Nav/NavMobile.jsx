import React from 'react'
import { Link } from 'react-router-dom'
const NavMobile = () => {
    return (
        <div>
            <ul className="menubar_list_mobile">
                <li className="menubar_item_nobile">
                    <Link to="/index" className="menubar_link_a_mobile">TRANG CHỦ</Link>
                </li>
                <li className="menubar_item_nobile">
                    <Link to="/gioithieu" className="menubar_link_a_mobile">GIỚI THIỆU</Link>
                </li>
                <li className="menubar_item_nobile menubar_posi1">
                    <Link to="/shopao" className="menubar_link_a_mobile">SHOP ÁO
                    </Link>
                </li>
                <li className="menubar_item_nobile menubar_posi2">
                    <Link to="/shopquan" className="menubar_link_a_mobile">SHOP QUẦN
                    </Link>
                </li>
                <li className="menubar_item_nobile">
                    <Link to="/tintuc" className="menubar_link_a_mobile">TIN TỨC</Link>
                </li>
                <li className="menubar_item_nobile">
                    <Link to="/lienhe" className="menubar_link_a_mobile">
                        LIÊN HỆ</Link>
                </li>
                <li className="menubar_item_nobile">
                    <Link to="/login" className="menubar_link_a_mobile">
                        Đăng nhập</Link>
                </li>
                <li className="menubar_item_nobile">
                    <Link to="/signup" className="menubar_link_a_mobile">
                        Đăng ký</Link>
                </li>
                {/* <li class="nav_bar-btn"><i class="fa-solid fa-bars"></i></li> */}
            </ul>
        </div>
    )
}

export default NavMobile