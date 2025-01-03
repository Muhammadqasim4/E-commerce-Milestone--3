import Link from 'next/link';
export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-y-[20px] mt-[30px] mb-[30px] pt-[70px]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
       
    <h1 className="text-[24px] text-blue-950 font-[600] text-center mb-6">
         Create Your Account
        </h1>

        <form className="space-y-4">
      
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Email address"
            />
          </div>

         
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Password"
            />
          </div>

       
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keep-me-signed-in"
                className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                defaultChecked
              />
              <label htmlFor="keep-me-signed-in" className="text-sm text-gray-700">
                Keep me signed in
              </label>
            </div>
            <Link href="#" className="text-sm text-[#BCBCBC]">Forgotten your password?</Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-950"
          >
            Sign up
          </button>
        </form>

        
      </div>
    </div>
  );
}