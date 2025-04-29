// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RegisterPage() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         phoneNumber: '',
//         email: '',
//         password: '',
//         companyName: '',
//         agency: 'Yes',
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem('user', JSON.stringify(formData));
//         navigate("/account");
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//             <h1 className="text-2xl font-bold mb-6">Create your PopX account</h1>

//             <input className="input" type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
//             <input className="input" type="text" name="phoneNumber" placeholder="Phone Number" required onChange={handleChange} />
//             <input className="input" type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
//             <input className="input" type="password" name="password" placeholder="Password" required onChange={handleChange} />
//             <input className="input" type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />

//             <div className="mt-4 mb-6">
//                 <label className="block text-gray-700 mb-2">Are you an Agency?</label>
//                 <div className="flex space-x-4">
//                     <label>
//                         <input type="radio" name="agency" value="Yes" checked={formData.agency === 'Yes'} onChange={handleChange} /> Yes
//                     </label>
//                     <label>
//                         <input type="radio" name="agency" value="No" checked={formData.agency === 'No'} onChange={handleChange} /> No
//                     </label>
//                 </div>
//             </div>

//             <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">
//                 Create Account
//             </button>
//         </form>
//     );
// }





// import { useState } from "react";

// export default function CreateAccount() {
//     const [formData, setFormData] = useState({
//         fullName: "",
//         phone: "",
//         email: "",
//         password: "",
//         company: "",
//         isAgency: "Yes",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted:", formData);
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg mt-10">
//             <h2 className="text-2xl font-bold mb-6">Create your PopX account</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">

//                 {/* Full Name */}
//                 <div>
//                     <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
//                         Full Name<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="fullName"
//                         id="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>

//                 {/* Phone Number */}
//                 <div>
//                     <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
//                         Phone number<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="phone"
//                         id="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>

//                 {/* Email Address */}
//                 <div>
//                     <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
//                         Email address<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>

//                 {/* Password */}
//                 <div>
//                     <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
//                         Password<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>

//                 {/* Company Name */}
//                 <div>
//                     <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
//                         Company name
//                     </label>
//                     <input
//                         type="text"
//                         name="company"
//                         id="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>

//                 {/* Are you an Agency? */}
//                 <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Are you an Agency?<span className="text-red-500">*</span>
//                     </label>
//                     <div className="flex gap-4 items-center">
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="radio"
//                                 name="isAgency"
//                                 value="Yes"
//                                 checked={formData.isAgency === "Yes"}
//                                 onChange={handleChange}
//                                 className="accent-purple-600"
//                             />
//                             Yes
//                         </label>
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="radio"
//                                 name="isAgency"
//                                 value="No"
//                                 checked={formData.isAgency === "No"}
//                                 onChange={handleChange}
//                                 className="accent-purple-600"
//                             />
//                             No
//                         </label>
//                     </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md mt-4"
//                 >
//                     Create Account
//                 </button>
//             </form>
//         </div>
//     );
// }





// import { useState } from "react";

// export default function CreateAccount() {
//     const [formData, setFormData] = useState({
//         fullName: "",
//         phone: "",
//         email: "",
//         password: "",
//         company: "",
//         isAgency: "Yes",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg mt-10">
//             <h2 className="text-2xl font-bold mb-6">Create your PopX account</h2>
//             <form className="space-y-6">

//                 {/* Full Name */}
//                 <div className="relative">
//                     <input
//                         type="text"
//                         name="fullName"
//                         id="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1 focus:outline-none focus:border-purple-600"
//                         placeholder=" "
//                         required
//                     />
//                     <label
//                         htmlFor="fullName"
//                         className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
//                     >
//                         Full Name*
//                     </label>
//                 </div>

//                 {/* Phone */}
//                 <div className="relative">
//                     <input
//                         type="text"
//                         name="phone"
//                         id="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1 focus:outline-none focus:border-purple-600"
//                         placeholder=" "
//                         required
//                     />
//                     <label
//                         htmlFor="phone"
//                         className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
//                     >
//                         Phone number*
//                     </label>
//                 </div>

//                 {/* Email */}
//                 <div className="relative">
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1 focus:outline-none focus:border-purple-600"
//                         placeholder=" "
//                         required
//                     />
//                     <label
//                         htmlFor="email"
//                         className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
//                     >
//                         Email address*
//                     </label>
//                 </div>

//                 {/* Password */}
//                 <div className="relative">
//                     <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1 focus:outline-none focus:border-purple-600"
//                         placeholder=" "
//                         required
//                     />
//                     <label
//                         htmlFor="password"
//                         className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
//                     >
//                         Password*
//                     </label>
//                 </div>

//                 {/* Company */}
//                 <div className="relative">
//                     <input
//                         type="text"
//                         name="company"
//                         id="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1 focus:outline-none focus:border-purple-600"
//                         placeholder=" "
//                     />
//                     <label
//                         htmlFor="company"
//                         className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
//                     >
//                         Company name
//                     </label>
//                 </div>

//                 {/* Agency */}
//                 <div className="mt-4">
//                     <label className="text-sm font-semibold mb-2 block">
//                         Are you an Agency?*
//                     </label>
//                     <div className="flex gap-4 items-center">
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="radio"
//                                 name="isAgency"
//                                 value="Yes"
//                                 checked={formData.isAgency === "Yes"}
//                                 onChange={handleChange}
//                                 className="accent-purple-600"
//                             />
//                             Yes
//                         </label>
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="radio"
//                                 name="isAgency"
//                                 value="No"
//                                 checked={formData.isAgency === "No"}
//                                 onChange={handleChange}
//                                 className="accent-purple-600"
//                             />
//                             No
//                         </label>
//                     </div>
//                 </div>

//                 {/* Submit */}
//                 <button
//                     type="submit"
//                     className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md mt-6"
//                 >
//                     Create Account
//                 </button>
//             </form>
//         </div>
//     );
// }






import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreateAccount() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        agency: 'Yes',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        navigate("/account");
    };
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6">Create your PopX account</h2>
            <form form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-600"
                    />

                </div>


                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone number<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-600"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-600"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-600"
                    />
                </div>

                {/* Company */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-600"
                    />
                </div>

                {/* Are you an Agency */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Are you an Agency?<span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6 items-center">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="isAgency"
                                value="Yes"
                                checked={formData.isAgency === "Yes"}
                                onChange={handleChange}
                                className="accent-purple-600"
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="isAgency"
                                value="No"
                                checked={formData.isAgency === "No"}
                                onChange={handleChange}
                                className="accent-purple-600"
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md mt-6"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}
