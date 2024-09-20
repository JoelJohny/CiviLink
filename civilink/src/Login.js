import React from "react";

const Login = () => {
    return (
        <div>
            <header className="bg-blue-800 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">CiviLink</h1>
            </header>
            <div className="flex min-h-screen bg-blue-600">
                {/*Left Section*/}
                <div className="hidden md:flex flex-col justify-center items-start p-10 text-white w-1/2">
                    <h1 className="text-4xl font-bold">Welcome to Civilink</h1>
                    <p className="mt-5 text-lg">
                        Civilink is an eligibility determination system developed by the Government of India to streamline and improve the efficiency of various welfare programs.
                    </p>
                </div>
                {/*Right Section*/}
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <div className="w-full max-w-md px-8 py-6 shadow-lg rounded-lg bg-white">
                        <h2 className="text-2xl font-semibold text-center mb-6">Sign in to CiviLink</h2>
                        <p className="text-center text-sm mb-4">
                            Don't have an account? <a href="#" className="text-green-500 hover:underline">Sign up</a>
                        </p>
                        <form>
                            <div className="mb-4">
                                <input type="text" id="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" placeholder="Username" />
                            </div>
                            <div className="mb-4">
                                <input type="password" id="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" placeholder="Password" />
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-sm">Remember me</label>
                            </div>
                            <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600">
                                Login Now
                            </button>
                            <p className="text-center text-sm mt-4">
                                <a href="#" className="text-green-500 hover:underline">Forgot password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;