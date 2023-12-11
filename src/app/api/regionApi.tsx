// region.tsx

export type Place = {
  [key: string]: string[];
};

// city
export const city = [
  "فاقوس",
  "كفر صقر",
  "أبوكبير",
  "أبو حماد",
  "الحسينية",
  "الصالحية الجديدة",
];

//  area
export const area: Place = {
  فاقوس: ["بنك مصر - 05:30 ص", "كوبري الصحارة - 06:10 ص", "أبو شلبي - 06:20 ص"],
  "الصالحية الجديدة": ["الصالحية الجديدة - 06:50 ص"],
  "كفر صقر": ["كوبري السوق - 05:00 ص"],
  أبوكبير: ["مزلقان المحلج - 05:15 ص"],
  "أبو حماد": [
    "كوبرى المركز - 06:10 ص",
    "كوبري السعدية - 06:20 ص",
    "المعهد - 06:30 ص",
    "التل - 06:40 ص",
    "القصاصين - 06:50 ص",
  ],
  الحسينية: ["كوبرى الموقف - 05:45 ص", "مفارق خضير - 06:45 ص"],
};

// Typa of Trip
export const TypeOfTripSel = ["ذهاب", "عودة", "ذهاب وعودة"];

// Payment Type
export const PaymentSel = ["نقداً", "فودافون كاش"];

//  Payment by
export const vodafoneIfo: string =
  "برجاء ارسال قيمة الحجز على رقم (01012930010) مرفق معاه سكرين شوت للتحويل على واتساب لنفس الرقم";

export const regionApi = {
  area,
  city,
  PaymentSel,
  TypeOfTripSel,
  vodafoneIfo,
};
