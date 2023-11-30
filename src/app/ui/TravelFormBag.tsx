"use client";
import { useEffect, useState } from "react";
import { city, area, PaymentSel, vodafoneIfo } from "@/app/api/regionApi";
import { format, addDays, eachDayOfInterval, isBefore, getDay } from "date-fns";
import { ar } from "date-fns/locale";

export default function TravelFormBag() {
  const [FullName, setFullName] = useState("");
  const [Phone, setPhone] = useState("");
  const [BookingDay, setBookingDay] = useState("");
  const [bagType, setbagType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [success, setSuccess] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [BagStartDate, setBagStartDate]: any = useState(false);
  const [BagDays, setBagDays]: any = useState("");
  const [filterEnabledTravelBag, setfilterEnabledTravelBag] = useState("");

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
      } catch (error) {
        console.log("Error loading bookings: ", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
    setSubmitButtonDisabled(!!agreeTerms); // تعطيل زر الإرسال عند عدم الموافقة
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
    setSelectedArea(""); // Reset the selected state when the country changes
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(event.target.value);
  };

  const currentDate = addDays(new Date(), 1);
  const maxDate = addDays(currentDate, BagDays); // تحديد أعلى تاريخ مسموح به

  // إنشاء قائمة بالأيام المتاحة
  const inputStartDate = new Date(BagStartDate); // قم بتعديل هذا التاريخ حسب رغبتك
  const inputEndDate = addDays(inputStartDate, BagDays); // قم بتعديل هذا التاريخ حسب رغبتك

  // تاريخ البداية
  const startDate = inputStartDate;

  // تاريخ النهاية
  const endDate = inputEndDate;

  const filterEnabled = filterEnabledTravelBag;

  // إنشاء قائمة بالأيام المتاحة
  const availableDays = eachDayOfInterval({ start: startDate, end: endDate })
    .filter(
      (day) =>
        isBefore(new Date(), day) && (filterEnabled ? getDay(day) !== 5 : true)
    ) // حذف الأيام التي انتهت والجمعة
    .map((day) => ({
      value: format(day, "yyyy-MM-dd"),
      label: format(day, "EEEE, d MMMM yyyy", { locale: ar }),
    }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreeTerms) {
      // إذا لم يكن المستخدم قد وافق على الشروط، قم بمنع عملية الإرسال
      console.error("يجب الموافقة على الشروط والأحكام قبل الإرسال");
      return;
    }

    const dataToSend = {
      FullName,
      Phone,
      BookingDay,
      bagType,
      selectedCity,
      selectedArea,
      paymentType,
      datesend: new Date(),
      confirmation: "NotActivate",
    };

    try {
      await sendTelegramMessage(dataToSend);
      const response = await fetch("/api/bag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      setFullName("");
      setPhone("");
      setBookingDay("");
      setbagType("");
      setSelectedCity("");
      setSelectedArea("");
      setPaymentType("");
      setSuccess(true); // تعيين الحالة إلى نجاح
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  const sendTelegramMessage = async (data: any) => {
    try {
      const token = "6783301682:AAFOfp15Yklus6GUyrOBEnJbrI0JYIsNEaQ";
      const chatId = "828863215";

      const message = `طلب حجز شنطة جديد
          الاسم: ${FullName}
          الهاتف: ${Phone}
          تاريخ الرحلة: ${BookingDay}
          نوع الشنطة: ${bagType}
          المنطقة: ${selectedCity}
          ${data.selectedArea ? `نقطة التحرك: ${data.selectedArea}` : ""}
          الدفع : ${paymentType}
          `;

      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const params = new URLSearchParams({
        chat_id: chatId,
        text: message,
      });

      await fetch(url, {
        method: "POST",
        body: params,
      });
    } catch (error) {
      console.error("Failed to send message to Telegram:", error);
      throw error; // يمكنك رمي الخطأ مرة أخرى للتأكد من تماسكه للأقسام اللاحقة من الكود
    }
  };

  return (
    <>
      <div className="mx-auto max-w-2xl text-center mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl font-tajawal">
          {" "}
          🛍️ حجز شنطة{" "}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 font-tajawal">
          {" "}
          من فضلك قم بملء البيانات المطلوبة وسيتم التواصل معك في أقرب وقت{" "}
        </p>
      </div>

      <form
        id="form"
        action=""
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit}
      >
        <div className="block ">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {" "}
              الاسم الكامل{" "}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 focus:outline-red-600"
                onChange={(e) => setFullName(e.target.value)}
                value={FullName}
                pattern="[ء-ي\s]*" // هذا النمط يسمح بإدخال الأحرف العربية فقط
                title="الرجاء إدخال الاسم باللغة العربية"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2 mt-5">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {" "}
              رقم الهاتف{" "}
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <svg className="pointer-events-none absolute left-3 top-2 h-full w-5 text-gray-400">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 
                002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 
                1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 
                3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    className="fill-red-500"
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
                className="block w-full text-right rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 focus:outline-red-600"
                onChange={(e) => setPhone(e.target.value)}
                value={Phone}
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2 mt-5">
            <label
              htmlFor="date"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              تاريخ الرحلة
            </label>
            <div className="relative mb-3">
              <select
                name="date"
                id="date"
                value={BookingDay}
                onChange={(e) => setBookingDay(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-right text-gray-900 shadow-sm ring-1 fill-red-600
               ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
               focus:ring-red-600 focus:outline-red-600 sm:text-sm sm:leading-6"
                required
              >
                <option value="" disabled hidden>
                  اختر التاريخ
                </option>
                {availableDays.map((day) => (
                  <option key={day.value} value={day.value}>
                    {day.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="border-t border-gray-900/10 mt-10">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3 mt-5 ">
                <label
                  htmlFor="TripType"
                  className="text-sm font-medium leading-6 text-gray-900"
                >
                  نوع الشنطة
                </label>
                <select
                  name="TripType"
                  id="TripType"
                  value={bagType}
                  className="block w-full rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
                  onChange={(e) => setbagType(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    {" "}
                    اختر الشنطة
                  </option>
                  <option value="شنطة أكل صغيرة">شنطة أكل صغيرة</option>
                  <option value="شنطة سفر متوسطة">شنطة سفر متوسطة</option>
                  <option value="شنطة سفر كبيرة">شنطة سفر كبيرة</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                المنطقة
              </label>
              <select
                name="city"
                id="city"
                className="block w-full rounded-md border-0 py-2 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-2"
                value={selectedCity}
                onChange={handleCountryChange}
                required
              >
                <option value="" disabled hidden></option>
                {city.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {selectedCity && selectedCity !== "عودة" && (
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
                  value={selectedArea}
                  onChange={handleStateChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  {area[selectedCity].map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
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
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            required
          >
            <option value="" disabled hidden></option>
            {PaymentSel.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {paymentType === "فودافون كاش" && (
          <div className="text-sm text-gray-900 mt-2 bg-green-300 p-5">
            {vodafoneIfo}
          </div>
        )}

        <div className="mt-5">
          <label htmlFor="agree-terms" className="flex items-center">
            <input
              type="checkbox"
              id="agree-terms"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-red-700 focus:ring-red-600 accent-red-600"
            />
            <span className="mr-5 text-sm text-gray-900 cursor-pointer">
              الموافقة على{" "}
              <span className="text-red-700 font-bold underline">
                <a href="/pages/booking-conditions" target="_blank">
                  شروط الحجز
                </a>
              </span>
            </span>
          </label>
        </div>

        <div className="border-t border-gray-900/10 mt-3"></div>
        <div className="mt-5">
          <button
            type="submit"
            name="submit"
            id="submit"
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm 
             focus-visible:outline-offset-2 focus-visible:outline-red-600 mb-10
            ${
              submitButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-800"
            }`}
            disabled={submitButtonDisabled}
          >
            {" "}
            ارسال طلب الحجز{" "}
          </button>
        </div>

        {success && (
          <div
            className="mb-3 mt-5 inline-flex w-full items-center rounded-lg bg-green-100 px-6 py-5 text-base text-green-700"
            role="alert"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            تم إرسال البيانات بنجاح سيتم التواصل معك قريبا !
          </div>
        )}
      </form>
    </>
  );
}
