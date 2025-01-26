import React from 'react'

const Description = () => {
  return (
    <div>
           <form className="mt-10 bg-white shadow-md rounded-lg p-6">
                    <div className="grid grid-cols-2 gap-4">
                       
                        <div className="col-span-2">                           
                            <textarea
                                rows="4"
                                className="mt-1 block w-full bg-[#D9D9D980] rounded-lg p-4 focus:outline-none focus:ring focus:ring-blue-500"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-6 text-left">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Update Description
                        </button>
                    </div>
                </form>
    </div>
  )
}

export default Description