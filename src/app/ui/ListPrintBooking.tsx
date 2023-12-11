"use client";
import { useEffect, useState } from "react";
import { addDays, format, parseISO } from "date-fns";
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
  Endlectures: string;
  BookingDay: any;
  confirmation: string;
  _id: any;
}

export default function ListPrintBooking() {
  const [data, setData] = useState<DataItem[]>([]);
  const [BookingDay, setBookingDay] = useState<string | null>(
    format(addDays(new Date(), 1), "yyyy-MM-dd")
  );
  const [selectedCities, setselectedCities] = useState<string[]>([]);
  const [selectedTypeOfTrip, setselectedTypeOfTrip] = useState<string | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30); // تحديد عدد العناصر في كل صفحة

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

  // فلترة البيانات واستبعاد التي لا تستوفي الشرط
  const filteredData = data
    .filter((item) => {
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
    })
    .filter((item) => item.confirmation === "activate");

  // حساب عدد الصفحات الإجمالي بناءً على البيانات المفلترة
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // حساب مؤشر البداية والنهاية للعناصر في الصفحة الحالية
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // إضافة متغيرات لحساب الصفحة السابقة والتالية
  const nextPage = currentPage < totalPages ? currentPage + 1 : currentPage;
  const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;

  return (
    <div className="mx-auto w-[90vw] text-center text-black print:w-full">
      <div className="flex items-center  gap-5 flex-row justify-between print:flex">
        <div className="items-center justify-center">
          <img
            src="/logo.svg"
            alt="Zain Travel"
            className="w-24 justify-center items-center inline-block"
          />
          {/* <span className="block w-40 text-red-600 text-xl font-bold">
            الـزيـــن تـراڤـــل
          </span>
          <span className=" w-44 text-center font-medium">
            للرحلات و النقل السياحي
          </span> */}
        </div>
        <div className="text-right items-start justify-start w-4/12">
          <h3 className="p-2">
            <span className="text-red-600 font-semibold">اليوم:</span>{" "}
            {BookingDay &&
              format(parseISO(BookingDay), "eeee, d MMMM yyyy", {
                locale: ar,
              })}
          </h3>

          <h3 className="p-2">
            <span className="text-red-600 font-semibold">المنطقة:</span>{" "}
            {selectedCities.join(" - ")}
          </h3>
        </div>
      </div>

      <div className="print:hidden">
        <div className="flex m-2 items-center text-center justify-center">
          <a
            href="/dashboard"
            className="bg-cyan-600 text-white hover:bg-cyan-700 p-2 m-2 rounded print:hidden"
          >
            رجوع للخلف
          </a>
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

      <div className="block mt-10 mb-10 print:mt-5">
        <div className="m-3 print:hidden">
          <label htmlFor="connter-3" className="ml-5">
            عدد الصفوف
          </label>
          <input
            type="number"
            id="connter-3"
            name="connter-3"
            min={1}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset
          ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 
          focus:outline-red-600 sm:text-sm sm:leading-6"
          />
        </div>

        <table className="table-fixed w-full">
          <thead className="bg-red-700 text-white">
            <tr className="p-5">
              <th className="p-3 w-10 border">م</th>
              <th className="w-3/12 border">الاسم</th>
              <th className="border">نوع الرحلة</th>
              <th className="border border-slate-50">المواعيد</th>
              <th className="w-3/12 border">نقطة التحرك</th>
              <th className="border">رقم التليفون</th>
              <th className="w-28 border">نوع الدفع</th>
              <th className="w-28 border print:hidden">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="border-slate-100">
            {currentItems.map((item, index) => {
              if (item.confirmation === "activate") {
                const currentColorClass =
                  index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-300";

                return (
                  <tr
                    className={`border-b border-gray-100 ${currentColorClass}`}
                    key={index}
                  >
                    <td className="border border-l border-gray-100 p-2">
                      {index + 1}
                    </td>
                    <td className="border border-l border-gray-100 pr-2 text-right">{`${item.FullName}`}</td>
                    <td className="bolder border-l border-gray-100">{`${
                      selectedTypeOfTrip ? selectedTypeOfTrip : item.TypeOfTrip
                    }`}</td>
                    <td className="bolder border-l border-gray-100">
                        {item.Endlectures}
                      </td>
                    <td className="bolder border-l border-gray-100 text-sm">
                      {`${
                        item.selectedArea
                          ? item.selectedArea
                          : item.selectedCity
                      }`}
                    </td>
                    <td className="bolder border-l border-gray-100">
                      {item.Phone}
                    </td>
                    <td className="bolder border-l border-gray-100">
                      {item.paymentType}
                    </td>
                    <td className="border border-l border-gray-100 print:hidden">
                      <Link href={`/dashboard/editBooking/${item._id}`}>
                        <ol className="bg-slate-100 p-2  rounded hover:bg-slate-300 inline-flex">
                          <HiPencilAlt title="تعديل" />
                        </ol>
                      </Link>

                      <button
                        onClick={() => removeBooking(item._id)}
                        className="bg-slate-100 text-white p-2 m-1 rounded hover:bg-slate-300"
                      >
                        <FcCancel title="حذف" />
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

        <div className="flex justify-center mt-5 print:hidden">
          <button
            key={prevPage}
            onClick={() => setCurrentPage(prevPage)}
            className={`mx-2 p-2 rounded ${
              currentPage === prevPage
                ? "bg-gray-300 text-gray-700"
                : "bg-red-600 text-white"
            }`}
          >
            السابق
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-2 p-2 px-5 rounded ${
                currentPage === i + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            key={nextPage}
            onClick={() => setCurrentPage(nextPage)}
            className={`mx-2 p-2 rounded ${
              currentPage === nextPage
                ? "bg-gray-300 text-gray-700"
                : "bg-red-600 text-white"
            }`}
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}
