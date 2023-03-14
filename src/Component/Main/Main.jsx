import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import mainIcon01 from "../../img/IconMain/mainIcon01.png"
import mainIcon03 from "../../img/IconMain/mainIcon03.png"
import mainIcon04 from "../../img/IconMain/mainIcon04.png"
import mainIcon05 from "../../img/IconMain/mainIcon05.png"
import QuanTriIcon from "../../img/IconMain/QuanTriIcon.png"
import DanhMucIcon from "../../img/IconMain/DanhMucIcon.png"
import DoAnIcon from "../../img/IconMain/DoAnIcon.png"
import ToChucIcon from "../../img/IconMain/ToChucIcon.png"
import DropIcon from "../../img/IconMain/DropIcon.png"
import LogOut from "../../img/IconMain/LogOut.png"



const Main = () => {
    const navigate = useNavigate()
    const [ShowDangXuat, setShowDangXuat] = useState(false)
    const DangXuat = () => {
        return (
            <div className="border border-black w-[260px] h-[255px] bg-[#fff] absolute top-[68px] right-[45px] flex flex-col justify-between border text-[#172B4D] rounded-[3px] drop-shadow-[1px_4px_4px_rgba(23,43,77,0.15)] ">
                <div className="felx flex-col ">
                    <img src={mainIcon03} className="h-[70px] mx-auto mt-[15px]" alt="icon" />
                    <p className="text-center text-[16px] font-[500] my-[20px]">Nguyễn Văn A</p>
                    <button className="w-[136px] h-[36px] rounded-[3px] border block mx-auto text-[14px] font-[400]">Quản lý tài khoản</button>
                </div>
                <div className="h-[45px] w-full flex items-center text-[14px] font-[400] border-t-[1px]">
                    <button className="text-[14px] font-[400] flex items-center"
                        onClick={() => {
                            window.localStorage.removeItem('token')
                            navigate("/Login")
                        }}>
                        <img src={LogOut} className="mx-[20px]" alt="" />
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </div>
        )
    }
    // const [ClickQuanTri, setClickQuanTri] = useState(false)
    // const [ClickDanhMuc, setClickDanhMuc] = useState(false)
    // const [ClickDoAn, setClickDoAn] = useState(false)
    // const [ClickToChuc, setClickToChuc] = useState(true)
    // const [ClickNganhNghe, setClickNganhNghe] = useState(false)
    // const [ClickKhoa, setClickKhoa] = useState(false)
    // const [ClickLop, setClickLop] = useState(false)
    // const [ClickQuanLyDot, setClickQuanLyDot] = useState(false)
    // const [ClickKhoDeTai, setClickKhoDeTai] = useState(false)
    // let handleClick = " text-[#1890FF] bg-[#F0F7FF]"
    // const QuanTriClick = () => {setClickQuanTri(handleClick)}
    // const DanhMucClick = () => {}
    // const DoAnClick  = () => {}
    // const ToChucClick  = () => {}
    // const NganhNgheClick  = () => {}
    // const KhoaClick  = () => {}
    // const LopClick  = () => {}
    // const QuanLyDotClick  = () => {}
    // const KhoDeTaiClick  = () => {}
        

    
    return (
        <main className="min-h-[730px] w-[100vw] flex relative">
            <div className="h-[100vh] min-w-[210px] border-x border-[#ebebeb] ">
                <div className="h-[80px] w-full">
                    <img src={mainIcon01} className="h-[50px] w-[50px] mx-auto my-[15px]" alt="icon" />
                </div>
                <div className="text-[14px] font-[500] text-[#42526E] mt-[42px] ">
                    <Link to="/DanhSachThanhVien" className="w-[178px] h-[40px] mx-auto flex items-center hover:bg-slate-100">
                        <img className="w-[20px] h-[20px] mx-[10px] " src={QuanTriIcon} alt="" />
                        <p>Quản trị thành viên</p>
                    </Link>
                    <div>
                        <div className="w-[178px] h-[40px] mx-auto hover:bg-slate-100 flex items-center justify-between">
                            <div className="flex items-center">
                                <img className="w-[20px] h-[20px] mx-[10px]" src={DanhMucIcon} alt="" />
                                <p>Danh mục</p>
                            </div>
                            <img className="w-[20px] h-[20px] mx-[10px] origin-center rotate-90" src={DropIcon} alt="" />
                        </div>
                        <div className="flex flex-col ml-[35px] ">
                            <Link to="/DanhMuc/NganhNghe" className="w-[160px] h-[40px] flex items-center rounded-[3px] hover:bg-slate-100"><span>Ngành nghề</span></Link>
                            <Link to="/DanhMuc/Khoa" className="w-[160px] h-[40px] flex items-center rounded-[3px] hover:bg-slate-100"><span>Khoá</span></Link>
                            <Link to="/DanhMuc/Lop" className="w-[160px] h-[40px] flex items-center rounded-[3px] hover:bg-slate-100"><span>Lớp</span></Link>
                        </div>
                    </div>
                    <div>
                        <div className="w-[178px] h-[40px] mx-auto flex items-center justify-between hover:bg-slate-100">
                            <div className="flex items-center">
                                <img className="w-[20px] h-[20px] mx-[10px]" src={DoAnIcon} alt="" />
                                <p>Đồ án</p>
                            </div>
                            <img className="w-[20px] h-[20px] mx-[10px]" src={DropIcon} alt="" />
                        </div>
                        <div className="flex flex-col ml-[35px] ">
                            <Link className="w-[160px] h-[40px] flex items-center rounded-[3px] hover:bg-slate-100"><span>Quản lý đợt</span></Link>
                            <Link className="w-[160px] h-[40px] flex items-center rounded-[3px] hover:bg-slate-100"><span>Kho đề tài</span></Link>
                        </div>
                    </div>
                    <Link to="/ToChuc" className="w-[178px] h-[40px] mx-auto flex items-center hover:bg-slate-100">
                        <img className="w-[20px] h-[20px] mx-[10px]" src={ToChucIcon} alt="" />
                        <p>Tổ chức</p>
                    </Link>
                </div>
            </div>
            <div className="h-full w-full flex flex-wrap flex-col content-between">
                <div className="h-[80px] w-[100%] flex justify-between items-center">
                    <p className="mx-[25px] text-[20px] font-[500] text-[#172B4D]">Trường đại học A</p>
                    <div className="flex items-center mr-[75px] ">
                        <img src={mainIcon05} className="cursor-pointer h-[30px]" alt="icon" />
                        <img src={mainIcon04} className="cursor-pointer h-[30px] mx-[16px]" alt="icon" />
                        <img src={mainIcon03} className="cursor-pointer h-[35px]"
                            onClick={() => { setShowDangXuat(!ShowDangXuat) }} alt="icon" />
                    </div>
                </div>
                <Outlet className="h-[650px] w-[100%]" />
            </div>
            {ShowDangXuat && <DangXuat />}
        </main>
    );
};

export default Main;