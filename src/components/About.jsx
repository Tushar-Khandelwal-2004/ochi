import photo from "../assets/photo.jpg"
import Button1 from "./Button1"
import Button2 from "./Button2"
function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-custom2 text-[4vw] leading-[4vw] tracking-tight ">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=" flex gap-5 w-full border-t-[1px] pt-5 border-[#a1b562] mt-10">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <Button1/>
          {/* <button className="flex gap-10 items-center uppercase mt-8 px-8 py-4 bg-zinc-900 rounded-full text-white ">Read More <div className="w-2 h-2 rounded-full bg-zinc-100"></div></button> */}
        </div>
        <div className="w-1/2 ">
          <img src={photo} className="rounded-3xl " alt="photo" />
        </div>
      </div>
    </div>
  )
}

export default About