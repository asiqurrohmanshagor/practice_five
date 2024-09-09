import React from 'react'
import tmkmpic from '../assets/image/tmkm.jpeg'
import tmkmTwo from '../assets/image/tmkmTtwo.webp'
import tmkmThree from '../assets/image/tmkmThree.jpg'
import walcomeanimition from '../assets/image/welcome.gif'

const Madrasah_pages = () => {
    return (
        <>
            <div className=' w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#059212] via-[#FF0000] to-[#059212]'>
                <div className=' flex justify-center bg-gradient-to-r from-[#059212] via-[#06D001] to-[#059212] w-[700px] h-[1110px] rounded-xl shadow-2xl border-collapse'>
                    <div>
                        <div className=' flex justify-center items-center w-[690px] h-[1100px] rounded-xl mt-[20px] ml-[35px] bg-gradient-to-r from-[#FF0000] via-[#9BEC00] to-[#FF0000] border-collapse gap-10 '>
                            <div className=' flex-col flex gap-y-[15px] justify-center items-center'>
                                {/* =================== welcome div =============== */}
                                <div>
                                    <img className=' relative' src={walcomeanimition} alt="welcome" />
                                    {/* <div className=' absolute mt-[-100px] ml-[-55px]  font-extrabold text-[50px] '> */}
                                    <div class=" absolute mt-[-85px] ml-[-70px] text-[52px] font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" >  Choose Your Institute</div>
                                </div>
                                {/* =============== Box One Part Start =========================================== Box One Part Start ============================= Box One Part Start ========================================== */}
                                <div className='boxOne w-[689.55px] h-[265px] border-collapse rounded-r-xl  rounded-l-[150px] flex justify-center items-center gap-5 '>
                                    <div className=' relative bg-white w-[270px] h-[250px] rounded-[200px] flex justify-center items-center ml-[-60px]'>
                                        <img className=' absolute shadow-sm w-[689.55px] h-[265px] rounded-full mr-[0px]' src={tmkmpic} alt="tmkm" />
                                    </div>
                                    <div className='bg-transparent w-[382px] h-[250px] rounded-xl flex justify-center items-center mr-[-45px] '>
                                        <div className=' flex-col justify-center items-center'>
                                            <h1 className=' text-[25px] font-extrabold text-blue-600 '>Tamirul Millat Kamil Madrasah</h1>
                                            <p className=' text-indigo-700 text-[20px] flex justify-center ' >Tongi , Gazipur - 1712</p>
                                            <h1 className=' text-[25px] flex justify-center font-bold text-sky-600 '>EIIN - 109006 </h1>
                                            <div className=' flex justify-center items-center mt-[30px]'><button className=' buttonOne w-[210px] h-[60px] font-bold text-white rounded-xl bg-gradient-to-r from-[#059212] via-[#FF0000] to-[#059212] flex justify-center items-center active:scale-[1.1] '>Go</button></div>
                                        </div>
                                    </div>
                                </div>
                                {/* =============== Box One Part end =========================================== Box One Part end ============================= Box One Part end ========================================== */}
                                {/* =============== Box two Part start =========================================== Box two Part start ============================= Box two Part start ========================================== */}
                                <div className='boxTwo w-[689.55px] h-[265px] border-collapse rounded-l-xl  rounded-r-[150px] flex justify-center items-center gap-5 ' >
                                    <div className='bg-transparent w-[382px] h-[250px] rounded-xl flex justify-center items-center'>
                                        <div className=' flex-col justify-center items-center'>
                                            <h1 className=' text-[25px] font-extrabold text-blue-600 '>Tamirul Millat Kamil Madrasah</h1>
                                            <p className=' text-indigo-700 text-[20px] flex justify-center ' >Mirhajirbag , Dhaka - 1204</p>
                                            <h1 className=' text-[25px] flex justify-center font-bold text-sky-600 '>EIIN - 108478  </h1>
                                            <div className=' flex justify-center items-center mt-[30px]'><button className=' buttonOne w-[210px] h-[60px] font-bold text-white rounded-xl bg-gradient-to-r from-[#059212] via-[#FF0000] to-[#059212] flex justify-center items-center active:scale-[1.1] '>Go</button></div>
                                        </div>
                                    </div>
                                    <div className='w-[270px] h-[250px] rounded-[200px] flex justify-center items-center'>
                                        <div className=' relative bg-transparent w-[270px] h-[250px] rounded-[200px] flex justify-center items-center ml-[-60px]'>
                                            <img className=' absolute shadow-sm w-[689.55px] h-[265px] rounded-full ml-[75px]' src={tmkmTwo} alt="tmkmTwo" />
                                        </div>
                                    </div>
                                </div>
                                {/* ================ Box part two end ==================== Box part two end ========================================== */}
                                {/* ================ Box part three start ================== Box part three start ==================================== */}
                                <div className='boxOne w-[689.55px] h-[265px] border-collapse rounded-r-xl  rounded-l-[150px] flex justify-center items-center gap-5 '>
                                    <div className=' relative bg-white w-[270px] h-[250px] rounded-[200px] flex justify-center items-center ml-[-60px]'>
                                        <img className=' absolute shadow-sm w-[689.55px] h-[265px] rounded-full' src={tmkmThree} alt="tmkm" />
                                    </div>
                                    <div className='bg-transparent w-[382px] h-[250px] rounded-xl flex justify-center items-center mr-[-45px] '>
                                        <div className=' flex-col justify-center items-center'>
                                            <h1 className=' text-[25px] font-extrabold text-blue-600 '>Tamirul Millat Kamil Madrasah</h1>
                                            <p className=' text-indigo-700 text-[20px] flex justify-center ' >Demra , Dhaka - 1362	</p>
                                            <h1 className=' text-[25px] flex justify-center font-bold text-sky-600 '>EIIN - 107902</h1>
                                            <div className=' flex justify-center items-center mt-[30px]'><button className=' buttonOne w-[210px] h-[60px] font-bold text-white rounded-xl bg-gradient-to-r from-[#059212] via-[#FF0000] to-[#059212] flex justify-center items-center active:scale-[1.1] '>Go</button></div>
                                        </div>
                                    </div>
                                </div>
                                {/* ================ Box part three end ================== Box part three end ========================================== */}
                                {/* =================== Millat Help Line part start ============= */}
                                <div class=" text-[35px] font-bold bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 bg-clip-text text-transparent" > Millat Help Line</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default Madrasah_pages