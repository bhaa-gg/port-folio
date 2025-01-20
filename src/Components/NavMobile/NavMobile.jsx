import React, { useEffect, useState } from 'react'

const NavMobile = ({ Dark }) => {
    const [Selected, setSelected] = useState(3)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 900)
                setSelected(3)
            if (window.scrollY < 1886 && window.scrollY > 800)
                setSelected(1)
            if (window.scrollY < 3000 && window.scrollY > 1750)
                setSelected(2)
            if (window.scrollY > 2558)
                setSelected(4)
            if (window.scrollY > 5500)
                setSelected(5)
        })
    }, [])
    return (
        <div className={`w-[100%]  py-3 mx-auto  h-fit  xl:w-1/2 left-0  fixed xl:left-1/2    xl:top-10 ${Dark ? "bg-[rgba(255,255,255,255.2)] " : "bg-zinc-600"} p-[6px] xl:p-5 rounded bottom-0 z-50   xl:-translate-x-1/2 `} >
            <ul className='w-full flex flex-wrap gap-[2px] xl:gap-3 justify-between items-center  ' >
                <li  > <a onClick={() => setSelected(1)} className={`  hover:bg-black text-[12px] xl:text-[18px] hover:text-white transition-all rounded-br-full pe-5 p-3 ${Selected === 1 ? "text-white bg-black" : ""}`} href="#About"> About</a></li>
                <li  > <a onClick={() => setSelected(2)} className={`  hover:bg-black text-[12px] xl:text-[18px] hover:text-white transition-all rounded-b-full p-[7px] xl:p-3 ${Selected === 2 ? "text-white bg-black" : ""}`} href="#Technology"> Technology`s</a></li>
                <li  > <a onClick={() => setSelected(3)} className={`  hover:bg-black text-[12px] xl:text-[18px] hover:text-white transition-all rounded-b-full p-[7px] xl:p-3  ${Selected === 3 ? "text-white bg-black" : ""}`} href="#ups"> Home</a></li>
                <li  > <a onClick={() => setSelected(4)} className={`  hover:bg-black text-[12px] xl:text-[18px] hover:text-white transition-all rounded-b-full p-[7px] xl:p-3 ${Selected === 4 ? "text-white bg-black" : ""}`} href="#Tutorial"> Tutorial</a></li>
                <li  > <a onClick={() => setSelected(5)} className={`  hover:bg-black text-[12px] xl:text-[18px] hover:text-white transition-all ${Selected === 5 ? "text-white bg-black" : ""} ps-5 p[7pc] xl:p-3 rounded-bl-full`} href="#Contact_Us"> Contact</a></li>
            </ul>
        </div>
    )
}

export default NavMobile

