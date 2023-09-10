import { useNavigate } from "react-router-dom";
const First = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>Homepage</h3>
            <button onClick={() => navigate("/about")}>Pindah</button>
        </>
    )
}

export default First