import github from '../assets/Footer/github.png'
import linkedin from '../assets/Footer/linkedin.png'
function Footer(){
return(<>
<footer className="w-screen  flex border-t-2 justify-center">
    <div className="w-128 grid grid-cols-2 divide-x-2 p-2 py-10">
        <div className="grid grid-cols-2">
            <div className="flex flex-col">
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Anasayfa</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Hakkızmda</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Kuponlar</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Destek</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Satıcı Ol</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Popüler Ürünler</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Misyonumuz</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Vizyonumuz</a>
            </div>
            <div className="flex flex-col">
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Lokasyon</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Ekibimiz</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Fotoğraf Arşivi</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Çok Satılanlar</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Reklam</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Ceo'muz</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Abonelikler</a>
                <a className="text-xs m-1 text-slate-600 hover:text-slate-800" href="">Anlaşmalar</a>
            </div>
        </div>
        <div className='flex items-center pl-12'>
            <div>
               <a className='flex items-center mb-4 text-slate-600 text-xs cursor-pointer' onClick={()=>window.open('https://github.com/Muqo1987')}><img className='w-8 mr-2' src={github} alt="" />Github</a>    
               <a id='linkedin' className='flex items-center text-slate-600 text-xs cursor-pointer' onClick={()=>window.open('https://www.linkedin.com/in/muhammet-yıldız-516239272')}><img className='w-8 mr-2' src={linkedin} alt="" />Linkedin</a>    
            </div>    
        </div>
    </div>
</footer>
</>);
}
export default Footer;