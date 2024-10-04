import React from "react";
import Header from "../components/Header";

function LoginPage() {
  return (
    <div className=" background-login">
      <div>
        <Header />
      </div>
      <div className="h-full  ">
        <div className="flex h-full">
          <div class="w-1/2">
            <div className="flex flex-col items-center mt-8">
              {/* Chào hỏi và nội dung */}
              <div className="text-center">
                <p className="text-lg font-bold mb-2">Xin chào!</p>
                <p className="text-gray-600 mb-4">
                  Câu hỏi nào bạn muốn hỏi hôm nay?
                </p>
              </div>
            </div>
          </div>

          <div class="w-1/2">
            {/* Phần số câu hỏi */}
            <div className="mt-6 flex justify-center w-full ">
              <div className="bg-white text-blue-600 font-bold p-4 rounded-lg shadow-md">
                <span>Số câu hỏi có thể hỏi</span>{" "}
                <span className="ml-2">03</span>
              </div>
            </div>
          </div>
        </div>
        {/* Phần chat logo */}
      </div>
      <div className="gradient text-white p-10 rounded-lg shadow-lg w-3/5 mt-8 ml-auto mr-auto">
        <div className="flex justify-center items-center mb-4">
          <img
            src="./image/IconIchat.png"
            alt="iChat logo"
            className="h-16 mr-2"
          />
          <span className="text-xl font-semibold">iChat logo</span>
        </div>
        <p className="text-xl font-semibold text-center mb-2">
          Hỏi AI về bài tập hoặc kiến thức bạn đang quan tâm
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold">
            Đặt câu hỏi ngay
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full max-w-screen-lg mt-8 mx-auto">
        <div className="flex ">
          <h1 className="text-lg justify-between font-semibold mb-4 align-items-center w-1/2">
            {" "}
            Danh sách đã hỏi
          </h1>

          <form class="max-w-md mx-auto mb-4 py-auto align-items-center w-1/2 ">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tất cả các môn học"
                required
              />
            </div>
          </form>
        </div>

        <table className="min w-full border">
          <thead>
            <tr class="bg-gray-50 text-left text-gray-600 font-medium">
              <th class="px-4 py-2">Môn học</th>
              <th class="px-4 py-2">Thời gian hỏi</th>
              <th class="px-4 py-2">Trạng thái</th>
              <th class="px-4 py-2 ">Xem chi tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2 flex items-center">
                <img src="./image/hoa.png" alt="" class="w-auto" />
                <div>
                  <p class="font-semibold">Hóa học</p>
                  <p class="text-gray-500 text-sm">Lý thuyết</p>
                </div>
              </td>
              <td class="px-4 py-2">19/07/2024 15:04</td>
              <td class="px-4 py-2 text-green-600">Hoàn thành</td>
              <td class="px-4 py-2 ">
                <button class="gradient text-white py-1 px-4 rounded">
                  Xem chi tiết
                </button>
              </td>
            </tr>

            <tr class="border-t">
              <td class="px-4 py-2 flex items-center">
                <img src="./image/hoahoc.png" alt="" class="w-auto" />
                <div>
                  <p class="font-semibold">Hóa học</p>
                  <p class="text-gray-500 text-sm">Lý thuyết</p>
                </div>
              </td>
              <td class="px-4 py-2">19/07/2024 15:04</td>
              <td class="px-4 py-2 text-gray-600">Đang xử lý</td>
              <td class="px-4 py-2 ">
                <button class="gradient text-white py-1 px-4 rounded">
                  Xem chi tiết
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-4 flex justify-center">
          <button class="bg-gray-200 py-2 px-3 mx-1 rounded">1</button>
          <button class="bg-gray-200 py-2 px-3 mx-1 rounded">2</button>
          <button class="bg-gray-200 py-2 px-3 mx-1 rounded">3</button>
          <button class="bg-gray-200 py-2 px-3 mx-1 rounded">4</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
