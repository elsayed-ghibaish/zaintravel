"use client";
import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ar } from "date-fns/locale"; // استيراد لغة العربية

export default function ControlTravelBagEdit() {
  const [BagStartDate, setBagStartDate] = useState("");
  const [BagDays, setBagDays] = useState("");
  const [filterEnabledTravelBag, setfilterEnabledTravelBag] = useState(true);
  const [BagStartTime, setBagStartTime] = useState("");
  const [BagEndTime, setBagEndTime] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Get Data Booking
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/control", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch Bag");
        }

        const { controls } = await res.json();
        setBagStartDate(controls[0].BagStartDate);
        setBagDays(controls[0].BagDays);
        setfilterEnabledTravelBag(controls[0].filterEnabledTravelBag);
        setBagStartTime(controls[0].BagStartTime);
        setBagEndTime(controls[0].BagEndTime);
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
      newBagStartDate: BagStartDate,
      newBagDays: BagDays,
      newfilterEnabledTravelBag: filterEnabledTravelBag,
      newBagStartTime: BagStartTime,
      newBagEndTime: BagEndTime,
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
        setBagStartDate(data.BagStartDate);
        setBagDays(data.BagDays);
        setfilterEnabledTravelBag(data.filterEnabledTravelBag);
        setBagStartTime(data.BagStartTime);
        setBagEndTime(data.BagEndTime);
        // تحديث الصفحة بالكامل بعد النجاح
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setBagStartDate(BagStartDate);
  };

  const toggleFilter = () => {
    setfilterEnabledTravelBag(!filterEnabledTravelBag);
  };

  return (
    <div className="mx-auto p-5 w-[90vw] text-center bg-amber-50">
      <h2 className="block text-sm font-semibold leading-6 text-red-900 m-5">
        تعديل حجز الشنط
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
              value={format(parseISO(BagStartDate), "yyyy-MM-dd")}
              onChange={(e) => setBagStartDate(e.target.value)}
            />
          </div>
          <div className="block">
            <label className="text-sm p-5 inline-block" htmlFor="date-2">
              عدد الايام المتاحة للحجز
            </label>
            <input
              type="number"
              id="date-2"
              name="date-2"
              className="text-gray-900 border shadow p-2 pl-10"
              value={BagDays}
              onChange={(e) => setBagDays(e.target.value)}
            />
          </div>

          <label
            className=" flex items-center justify-center mt-5 text-sm text-gray-900 cursor-pointer"
            htmlFor="enabled-2"
          >
            <input
              type="checkbox"
              id="enabled-2"
              name="enabled-2"
              checked={filterEnabledTravelBag}
              onChange={toggleFilter}
              className=" ml-3 justify-center border shadow form-checkbox h-5 w-5 text-red-700 focus:ring-red-600 accent-red-600"
            />
            إلغاء حجز الجمعة
          </label>

          <div className="block">
            <label className="text-sm p-5 inline-block" htmlFor="time-3">
              توقيت فتح الحجز
            </label>
            <input
              type="time"
              id="time-3"
              name="time-3"
              className="text-gray-900 border shadow p-2 pl-10"
              value={BagStartTime}
              onChange={(e) => setBagStartTime(e.target.value)}
            />
          </div>

          <div className="block">
            <label className="text-sm p-5 inline-block" htmlFor="time-4">
              توقيت غلق الحجز
            </label>
            <input
              type="time"
              id="time-4"
              name="time-4"
              className="text-gray-900 border shadow p-2 pl-10"
              value={BagEndTime}
              onChange={(e) => setBagEndTime(e.target.value)}
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
              parseISO(BagStartDate ? BagStartDate : "2024-01-01"),
              "eeee, dd/MM/yyyy",
              {
                locale: ar,
              }
            )}
          </span>
          <span className="text-gray-900 p-2 block">
            <span className="pl-5">الايام المتاحة للحجز</span>
            {BagDays}
          </span>

          <span className="text-gray-900 p-2 block">
            <span className="pl-5">توقيت فتح الحجز</span>
            {BagStartTime}
          </span>

          <span className="text-gray-900 p-2 block">
            <span className="pl-5">توقيت غلق الحجز</span>
            {BagEndTime}
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
