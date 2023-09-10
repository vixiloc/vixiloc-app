import myPhoto from '../../assets/foto-saya.jpg'
import { FaLinkedin, FaGithubSquare, FaInstagram, FaFacebook } from "react-icons/fa"

const About = () => {
    return (
        <>
            <div className="flex flex-col w-full py-3" id='about'>
                <h2 className="w-full my-4 text-xl font-bold text-center text-white md:text-2xl">About Me</h2>
                <div className="justify-center w-full avatar">
                    <div className="my-3 rounded-full w-52">
                        <img src={myPhoto} className='border-2 border-dashed rounded-full hover:border-double hover:border-4 border-amber-500' />
                    </div>
                </div>
                <h2 className='w-full text-xl font-bold text-center text-white md:text-2xl md:font-extrabold'>Rizky Agung Prayogi</h2>
                <p className='w-full px-5 text-center'>Native Android Programmer</p>
                <div className="justify-center w-full btn-group">
                    <MedsosIcon icon={<FaLinkedin />} link={'https://www.linkedin.com/in/rizky-agung-prayogi-2830a81b6/'} />
                    <MedsosIcon icon={<FaGithubSquare />} link={'https://github.com/rizky201008'} />
                    <MedsosIcon icon={<FaInstagram />} link={'https://www.instagram.com/rizky_vixiloc/'} />
                    <MedsosIcon icon={<FaFacebook />} link={'https://www.facebook.com/siyogik/'} />
                </div>
            </div>
        </>
    )
}

function MedsosIcon(props) {
    return (
        <div className='p-3 m-1 rounded-full bg-slate-900 hover:bg-slate-100'>
            <a href={props.link} target="_blank" rel="noreferrer noopener">
                {props.icon}
            </a>
        </div>
    )
}

export default About