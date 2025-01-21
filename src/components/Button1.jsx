
const Button1 = () => {
    return (
        <button class="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-zinc-900 px-12 py-2 text-lg font-medium text-zinc-900  hover:text-white">
            <span class="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-zinc-900 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span class="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="relative transform duration-700 group-hover:-translate-x-3">Read More</span>
        </button>
    )
}

export default Button1