const Button2 = () => {
    return (
        <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-transparent px-3 py-[1px] font-mono font-medium tracking-tighter text-black border border-black">
            <span class="absolute h-0 w-0 rounded-full bg-black transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
            <span class="relative group-hover:text-white">Button Text</span>
        </button>
    )
}

export default Button2;
