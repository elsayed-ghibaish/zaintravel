"use client";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ar } from "date-fns/locale"; // استيراد لغة العربية
import { city, TypeOfTripSel } from "../api/regionApi";
import { HiPencilAlt } from "react-icons/hi";
import { FcCancel } from "react-icons/fc";
import Link from "next/link";

interface DataItem {
  FullName: string;
  selectedCity: string;
  selectedArea: string;
  paymentType: string;
  Phone: number;
  TypeOfTrip: string;
  BookingDay: any;
  confirmation: string;
  _id: any;
}

export default function ListPrintBooking() {
  const [data, setData] = useState<DataItem[]>([]);
  const [BookingDay, setBookingDay] = useState<string | null>(null);
  const [selectedCities, setselectedCities] = useState<string[]>([]);
  const [selectedTypeOfTrip, setselectedTypeOfTrip] = useState<string | null>(
    null
  );

  let counter = 1; // تهيئة متغير الـ counter لكل بيان

  // Get Data Booking
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/booking`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const { bookings } = await res.json();
        setData(bookings);
      } catch (error) {
        console.log("Error loading bookings: ", error);
      }
    };

    fetchData();
  }, []);

  // Deleate Booking item
  const removeBooking = async (id: any) => {
    const confirmed = confirm("Are you sure");

    if (confirmed) {
      try {
        const res = await fetch(`/api/booking?id=${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error(
            `Failed to delete booking. Server response: ${res.statusText}`
          );
        }

        console.log("Booking deleted successfully");

        // تحديث حالة البيانات بعد الحذف
        const updatedData = data.filter((item) => item._id !== id);
        setData(updatedData);

        // يمكنك أيضًا استخدام router.replace لتوجيه المستخدم إلى صفحة محددة بعد الحذف
        // router.replace("/your-redirect-path");
      } catch (error) {
        console.error(error);
      }
    }
  };

  // valed
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDay(event.target.value);
  };

  const handleTypeOfTripSelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setselectedTypeOfTrip(event.target.value);
  };

  const handleCityChange = (city: string) => {
    const updatedCities = selectedCities.includes(city)
      ? selectedCities.filter((c) => c !== city)
      : [...selectedCities, city];

    setselectedCities(updatedCities);
  };

  const filteredData = data.filter((item) => {
    // تحقق من التاريخ
    if (
      BookingDay &&
      format(parseISO(item.BookingDay), "yyyy-MM-dd") !== BookingDay
    ) {
      return false;
    }
    // تحقق من المنطقة
    if (
      selectedCities.length > 0 &&
      !selectedCities.includes(item.selectedCity)
    ) {
      return false;
    }

    if (selectedTypeOfTrip) {
      if (selectedTypeOfTrip === "ذهاب وعودة") {
        // إذا كان نوع الرحلة هو "ذهاب وعودة"، فعرض الحجوزات التي تحمل "ذهاب" أو "عودة"
        return true;
      } else {
        // إذا كان نوع الرحلة هو "ذهاب" أو "عودة"، فقط عرض الحجوزات التي تحمل هذا النوع
        return (
          item.TypeOfTrip === selectedTypeOfTrip ||
          item.TypeOfTrip === "ذهاب وعودة"
        );
      }
    }

    // العنصر يفي بجميع شروط الفلتر
    return true;
  });

  return (
    <div className="mx-auto w-[95vw] text-center text-black">
      <div className="mt-4">
        <div className="flex m-2 items-center text-center justify-center">
          <a
            href="/dashboard"
            className="bg-cyan-600 text-white hover:bg-cyan-700 p-2 m-2 rounded print:hidden"
          >
            رجوع للخلف
          </a>
        </div>

        <div className="grid grid-cols-2 mt-5">
          <h3>
            اليوم:{" "}
            {BookingDay &&
              format(parseISO(BookingDay), "eeee, d MMMM yyyy", {
                locale: ar,
              })}
          </h3>

          <h3>المنطقة: {selectedCities.join(" - ")}</h3>
        </div>

        <div className="mt-5">
          <label className="text-gray-900 print:hidden" htmlFor="date-1">
            حسب التاريخ
          </label>
          <input
            type="date"
            id="date-1"
            name="date-1"
            className="m-5 p-2 border shadow focus:outline-red-800 print:hidden"
            value={BookingDay || ""}
            onChange={handleDateChange}
          />
          <div className="mt-5 lg:flex justify-center items-center print:hidden">
            <span className="text-2 font-medium text-red-600">حسب المدينة</span>
            {city.map((cityName, index) => (
              <label
                htmlFor={`checkboxes-${index}`}
                key={index}
                className="flex m-2 items-center justify-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={`checkboxes-${index}`}
                  name={`checkboxes-${index}`}
                  className="ml-3 border shadow form-checkbox h-5 w-5 text-red-700 focus:ring-red-600 accent-red-600"
                  value={cityName}
                  checked={selectedCities.includes(cityName)}
                  onChange={() => handleCityChange(cityName)}
                />
                {cityName}
              </label>
            ))}
          </div>
          <label
            htmlFor="checkboxesTwo"
            className="text-sm font-medium leading-6 text-gray-900 m-5 print:hidden"
          >
            حسب الرحلة
          </label>
          <select
            id="checkboxesTwo"
            name="checkboxesTwo"
            className="w-auto rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2 print:hidden"
            value={selectedTypeOfTrip || ""}
            onChange={handleTypeOfTripSelChange}
          >
            <option value="">اختر</option>
            {TypeOfTripSel.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="block mt-10 mb-10">
        <table className="table-fixed w-full">
          <thead className="bg-red-800 text-white">
            <tr className="p-5">
              <th className="p-3 w-10 border">م</th>
              <th className="w-3/12 border">الاسم</th>
              <th className="border">نوع الرحلة</th>
              <th className="border w-3/12">نقطة التحرك</th>
              <th className="border">رقم التليفون</th>
              <th className="border w-28">نوع الدفع</th>
              <th className="border w-28 print:hidden">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-slate-200">
            {filteredData.map((item, index) => {
              if (item.confirmation === "activate") {
                return (
                  <tr className="border-slate-300 border-b" key={index}>
                    <td className="border border-slate-50">{counter++}</td>
                    <td className="pr-2 text-right">{`${item.FullName}`}</td>
                    <td className="bolder border-slate-50">{`${
                      selectedTypeOfTrip ? selectedTypeOfTrip : item.TypeOfTrip
                    }`}</td>
                    <td className="bolder border-slate-50 text-sm">
                      {`${
                        item.selectedArea
                          ? item.selectedArea
                          : item.selectedCity
                      }`}
                    </td>
                    <td className="bolder border-slate-50">{item.Phone}</td>
                    <td className="bolder border-slate-50">
                      {item.paymentType}
                    </td>
                    <td className="print:hidden">
                      <Link href={`/dashboard/editBooking/${item._id}`}>
                        <ol className="bg-slate-100 p-2  rounded hover:bg-slate-300 inline-flex">
                          <HiPencilAlt />
                        </ol>
                      </Link>

                      <button
                        onClick={() => removeBooking(item._id)}
                        className="bg-slate-100 text-white p-2 m-1 rounded hover:bg-slate-300"
                      >
                        <FcCancel />
                      </button>
                    </td>
                  </tr>
                );
              } else {
                // إذا لم يتوافق مع الشرط، يمكنك إرجاع شيء آخر أو تركه فارغًا

                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
