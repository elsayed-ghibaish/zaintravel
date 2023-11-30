"use client";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ar } from "date-fns/locale"; // استيراد لغة العربية
import ControlTravelEdit from "../Control/ControlTravelEdit";
import ControlTravelBagEdit from "../Control/ControlTravelBagEdit";

interface DataItem {
  firstname: string;
  lastname: string;
  selectedState: string;
  paymentType: string;
  phone: number;
  tripType: string;
  startDate: any;
}

export default function Dashboard() {
  const [data, setData] = useState<DataItem[]>([]);
  const today = format(new Date(), "EEEE, d MMMM yyyy", { locale: ar });

  return (
    <div className="mx-auto lg:w-3/5 text-center mt-20">
      <h3 className="text-3xl font-bold text-red-600">🛂 لوحة التحكم</h3>

      <div className="animate-pulse mt-14 mb-4 rounded-lg bg-sky-100 px-6 py-5 text-base text-sky-600 font-semibold">
        النهاردة: {today}
      </div>

      <div className="flex flex-col items-center border-t gap-5 p-5 border-slate-400/10 py-5 sm:flex-row sm:justify-between bg-emerald-100">
        <ControlTravelEdit />

        <ControlTravelBagEdit />
      </div>
      <div className="flex flex-col items-center border-t border-slate-400/10 py-5 lg:pr-10 md:flex-wrap md:justify-normal sm:flex-row sm:justify-between bg-teal-100 mt-5 mb-10">
        <a
          href="/dashboard/accent-booking"
          className="bg-red-700 text-white hover:bg-red-800 p-2 m-2 rounded"
        >
          🛫 تاكيد حجز الرحلات
        </a>
        <a
          href="/dashboard/accent-bag"
          className="bg-red-700 text-white hover:bg-red-800 p-2 m-2 rounded"
        >
          🛍️ تاكيد حجز الشنط
        </a>
        <a
          href="/dashboard/booking-print"
          className="bg-amber-600 text-white hover:bg-amber-700 p-2 m-2 rounded"
        >
          🛫 طباعة الرحلات
        </a>
        <a
          href="/dashboard/bag-print"
          className="bg-amber-600 text-white hover:bg-amber-700 p-2 m-2 rounded"
        >
          🛍️ طباعة الشنط
        </a>
        <a
          href="/dashboard/booking-print-mob"
          className="bg-blue-800 text-white hover:bg-blue-900 p-2 m-2 rounded"
        >
          🛍️ طباعة الرحلات موبيل
        </a>
        <a
          href="/dashboard/bag-print-mob"
          className="bg-blue-800 text-white hover:bg-blue-900 p-2 m-2 rounded"
        >
          🛍️ طباعة الشنط موبيل
        </a>
      </div>
    </div>
  );
}
