import logo from "../images/fblogo.svg"
import './card.css'
const Card = () => {
    const div = "flex container md:flex bg-slate-100 rounded-xl p-20 dark:bg-slate-800"
    const logoStyle = "w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
    return(
        <div className="flex h-screen justify-center items-center">
            <div className={div + "m-auto w-9/12"}>
                <img alt="logo" src={logo} className={logoStyle}/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Card;