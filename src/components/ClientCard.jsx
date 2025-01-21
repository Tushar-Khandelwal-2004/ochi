

function ClientCard({text1,text2}) {
    return (
        <div className="w-full px-12 border-b-[1px] border-[#a1b562] pb-3 pt-3 flex ">
            <div className="w-1/2">
                <a className={`text-md capitalize font-normal relative w-fit block cursor-pointer 
                        after:content-[''] after:absolute after:h-[0.5px] after:bg-zinc-900 after:left-0 after:bottom-0 
                        after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 
                        after:origin-center`}>{text1}
                </a>
            </div>
            <div className="flex justify-between w-1/2">
                <div>{text2}</div>
                <a className={`text-md capitalize font-normal relative w-fit block cursor-pointer 
                        after:content-[''] after:absolute after:h-[0.5px] after:bg-zinc-900 after:left-0 after:bottom-0 
                        after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 
                        after:origin-center`}>READ
                </a>
            </div>



        </div>
    )
}

export default ClientCard