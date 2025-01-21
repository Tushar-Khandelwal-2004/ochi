import Button2 from "./Button2"
import image from "../assets/client.png"
import ClientCard from "./ClientCard"
const ClientReview = () => {
    return (
        <div className="w-full bg-[#F1F1F1]">
            <div className="w-full px-12 border-b-[1px] border-[#a1b562] pb-5 pt-28">
                <h1 className="text-[4vw] font-custom2 tracking-tight">Clients’ reviews</h1>
            </div>
            <div className="w-full px-12 border-b-[1px] border-[#a1b562] pb-12 pt-2 flex ">
                <div className="w-1/2 flex gap-40">
                    <div>
                        <a className={`text-md capitalize font-normal relative w-fit block cursor-pointer 
                        after:content-[''] after:absolute after:h-[0.5px] after:bg-zinc-900 after:left-0 after:bottom-0 
                        after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 
                        after:origin-center`}>Karman Ventures</a>
                    </div>
                    <div>
                        <div>Services:</div>
                        <div className="mt-16 mb-2">
                            <Button2 text="investor deck" />
                        </div>
                        <div>
                            <Button2 text="sales deck" />

                        </div>
                    </div>

                </div>
                <div className="w-1/2 flex">
                    <div>
                        <div>
                            William Barnes
                        </div>
                        <div className="mt-16">
                            <img className="w-28 rounded-xl" src={image} alt="client photo" />
                        </div>
                        <div className="tracking-tight w-96 mt-5 ">
                            <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                        </div>
                    </div>
                    <div className="cursor-pointer text-zinc-400 flex w-full justify-end">
                        <div>READ</div>
                    </div>
                </div>
            </div>

            <div>
                <ClientCard text1="Planetly" text2="Nina Walloch" />
                <ClientCard text1="Workiz Easy" text2="Tomer Levy"/>
                <ClientCard text1="Premium Blend" text2="Ellen Kim" />
                <ClientCard text1="Hypercare Systems" text2="Brendan Goss" />
                <ClientCard text1="Officevibe" text2="Raff Labrie"/>
                <ClientCard text1="Orderlion" text2="Stefan Strohmer"/>
                <ClientCard text1="Black Book" text2="Jaci Smith"/>
                <ClientCard text1="Trawa Energy" text2="David Budde"/>

            </div>

        </div>
    )
}

export default ClientReview