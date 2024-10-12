import GamesComponent from "@/app/components/GamesComponent";
import ProfileMain from "@/app/components/ProfileMain";

export default function Dashboard() {
  return (
    <div>
      <ProfileMain />
      <div className="flex justify-between text-xl mt-8 mb-5 font-extrabold text-[#1AA5C4]">
        <div>Let's Play</div>
        <div>View all</div>
      </div>
      <GamesComponent />
    </div>
  );
}
