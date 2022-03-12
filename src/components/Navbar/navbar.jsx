import React from "react";
import './navbar.scss';
const Navbar = () => {
    return (
        <div class='Navbar'>
            <div className="logoNavbar">
                <img src="https://www.beeart.vn/uploads/file/images/blog/logo-nganh-thuc-pham/logo-nganh-thuc-pham-bee-art-03.jpg" alt="" className="logo" />
            </div>
            <div className="menuNavbars">
                <a href="" class='menuNavbar'>THƯƠNG HIỆU</a>
                <a href="" class='menuNavbar'>ƯU ĐÃI</a>
                <a href="" class='menuNavbar'>MỚI NHẤT</a>
                <a href="" class='menuNavbar'>THỰC ĐƠN</a>
                <a href="" class='menuNavbar'>KHÁM PHÁ</a>
                <a href="" class='menuNavbar'>GIAO HÀNG</a>
                <a href="" class='menuNavbar'>ĂN UỐNG</a>
                <a href="" class='menuNavbar'>LIÊN HỆ</a>
            </div>
            <div className="searchNavbar">
                <input className="search" placeholder="Tìm Kiếm ........"></input>
                <i class='bx bx-search-alt-2'></i>
            </div>
            <div className="loginNavbar">
                <a href=""className="login">ĐĂNG NHẬP</a>
            </div>
        </div>
    )
}
export default Navbar;