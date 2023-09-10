import vixitask from '../../assets/banner-vixitask.png'
import vixgpt from '../../assets/banner-vixgpt.png'
const Projects = () => {
    return (
        <>
            <div id='projects' className="w-full py-3 bg-no-repeat bg-cover text-center bg-fixed bg-[url('https://cdn.pixabay.com/photo/2023/08/26/18/01/planet-8215532_1280.png')]">
                <h2 className="py-3 text-2xl font-bold text-white md:text-5xl md:font-extrabold">Projects</h2>
                <div className="grid w-full grid-cols-1 gap-2 px-3 place-items-center md:grid-cols-2 lg:grid-cols-3">
                    <div className="h-full m-2 shadow-xl card bg-base-100">
                        <figure><img src={vixitask} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Vixitask</h2>
                            <p className='w-full text-start'>Aplikasi manajemen tugas untuk meningkatkan produktifitas.</p>
                            <div className="justify-start card-actions">
                                <a href="https://github.com/vixiloc/vixitask/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-secondary">Learn More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="h-full m-2 shadow-xl card bg-base-100">
                        <figure><img src={vixgpt} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">VixGPT</h2>
                            <p className='w-full text-start'>Aplikasi Chatgpt menggunakan API dari OpenAi</p>
                            <div className="justify-start card-actions">
                                <a href="https://github.com/vixiloc/vixgpt" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-secondary">Learn More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects