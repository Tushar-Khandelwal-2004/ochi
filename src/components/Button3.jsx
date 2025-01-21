const Button3 = ({text}) => {
    return (
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-transparent px-6 py-2 font-mono text-sm leading-none uppercase text-white border border-white">
            <span className="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
            <span className="relative group-hover:text-zinc-900 uppercase font-custom2">{text}</span>
        </button>
    )
}

export default Button3;
