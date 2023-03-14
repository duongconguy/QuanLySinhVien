import React from "react";
import IconXoa from "../../../img/IconModal/IconXoa.png"

function DeleteModal(props) {

    const btCancelClick = () => { props.CloseModal() }

    const btDeletelClick = () => {
        props.CloseModal();
        props.DeleteItem();
    }

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div className="relative top-[15%] mx-auto p-4 flex flex-col border w-[60%] shadow-lg rounded-md bg-white">
                    <div className="flex justify-between items-center mx-5">
                        <p className="text-base font-medium">Bạn thực sự muốn xoá {props.partName.name} ?</p>
                        <img src={IconXoa} className="w-[21px] h-[21px] cursor-pointer hover:border hover:bg-red-400" alt="" onClick={btCancelClick} />
                    </div>
                    <br />
                    <hr className="" />
                    <br />
                    <div className="flex flex-wrap w-full">
                        <div className="grow text-sm ml-8 flex ">
                            <span className="font-medium">{props.partName.part1}</span>
                            <span className="w-[full] h-8 pl-4 align-baseline">{props.content.part1}</span>
                        </div>
                        <div className="grow text-sm ml-8 flex">
                            <span className="font-medium">{props.partName.part2}</span>
                            <span className="w-[full] h-8 pl-4 align-middle">{props.content.part2}</span>
                        </div>
                    </div>
                    <br />
                    <hr className="" />
                    <br />
                    <div className="flex justify-between items-center">
                        <button className="h-8 w-14 mx-1 border border-[#E2E3E9] rounded-[3px]"
                            onClick={btCancelClick}
                        >Huỷ</button>
                        <button className="h-8 w-16 mx-1 bg-red-500 border border-[#E2E3E9] rounded-[3px] text-white"
                            onClick={btDeletelClick}
                        >Xoá</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;