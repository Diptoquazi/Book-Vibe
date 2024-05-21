import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-80">
            <h2 className="text-6xl font-extrabold mb-16">Oppss!!!</h2>
            <Link className="bg-[#23BE0A] text-white font-bold text-4xl rounded-lg px-10 py-3" to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;