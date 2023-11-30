import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zain Travel - شروط الحجز",
  description:
    "الشروط الخاصة بنظام الحجز على موقع الزين للرحلات و النقل السياحى",
};
export default function BookingConditions() {
  return (
    <>
      <div className="container mx-auto lg:w-3/5 sm:w-full my-8 p-10 bg-gray-100 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          شروط حجز الرحلة:
        </h2>
        <ol className="list-decimal ml-8 text-gray-900">
          <li>
            مواعيد الحجز :الحجز متاح يوميآ من الساعة ال 7 صباحآ وحتى السادسة
            مساء والحجز يتم قبل تاريخ الرحلة ب24 ساعة
          </li>
          <li>
            معلومات الهوية : يجب تقديم معلومات هوية صحيحة للمسافرين بما فى ذلك
            الاسم بالكامل وارقام التليفونات{" "}
          </li>
          <li>
            حجز المرافقين : يتم الحجز للمرافقين بنفس الطريقة مع التنويه برساله
            على الواتس اب بأسم المرافق
          </li>
          <li>
            تأكيد الحجز : يتم إرسال كشوفات الاسماء يوميآ على الجروب الرئيسى بعد
            اغلاق باب الحجز ب ساعة على الاكثر
          </li>
          <li>
            فى حال إغلاق الحجز : يتم التواصل على واتس اب على الرقم 01012930010
            وإنتظار الرد فى حال توافر أماكن إضافية{" "}
          </li>
          <li>
            ملحوظة :لن يتم قبول حجز اى شخص غير موجود فى جروب الواتس أب الرئيسى
            او اى بينات خاطئة او اى حجز بطريقة اخرى غير الموقع الرسمي
          </li>
          <li>برجاء الألتزام ب مواعيد الرحلات المرفقة مع كل نقطة تحرك</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
          شروط حجز الشنط:
        </h2>
        <ol className="list-decimal ml-8 text-gray-900">
          <li>الشنط المسموح بها بشكل مجانى مع المسافر : </li>
          <span>
            عدد 1 شنطة سفر متوسطة + شنطة كتف صغيرة لا يتعدى وزن الاتنين 20 كيلو.
          </span>
          <li>الشنط الإضافية :</li>
          <span>
            يتم دفع 50 عن كل قطعة زيادة لايتعدى وزنها 15 كيلو وغير مسموح بأكثر
            من 2 قطعة إضافية
          </span>
          <li>
            غير مسموح بأحجام الشنط الكبيرة واكياس البلاستيك و الاجولة (الشوال)
            يجب وضع كافة الاشياء فى شنط سفر مناسبة تليق بكم ك طلبة جامعة مرموقة{" "}
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
          إرسال الشنط للطلبة
        </h2>
        <ol className="list-decimal ml-8 text-gray-900">
          <li>يتم حجز الشنط من خلال الموقع الرسمى فقط</li>
          <li>لن يتم قبول اى شنط بدون حجز على الموقع</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
          أسعار الشنط
        </h2>
        <ol className="list-decimal ml-8 text-gray-900">
          <li>شنطة أكل صغيرة 50 ج</li>
          <li>شنطة سفر متوسطة 100 ج</li>
          <li>شنطة سفر كبيرة 150 ج</li>
          <li>الحد الادنى لارسال اى شئ 50 ج</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
          مواعيد إرسال الشنط
        </h2>
        <ol className="list-decimal ml-8 text-gray-900">
          <li>الحسينية : السبت و الاحد</li>
          <li>أبو حماد : السبت و الاحد</li>
          <li>كفر صقر : السبت و الاحد و الاثنين </li>
          <li>فاقوس : الثلاثاء و الأربعاء و الخميس </li>
          <span>* لن يتم قبول اى شنط فى مواعيد غير المذكورة </span>
        </ol>

        <div className="mt-8 text-gray-900">
          <span>
            تنويه : يتم دفع مبلغ حجز الشنط فودافون كاش فقط على الرقم التالى
            01012930010 وفى حال اى خلاف فى الشروط يتم دفع باقى المبلغ أثناء
            تسليم الشنط
          </span>

          <span className="block ">
            ملحوظة : الشركة غير مسئولة عن إرسال الشنط مع طلبة أخرين
            او أى طريقة أخرى
          </span>
        </div>
      </div>
    </>
  );
}