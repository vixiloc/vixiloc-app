const TechStack = () => {
    return (
        <>
            <div className="w-full py-3" id="ts">
                <h2 className="w-full py-3 text-2xl font-bold text-center text-white md:text-5xl md:font-extrabold">Tech Stack</h2>
                <div className="grid grid-cols-1 gap-2 px-3 place-items-center lg:grid-cols-3">
                    <TechStackList link={"https://kotlinlang.org/"} name={"Kotlin"} desc={"Concise. Cross‑platform. Fun."} />
                    <TechStackList link={"https://developer.android.com/jetpack/compose"} name={"Jetpack Compose"} desc={"Create better applications faster"} />
                    <TechStackList link={"https://laravel.com"} name={"Laravel"} desc={"The PHP Framework for Web Artisans"} />
                </div>
            </div>
        </>
    )
    function TechStackList(props : any) {
        return (
            <div className="w-full m-2 card bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p>{props.desc}</p>
                    <div className="justify-end card-actions">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn">Learn More</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


export default TechStack