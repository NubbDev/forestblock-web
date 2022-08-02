// import { useState } from "react"
import ImageSlider from "./ImageSlider.jsx"
import image from '../../images/shaders/carousel/image0.png'
// const left = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
// const right = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
const Staff = () => {
    /*const text = [
        "Hi, my name is Henta! Forestblock's creation began on my computer and has gone through many changes, I have been there for every step of the way in good and bad times helping to move it along. My job is making sure that everything works with our server. It is a lot of fun but my favourite part of Forestblock is the monsters and mobs, I love to give players challenging bosses!",
        "Hey, it's Nubb. I am Forestblock's creative director and Web Developer.  I work on the main website as well as our branding designs. My tasks are creating promotion designs, designing our branding and creating this sick website you are currently interacting with. I love working on Forestblock, making quality products and paying attention to the smallest details!",
        "Hey, I'm Jonathan! I am Forestblock's lead bot developer and backend manager. I'm constantly developing and updating Forestblock's custom discord bot, Forestbot! I also make sure that the server's functionality is updated to reflect the current server needs. I love working on the server and can't wait to see where this takes us!",
        "Hi, I'm Jin! I'm the Community and Relations Manager. I manage Forestblock's partners, community events, and everything else related to the community! Please feel free to ask questions. I love working with the Forestblock community, and feedback on how we can improve the server is always appreciated!"
    ];*/
    /* const staff = [
    {
        name: "Henta",
        text: text[0],
        position: "Project Lead and Founder",
        img: "../../images/staff/Henta.png",
    },
    {
        name: "Nubb",
        text: text[1],
        position: "Creative Director and Web Developer",
        img: "../../images/staff/Nubb.png",
    },
    {
        name: "Jonathan",
        text: text[2],
        position: "Project Engineer & Game Master",
        img: "../../images/staff/Jonathan.png",
    },
    {
        name: "Jinchae",
        text: text[3],
        position: "Community Manager and HR coordinator",
        img: "../../images/staff/Jinchae.png",
    }
    ]*/

    const slides = [
        {url: '../../images/staff/', title: "Henta"}, 
        {url: '../../images/staff/Nubb.png', title: "Henta"}, 
        {url: '../../images/staff/Jonathan.png', title: "Henta"}, 
        {url: '../../images/staff/Jinchae.png', title: "Henta"}, 
    ]

    return (
        <div>
            <div className="w-10">
                <ImageSlider slides={slides}/>
                <img src={image} alt=""image0/>
            </div>
        </div>
    )

}

export default Staff;