import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to PopX</h1>
            <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <button onClick={() => navigate("/register")} className="w-full bg-purple-600 text-white py-2 rounded mb-4">
                Create Account
            </button>
            <button onClick={() => navigate("/login")} className="w-full bg-purple-200 text-purple-700 py-2 rounded">
                Already Registered? Login
            </button>
        </div>
    );
}
