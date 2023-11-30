"use client";
import { useEffect, useState } from "react";
import { addDays, isBefore } from "date-fns";
import TravelFormBag from "../ui/TravelFormBag";

export default function ControlTravel() {
  const [BagStartDate, setBagStartDate] = useState("");
  const [BagDays, setBagDays]:any = useState("");
  const [BagStartTime, setBagStartTime] = useState("");
  const [BagEndTime, setBagEndTime] = useState("");

   // Get Data Booking
   useEffect(() => {
     const fetchData = async () => {
       try {
         const res = await fetch('/api/control', {
           cache: "no-store",
         });
 
         if (!res.ok) {
           throw new Error("Failed to fetch Bag");
         }
 
         const { controls } = await res.json();
         setBagStartDate(controls[0].BagStartDate);
         setBagDays(controls[0].BagDays);
         setBagStartTime(controls[0].BagStartTime);
         setBagEndTime(controls[0].BagEndTime);
       } catch (error) {
         console.log("Error loading bookings: ", error);
       }
     };
 
     fetchData();
   }, []);

  const isBookingAllowed = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const [startHour, startMinutes] = BagStartTime.split(":");
    const [endHour, endMinutes] = BagEndTime.split(":");

    if (
      currentHour < parseInt(startHour) ||
      (currentHour === parseInt(startHour) &&
        currentMinutes < parseInt(startMinutes))
    ) {
      return false; // حجز مغلق قبل الساعة المحددة
    }

    if (
      currentHour >= parseInt(endHour) &&
      currentMinutes >= parseInt(endMinutes)
    ) {
      return false; // حجز مغلق بعد الساعة المحددة
    }

    return true;
  };

  const currentDate = addDays(new Date(), 2);
  const maxDate = addDays(currentDate, 2);

  // تاريخ البداية المدخل
  const inputStartDate = new Date(BagStartDate); // ضع هنا التاريخ المراد

  // عدد الأيام المتاحة للحجز
  const avDay = BagDays; // ضع هنا عدد الأيام المراد

  // تاريخ النهاية بناءً على تاريخ البداية وعدد الأيام المتاحة
  const inputEndDate = addDays(inputStartDate, avDay);

  // تاريخ البداية والنهاية
  const startDate = inputStartDate;
  const endDate = inputEndDate;

  // قفل الحجز عند انتهاء عدد الأيام
  const isBookingOpen = isBefore(new Date(), endDate);

  return (
    <>
      {isBookingOpen && isBookingAllowed() ? (
        <TravelFormBag />
      ) : (
        <div>
          <div
            className="mx-auto mb-4 mt-5 lg:w-2/5 sm:w-full rounded-lg bg-purple-100 shadow px-6 py-5 text-base text-success-700"
            role="alert"
          >
            <h4 className="mb-2 text-2xl font-medium text-center text-gray-800">
              التسجيل مغلق الآن
            </h4>
            <p className="mb-4 text-gray-900">
              التسجيل متاح يوميا من السابعة صباحا حتى السادسة مساء{" "}
            </p>
            <hr className="border-purple-600 opacity-30" />
            <p className="mb-0 mt-4 text-gray-900">
              برجاء الالتزام بتعليمات{" "}
              <a
                href="/pages/booking-conditions"
                className="font-medium text-gray-900"
              >
                التسجيل
              </a>
            </p>
          </div>
          <img
            src="/banner.png"
            className="mx-auto lg:w-2/5 sm:w-full"
            alt=""
          />
        </div>
      )}
    </>
  );
}
