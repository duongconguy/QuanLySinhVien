import React from "react";
import { useRef } from "react";
import IconXoa from "../../../img/IconModal/IconXoa.png"

function EditLop(props) {
    const name = useRef();
    const course_id = useRef();

    const btCancelClick = () => { props.CloseModal() }

    const btEditClick = () => {
        props.EditItem({
            name: name.current.value,
            course_id: course_id.current.value,
        })
        props.CloseModal();
    }

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div className="relative top-[15%] mx-auto p-4 flex flex-col border w-[60%] shadow-lg rounded-md bg-white">
                    <div className="flex justify-between items-center mx-5">
                        <p className="text-base font-medium">Thêm lớp</p>
                        <img src={IconXoa} className="w-[21px] h-[21px] cursor-pointer" alt="" onClick={btCancelClick} />
                    </div>
                    <br />
                    <hr className="" />
                    <br />
                    <div className="flex w-full">
                        <div className="w-[50%] text-sm ml-8">
                            <p className="font-medium">Tên lớp</p>
                            <input className="w-[90%] h-8 pl-2 border rounded-sm my-2 rounded-[3px]" ref={name} placeholder={props.item.name} />
                        </div>
                        <div className="w-[50%] text-sm ml-8">
                            <p className="font-medium">Khoá</p>
                            <input className="w-[90%] h-8 pl-2 border rounded-sm my-2 rounded-[3px]" ref={course_id} placeholder={props.item.courseId}/>
                        </div>
                    </div>
                    <br />
                    <hr className="" />
                    <br />
                    <div className="flex justify-end items-center">
                        <button className="h-8 w-14 mx-1 border border-[#E2E3E9] rounded-[3px]"
                        onClick={btCancelClick}
                        >Huỷ</button>
                        <button className="h-8 w-16 mx-1 bg-[#1890FF] border border-[#E2E3E9] rounded-[3px] text-white"
                        onClick={btEditClick}
                        >Sửa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditLop;