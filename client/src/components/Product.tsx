

const Product = () => {

    return (<>
            <div className="w-full">
                  <div className="h-72 w-full border-2 border-slate-100 rounded-md relative flex items-center flex-col group ">
                    <img className='w-full h-full' src="/img/iphone13.jpg" alt="" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mt-10 transition ease-in-out delay-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 absolute -bottom-12 text-sm">Add To Bag</button>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-black absolute top-2 opacity-0 -right-4 group-hover:-translate-x-6 group-hover:opacity-100 transition ease-in-out delay-300 hover:bg-black">
                      <svg className="w-4/6 h-4/6 fill-black hover:fill-white hover:border-none hover:outline-none transition ease-in-out delay-300" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 32 32"  xmlSpace="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m23.479 29.691a2.325 2.325 0 0 1 -1.089-.27l-6.233-3.276a.333.333 0 0 0 -.314 0l-6.232 3.276a2.338 2.338 0 0 1 -3.393-2.465l1.19-6.939a.337.337 0 0 0 -.1-.3l-5.038-4.917a2.338 2.338 0 0 1 1.3-3.989l6.963-1.011a.337.337 0 0 0 .254-.185l3.113-6.315a2.337 2.337 0 0 1 4.193 0l3.115 6.313a.34.34 0 0 0 .254.185l6.969 1.012a2.339 2.339 0 0 1 1.3 3.989l-5.043 4.914a.339.339 0 0 0 -.1.3l1.19 6.939a2.341 2.341 0 0 1 -2.3 2.735zm-7.479-5.586a2.325 2.325 0 0 1 1.088.27l6.232 3.275a.321.321 0 0 0 .356-.025.325.325 0 0 0 .135-.331l-1.191-6.94a2.343 2.343 0 0 1 .672-2.069l5.043-4.915a.338.338 0 0 0 -.188-.576l-6.968-1.013a2.335 2.335 0 0 1 -1.76-1.279l-3.119-6.314a.338.338 0 0 0 -.606 0l-3.113 6.312a2.335 2.335 0 0 1 -1.761 1.279l-6.967 1.015a.337.337 0 0 0 -.187.576l5.042 4.915a2.343 2.343 0 0 1 .672 2.069l-1.191 6.94a.338.338 0 0 0 .492.356l6.231-3.276a2.335 2.335 0 0 1 1.088-.269z"></path></g></svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-col ">
                    <h2 className="font-bold mb-1">30$</h2>
                    <p className="font-regular text-sm mb-1">facial cleanser</p>
                    <div className="flex justify-around items-center w-4/5">
                      <div className="flex">
                        <img className="w-4 h-4" src="https://img.icons8.com/fluency-systems-filled/48/000000/star.png"/>
                        <img className="w-4 h-4" src="https://img.icons8.com/fluency-systems-filled/48/000000/star.png"/>
                        <img className="w-4 h-4" src="https://img.icons8.com/fluency-systems-filled/48/000000/star.png"/>
                        <img className="w-4 h-4" src="https://img.icons8.com/fluency-systems-filled/48/000000/star.png"/>
                        <img className="w-4 h-4" src="https://img.icons8.com/fluency-systems-filled/48/000000/star.png"/>
                      </div>
                      <div className="font-normal text-sm text-gray-500">
                        2947 reviews
                      </div>
                    </div>
                  </div>
                </div>
        </>
    )
}

export { Product }