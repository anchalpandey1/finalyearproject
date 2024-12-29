import React from 'react'
import d1 from "../../assets/d1.png";
const DoctorCard = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <h1 className="text-7xl font-bold text-black mb-4">Meet our Providers</h1>
                <p className="text-black font-inter font-medium text-xl max-w-4xl mx-auto">
                    At knownwell, the care team is at the heart of what we do. Our thoughtful and welcoming providers are available
                    both virtually and in person to partner with you on your wellness journey.
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

                    <div className='bg-white shadow-lg'>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal relative">
                            <img
                                src={d1}
                                className="w-full h-[70%]"
                                alt=""
                            />
                        </div>
                        <h3 className='m-2 font-bold text-3xl'>Dr. Vincent Brinky</h3>
                        <p className='m-2 font-semibold text-xl'>MBBS MS Kanpur</p>

                        {/* Experience with Clock Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>10+Year Experience</span>
                        </div>

                        {/* Gold Medal with Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 484.312 484.312"
                                className="h-6 w-6 text-black mr-2"
                                fill="currentColor"
                            >
                                <path d="M400.136,157.98C400.136,70.87,329.267,0,242.156,0S84.175,70.87,84.175,157.98c0,56.344,29.655,105.884,74.17,133.856 v192.476l87.581-43.955l87.581,43.955V286.804C373.802,258.147,400.136,211.081,400.136,157.98z M114.175,157.98 c0-70.568,57.412-127.98,127.98-127.98s127.98,57.412,127.98,127.98c0,70.569-57.412,127.98-127.98,127.98 S114.175,228.549,114.175,157.98z M303.507,435.688l-57.581-28.898l-57.581,28.898v-129.17c16.803,6.106,34.924,9.442,53.81,9.442 c21.746,0,42.479-4.417,61.351-12.4V435.688z"></path>
                            </svg>
                            <span>Gold medalist</span>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-between space-x-4 m-4">
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                View Profile
                            </button>
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg'>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal relative">
                            <img
                                src={d1}
                                className="w-full h-[70%]"
                                alt=""
                            />
                        </div>
                        <h3 className='m-2 font-bold text-3xl'>Dr. Vincent Brinky</h3>
                        <p className='m-2 font-semibold text-xl'>MBBS MS Kanpur</p>

                        {/* Experience with Clock Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>10+Year Experience</span>
                        </div>

                        {/* Gold Medal with Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 484.312 484.312"
                                className="h-6 w-6 text-black mr-2"
                                fill="currentColor"
                            >
                                <path d="M400.136,157.98C400.136,70.87,329.267,0,242.156,0S84.175,70.87,84.175,157.98c0,56.344,29.655,105.884,74.17,133.856 v192.476l87.581-43.955l87.581,43.955V286.804C373.802,258.147,400.136,211.081,400.136,157.98z M114.175,157.98 c0-70.568,57.412-127.98,127.98-127.98s127.98,57.412,127.98,127.98c0,70.569-57.412,127.98-127.98,127.98 S114.175,228.549,114.175,157.98z M303.507,435.688l-57.581-28.898l-57.581,28.898v-129.17c16.803,6.106,34.924,9.442,53.81,9.442 c21.746,0,42.479-4.417,61.351-12.4V435.688z"></path>
                            </svg>
                            <span>Gold medalist</span>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-between space-x-4 m-4">
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                View Profile
                            </button>
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                Book Now
                            </button>
                        </div>
                    </div>

                    <div className='bg-white shadow-lg'>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal relative">
                            <img
                                src={d1}
                                className="w-full h-[70%]"
                                alt=""
                            />
                        </div>
                        <h3 className='m-2 font-bold text-3xl'>Dr. Vincent Brinky</h3>
                        <p className='m-2 font-semibold text-xl'>MBBS MS Kanpur</p>

                        {/* Experience with Clock Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>10+Year Experience</span>
                        </div>

                        {/* Gold Medal with Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 484.312 484.312"
                                className="h-6 w-6 text-black mr-2"
                                fill="currentColor"
                            >
                                <path d="M400.136,157.98C400.136,70.87,329.267,0,242.156,0S84.175,70.87,84.175,157.98c0,56.344,29.655,105.884,74.17,133.856 v192.476l87.581-43.955l87.581,43.955V286.804C373.802,258.147,400.136,211.081,400.136,157.98z M114.175,157.98 c0-70.568,57.412-127.98,127.98-127.98s127.98,57.412,127.98,127.98c0,70.569-57.412,127.98-127.98,127.98 S114.175,228.549,114.175,157.98z M303.507,435.688l-57.581-28.898l-57.581,28.898v-129.17c16.803,6.106,34.924,9.442,53.81,9.442 c21.746,0,42.479-4.417,61.351-12.4V435.688z"></path>
                            </svg>
                            <span>Gold medalist</span>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-between space-x-4 m-4">
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                View Profile
                            </button>
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                Book Now
                            </button>
                        </div>
                    </div>

                    <div className='bg-white shadow-lg'>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal relative">
                            <img
                                src={d1}
                                className="w-full h-[70%]"
                                alt=""
                            />
                        </div>
                        <h3 className='m-2 font-bold text-3xl'>Dr. Vincent Brinky</h3>
                        <p className='m-2 font-semibold text-xl'>MBBS MS Kanpur</p>

                        {/* Experience with Clock Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>10+Year Experience</span>
                        </div>

                        {/* Gold Medal with Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 484.312 484.312"
                                className="h-6 w-6 text-black mr-2"
                                fill="currentColor"
                            >
                                <path d="M400.136,157.98C400.136,70.87,329.267,0,242.156,0S84.175,70.87,84.175,157.98c0,56.344,29.655,105.884,74.17,133.856 v192.476l87.581-43.955l87.581,43.955V286.804C373.802,258.147,400.136,211.081,400.136,157.98z M114.175,157.98 c0-70.568,57.412-127.98,127.98-127.98s127.98,57.412,127.98,127.98c0,70.569-57.412,127.98-127.98,127.98 S114.175,228.549,114.175,157.98z M303.507,435.688l-57.581-28.898l-57.581,28.898v-129.17c16.803,6.106,34.924,9.442,53.81,9.442 c21.746,0,42.479-4.417,61.351-12.4V435.688z"></path>
                            </svg>
                            <span>Gold medalist</span>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-between space-x-4 m-4">
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                View Profile
                            </button>
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                Book Now
                            </button>
                        </div>
                    </div>

                    <div className='bg-white shadow-lg'>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal relative">
                            <img
                                src={d1}
                                className="w-full h-[70%]"
                                alt=""
                            />
                        </div>
                        <h3 className='m-2 font-bold text-3xl'>Dr. Vincent Brinky</h3>
                        <p className='m-2 font-semibold text-xl'>MBBS MS Kanpur</p>

                        {/* Experience with Clock Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>10+Year Experience</span>
                        </div>

                        {/* Gold Medal with Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 484.312 484.312"
                                className="h-6 w-6 text-black mr-2"
                                fill="currentColor"
                            >
                                <path d="M400.136,157.98C400.136,70.87,329.267,0,242.156,0S84.175,70.87,84.175,157.98c0,56.344,29.655,105.884,74.17,133.856 v192.476l87.581-43.955l87.581,43.955V286.804C373.802,258.147,400.136,211.081,400.136,157.98z M114.175,157.98 c0-70.568,57.412-127.98,127.98-127.98s127.98,57.412,127.98,127.98c0,70.569-57.412,127.98-127.98,127.98 S114.175,228.549,114.175,157.98z M303.507,435.688l-57.581-28.898l-57.581,28.898v-129.17c16.803,6.106,34.924,9.442,53.81,9.442 c21.746,0,42.479-4.417,61.351-12.4V435.688z"></path>
                            </svg>
                            <span>Gold medalist</span>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-between space-x-4 m-4">
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                View Profile
                            </button>
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                Book Now
                            </button>
                        </div>
                    </div>

                    <div className='bg-white shadow-lg'>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal relative">
                            <img
                                src={d1}
                                className="w-full h-[70%]"
                                alt=""
                            />
                        </div>
                        <h3 className='m-2 font-bold text-3xl'>Dr. Vincent Brinky</h3>
                        <p className='m-2 font-semibold text-xl'>MBBS MS Kanpur</p>

                        {/* Experience with Clock Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>10+Year Experience</span>
                        </div>

                        {/* Gold Medal with Icon */}
                        <div className="flex items-center m-2 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 484.312 484.312"
                                className="h-6 w-6 text-black mr-2"
                                fill="currentColor"
                            >
                                <path d="M400.136,157.98C400.136,70.87,329.267,0,242.156,0S84.175,70.87,84.175,157.98c0,56.344,29.655,105.884,74.17,133.856 v192.476l87.581-43.955l87.581,43.955V286.804C373.802,258.147,400.136,211.081,400.136,157.98z M114.175,157.98 c0-70.568,57.412-127.98,127.98-127.98s127.98,57.412,127.98,127.98c0,70.569-57.412,127.98-127.98,127.98 S114.175,228.549,114.175,157.98z M303.507,435.688l-57.581-28.898l-57.581,28.898v-129.17c16.803,6.106,34.924,9.442,53.81,9.442 c21.746,0,42.479-4.417,61.351-12.4V435.688z"></path>
                            </svg>
                            <span>Gold medalist</span>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-between space-x-4 m-4">
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                View Profile
                            </button>
                            <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                Book Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DoctorCard