"use client";
import { useEffect, useState } from "react";
import { addDays, format, parseISO } from "date-fns";
import { ar } from "date-fns/locale"; // استيراد لغة العربية
import { city, TypeOfTripSel } from "../api/regionApi";
import { HiPencilAlt } from "react-icons/hi";
import { FcCancel } from "react-icons/fc";

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
export default function ListPrintBookingMoB() {
  const [data, setData] = useState<DataItem[]>([]);
  const [BookingDay, setBookingDay] = useState<string | null>(
    format(addDays(new Date(), 1), "yyyy-MM-dd")
  );
  const [selectedCity, setselectedCity] = useState<string | null>(null);
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

  // valed
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDay(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedCity(event.target.value);
  };

  const handleTypeOfTripSelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setselectedTypeOfTrip(event.target.value);
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
    if (selectedCity && item.selectedCity !== selectedCity) {
      return false;
    }

    // تحديد نوع الرحلة
    if (selectedTypeOfTrip) {
      if (selectedTypeOfTrip === "ذهاب وعودة") {
        // إذا كان نوع الرحلة هو "ذهاب وعودة"، فقط عرض الحجوزات التي تحمل هذا النوع
        return item.TypeOfTrip === "ذهاب وعودة";
      } else {
        // إذا كان نوع الرحلة هو "ذهاب" أو "عودة"، فقط تجاهل الحجوزات التي تحمل نوع "ذهاب وعودة"
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
    <div className="mx-auto w-[90vw] text-center text-black">
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
              format(parseISO(BookingDay), "eeee, d MMMM yyyy", { locale: ar })}
          </h3>

          <h3>المنطقة: {selectedCity}</h3>
        </div>

        <div className="mt-5">
          <input
            type="date"
            className="m-5 p-2 border shadow focus:outline-red-800 print:hidden"
            value={BookingDay || ""}
            onChange={handleDateChange}
          />

          <select
            className="w-auto rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2 print:hidden"
            value={selectedCity || ""}
            onChange={handleRegionChange}
          >
            <option value="">اختر المدينة</option>
            {city.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
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

      <div className="block mt-10">
        <table className="table-fixed w-full">
          <thead className="bg-red-800 text-white">
            <tr className="p-5">
              <th className="p-3 w-10 border">م</th>
              <th className="p-3 border">الاسم</th>
              <th className="border">المنطقة</th>
            </tr>
          </thead>
          <tbody className="bg-slate-200">
            {filteredData.map((item, index) => {
              if (item.confirmation === "activate") {
                return (
                  <tr className="border-slate-300 border-b" key={index}>
                    <td className="border border-slate-50">{counter++}</td>
                    <td className="p-2 pr-2 text-right border-slate-50">{`${item.FullName}`}</td>
                    <td className="border-slate-50">{item.selectedCity}</td>
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
