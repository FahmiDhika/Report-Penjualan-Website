"use client";

import { useFormStatus } from "react-dom";

export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
      <button
      type="submit"
      disabled={pending}
      className="w-full text-black bg-gray-50 font-bold rounded-lg px-5 py-2.5 text-center uppercase hover:bg-gray-500 mb-2"
    >
      {pending ? "Authenticating" : "Sign In"}
    </button>
  )
}

export const RegisterButton = () => {
    const { pending } = useFormStatus();
    return (
        <button
        type="submit"
        disabled={pending}
        className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800"
      >
        {pending ? "Registering..." : "Register"}
      </button>
    )
}
