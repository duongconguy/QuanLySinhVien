import React, { useEffect } from 'react'
import { useState } from 'react'
import imgbg01 from '../../img/IconDangNhap/imgbg01.png'
import imgbg02 from '../../img/IconDangNhap/imgbg02.png'
import DangNhapModal from './DangNhapModal'
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from 'axios'


function DangNhap() {
    const navigate = useNavigate()
    const [username, setusename] = useState("")
    const [password, setpass] = useState("")
    useEffect(()=>{
        let checkToken = localStorage.getItem("token")
        if (!checkToken){
            navigate("/Login")
        }
        else {
            navigate("/")
        }
    },[])
    const login = () => {
        console.log(username)
        console.log(password)
        axios({
            url: "https://training.bks.center/api/auth/login",
            method: "POST",
            params: {
                username: username,
                password: password
            }
        }).then(respone => { 
            console.log(respone)
            localStorage.setItem("token", respone.data.token)
            navigate("/")
         }).catch(err => console.log(err))
    }

    return (
        <div className="min-w-[769px] min-h-[697px] relative text-left">
            <h1 className='w-[123px] h-[23px] text-[20px] font-medium inline leading-[23px] absolute top-[24px] left-[40px] tracking-tight text-center'>Quản lý đồ án</h1>
            <form action="" className='w-[361px] absolute left-[250px] top-[140px] flex flex-col place-content-center'>
                <h1 className='text-center text-[32px] font-[700] text-[#1890FF]'>Đăng nhập</h1>
                <div className='flex flex-col'>
                    <label className='text-[16px] font-[400] mb-[10px]' htmlFor="taikhoan">Tài khoản</label>
                    <input
                        onChange={(event) => {
                            console.log(event.target.value)
                            setusename(event.target.value)
                        }}
                        className='h-[40px] rounded-lg border border-solid border-[#D9D9D9] pl-[24px]' placeholder="Tài khoản" type="text" id='taikhoan' />
                </div>
                <div className='flex flex-col mt-[24px]'>
                    <label className='text-[16px] font-[400] mb-[10px]' htmlFor="matkhau">Mật khẩu</label>
                    <input
                        onChange={(event) => {
                            console.log(event.target.value)
                            setpass(event.target.value)
                        }}
                        className='h-[40px] rounded-lg border border-solid border-[#D9D9D9] pl-[24px]' placeholder="Mật khẩu" type="text" id='matkhau' />
                </div>
                <Link className='h-[40px] mt-[40px] text-center grid content-center text-[#f0f7ff] bg-[#1890FF] rounded-lg'onClick={()=>login()}>Đăng nhập</Link>
            </form>
            <img src={imgbg02} alt="" className='w-[492px] h-[460px] absolute top-[0px] right-[0px]' />
            <img src={imgbg01} alt="" className='w-[639px] h-[296px] absolute bottom-[0px] right-[67px]' />
            {/* <DangNhapModal/> */}
        </div>
    );
}

export default DangNhap;