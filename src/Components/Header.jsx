import logo from '../assets/Header/logo.png'
import search from '../assets/Header/search.png'
import cart from '../assets/Header/shopping-cart.png'
import user from '../assets/Header/user.png'
import {Link} from 'react-router-dom'
function Header() {
    return(<>
        <header className='w-screen h-36 flex flex-col items-center border-b-2'>
            <div className='max-sm:hidden h-6 grid grid-cols-2'>
                <div>
                    <a className='text-xs text-slate-400 hover:text-slate-600' href="">Anasayfa</a>
                    <a className='text-xs text-slate-400 hover:text-slate-600 ml-6' href="">Hakkımızda</a>
                    <a className='text-xs text-slate-400 hover:text-slate-600 ml-6' href="">Kuponlar</a>
                </div>
                <div className='text-right'>
                    <a className='text-xs text-slate-400 hover:text-slate-600 ml-6'href="">Destek</a>
                    <a className='text-xs ml-6 text-slate-400 hover:text-slate-600' href="">Satıcı Ol</a>
                    <a className='text-xs ml-6 text-slate-400 hover:text-slate-600' href="">Popüler Ürünler</a>
                </div>
            </div>
            <div className='lg:w-128 xs:w-90 h-36 grid grid-cols-5 sm:gap-6 max-sm:grid-cols-3 max-sm:grid-rows-3'>
                <div className='flex items-center justify-center max-sm:col-span-3'>
                    <Link className='w-28'  to="/"><img className='' src={logo} alt="" srcset="" /></Link>
                </div>
                <div className='flex items-center max-sm:col-span-3 col-span-3'>
                    <img className='w-4 absolute ml-2' src={search} alt="" srcset="" />
                    <input className='w-full  bg-slate-100 outline-none border-none pl-8 p-2 rounded-lg text-sm text-slate-500' placeholder="Aradığınız ürün ile ilgili bilgiler yazınız" type="text" />
                </div>
                <div className=' flex items-center justify-center max-sm:col-span-3'>
                    <div className='absolute bg-slate-700 min-w-5 h-5 flex items-center justify-center mr-9 mb-6 z-10 text-slate-200 font-light rounded-2xl '>1</div>
                    <a href=""><img className='w-10 relative mr-10' src={cart} alt="" srcset="" /></a>
                    <a href=""><img className='w-10 relative ' src={user} alt="" srcset="" /></a>
                </div>
            </div>
        </header>
    </>);
}
export default Header;