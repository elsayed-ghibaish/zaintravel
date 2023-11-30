"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [BookingStartDate, setBookingStartDate] = useState("");
  const [BookingDays, setBookingDays] = useState("");
  const [filterEnabledTravel, setfilterEnabledTravel] = useState(true);
  const [BookingStartTime, setBookingStartTime] = useState("");
  const [BookingEndTime, setBookingEndTime] = useState("");
  const [BagStartDate, setBagStartDate] = useState("");
  const [BagDays, setBagDays] = useState("");
  const [filterEnabledTravelBag, setfilterEnabledTravelBag] = useState(true);
  const [BagStartTime, setBagStartTime] = useState("");
  const [BagEndTime, setBagEndTime] = useState("");

  const toggleFilter = () => {
    setfilterEnabledTravel(!filterEnabledTravel);
    setfilterEnabledTravelBag(!filterEnabledTravelBag);
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/control", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          BookingStartDate,
          BookingDays,
          filterEnabledTravel,
          BookingStartTime,
          BookingEndTime,
          BagStartDate,
          BagDays,
          filterEnabledTravelBag,
          BagStartTime,
          BagEndTime,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setBookingStartDate(e.target.value)}
        value={BookingStartDate}
        className="border border-slate-500 px-8 py-2"
        type="date"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setBookingDays(e.target.value)}
        value={BookingDays}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Topic Description"
      />

      <label>
        <input
          type="checkbox"
          checked={filterEnabledTravel}
          onChange={toggleFilter}
        />
        Enable Filter
      </label>

      <input
        onChange={(e) => setBookingStartTime(e.target.value)}
        value={BookingStartTime}
        className="border border-slate-500 px-8 py-2"
        type="time"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setBookingEndTime(e.target.value)}
        value={BookingEndTime}
        className="border border-slate-500 px-8 py-2"
        type="time"
        placeholder="Topic Description"
      />

      <input
        onChange={(e) => setBagStartDate(e.target.value)}
        value={BagStartDate}
        className="border border-slate-500 px-8 py-2"
        type="date"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setBagDays(e.target.value)}
        value={BagDays}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Topic Description"
      />

      <label>
        <input
          type="checkbox"
          checked={filterEnabledTravelBag}
          onChange={toggleFilter}
        />
        Enable Filter
      </label>
      <input
        onChange={(e) => setBagStartTime(e.target.value)}
        value={BagStartTime}
        className="border border-slate-500 px-8 py-2"
        type="time"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setBagEndTime(e.target.value)}
        value={BagEndTime}
        className="border border-slate-500 px-8 py-2"
        type="time"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add TIME
      </button>
    </form>
  );
}
