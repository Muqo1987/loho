import Dummy from '../assets/Content/dummy.png'
import Dummy2 from '../assets/Content/000000.png'
import {Link} from 'react-router-dom'
function Content() {
    return(<>
    <div className="w-full  flex justify-center pt-10">
        <div className="w-128  flex-col flex justify-center mb-20">
            <div className=" max-sm:text-2xl text-4xl text-center font-light text-black">
               <i>"Muhteşem ürünlerle dolu Muhteşem bir yer!"</i>
            </div>
            <div className="pt-12 grid gap-6 max-xl:grid-cols-3 w-full max-lg:grid-cols-2 grid-cols-4 ">
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <div className='absolute bg-red-600 text-white text-sm font-light right-0 max-sm:translate-x-2 rotate-45 overflow-hidden rounded-sm top-5 max-sm:text-xs w-20 text-center'>%50 İndirim</div>
                    <div className='absolute bg-green-600 text-white text-sm font-light max-sm:-translate-x-2 left-0 max:sm:bottom-32 bottom-36 rotate-45 overflow-hidden rounded-sm max-sm:text-xs w-20 text-center'>Kampanya</div>
                        <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <div className='absolute bg-red-600 text-white text-sm font-light right-0 max-sm:translate-x-2 rotate-45 overflow-hidden rounded-sm top-5 max-sm:text-xs w-20 text-center'>%50 İndirim</div>                           <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <div className='absolute bg-green-600 text-white text-sm font-light max-sm:-translate-x-2 left-0 max:sm:bottom-32 bottom-36 rotate-45 overflow-hidden rounded-sm max-sm:text-xs w-20 text-center'>Kampanya</div>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="bg-white w-64 p-5 shadow-lg relative overflow-hidden max-sm:p-3 shadow-slate-700 rounded-xl">
                    <button className='z-20 sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 max-sm:text-2xl absolute text-4xl ease-in duration-100 max-sm:top-1 max-sm:left-1 bg-white m-3 hover:bg-red-600 drop-shadow-2xl hover:text-white rounded-full'>♡</button>
                    <Link to="/item" className='w-64'>
                            <img className='rounded-xl' src={Dummy} alt="" />
                                <div className='h-12 w-full truncate mb-4 mt-4 max-sm:text-xs '><b>Marka <br /> </b>Ürünü tanıtıcı ve bilgilendirici açıklama </div>
                                <button className='bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>49,95</button>
                        </Link>
                </div>
                </div>
               
                

            </div>
            <div className='grid grid-cols-2 p-6 max-lg:w-screen max-lg:grid-cols-1 max-lg:grid-rows-2 mt-20 gap-10'>
                <img src={Dummy2} alt="" />
                <p className='flex text-2xl max-lg:text-center  max-lg:items-start items-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tempore nisi expedita amet! Nam minus explicabo alias in deleniti labore, ducimus placeat voluptas nesciunt, sit sapiente ullam, eaque perferendis aut!</p>
            </div>
        </div>
    </div>
    </>);
}
export default Content;