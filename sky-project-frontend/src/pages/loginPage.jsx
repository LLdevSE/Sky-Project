import { FaSpa } from "react-icons/fa"; // Import icon

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex bg-[url(/login-bg.jpg)] bg-cover bg-center">
            {/* Left Side branding details*/}
            <div className="w-[50%] h-full flex flex-col justify-center items-center bg-black/50 text-white px-10">
                {/* Icon Logo */}
                <FaSpa className="text-[120px] text-pink-300 mb-6 drop-shadow-lg" />

                {/* Brand Name */}
                <div className="text-5xl font-extrabold tracking-widest mb-4">Sky Cosmetics</div>

                {/* Tagline */}
                <p className="text-xl text-center italic">"Glow with Confidence"</p>
            </div>

            {/* Login form with email and password inputs */}
            <div className="w-[50%] h-full flex justify-center  items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-2xl rounded-xl p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-center mb-6 text-white">Welcome Back</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
                                placeholder="********"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center text-sm text-white/70 mt-6">
                        Don’t have an account? <a href="#" className="underline hover:text-white">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
