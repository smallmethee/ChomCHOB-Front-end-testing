import Image from 'next/image'
import Link from 'next/link'
import {
  AllOfficerIconOutline,
  ContractIconOutline,
  TrackOrderIconOutline,
} from '../icons/outline'
import Pocket from './pocket'
import Search from './search'

const Navbar = () => {
  return (
    <div>
      <div className="fixed h-[122px] inset-x-0 z-50 app-bar">
        <div className="bg-yellow">
          <div className="h-full p-2 min-h-[42px] app-container mx-auto flex flex-col lg:flex-row flex-shrink items-center px-4">
            <p className="flex-grow">Welcome to Pokemon shop!</p>
            <div className="flex flex-nowrap divide-x divide-black">
              <div className="flex  gap-[6px] px-3">
                <ContractIconOutline />
                <p className="text-sm">Contact 123456</p>
              </div>

              <div className="flex  gap-[6px] px-3">
                <TrackOrderIconOutline />
                <p className="text-sm">Track your order</p>
              </div>

              <div className="flex  gap-[6px] px-3">
                <AllOfficerIconOutline />
                <p className="text-sm">All Offers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <nav className="h-20 app-container mx-auto flex items-center px-4">
            <Image src="/images/logo.png" width={156} height={57} alt="logo" />
            <Search />
            <div className="flex divide-x">
              <div className="flex gap-[6px] pr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4.75"
                    stroke="#FFCB05"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    stroke="#FFCB05"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 21v-2.5c0-1.25 2.25-2.5 6-2.5s6 1.25 6 2.5V21"
                  ></path>
                </svg>
                <p className="text-dark-gray text-base">Username</p>
              </div>
              <Link href="/pocket">
                <div className="pl-5 flex gap-[6px]">
                  <Pocket />
                  <p className="text-dark-gray text-base">Pocket</p>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="h-[122px]" />
    </div>
  )
}

export default Navbar
