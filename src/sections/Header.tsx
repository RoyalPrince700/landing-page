import ArrowRight from "@/assets/arrow-right.svg";
import LOGO from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center gap-3 bg-black py-3 text-white text-sm">
        <p className="text-white/60 md:block hidden">
          Streamline workflow and boost your productivity
        </p>
        <div className="gap-1 items-center inline-flex">
          <p>Lets get started</p>
        </div>

        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={LOGO} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black tracking-tight px-4 py-2  inline-flex align-items rounded-lg justify-center text-white font-medium">
                Get For Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
