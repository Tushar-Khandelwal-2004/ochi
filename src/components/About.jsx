import photo from "../assets/photo.jpg"
import Button1 from "./Button1"
import Button2 from "./Button2"
function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-custom2 text-[4vw] leading-[4vw] tracking-tight ">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

      <div className=" flex gap-5 w-full border-t-[1px] pt-5 pb-12 border-[#a1b562] mt-10">
        <div className="w-1/2 text-base font-regular text-zinc-800 font-custom2 ">
          What you can expect:
        </div>
        <div className="w-1/2 flex ">
          <div className="w-72 tracking-tight text-base font-custom2 text-zinc-800 ">
            <div className="mb-8">
              <p>
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
              </p>
            </div>

            <div>
              <p>
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.

              </p>
            </div>

          </div>
          <div className="ml-28 mt-16 tracking-tight text-base font-custom2 text-zinc-800">
            S:
            <div className="mt-5">
              <a className="block underline underline-offset-3 mb-1 " target="_blank" href="https://x.com/Beluga_69_69">Linkedin</a>
              <a className="block underline underline-offset-3 mb-1 " target="_blank" href="https://x.com/Beluga_69_69">Instagram</a>
              <a className="block underline underline-offset-3 " target="_blank" href="https://x.com/Beluga_69_69">Twitter</a>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex gap-5 w-full border-t-[1px] pt-5 border-[#a1b562] mt-10">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <Button1 text="Read More" />
          {/* <button className="flex gap-10 items-center uppercase mt-8 px-8 py-4 bg-zinc-900 rounded-full text-white ">Read More <div className="w-2 h-2 rounded-full bg-zinc-100"></div></button> */}
        </div>

        <div className="w-1/2 group overflow-hidden rounded-3xl  ">
          <img
            src={photo}
            className="object-cover w-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
            alt="photo"
          />
        </div>


        {/* <div className="w-1/2 ">
          <img src={photo} className="rounded-3xl " alt="photo" />
        </div> */}
      </div>
    </div>
  )
}

export default About