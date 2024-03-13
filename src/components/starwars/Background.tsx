import Image from "next/image"

export default function Background(){
    return(
        <Image
        src="https://c4.wallpaperflare.com/wallpaper/196/131/596/star-wars-darth-vader-movies-anakin-skywalker-wallpaper-preview.jpg"
        fill
        alt="background"
        className="opacity-80 -z-50 object-cover"
        ></Image>
    )
}