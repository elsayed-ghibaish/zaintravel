"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// يمكنك استبدال هذا بالطلب الفعلي لتسجيل الدخول
const fakeLogin = (username: string, password: string) => {
  return username === "sba" && password === "050100";
};

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  // تحقق من وجود مفتاح في localStorage عند تحميل الصفحة
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setLoggedIn(true);
      setUsername(storedUser);
    }
  }, []);

  const handleLogin = () => {
    const isSuccess = fakeLogin(username, password);

    if (isSuccess) {
      // حفظ اسم المستخدم في localStorage عند تسجيل الدخول
      localStorage.setItem("user", username);
      setLoggedIn(true);
    } else {
      alert("فشل تسجيل الدخول. الرجاء التحقق من اسم المستخدم وكلمة المرور.");
    }
  };

  const handleLogout = () => {
    // إزالة معلومات الجلسة عند تسجيل الخروج
    localStorage.removeItem("user");
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-15 sm:px-6 sm:py-5 lg:px-8 h-screen">
        {isLoggedIn ? (
          // عندما يتم تسجيل الدخول، يظهر المحتوى هنا
          <div className="text-center mt-20 container  py-20 p-11 rounded-md">
            <h1 className="m-10 font-semibold">مرحبًا بك، {username}!</h1>
            {/* ضع المحتوى الذي تريده هنا */}

            <button
              className="rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white
          hover:bg-red-800 hover:text-gray-200"
              onClick={handleLogout}
            >
              تسجيل الخروج
            </button>

            <Link
              href={"/dashboard"}
              className="block bg-red-700 hover:bg-red-800 text-white p-5 mt-10 rounded-md"
            >
              لوحة التحكم
            </Link>
          </div>
        ) : (
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="/logo.svg"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                تسجيل الدخول
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    اسم المستخدم
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-red-500 sm:text-sm sm:leading-6 p-2"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      كلمة المرور
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 focus:outline-red-500 p-2"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 focus:outline-red-500"
                  >
                    تسجيل الدخول
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginPage;

export const io = {
  LoginPage,
};
