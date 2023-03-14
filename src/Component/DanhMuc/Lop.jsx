import React from "react";
import { useState, useEffect } from 'react'
import IconAdd from '../../img/IconQuanTri/IconAdd.png'
import IconUp from '../../img/IconQuanTri/IconUp.png'
import IconDown from '../../img/IconQuanTri/IconDown.png'
import IconQuanTri01 from '../../img/IconQuanTri/IconQuanTri01.png'
import IconQuanTri02 from '../../img/IconQuanTri/IconQuanTri02.png'
import IconReducePage from '../../img/IconQuanTri/IconReducePage.png'
import IconIncrePage from '../../img/IconQuanTri/IconIncrePage.png'
import IconSet from '../../img/IconQuanTri/IconSet.png'
import IconLoc from '../../img/IconDanhMuc/IconLoc.png'
import { instance } from '../../api/api'
import CreateLop from "./Modal/CreateLop";
import EditLop from "./Modal/EditLop";
import DeleteModal from "./Modal/DeleteModal";
import axios from 'axios'
import { data } from "autoprefixer";

const Lop = () => {
    const [data, setData] = useState([]);
    const [userView, setUserView] = useState([])
    // const [userViewItem, setuserViewItem] = useState([])
    const [page_index, setPage_index] = useState(1)
    const [page_size, setPage_size] = useState(20)
    const [totalUser, setTotalUser] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [FirstPage, setFirstPage] = useState(page_index)
    const [tenLop, setTenLop] = useState("")
    const [tenKhoa, setTenKhoa] = useState("")

    const getData = () => {
        instance({
            url: "api/class",
            method: "GET",
            timeout: 2000,
        }).then(res => {
            console.log(res)
            setTotalUser(res.data.length)
            setTotalPage(Math.ceil(res.data.length / page_size))
            setData(res.data)
            let listUserView = res.data.slice((page_index - 1) * page_size, page_index * page_size)
            setUserView(listUserView)
        })
    }

    useEffect(() => {
        getData();
    }, [page_size, page_index])

    useEffect(() => {
        let listUserView = data;
        if (tenLop !== "") {
            listUserView = data.filter(lop => lop.name.includes(tenLop))
        }
        if (tenKhoa !== "") {
            listUserView = data.filter(khoa => String(khoa.courseId).includes(tenKhoa))
        }
        listUserView = listUserView.slice((page_index - 1) * page_size, page_index * page_size)
        setUserView(listUserView)
    }, [tenLop,data, tenKhoa, page_size, page_index])

    //-------handle page ------------------------------//
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


    //--------------- Create, Edit, Delete ------------------------------------------

    const [item, setItem] = useState({ part1: "", part2: "" })
    let partName = {
        name: "Lớp",
        part1: "Lớp :",
        part2: "Khoá :"
    }
    let content = {
        part1: item.name,
        part2: item.courseId
    }
    // --------------------- Create Item ---------------
    const [btCreate, setbtCreate] = useState(false)
    const ChangeCreateModal = () => {
        let newbtCreate = !btCreate;
        setbtCreate(newbtCreate);
    }
    const AddItem = (newItem) => {
        instance({
            url: "api/class",
            method: "POST",
            params: {
                course_id: newItem.course_id,
                name: newItem.name
            }
        }).then(() => { getData() })
    }

    // -------------------- Edit Item --------------
    const [btEdit, setbtEdit] = useState(false)
    const OpenEditModal = (item) => {
        setItem(item)
        setbtEdit(true);
    }
    const CloseEditModal = () => { setbtEdit(false); }
    const Edit = (EditItem) => {
        CloseDeleteModal()
        instance({
            url: "api/class/" + item.id,
            method: "PUT",
            params: {
                course_id: EditItem.course_id,
                name: EditItem.name
            }
        }).then(() => {
            console.log("da sua")
            getData()
        })
    }

    // -------------------- DELETE Item --------------
    const [btDelete, setbtDelete] = useState(false)
    const OpenDeleteModal = (item) => {
        setItem(item)
        console.log(item)
        setbtDelete(true);
    }
    const CloseDeleteModal = () => { setbtDelete(false); }
    const DeleteItem = () => {
        CloseDeleteModal()
        instance({
            url: "api/class/" + item.id,
            method: "DELETE",
        }).then(() => {
            console.log("da xoa")
            getData()
        })
    }
    // -----------------------------------------------------------
    return (
        <div className="h-[650px] w-[1230px] flex-col text-[#172d4b]">
            <div className="h-[45px] w-full bg-[#FFFFFF] flex items-center justify-between drop-shadow-[0_1px_16px_rgba(0,0,0,0.1)]">
                <h1 className="font-[600] ml-[40px]">Lớp ({totalUser})</h1>
                <div className="flex mr-[40px]">
                    <button className="w-[162px] h-[32px] bg-[#1890FF] flex items-center justify-center rounded-[3px] text-[#fff] text-[14px]"
                        onClick={ChangeCreateModal}>
                        <img className="w-[20px] h-[20px] mr-[6px]" src={IconAdd} alt="" />
                        <span>Thêm lớp</span>
                    </button>
                    <button>
                        <img src={IconUp} className="w-[32px] h-[32px] mx-[8px]" alt="" />
                    </button>
                    <button>
                        <img src={IconDown} className="w-[32px] h-[32px]" alt="" />
                    </button>
                </div>
            </div>
            <div className="w-[1182px] mx-auto mb-[24px] relative text-[#172d4b] mt-[24px] ">
                <table className="w-[100%]">
                    <tbody>
                        <tr className="h-[45px] w-[100%] bg-[#FAFAFA] rounded-[1px]">
                            <th className="w-[5%] border-y border-l border-black">STT</th>
                            <th className="w-[5%] border-y border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri02} alt="" />
                                </div>
                            </th>
                            <th className="w-[5%] border-y border-black "></th>
                            <th className="w-[40%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri01} alt="" />
                                    <span className="ml-[4px]">Tên lớp</span>
                                </div>
                            </th>
                            <th className="w-[45%] border border-black">
                                <div className="flex justify-center">
                                    <img src={IconQuanTri01} alt="" />
                                    <span className="ml-[4px]">Tên khoá</span>
                                </div>
                            </th>
                        </tr>
                        <tr className="h-[50px] border border-[#f0f0f0]">
                            <td className="w-[5%]">
                                <button className="h-[32px] w-[32px] block mx-auto  rounded-[3px] border border-[#e2e3e9] ">
                                    <img src={IconLoc} className="h-[18px] w-[18px] mx-auto cursor-pointer" alt="" />
                                </button>
                            </td>
                            <td className="w-[5%]" colSpan="2">
                                <button className="w-[90px] h-[32px] border border-[#e2e3e9] rounded-[3px] text-[#1890FF] text-[14px] font-[400]" >Tìm kiếm</button>
                            </td>
                            <td className="w-[40%]">
                                <input className="h-[32px] w-[95%] block mx-auto border border-[#e2e3e9] rounded-[3px] pl-[10px]" tyle="text" placeholder="Tìm kiếm theo tên lớp"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        setTenLop(event.target.value)
                                    }} />
                            </td>
                            <td className="w-[45%]">
                                <input className="h-[32px] w-[95%] block mx-auto border border-[#e2e3e9] rounded-[3px] pl-[10px]" tyle="text" placeholder="Tìm kiếm theo khoá"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        setTenKhoa(event.target.value)
                                    }} />
                            </td>
                        </tr>

                        {userView.map((item, index) => (
                            <tr key={index} className="h-[50px] border border-[#f0f0f0]">
                                <td className="w-[5%] px-5 border border-[#f0f0f0] text-center">{index}</td>
                                <td className="w-[5%] border border-[#f0f0f0]">
                                    <button className="h-[32px] w-[32px] block mx-auto border border-[#98BEE1] rounded-[3px] relative group/set">
                                        <div className="h-[65px] w-[58px] rounded-[5px] border border-[#e2e3e9] absolute top-[50%] left-[110%] bg-[#ffffff] hidden group-focus/set:block drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                            <div className="h-[50%] w-[100%] hover:bg-[#e2e3e9] border-b border-[#e2e3e9] text-[14px] font-[400] cursor-pointer" onClick={() => { OpenEditModal(item) }}>Sửa</div>
                                            <div className="h-[50%] w-[100%] hover:bg-[#e2e3e9] text-[14px] font-[400] cursor-pointer" onClick={() => { OpenDeleteModal(item) }}>Xoá</div>
                                        </div>
                                        <img src={IconSet} className="h-[18px] w-[18px] mx-auto" alt="" />
                                    </button>
                                </td>
                                <td className="w-[5%] px-5"></td>
                                <td className="w-[40%] px-5">{item.name}</td>
                                <td className="w-[45%] px-5">{item.courseId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="h-[56px] w-[100%] flex justify-end items-center text-[14px] font-[400]">
                    <p>{(page_index - 1) * page_size + 1} - {page_index * page_size} trên {totalUser} lớp</p>
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
                    <select id="selectPageSize" className="h-[24px] w-[100px] border border-[#DFE1E6] rounded-[3px] cursor-pointer"
                        onChange={handlePage_size}>
                        <option value={20} >20 / trang</option>
                        <option value={15} >15 / trang</option>
                        <option value={10} >10 / trang</option>
                        <option value={5}>5 / trang</option>
                    </select>
                </div>
            </div>
            {btCreate && <CreateLop CloseModal={ChangeCreateModal} AddItem={AddItem} />}
            {btEdit && <EditLop CloseModal={CloseEditModal} EditItem={Edit} item={item} />}
            {btDelete && <DeleteModal CloseModal={CloseDeleteModal} DeleteItem={DeleteItem} partName={partName} content={content} />}
        </div>
    );
};

export default Lop;