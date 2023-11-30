"use client";
import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ar } from "date-fns/locale"; // استيراد لغة العربية

export default function ControlTravelEdit() {
  const [BookingStartDate, setBookingStartDate] = useState("");
  const [BookingDays, setBookingDays] = useState("");
  const [filterEnabledTravel, setfilterEnabledTravel] = useState(true);
  const [BookingStartTime, setBookingStartTime] = useState("");
  const [BookingEndTime, setBookingEndTime] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Get Data Booking

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/control", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const { controls } = await res.json();
        setBookingStartDate(controls[0].BookingStartDate);
        setBookingDays(controls[0].BookingDays);
        setfilterEnabledTravel(controls[0].filterEnabledTravel);
        setBookingStartTime(controls[0].BookingStartTime);
        setBookingEndTime(controls[0].BookingEndTime);
      } catch (error) {
        console.log("Error loading bookings: ", error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const tin = {
      newBookingStartDate: BookingStartDate,
      newBookingDays: BookingDays,
      newfilterEnabledTravel: filterEnabledTravel,
      newBookingStartTime: BookingStartTime,
      newBookingEndTime: BookingEndTime,
    };

    fetch("/api/control/656811745e1f5ef172135fee", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tin),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update data");
        }
        return response.json();
      })
      .then((data) => {
        setIsEditing(false);
        setBookingStartDate(data.BookingStartDate);
        setBookingDays(data.BookingDays);
        setfilterEnabledTravel(data.filterEnabledTravel);
        setBookingStartTime(data.BookingStartTime);
        setBookingEndTime(data.BookingEndTime);
        // تحديث الصفحة بالكامل بعد النجاح
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setBookingStartDate(BookingStartDate);
  };

  const toggleFilter = () => {
    setfilterEnabledTravel(!filterEnabledTravel);
  };

  return (
    <div className="mx-auto p-5 w-[90vw] text-center bg-amber-50">
      <h2 className="block text-sm font-semibold leading-6 text-red-900 m-5">
        تعديل حجز الرحلات
      </h2>
      {isEditing ? (
        <div>
          <div className="block">
            <label className="text-sm p-5 inline-block" htmlFor="startdayop">
              تاريخ بداية فتح الحجز
            </label>
            <input
              type="date"
              id="startdayop"
              name="startdayop"
              className="text-gray-900 border shadow p-2 pl-10"
              value={format(parseISO(BookingStartDate), "yyyy-MM-dd")}
              onChange={(e) => setBookingStartDate(e.target.value)}
            />
          </div>
          <div className="block">
            <label className="text-sm p-5 inline-block" htmlFor="date-1">
              عدد الايام المتاحة للحجز
            </label>
            <input
              type="number"
              id="date-1"
              name="date-1"
              className="text-gray-900 border shadow p-2 pl-10"
              value={BookingDays}
              onChange={(e) => setBookingDays(e.target.value)}
            />
          </div>

          <label
            className=" flex items-center justify-center mt-5 text-sm text-gray-900 cursor-pointer"
            htmlFor="enabled-1"
          >
            <input
              type="checkbox"
              id="enabled-1"
              name="enabled-1"
              checked={filterEnabledTravel}
              onChange={toggleFilter}
              className=" ml-3 justify-center border shadow form-checkbox h-5 w-5 text-red-700 focus:ring-red-600 accent-red-600"
            />
            إلغاء حجز الجمعة
          </label>

          <div className="block">
            <label className="text-sm p-5 inline-block" htmlFor="time-1">
              توقيت فتح الحجز
            </label>
            <input
              type="time"
              id="time-1"
              name="time-1"
              className="text-gray-900 border shadow p-2 pl-10"
              value={BookingStartTime}
              onChange={(e) => setBookingStartTime(e.target.value)}
            />
          </div>

          <div className="block">
            <label className="text-sm p-5 inline-block" htmlFor="time-2">
              توقيت غلق الحجز
            </label>
            <input
              type="time"
              id="time-2"
              name="time-2"
              className="text-gray-900 border shadow p-2 pl-10"
              value={BookingEndTime}
              onChange={(e) => setBookingEndTime(e.target.value)}
            />
          </div>

          <button
            className="flax justify-center m-5 rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            onClick={handleSaveClick}
          >
            حفظ
          </button>
          <button
            className="flax justify-center m-5 rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            onClick={handleCancelClick}
          >
            إلغاء
          </button>
        </div>
      ) : (
        <div>
          <span className="text-gray-900 p-2">
            {format(
              parseISO(BookingStartDate ? BookingStartDate : "2024-01-01"),
              "eeee, dd/MM/yyyy",
              {
                locale: ar,
              }
            )}
          </span>
          <span className="text-gray-900 p-2 block">
            <span className="pl-5">الايام المتاحة للحجز</span>
            {BookingDays}
          </span>

          <span className="text-gray-900 p-2 block">
            <span className="pl-5">توقيت فتح الحجز</span>
            {BookingStartTime}
          </span>

          <span className="text-gray-900 p-2 block">
            <span className="pl-5">توقيت غلق الحجز</span>
            {BookingEndTime}
          </span>
          <button
            className="flax justify-center m-5 rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            onClick={handleEditClick}
          >
            تعديل
          </button>
        </div>
      )}
    </div>
  );
}
