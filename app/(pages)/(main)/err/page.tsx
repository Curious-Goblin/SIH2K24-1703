import UnderDevlopmentSvg from "@/app/svg/UnderDevlopmentSvg";

export default function Err() {
    return (
        <div className="flex flex-col gap-10 h-full justify-center items-center font-bold text-4xl text-[#1AA5C4]">
            Sorry! this feature is currently under development
            <div>
                <UnderDevlopmentSvg />
            </div>
        </div>
    )
}