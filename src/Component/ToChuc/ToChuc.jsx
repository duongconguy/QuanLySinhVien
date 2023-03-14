import React from "react";
import { Outlet, Link } from "react-router-dom";
import tochucIcon01 from '../../img/IconToChuc/tochucIcon01.png'
import tochucIcon02 from '../../img/IconToChuc/tochucIcon02.png'

const ToChuc = () => {
    return (
        <div className="min-h-[650px] w-full flex flex-wrap content-between text-[#172d4b]">
            <div className="h-[45px] w-full bg-[#FFFFFF] flex items-center drop-shadow-[0_1px_16px_rgba(0,0,0,0.1)]">
                <h1 className="font-[600] ml-[40px]">Tổ Chức</h1>
            </div>
            <div className="h-full` w-full bg-red-300 my-[1rem] mx-[1.5rem] mb-[24px] bg-[#f9f9f9] relative text-[#172d4b]">
                <button className="h-[32px] w-[57px] border border-[#1890FF] top-[24px] right-[24px] absolute text-[14px] font-400 text-[#1890FF] rounded-[3px]">Sửa</button>
                <div className="w-[890px] mt-[24px] mb-[40px] mx-auto flex flex-col">
                    <div className="flex items-center">
                        <div className="w-[120px] h-[120px] relative">
                            <img src={tochucIcon01} className="" alt="icon" />
                            <img src={tochucIcon02} className="w-[32px] h-[32px] absolute top-[65px] right-[-9px]" alt="icon" />
                        </div>
                        <p className="ml-[39px]">Trường đại học A</p>
                    </div>
                    <div className="my-[40px] flex flex-col">
                        <h1 className="text-[20px] font-medium leading-10">Thông tin trường</h1>
                        <div className="flex justify-between text-[14px] font-[400] text-[#9EA3A9] ">
                            <div className="w-[445px]">
                                <p className="leading-10">Email</p>
                                <p className="leading-10">Số điện thoại</p>
                                <p className="leading-10">địa chỉ</p>
                            </div>
                            <div className="w-[445px] ml-[105px]">
                                <p className="leading-10">Mã số thuế</p>
                                <p className="leading-10">Webide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToChuc