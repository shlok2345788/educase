// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const user = JSON.parse(localStorage.getItem('user'));
//         if (user && user.email === email && user.password === password) {
//             navigate("/account");
//         } else {
//             alert("Invalid credentials");
//         }
//     };

//     return (
//         <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//             <h1 className="text-2xl font-bold mb-6">Sign in to your PopX account</h1>
//             <input className="input" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//             <button type="submit" className="w-full bg-gray-400 text-white py-2 rounded mt-4">
//                 Login
//             </button>
//         </form>
//     );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            navigate("/account");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        // <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-md shadow-md w-full max-w-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-1">Signin to your PopX account</h2>
            <p className="text-gray-500 mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            {/* Email Input */}
            <div className="relative mb-4">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 text-base text-black placeholder-transparent focus:border-purple-600 focus:outline-none"
                    placeholder="Enter email address"
                />
                <label
                    htmlFor="email"
                    className="absolute left-3 top-2 text-sm text-purple-700"
                >
                    Email Address
                </label>
            </div>

            {/* Password Input */}
            <div className="relative mb-6">
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 text-base text-black placeholder-transparent focus:border-purple-600 focus:outline-none"
                    placeholder="Enter password"
                />
                <label
                    htmlFor="password"
                    className="absolute left-3 top-2 text-sm text-purple-700"
                >
                    Password
                </label>
            </div>

            {/* Login Button */}
            <button
                type="submit"
                className="w-full bg-gray-300 text-white py-2 rounded-md text-base font-semibold cursor-pointer"

            >
                Login
            </button>
        </form>
    );
}
