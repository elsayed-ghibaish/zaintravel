"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { city, area, TypeOfTripSel, PaymentSel } from "@/app/api/regionApi";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function EditBookingForm({
  id,
  FullName,
  Phone,
  BookingDay,
  TypeOfTrip,
  selectedCity,
  selectedArea,
  paymentType,
}: any) {
  const [newFullName, setNewFullName] = useState(FullName);
  const [newPhone, setNewPhone] = useState(Phone);
  const [newBookingDay, setNewBookingDay] = useState(BookingDay);
  const [newTypeOfTrip, setNewTypeOfTrip] = useState(TypeOfTrip);
  const [newselectedCity, setNewSelectedCity] = useState(selectedCity);
  const [newselectedArea, setNewSelectedArea] = useState(selectedArea);
  const [newpaymentType, setNewPaymentType] = useState(paymentType);

  const router = useRouter();

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewSelectedCity(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewSelectedArea(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newFullName,
          newPhone,
          newBookingDay,
          newTypeOfTrip,
          newselectedCity,
          newselectedArea,
          newpaymentType,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Booking");
      }

      router.refresh();
      router.push("/dashboard/accent-booking");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto container max-w-6xl mt-20 mb-10">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-5 lg:px-8"
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              الاسم بالكامل
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset
             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 
             focus:outline-red-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewFullName(e.target.value)}
                value={newFullName}
                pattern="[ء-ي\s]*" // هذا النمط يسمح بإدخال الأحرف العربية فقط
                title="الرجاء إدخال الاسم باللغة العربية"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              رقم الهاتف
            </label>
            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <svg className="pointer-events-none absolute left-3 top-2 h-full w-5 text-gray-400 fill-red-600">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 
                0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 
                1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963
                3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                pattern="[0-5]{3}[0-9]{8}"
                title="من فضلك ادخل رقم الهاتف الصحيح"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 text-right shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-red-600 focus:outline-red-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewPhone(e.target.value)}
                value={newPhone}
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              تاريخ الرحلة
            </label>
            <div className="relative mt-2">
              <input
                type="date"
                name="date"
                id="date"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-right text-gray-900 shadow-sm ring-1 
            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-red-600 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="اختر التاريخ"
                onChange={(e) => setNewBookingDay(e.target.value)}
                value={format(parseISO(newBookingDay), "yyyy-MM-dd")}
                required
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900/10 mt-10">
          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 mt-5 ">
              <label
                htmlFor="TripType"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                نوع الرحلة
              </label>
              <select
                name="TripType"
                id="TripType"
                className="block w-full rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
                value={newTypeOfTrip}
                onChange={(e) => setNewTypeOfTrip(e.target.value)}
                required
              >
                <option value=""></option>
                {TypeOfTripSel.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="Region-2"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                المنطقة
              </label>
              <select
                name="Region-2"
                id="Region-2"
                className="block w-full rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
                value={newselectedCity}
                onChange={handleCountryChange}
                required
              >
                <option value=""></option>
                {city.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {newselectedCity && newTypeOfTrip !== "عودة" && (
              <>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="Movepoint"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    نقطة التحرك
                  </label>
                  <select
                    name="Movepoint"
                    id="Movepoint"
                    className="block w-full rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
            focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
                    value={newselectedArea}
                    onChange={handleStateChange}
                    required
                  >
                    <option value=""></option>
                    {area[newselectedCity].map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="sm:col-span-2 mt-5">
          <label
            htmlFor="PaymentType"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            نوع الدفع
          </label>
          <select
            data-te-select-init
            name="PaymentType"
            id="PaymentType"
            className="block w-full rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
            value={newpaymentType}
            onChange={(e) => setNewPaymentType(e.target.value)}
            required
          >
            <option value=""></option>
            {PaymentSel.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="border-t border-gray-900/10 mt-3"></div>
        <div className="mt-5 flex flex-row justify-around items-center">
          <button
            className={`block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`}
          >
            تحديث
          </button>
          <Link
            href={`/dashboard/accent-booking`} as="/dashboard/accent-booking"
            className="block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            الغاء التعديل
          </Link>
        </div>
      </form>
    </div>
  );
}
