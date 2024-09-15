import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-h-screen h-screen">
      <section className="remove-scorllbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src="/assets/icons/logo-full.svg"
            alt="patient"
            className="mb-12 h-10 w-fit "
            width={1000}
            height={1000} />
          <PatientForm />
          <div className="text-14-regular mt-10 flex justify-between" >
            <p className="justify-items-end text-dark-600 xl-text-left">
              © made with love
            </p>
            <Link href="/?admin=true" className=" text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image src="/assets/images/onboarding-img.png"
        alt="patient"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
