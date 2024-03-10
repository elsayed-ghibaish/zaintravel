"use client";
import { useEffect, useState } from "react";
import { addDays, format, parseISO } from "date-fns";
import { ar } from "date-fns/locale"; // استيراد لغة العربية
import { city } from "@/app/api/regionApi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { FcCheckmark, FcCancel } from "react-icons/fc";

interface DataItem {
  FullName: string;
  selectedCity: string;
  selectedArea: string;
  timing: string;
  paymentType: string;
  Phone: number;
  TypeOfTrip: string;
  Endlectures: string;
  BookingDay: any;
  confirmation: string;
  _id: any;
}

const region = city;

export default function ConfirmBookingForm() {
  const router = useRouter();
  const [data, setData] = useState<DataItem[]>([]);
  const [BookingDay, setBookingDay] = useState<string | null>(
    format(addDays(new Date(), 1), "yyyy-MM-dd")
  );
  const [selectedCity, setselectedCity] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  let counter = 1; // تهيئة متغير الـ counter لكل بيان

  // Get Data Booking
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/booking", {
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

  // Updated Data Booking
  const UpdatedBooking = async (id: any) => {
    try {
      const res = await fetch(`/api/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newconfirmation: "activate" }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
          `Failed to update topic. Server response: ${errorText}`
        );
      }

      console.log("Booking confirmation updated successfully");

      const updatedData = data.map((item) => {
        if (item._id === id) {
          return { ...item, confirmation: "activate" };
        }
        return item;
      });

      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedCity(event.target.value);
  };

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
      if (selectedCity && item.selectedCity !== selectedCity) {
        return false;
      }

      // العنصر يفي بجميع شروط الفلتر
      return true;
    })

    // فلترة البيانات واستبعاد التي لا تستوفي الشرط
    .filter((item) => item.confirmation === "NotActivate");

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
    <>
      <div className="mx-auto max-w-6xl text-center mt-20 mb-10">
        <h3 className="text-gray-900 font-bold">طلبات الحجز الجديدة</h3>

        <div className="mt-5">
          <h3 className="text-gray-900">فرز البيانات</h3>
          <label className="text-gray-900" htmlFor="date">
            حسب التاريخ
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="m-5 border-l shadow rounded-md text-gray-900 py-2 p-2 focus:outline-red-600"
            value={BookingDay || ""}
            onChange={handleDateChange}
          />

          <label
            htmlFor="checkboxes"
            className="text-sm font-medium leading-6 text-gray-900 m-5"
          >
            حسب المدينة
          </label>
          <select
            id="checkboxes"
            name="checkboxes"
            className="w-auto rounded-md border-0 p-2 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
              focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
            value={selectedCity || ""}
            onChange={handleRegionChange}
          >
            <option value="">اختر المدينة</option>
            {region.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex m-2 items-center text-center justify-center">
          <a
            href="/dashboard"
            className="bg-cyan-600 text-white hover:bg-cyan-700 p-2 m-2 rounded"
          >
            رجوع للخلف
          </a>
        </div>

        <div className="block mt-10">
          <div className="mb-5">
            <label
              htmlFor="itemsPerPage"
              className="text-sm font-medium leading-6 text-gray-900 m-5"
            >
              عدد العناصر في كل صفحة
            </label>
            <input
              type="number"
              id="itemsPerPage"
              name="itemsPerPage"
              className="w-auto rounded-md border-0 p-2 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
          focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            ></input>
          </div>

          <table className="table-fixed w-full">
            <thead className="bg-red-800 text-white">
              <tr className="p-5">
                <th className="p-3 w-10 border">م</th>
                <th className="w-3/12 border">الاسم</th>
                <th className="border">نوع الرحلة</th>
                <th className="border border-slate-50">نهاية المحاضرات</th>
                <th className="border">التاريخ</th>
                <th className="border w-2/12">نقطة التحرك - التوقيت</th>
                <th className="border w-28">نوع الدفع</th>
                <th className="border">تاكيد / تعديل / حذف</th>
              </tr>
            </thead>
            <tbody className="bg-slate-200">
              {currentItems.map((item, index) => {
                if (item.confirmation === "NotActivate") {
                  const currentColorClass =
                    index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-300";
                  // تحقق من الشرط قبل عرض البيانات
                  return (
                    <tr
                      className={`border-b border-gray-100 hover:bg-zinc-500 hover:text-white ${currentColorClass}`}
                      key={index}
                    >
                      <td className="border border-slate-50">{counter++}</td>
                      <td className="pr-2 border border-slate-50 text-right">{`${item.FullName}`}</td>
                      <td className="bolder border-slate-50 border-l">
                        {item.TypeOfTrip}
                      </td>
                      <td className="bolder border-slate-50">
                        {item.Endlectures}
                      </td>
                      <td className="border border-slate-50">
                        {item.BookingDay &&
                          format(parseISO(item.BookingDay), "eeee, d / MM", {
                            locale: ar,
                          })}
                      </td>
                      <td className="border border-slate-50 text-sm">
                        {`${
                          item.selectedArea 
                            ? item.selectedArea +  ` - ${item.timing}`
                            : item.selectedCity
                        }`}
                      </td>
                      <td className="border border-slate-50">
                        {item.paymentType}
                      </td>
                      <td>
                        <button
                          onClick={() => UpdatedBooking(item._id)}
                          className="bg-slate-100 text-white p-2 m-1 rounded hover:bg-slate-300"
                        >
                          <FcCheckmark />
                        </button>

                        <Link href={`/dashboard/editBooking/${item._id}`}>
                          <ol className="bg-slate-100 p-2  rounded hover:bg-slate-300 text-gray-800 inline-flex">
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

          <div className="flex justify-center mt-5">
            <button
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
    </>
  );
}
