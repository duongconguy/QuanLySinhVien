import React from "react";
import { useState } from 'react'
import { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import IconAdd from '../../img/IconQuanTri/IconAdd.png'
import IconUp from '../../img/IconQuanTri/IconUp.png'
import IconDown from '../../img/IconQuanTri/IconDown.png'
import IconQuanTri01 from '../../img/IconQuanTri/IconQuanTri01.png'
import IconQuanTri02 from '../../img/IconQuanTri/IconQuanTri02.png'
import IconReducePage from '../../img/IconQuanTri/IconReducePage.png'
import IconIncrePage from '../../img/IconQuanTri/IconIncrePage.png'
import IconSet from '../../img/IconQuanTri/IconSet.png'
import instance from '../../api/api'
import axios from 'axios'
import CreateUser from "./Modal/CreateUser";

const DanhSachThanhVien = () => {
    const navigate = useNavigate()
    const [userView, setUserView] = useState([])
    const [page_index, setPage_index] = useState(1)
    const [page_size, setPage_size] = useState(20)
    const [totalUser, setTotalUser] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [FirstPage, setFirstPage] = useState(page_index)
    const token = localStorage.getItem("token")

    const reducePage = () => {
        if (page_index > FirstPage) {
            setPage_index(page_index - 1)
        } else if (FirstPage > 1) {
            setPage_index(page_index - 1)
            setFirstPage(FirstPage - 1)
        }
    }
    const IncrePage = () => {
        if (page_index < (FirstPage + 2)) {
            setPage_index(page_index + 1)
        } else if (FirstPage + 2 < totalPage) {
            setPage_index(page_index + 1)
            setFirstPage(FirstPage + 1)
        }
    }
    const OnClickFirstPage = () => {
        setPage_index(FirstPage)
    }
    const OnClickBetweenPage = () => {
        setPage_index(FirstPage + 1)
    }
    const OnClickBehindPage = () => {
        setPage_index(FirstPage + 2)
    }

    const handlePage_size = () => {
        let selectPageSize = document.getElementById('selectPageSize').value;
        console.log(selectPageSize)
        setPage_size(selectPageSize)
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://training.bks.center/api/admin/user",
            params: {
                page_index: page_index - 1,
                page_size: page_size
            },
            timeout: 2000,
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(res => {
            console.log(res)
            setUserView(res.data)
            setTotalUser(res.headers.totalelement)
            setTotalPage(Math.ceil(res.headers.totalelement / page_size))
            console.log(userView)
            // console.log("check total page: ", totalPage)
        })
    }, [page_size, page_index])

    return (
        <div className="h-[650px] w-[1230px] flex-col text-[#172d4b]">
            <div className="h-[45px] w-full bg-[#FFFFFF] flex items-center justify-between drop-shadow-[0_1px_16px_rgba(0,0,0,0.1)]">
                <h1 className="font-[600] ml-[40px]">Thành viên ({totalUser})</h1>
                <div className="flex mr-[40px]">
                    <button className="w-[162px] h-[32px] bg-[#1890FF] flex items-center justify-center rounded-[3px] text-[#fff] text-[14px]">
                        <img className="w-[20px] h-[20px] mr-[6px]" src={IconAdd} alt="" />
                        <span>Thêm thành viên</span>
                    </button>
                    <button>
                        <img src={IconUp} className="w-[32px] h-[32px] mx-[8px]" alt="" />
                    </button>
                    <button>
                        <img src={IconDown} className="w-[32px] h-[32px]" alt="" />
                    </button>
                </div>
            </div>
            <div className="w-[1182px] bg-red-300 mx-auto mb-[24px] bg-[#f9f9f9] relative text-[#172d4b] mt-[24px] ">
                <table className="w-[100%]">
                    <tbody>
                        <tr className="h-[45px] w-[100%]">
                            <th className="w-[5%] border border-black">STT</th>
                            <th className="w-[5%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri02} alt="" />
                                </div>
                            </th>
                            <th className="w-[20%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri01} alt="" />
                                    <span className="ml-[4px]">
                                        Họ tên
                                    </span>
                                </div>
                            </th>
                            <th className="w-[15%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri01} alt="" />
                                    <span className="ml-[4px]">
                                        Số điện thoại
                                    </span>
                                </div>
                            </th>
                            <th className="w-[20%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri01} alt="" />
                                    <span className="ml-[4px]">
                                        Email
                                    </span>
                                </div>
                            </th>
                            <th className="w-[25%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri01} alt="" />
                                    <span className="ml-[4px]">
                                        Địa chỉ
                                    </span>
                                </div>
                            </th>
                            <th className="w-[10%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri01} alt="" />
                                    <span className="ml-[4px]">
                                        Giới tính
                                    </span>
                                </div>
                            </th>
                        </tr>

                        {userView.map((item, index) => (
                            <tr className="h-[50px] border border-[#f0f0f0]">
                                <td className="w-[5%] border border-[#f0f0f0] text-center">{index}</td>
                                <td className="w-[5%] border border-[#f0f0f0]"><button className="h-[32px] w-[32px] block mx-auto border border-[#98BEE1] rounded-[3px] relative group/set">
                                    <div className="h-[65px] w-[58px] rounded-[5px] border border-[#e2e3e9] absolute top-[34px] bg-[#ffffff] hidden group-focus/set:block">
                                        <div className="h-[50%] w-[100%] hover:bg-[#e2e3e9] text-[14px] font-[400] cursor-pointer" onClick={() => { }}>Sửa</div>
                                        <div className="h-[50%] w-[100%] hover:bg-[#e2e3e9] text-[14px] font-[400] cursor-pointer" onClick={() => { }}>Xoá</div>
                                    </div>
                                    <img src={IconSet} className="h-[18px] w-[18px] mx-auto" alt="" />
                                </button></td>
                                <td className="w-[20%]">{item.fullName}</td>
                                <td className="w-[15%]">{item.phone}</td>
                                <td className="w-[20%]">{item.email}</td>
                                <td className="w-[25%]">{item.address}</td>
                                <td className="w-[10%]">{item.gender === 1 ? <p>Nam</p> : <p>Nữ</p>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="h-[56px] w-[100%] flex justify-end items-center text-[14px] font-[400]">
                    <p>{(page_index - 1) * page_size + 1} - {page_index * page_size} trên {totalUser} thành viên</p>
                    <button className="h-[24px] w-[24px]"
                        onClick={reducePage}>
                        <img src={IconReducePage} alt="" />
                    </button>
                    <button className="h-[24px] w-[24px] text-[#1890FF]"
                        onClick={OnClickFirstPage}
                    >{FirstPage}</button>
                    <button className="h-[24px] w-[24px] text-[#1890FF]"
                        onClick={OnClickBetweenPage}
                    >{FirstPage + 1}</button>
                    <button className="h-[24px] w-[24px] text-[#1890FF]"
                        onClick={OnClickBehindPage}
                    >{FirstPage + 2}</button>
                    <button className="h-[24px] w-[24px]"
                        onClick={IncrePage}>
                        <img src={IconIncrePage} alt="" />
                    </button>
                    <select id="selectPageSize" className="h-[24px] w-[100px] border border-[#DFE1E6] rounded-[3px]"
                        onChange={handlePage_size}>
                        <option value={20} >20 / trang</option>
                        <option value={15} >15 / trang</option>
                        <option value={10} >10 / trang</option>
                        <option value={5}>5 / trang</option>
                    </select>
                </div>
            </div>
            <CreateUser/>
        </div>
    );
};

export default DanhSachThanhVien;