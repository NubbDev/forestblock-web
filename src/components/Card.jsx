import logo from "../images/fblogo.svg"
import './card.css'
import useDarkMode from '../hook/useDarkMode';
import Staff from "./extras/Staff";
const Card = () => {
    useDarkMode();
    return(
        <div className="flex h-screen justify-center items-center ">
            <div className="my-auto flex flex-col">
                <div className="w-9/12 flex container flex-col border bg-slate-100 border-slate-200 rounded-xl p-20 dark:bg-slate-800 dark:border-slate-700 drop-shadow-md transition duration-1000">
                    <div className="flex flex-row m-auto items-center align-middle justify-center drop-shadow-md">
                        <img alt="logo" src={logo} className="w-10 sm:w-10 md:w-20 lg:w-28 md:h-auto md:rounded-none rounded-full mx-auto"/>
                        <h1 className=" mx-5 font-bold tracking-wider md:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 sm:text-3xl  transition duration-1000 "><strong className="hover:text-green-600 transition duration-500">Forestblock</strong>.net</h1>
                    </div>
                </div>
                <div className="w-3/12 mt-4 flex container flex-col border bg-slate-100 border-slate-200 rounded-xl p-20 dark:bg-slate-800 dark:border-slate-700 drop-shadow-md transition duration-1000">
                    <Staff/>
                </div>
            </div>
        </div>
    )
}

export default Card;