import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

function getInitials(name: string) {
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
        return nameParts[0][0] + nameParts[1][0];
    }
    return name[0];
}

function getRandomBlueColor() {
    const r = Math.floor(Math.random() * (100 - 0) + 0);  
    const g = Math.floor(Math.random() * (150 - 50) + 50); 
    const b = Math.floor(Math.random() * (255 - 180) + 180);
    return `rgb(${r}, ${g}, ${b})`;
}


export default async function Profile() {
    const session = await getServerSession(authOptions);
    const { name } = session?.user || { name: "Dummy User" };
    const nameparts = name.split(" ");
    const initials = getInitials(name);
    const backgroundColor = getRandomBlueColor();

    return (
        <div className="flex items-center space-x-2 md:space-x-4">
            <div
                className="flex items-center justify-center rounded-full w-8 h-8 md:w-12 md:h-12 text-white text-sm md:text-xl font-bold"
                style={{ backgroundColor }}
            >
                {initials.toLocaleUpperCase()}
            </div>
            <div className="text-sm md:text-lg font-semibold">
                {nameparts[0].toLocaleUpperCase()}
            </div>
        </div>
    );
}
