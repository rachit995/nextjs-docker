import Image from 'next/image'
import { FunctionComponent } from 'react'

const Content: FunctionComponent = () => {
  return (
    <>
      <div className="w-full p-6 m-6 rounded bg-gray-50">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded shadow">
            <div className="relative w-full overflow-hidden rounded-tl rounded-tr h-card">
              <Image
                src="/assets/images/card-image.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex justify-between pt-4 pb-1 pl-6">
              <div className="">
                <span className="inline-flex py-1 pl-1 pr-2 text-xs font-semibold rounded-full bg-secondary-2 text-primary-2-500 place-items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle opacity="0.3" cx="12.5" cy="12" r="10" fill="#38CB89" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 16.8229C11.5 17.6144 12.5669 17.8662 12.9208 17.1584L15.9573 11.0854C16.2066 10.5867 15.844 10 15.2865 10H12.5V7.17705C12.5 6.38563 11.4331 6.13377 11.0792 6.84164L8.04271 12.9146C7.79337 13.4133 8.15599 14 8.71353 14H11.5V16.8229Z"
                      fill="#38CB89"
                    />
                  </svg>
                  <span className="mx-1">Live</span>
                </span>
              </div>
              <div className="pr-6 my-auto">
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3C9.5523 3 10 2.5523 10 2C10 1.4477 9.5523 1 9 1C8.4477 1 8 1.4477 8 2C8 2.5523 8.4477 3 9 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3C16.5523 3 17 2.5523 17 2C17 1.4477 16.5523 1 16 1C15.4477 1 15 1.4477 15 2C15 2.5523 15.4477 3 16 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 3C2.55228 3 3 2.5523 3 2C3 1.4477 2.55228 1 2 1C1.44772 1 1 1.4477 1 2C1 2.5523 1.44772 3 2 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="px-6 py-2">
              <h4 className="pb-1 font-semibold text-gray-600">Digital Livelihood Challenge</h4>
              <h2 className="text-xs text-gray-300 ">Yoma</h2>
            </div>
            <div className="py-2 pb-5 pl-6">
              <span className="inline-flex py-1 pl-2 pr-2 text-xs text-gray-400 rounded-full bg-gray-50 place-items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 11C8.7614 11 11 8.7614 11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11Z"
                    stroke="#B0B7C3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 3V6L8 7"
                    stroke="#B0B7C3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mx-1">15 days left</span>
              </span>
            </div>
          </div>
          <div className="bg-white rounded shadow">
            <div className="relative w-full overflow-hidden rounded-tl rounded-tr h-card">
              <Image
                src="/assets/images/card-image-2.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex justify-between pt-4 pb-1 pl-6">
              <div className="">
                <span className="inline-flex py-1 pl-1 pr-2 text-xs font-semibold rounded-full bg-secondary-1 text-primary-1-500 place-items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle opacity="0.3" cx="12.5" cy="12" r="10" fill="#377DFF" />
                    <path
                      d="M17.269 7.81769C17.6458 7.41393 18.2786 7.39211 18.6823 7.76895C19.0861 8.14578 19.1079 8.77857 18.7311 9.18232L11.7311 16.6823C11.3655 17.074 10.7561 17.108 10.3492 16.7593L6.84923 13.7593C6.4299 13.3998 6.38134 12.7685 6.74076 12.3492C7.10018 11.9299 7.73148 11.8813 8.15081 12.2407L10.923 14.6169L17.269 7.81769Z"
                      fill="#377DFF"
                    />
                  </svg>
                  <span className="mx-1">Finished</span>
                </span>
              </div>
              <div className="pr-6 my-auto">
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3C9.5523 3 10 2.5523 10 2C10 1.4477 9.5523 1 9 1C8.4477 1 8 1.4477 8 2C8 2.5523 8.4477 3 9 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3C16.5523 3 17 2.5523 17 2C17 1.4477 16.5523 1 16 1C15.4477 1 15 1.4477 15 2C15 2.5523 15.4477 3 16 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 3C2.55228 3 3 2.5523 3 2C3 1.4477 2.55228 1 2 1C1.44772 1 1 1.4477 1 2C1 2.5523 1.44772 3 2 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="px-6 py-2">
              <h4 className="pb-1 font-semibold text-gray-600">Reimagine Future Challenge</h4>
              <h2 className="text-xs text-gray-300 ">Yoma</h2>
            </div>
            <div className="py-2 pb-5 pl-6">
              <span className="inline-flex py-1 pl-2 pr-2 text-xs text-gray-400 rounded-full bg-gray-50 place-items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 11C8.7614 11 11 8.7614 11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11Z"
                    stroke="#B0B7C3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 3V6L8 7"
                    stroke="#B0B7C3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mx-1">0 days left</span>
              </span>
            </div>
          </div>
          <div className="bg-white rounded shadow">
            <div className="relative w-full overflow-hidden rounded-tl rounded-tr h-card">
              <Image
                src="/assets/images/card-image-3.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex justify-between pt-4 pb-1 pl-6">
              <div className="">
                <span className="inline-flex py-1 pl-1 pr-2 text-xs font-semibold rounded-full bg-secondary-4 text-primary-4-500 place-items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.4646 7.96165C10.4846 7.70115 10.7018 7.5 10.9631 7.5H11.0476C11.3044 7.5 11.5195 7.69465 11.5451 7.95025L12.0001 12.5L15.2481 14.356C15.4039 14.4451 15.5001 14.6107 15.5001 14.7902V14.8454C15.5001 15.1751 15.1866 15.4145 14.8685 15.3278L10.3987 14.1087C10.1673 14.0456 10.0134 13.8271 10.0318 13.588L10.4646 7.96165Z"
                      fill="#FF5630"
                    />
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.20102 1.41818C5.93691 1.10343 5.42697 1.2239 5.33164 1.62357L4.20314 6.3547C4.12546 6.68035 4.38353 6.98885 4.71778 6.96991L9.58475 6.6941C9.99566 6.67082 10.204 6.18879 9.93948 5.87351L8.74872 4.45442C9.62236 4.15588 10.5488 3.99995 11.5 3.99995C16.1944 3.99995 20 7.80553 20 12.5C20 17.1944 16.1944 21 11.5 21C6.80558 21 3 17.1944 3 12.5C3 11.7119 3.10672 10.94 3.31481 10.1982L1.38913 9.65801C1.13559 10.5619 1 11.5151 1 12.5C1 18.2989 5.70101 23 11.5 23C17.299 23 22 18.2989 22 12.5C22 6.70096 17.299 1.99995 11.5 1.99995C10.0413 1.99995 8.65217 2.29739 7.3898 2.83491L6.20102 1.41818Z"
                      fill="#FF5630"
                    />
                  </svg>
                  <span className="mx-1">Draft</span>
                </span>
              </div>
              <div className="pr-6 my-auto">
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3C9.5523 3 10 2.5523 10 2C10 1.4477 9.5523 1 9 1C8.4477 1 8 1.4477 8 2C8 2.5523 8.4477 3 9 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3C16.5523 3 17 2.5523 17 2C17 1.4477 16.5523 1 16 1C15.4477 1 15 1.4477 15 2C15 2.5523 15.4477 3 16 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 3C2.55228 3 3 2.5523 3 2C3 1.4477 2.55228 1 2 1C1.44772 1 1 1.4477 1 2C1 2.5523 1.44772 3 2 3Z"
                    stroke="#B0B7C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="px-6 py-2">
              <h4 className="pb-1 font-semibold text-gray-600">COVID Challenge</h4>
              <h2 className="text-xs text-gray-300 ">UNICEF</h2>
            </div>
            <div className="py-2 pb-5 pl-6">
              <span className="inline-flex py-1 pl-2 pr-2 text-xs text-gray-400 rounded-full bg-gray-50 place-items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 11C8.7614 11 11 8.7614 11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11Z"
                    stroke="#B0B7C3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 3V6L8 7"
                    stroke="#B0B7C3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mx-1">15 days left</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
