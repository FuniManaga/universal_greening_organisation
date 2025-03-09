import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-white py-20">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: "bg-[#00703C] hover:bg-[#005c32]",
              footerActionLink: "text-[#00703C] hover:text-[#005c32]",
            },
          }}
          afterSignUpUrl="/profile/dashboard"
          redirectUrl="/profile/dashboard"
        />
      </div>
    </div>
  );
}