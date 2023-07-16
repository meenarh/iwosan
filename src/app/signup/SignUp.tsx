import React from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";
import NavBar from "../../components/NavBar";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="max-w-full justify-center">
      <div className="flex flex-row">
        <Image
          src="/images/signup.png"
          alt=""
          width={700}
          height={850}
          className="hidden md:block"
        />
        <div className="flex flex-col p-10">
          <Logo />

          <h3 className="pt-10 text-black font-bold text-4xl">
            Create account
          </h3>
          <p className="font-normal text-lg text-gray pt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-blue font-medium">
              Login
            </Link>
          </p>

          <div className="py-10 flex flex-row gap-5">
            <button className="md:p-4 p-2 border-2 border-gray rounded-lg text-black text-sm">
              Continue with Google
            </button>
            <button className="md:p-4 p-2 border-2 border-gray rounded-lg text-black text-sm">
              Continue with Facebook
            </button>
          </div>

          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-black font-normal text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g John Doe"
                className="p-4 border-2 border-gray md:w-[600px] w-[350px] rounded-lg placeholder:text-sm placeholder:text-gray placeholder:font-normal outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-normal text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="p-4 border-2 border-gray md:w-[600px] w-[350px] rounded-lg placeholder:text-sm placeholder:text-gray placeholder:font-normal outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-normal text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="p-4 border-2 border-gray md:w-[600px] w-[350px] rounded-lg placeholder:text-sm placeholder:text-gray placeholder:font-normal outline-none"
              />
            </div>

            <div className="flex items-start pt-10">
              <button className="bg-blue text-white font-medium text-lg py-4 px-8 rounded-lg">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
