import React from 'react'
import { Link } from 'react-router-dom'
const NavCart = () => {
    return (
        <div>
            <Link to="/cart">
                <i className="fa-solid fa-cart-shopping size" />
                <span>Giỏ hàng</span>
                <span className="header-cart-num">1</span>
                {/* khong cos sp: header__cart_list_no_cart */}
                <div className="header__cart_list">
                    <p className="text_cart">Chưa có sản phẩm nào trong giỏ hàng</p>
                    <ul className="cart_list_item">
                        <li className="cart_list_item1">
                            <img src="https://levents.asia/wp-content/uploads/2022/08/z3745137680825_c872ef151b0e7d2ea41877ab3e0d8815-400x500.jpg" alt="" className="header_cart_item1" />
                            <div className="cart_item_info">
                                <h5 className="cart_text_pd">
                                    LEVENTS® | DORAEMON POPULAR CAT TEE
                                </h5>
                                <span className="cart_pd_price">395.000 vnđ</span>
                                <span className="cart_pd_multiply">x</span>
                                <span className="cart_pd_qnt">3</span>
                            </div>
                            <div className="cart_item_info1">
                                <i className="fa-solid fa-xmark" />
                            </div>
                        </li>
                    </ul>
                    <div className="border_bt_cart" />
                    <span className="tong_gia">Tổng cộng :</span><span> 395.000 vnđ</span>
                    <div className="border_bt_cart" />
                    <button className="btn_cart_pd">Xem giỏ hàng</button>
                </div>
            </Link>
        </div>
    )
}

export default NavCart