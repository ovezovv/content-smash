import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Search from "@/components/Search";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <div className="flex">
      <Search />
      <Preview />
    </div>
  );
}
