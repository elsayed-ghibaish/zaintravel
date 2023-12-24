import {
  FaSuitcaseRolling,
  FaTimesCircle,
  FaHeadset,
  FaClipboardList,
  FaCommentDots,
} from "react-icons/fa";
import { TbBus } from "react-icons/tb";

export default function Home() {
  return (
    <main className="m-auto">
      <div className="isolate bg-white px-6 pt-20 lg:py-20 sm:py-15 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-0 text-center lg:pt-10">
          <h1 className="mx-auto max-w-4xl font-tajawal text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            مرحبا بكم فى شركة {/* */}{" "}
            <span className="relative whitespace-nowrap text-red-600 block">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-red-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">الـزيـــن تـراڤـــل</span>
            </span>{" "}
            {/* */}للرحلات و النقل السياحي
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            أهلاً بك في عالم التوصيل الجامعي! نحن هنا لنكون جزءًا من رحلتك
            الجامعية، خدمة توصيل مخصصة لطلبة الجامعات، لتجربة تعليمية تبدأ
            بالراحة والاطمئنان.
          </p>
          <div className="mt-10 flex justify-center gap-x-6"></div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-tr from-[#ffffff15] to-[#9189fc1f] text-gray-800">
        <div className="container mx-auto p-8 lg:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* حجز رحلة */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition duration-3000">
              <TbBus className="text-blue-500 text-4xl mb-4" />
              <h2 className="text-lg font-bold mb-4">حجز رحلة</h2>
              <p className="mb-4">
                مرحبًا بك في عالم الرحلات الجامعية، نحن نقدم لكم خدمة توصيل
                فريدة مُصممة خصيصًا لطلبة الجامعات، لتجعل رحلتكم التعليمية بداية
                مريحة وسلسة، جدول رحلاتك القادمة معنا واستمتع بتجربة لا تنسى
              </p>
              <a
                href="/pages/register/travel"
                className="text-blue-500 hover:text-blue-600 font-bold"
              >
                احجز الآن
              </a>
            </div>

            {/* حجز شنطة */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition duration-300">
              <FaSuitcaseRolling className="text-green-500 text-4xl mb-4" />
              <h2 className="text-lg font-bold mb-4">حجز شنطة</h2>
              <p className="mb-4">
                إذا كنت تبحث عن تجربة سهلة وفعالة لحجز شنطتك بسرعة وأمان، فأنت
                في المكان الصحيح، يتيح لك موقعنا الالكترونى فرصة فريدة لتخصيص
                رحلتك وضمان أمان أمتعتك
              </p>
              <a
                href="/pages/register/travel-bag"
                className="text-green-500 hover:text-green-600 font-bold"
              >
                احجز الآن
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* شروط الحجز */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition duration-300">
              <FaClipboardList className="text-red-500 text-4xl mb-4" />
              <h2 className="text-lg font-bold mb-4">شروط الحجز</h2>
              <p className="mb-4">فهم شروطنا يضمن لك تجربة حجز عادلة وشفافة</p>
              <a
                href="/pages/booking-conditions"
                className="text-red-500 hover:text-red-600 font-bold"
              >
                عرض الشروط
              </a>
            </div>

            {/* إلغاء الحجز */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition duration-300">
              <FaTimesCircle className="text-yellow-500 text-4xl mb-4" />
              <h2 className="text-lg font-bold mb-4">إلغاء الحجز</h2>
              <p className="mb-4">سياسات إلغاء مرنة لضمان راحتك ورضاك</p>
              <a
                href="/pages/cancellation-terms"
                className="text-yellow-500 hover:text-yellow-600 font-bold"
              >
                إلغاء الحجز
              </a>
            </div>

            {/* الاقتراحات والشكاوى */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition duration-300">
              <FaCommentDots className="text-purple-500 text-4xl mb-4" />
              <h2 className="text-lg font-bold mb-4">الاقتراحات والشكاوى</h2>
              <p className="mb-4">
                نتلقي اقتراحاتكم ومعالجة شكاويكم هي أولويتنا
              </p>
              <a
                href="/pages/complaint"
                className="text-purple-500 hover:text-purple-600 font-bold"
              >
                شاركنا رأيك
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-6">
            {/* اتصل بنا */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition duration-300 lg:col-span-2">
              <FaHeadset className="text-blue-600 text-4xl mb-4" />
              <h2 className="text-lg font-bold mb-4">اتصل بنا</h2>
              <p className="mb-4">فريق الدعم لدينا جاهز لمساعدتك في أي وقت</p>
              <a
                href="/pages/contact-us"
                className="text-blue-600 hover:text-blue-700 font-bold"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
