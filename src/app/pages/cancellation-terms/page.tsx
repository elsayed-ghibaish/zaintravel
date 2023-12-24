export default function CancellationTerms() {
  return (
    <div className="container mx-auto lg:w-3/5 w-[98vw] my-10  p-10 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">
        إلغاء الحجز
      </h2>
      <ol className="list-decimal ml-8 text-gray-900 font-medium">
        <span className="block">
          يتم الالغاء برسالة على واتس اب على الرقم 01012930010 قبل السادسة مساءً
        </span>
        <span className="block">
          الالغاء بعد السادسة : اى إلغاء بعد الساعة 6 مساءً فى اليوم السابق
          للرحلة يتم الاتى
        </span>
        <li> يتم تحويل مبلغ 100 بشكل فورى فودافون كاش على الرقم 01012930010</li>
        <li>فى حال تكرار الالغاء فى نفس الشهر يتم دفع مبلغ الحجز كاملآ</li>
        <li>
          فى حال عدم الدفع لن يتم قبول حجزك مرة اخرى حتى دفع المبالغ المستحقة
        </li>
        <span>* ملحوظة : إلغاء الحجز المسموح فى الظروف القهرية فقط</span>
      </ol>
    </div>
  );
}
