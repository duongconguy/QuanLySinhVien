import React from "react";
import { useRef } from "react";
import IconXoa from "../../../img/IconModal/IconXoa.png"

function CreateUser(props) {
    const name = useRef();
    const course_id = useRef();

    const btCancelClick = () => { props.CloseModal() }

    const btCreatelClick = () => {
        props.AddItem({
            name: name.current.value,
            course_id: course_id.current.value,
        })
        props.CloseModal();
    }

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div className="relative top-[15%] mx-auto py-4 flex flex-col border w-[60%] shadow-lg rounded-md bg-white">
                    <div className="flex justify-between items-center mx-[4%]">
                        <p className="text-base font-medium">Thêm quản lý</p>
                        <img src={IconXoa} className="w-[21px] h-[21px] cursor-pointer" alt="" onClick={btCancelClick} />
                    </div>
                    <br />
                    <hr className="" />
                    <br />
                    <div className="px-[5%]">
                        <table className="w-full">
                            <tr>
                                <td className="w-[50%]" rowSpan={2}>avata</td>
                                <td className="w-[50%]">
                                    <label htmlFor="TaiKhoan">Tài khoản</label>
                                    <input type="text" id="TaiKhoan" className="w-full border border-[#e2e3e9] rounded-[3px] pl-[10px]" placeholder="Nhập tài khoản" />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-[50%]">
                                    <label htmlFor="MatKhau">Mật khẩu</label>
                                    <input type="text" id="MatKhau" className="w-full border border-[#e2e3e9] rounded-[3px] pl-[10px]" placeholder="Nhập mật khẩu" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br />
                    <hr className="" />
                    <br />
                    <div className="flex justify-end items-center mx-5">
                        <button className="h-8 w-14 mx-1 border border-[#E2E3E9] rounded-[3px]"
                            onClick={btCancelClick}
                        >Huỷ</button>
                        <button className="h-8 w-16 mx-1 bg-[#1890FF] border border-[#E2E3E9] rounded-[3px] text-white"
                            onClick={btCreatelClick}
                        >Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;