
import { RingLoader } from "react-spinners"
export default function Loading() {
    'use client';
    return (
        <div className="h-screen w-screen flex justify-center items-center  overflow-hidden pt-[7rem]">
            <RingLoader color={"#2170A9"} size='120px'/>
        </div>

    )
}