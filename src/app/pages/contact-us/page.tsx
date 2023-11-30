import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "الزين تراڤل - الاتصال بنا",
  description:
    "تواصل معنا عبر الارقام الموضحة او من خلال صفحات التواصل التالية",
};
export default function ContactUs() {
  return (
    <>
      <div className="mx-auto container bg-gray-900 text-gray-900 lg:w-3/5 rounded-md mt-10 p-10 h-[70vh]">
        <div className="">
          <div
            className="mx-auto mb-4 mt-5 lg:w-2/5 sm:w-auto rounded-lg bg-purple-100 shadow px-6 py-5 text-base text-success-700"
            role="alert"
          >
            <h4 className="mb-10 text-2xl font-medium text-center text-gray-800">
              الاتصال بنا
            </h4>
            <p className="mb-4 text-gray-900 float-right">أ. صابر</p>
            <p className="mb-4 text-gray-900 text-left">
              <a href="tel:+201012930010">01012930010</a>
            </p>
            <hr className="border-purple-600 opacity-30" />
            <p className="mb-0 mt-4 text-gray-900 float-right">أ. منصور</p>
            <p className="mb-0 mt-4 text-gray-900 text-left">
              <a href="tel:+201099606853">01099606853</a>
            </p>
          </div>
        </div>

        <div
          className="flex justify-center items-center space-x-4 mt-20"
          dir="ltr"
        >
          <a
            href="https://www.facebook.com/zaintravel.2020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/zaintravel2020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-500 transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://wa.me/+201012930010"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp size={30} />
          </a>
          <span className="text-white">تواصل معنا على</span>
        </div>
      </div>
    </>
  );
}
