import { FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <div
      className="relative z-50 flex justify-between bg-white shadow h-100px"
      style={{
        height: '100px',
      }}
    >
      {/* Wrapper for Cartedo logo */}
      <div className="mx-4 my-auto">
        <Image
          src="/assets/images/cartedo-logo-full.svg"
          alt="Picture of the author"
          width={180}
          height={35}
        />
      </div>
      {/* Search input field */}
      <div className="relative w-3/12 my-auto">
        <input
          placeholder="Search"
          type="text"
          className="w-full px-6 py-4 rounded outline-none bg-gray-50 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-50 pr-14"
        />
        <div className="absolute top-0 right-0 flex h-full mr-4">
          <button className="my-auto outline-none focus:outline-none">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z"
                stroke="#B0B7C3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.375 18.375L14.5687 14.5688"
                stroke="#B0B7C3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Wrapper for left options */}
      <div className="flex mx-10 my-auto">
        {/* New project button */}
        <button className="inline-flex items-center px-5 mr-4 font-medium text-white rounded outline-none h-11 bg-primary-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-1-200 hover:bg-primary-1-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 font-semibold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="ml-2 text-white">New Project</span>
        </button>
        {/* Notification icon */}
        <div className="mx-4">
          <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.3456 24.3162H32.2316C33.2732 24.3162 34.1176 25.1606 34.1176 26.2022C34.1176 27.2438 33.2732 28.0882 32.2316 28.0882H15.886C14.8444 28.0882 14 27.2438 14 26.2022C14 25.1606 14.8444 24.3162 15.886 24.3162H17.7721L18.474 17.9987C18.7902 15.1529 21.1956 13 24.0588 13C26.9221 13 29.3274 15.1529 29.6436 17.9987L30.3456 24.3162Z"
              fill="#B0B7C3"
            />
            <path
              opacity="0.3"
              d="M26.5734 31.8603C26.5734 30.4715 25.4475 29.3456 24.0587 29.3456C22.6698 29.3456 21.5439 30.4715 21.5439 31.8603C21.5439 33.2491 22.6698 34.375 24.0587 34.375C25.4475 34.375 26.5734 33.2491 26.5734 31.8603Z"
              fill="#B0B7C3"
            />
            <circle cx="39" cy="7" r="4.5" fill="#FF5630" stroke="white" />
          </svg>
        </div>
        {/* Grid icon */}
        <div className="mx-4">
          <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M18.1665 13.6667H15.8332C15.1888 13.6667 14.6665 14.189 14.6665 14.8333V17.1667C14.6665 17.811 15.1888 18.3333 15.8332 18.3333H18.1665C18.8108 18.3333 19.3332 17.811 19.3332 17.1667V14.8333C19.3332 14.189 18.8108 13.6667 18.1665 13.6667Z"
              fill="#B0B7C3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8332 20.6667H18.1665C18.8108 20.6667 19.3332 21.189 19.3332 21.8333V24.1667C19.3332 24.811 18.8108 25.3333 18.1665 25.3333H15.8332C15.1888 25.3333 14.6665 24.811 14.6665 24.1667V21.8333C14.6665 21.189 15.1888 20.6667 15.8332 20.6667ZM22.8332 13.6667H25.1665C25.8108 13.6667 26.3332 14.189 26.3332 14.8333V17.1667C26.3332 17.811 25.8108 18.3333 25.1665 18.3333H22.8332C22.1888 18.3333 21.6665 17.811 21.6665 17.1667V14.8333C21.6665 14.189 22.1888 13.6667 22.8332 13.6667ZM22.8332 20.6667H25.1665C25.8108 20.6667 26.3332 21.189 26.3332 21.8333V24.1667C26.3332 24.811 25.8108 25.3333 25.1665 25.3333H22.8332C22.1888 25.3333 21.6665 24.811 21.6665 24.1667V21.8333C21.6665 21.189 22.1888 20.6667 22.8332 20.6667ZM29.8332 13.6667H32.1665C32.8108 13.6667 33.3332 14.189 33.3332 14.8333V17.1667C33.3332 17.811 32.8108 18.3333 32.1665 18.3333H29.8332C29.1888 18.3333 28.6665 17.811 28.6665 17.1667V14.8333C28.6665 14.189 29.1888 13.6667 29.8332 13.6667ZM29.8332 20.6667H32.1665C32.8108 20.6667 33.3332 21.189 33.3332 21.8333V24.1667C33.3332 24.811 32.8108 25.3333 32.1665 25.3333H29.8332C29.1888 25.3333 28.6665 24.811 28.6665 24.1667V21.8333C28.6665 21.189 29.1888 20.6667 29.8332 20.6667ZM15.8332 27.6667H18.1665C18.8108 27.6667 19.3332 28.189 19.3332 28.8333V31.1667C19.3332 31.811 18.8108 32.3333 18.1665 32.3333H15.8332C15.1888 32.3333 14.6665 31.811 14.6665 31.1667V28.8333C14.6665 28.189 15.1888 27.6667 15.8332 27.6667ZM22.8332 27.6667H25.1665C25.8108 27.6667 26.3332 28.189 26.3332 28.8333V31.1667C26.3332 31.811 25.8108 32.3333 25.1665 32.3333H22.8332C22.1888 32.3333 21.6665 31.811 21.6665 31.1667V28.8333C21.6665 28.189 22.1888 27.6667 22.8332 27.6667ZM29.8332 27.6667H32.1665C32.8108 27.6667 33.3332 28.189 33.3332 28.8333V31.1667C33.3332 31.811 32.8108 32.3333 32.1665 32.3333H29.8332C29.1888 32.3333 28.6665 31.811 28.6665 31.1667V28.8333C28.6665 28.189 29.1888 27.6667 29.8332 27.6667Z"
              fill="#B0B7C3"
            />
          </svg>
        </div>
        {/* Settings icon */}
        <div className="mx-4">
          <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2917 14.125H28.7083C31.0095 14.125 32.875 15.9905 32.875 18.2917C32.875 20.5929 31.0095 22.4583 28.7083 22.4583H18.2917C15.9905 22.4583 14.125 20.5929 14.125 18.2917C14.125 15.9905 15.9905 14.125 18.2917 14.125ZM18.2917 20.375C19.4423 20.375 20.375 19.4423 20.375 18.2917C20.375 17.1411 19.4423 16.2083 18.2917 16.2083C17.1411 16.2083 16.2083 17.1411 16.2083 18.2917C16.2083 19.4423 17.1411 20.375 18.2917 20.375Z"
              fill="#B0B7C3"
            />
            <path
              opacity="0.3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2917 24.5417H28.7083C31.0095 24.5417 32.875 26.4071 32.875 28.7083C32.875 31.0095 31.0095 32.875 28.7083 32.875H18.2917C15.9905 32.875 14.125 31.0095 14.125 28.7083C14.125 26.4071 15.9905 24.5417 18.2917 24.5417ZM28.7083 30.7917C29.8589 30.7917 30.7917 29.8589 30.7917 28.7083C30.7917 27.5577 29.8589 26.625 28.7083 26.625C27.5577 26.625 26.625 27.5577 26.625 28.7083C26.625 29.8589 27.5577 30.7917 28.7083 30.7917Z"
              fill="#B0B7C3"
            />
          </svg>
        </div>
        <div className="relative inline object-cover w-12 h-12 mx-4 overflow-hidden border border-gray-100 rounded-full">
          <Image
            src="/assets/images/avatar-s.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
