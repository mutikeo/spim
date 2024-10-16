import Image from "next/image";
import logo from '@/public/images/u5.png';

import { colors } from '@/app/_constants';

export default function Home() {
  return (
    <div className="
      bg-[rgba(4,4,82,0.9)] bg-[url('/images/bg.png')]
      grid grid-rows-[20px_1fr_20px] items-center justify-items-center
      min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="bg-white rounded-3xl shadow-md p-8 mx-auto min-w-[600px]">
          <form className="flex flex-col gap-4">
            <div className="flex items-center justify-center mt-[-120px]">
              <Image src={logo} alt="PSIM.ai Logo" width={120} height={120} className="m-auto" />
            </div>
            <div className="relative flex flex-col items-center justify-center">
                <h1 className={`text-4xl font-bold text-[${colors.text.primary}]`}>Welcome Back</h1>
                <b className={`text-center text-[${colors.text.secondary}] pt-3`}>Sign In to PSIM.ai Site Assessments</b>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                className="
                  block appearance-none w-full px-3 py-2 shadow-[20px_20px_40px_rgba(0,0,0,0.07)]
                  border border-gray-300 rounded-xl placeholder-gray-400
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email" required />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
              <input
                type="password"
                className="
                  block appearance-none w-full px-3 py-2 shadow-[20px_20px_40px_rgba(0,0,0,0.07)]
                  border border-gray-300 rounded-xl
                  placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Password" required />
            </div>
            <button
              type="submit"
              className="
                w-full flex justify-center py-3 px-4 mt-4
                border border-transparent rounded-md
                shadow-sm text-white
                bg-[rgba(28,35,126,1)] hover:bg-[rgba(28,35,126,0.9)]
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(28,35,126,1)]
                font-bold text-lg
              ">
                Sign in
              </button>
            <div className="flex justify-between">
              <span className={`text-[${colors.text.primary}] text-md font-bold`}>
                Don&apos;t have an account?
                <a href="#" className="text-md ml-[6px]">
                  Sign up
                </a>
              </span>

              <a href="#" className={`text-md text-[${colors.text.primary}] font-bold`}>Forgot password?</a>
            </div>
            <div className="relative flex flex-col items-center justify-center mb-6">
                <b className={`text-center text-[${colors.text.secondary}] pt-3 bg-[#fff] px-2 z-10`}>or</b>
                <span className="line w-full h-[1px] bg-[#999] mt-[-12px]"></span>
            </div>
            <div className="relative">
              <select className="
                block appearance-none w-full px-3 py-2 border border-gray-300
                rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500
                focus:border-blue-500" defaultValue="Select Single Sign-On provider"
              >
                <option disabled>Select Single Sign-On provider</option>
                <option>Google</option>
                <option>Microsoft</option>
                <option>Facebook</option>
              </select>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
