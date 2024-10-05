import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type SignUpProps = SliceComponentProps<Content.SignUpSlice>;

const SignUp = ({ slice }: SignUpProps): JSX.Element => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: "url('/path/to/your/image.jpg')", // Update this path
    }}>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex max-w-sm mx-auto px-8 py-10 bg-transparent backdrop-blur-md border border-gray-200 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">SIGN UP</h2>
        <form className="space-y-10">
          <div>
            <label htmlFor="name" className=" text-lg font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="flex p-4 text-lg text-gray-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-400 text-center"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="flex p-4 text-lg text-gray-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-400 text-center"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="flex p-4 text-lg text-gray-200 bg-transparent bg-opacity-25 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-400 text-center"
              placeholder="Enter your password"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className=" flex py-4 px-4 text-lg text-center justify-center bg-black font-semibold text-blue-700 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition duration-200 ease-in-out"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-blue-300 hover:text-blue-400 focus:outline-none focus:underline transition duration-200 ease-in-out"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </Bounded>
    </div>
  );
};

export default SignUp;