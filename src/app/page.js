
import Footer from "./footer";

export default function Home() {
  return (
    <div className="flex flex-col max-w-md h-screen mx-auto bg-slate-600">
      <div className="flex grow">
        이것은 waterplease 앱입니다.
      </div>
      <Footer/>
    </div>
  );
}
