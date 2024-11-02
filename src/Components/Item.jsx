import dummy from '../assets/Content/dummy.png'
import user from '../assets/Header/user.png'
function Item(){
    return(<>
    <div className="w-full flex justify-center">
        <div className=" w-128 grid max-lg:grid-cols-1 grid-rows-2 grid-cols-3 gap-4 max-lg:grid-rows-3 ">
            <div className='w-full flex justify-center'>
                <div className='py-10 px-2 my-8 border-2 w-fit max-lg:w-2/3 max-sm:w-full max-sm:h rounded-xl flex justify-center'>
                    <img className='w-128' src={dummy} alt="" />
                </div>
            </div>
            <div className='py-10 p-5 my-8 border-2 w-full h-fit max-lg:col-span-1  col-span-2 rounded-xl'>
                <b>Marka</b>
                <p className='mb-3'>Ürün hakkında bilgilendirici kısa metin.</p>
                <p className='mb-3 text-xl'>☆☆☆☆☆ <span className='text-sm text-slate-700'>(0)</span><span className='text-xs font-light ml-2 text-slate-500'>İlk yorumu sen yap!</span></p>
                <b>Ürün Özellikleri:</b> <p className='mb-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui, perspiciatis modi, inventore voluptatum nulla porro fugit hic ducimus aspernatur iusto tempore! Aliquam, quia accusamus porro est repellendus veniam voluptate?</p>
                <p className='mb-6'><b className='text-3xl'> 49,95 ₺</b></p>
                <button className=' bg-slate-700 ease-in duration-100 text-white rounded-md p-1 max-sm:p-0 max-sm:text-lg w-full text-xl font-extralight border-2 border-slate-700 hover:bg-white hover:text-slate-700'>Sepete Ekle</button>
            </div>
            <div className='col-span-3 max-lg:col-span-1 border-2  h-fit rounded-xl py-5 relative '>
                <div className='flex items-center border-b-2 mb-1'>
                    <img className="w-12 mr-6 ml-4"src={user} alt="" />
                    <p className=''><b>User</b><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos error velit et harum minima odio exercitationem. Sapiente fugiat voluptate cumque corporis nesciunt itaque, ipsa sit magnam maiores, possimus, quibusdam a?</p>
                </div>
                <div className='flex items-center border-b-2 mb-1'>
                    <img className="w-12 mr-6 ml-4"src={user} alt="" />
                    <p className=''><b>User</b><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos error velit et harum minima odio exercitationem. Sapiente fugiat voluptate cumque corporis nesciunt itaque, ipsa sit magnam maiores, possimus, quibusdam a?</p>
                </div>
                <div className='flex items-center border-b-2 mb-1'>
                    <img className="w-12 mr-6 ml-4"src={user} alt="" />
                    <p className=''><b>User</b><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos error velit et harum minima odio exercitationem. Sapiente fugiat voluptate cumque corporis nesciunt itaque, ipsa sit magnam maiores, possimus, quibusdam a?</p>
                </div>
            </div>
            
        </div>
    </div>
    </>);
}
export default Item;