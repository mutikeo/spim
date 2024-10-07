import Image from "next/image";
import logo from '@/public/images/u5.png';

interface HeaderProps {
  title?: string;
}
export default function Header({title = 'Dashboard'}:HeaderProps) {
  return (
    <>
      <div className="w-full bg-[rgba(28,35,126,0.9)]">
        <div className="container mx-auto flex items-center h-full justify-between py-4">
          <div className="pl-8">
            <Image src={logo} alt="PSIM.ai Logo" width={80} height={80} className="m-auto" />
          </div>
          <div className="flex items-center pr-8 text-white">
            Welcome,&nbsp;<b>[username]</b>
            &nbsp;|&nbsp;
            <a className="font-bold" href="#">Logout</a>
          </div>
        </div>
      </div>
      <div
        className="
          h-64 bg-cover bg-center bg-no-repeat
          bg-[rgba(4,4,82,0.9)] bg-[url('/images/bg.png')]
          flex items-center justify-center">
        <h1 className="text-4xl text-white text-center font-bold">{title}</h1>
      </div>
    </>
  );
}