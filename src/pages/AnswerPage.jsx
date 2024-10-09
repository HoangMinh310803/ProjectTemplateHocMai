import React from "react";
import Header from "../components/Header";

function AnswerPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-8 px-28 mb-24">
        <h1>Trang chủ/ kết quả iChat</h1>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 mb-14 gap-6 max-w-screen-lg mx-auto">
        <div class="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <div class="flex items-center space-x-2 mb-6">
            <img src="./image/arrow-circle-left.png" alt="" class="w-12 h-12" />
            <h1 class="text-xl font-semibold">Đặt 1 câu hỏi mới</h1>
          </div>

          <div class="flex justify-between mb-4">
            <div class="flex items-center space-x-2">
              <img src="./image/book.png" alt="" />
              <h2>Môn học</h2>
            </div>
            <div class="flex items-center space-x-2">
              <img src="./image/message-question.png" alt="" />
              <h2>Loại câu hỏi</h2>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-6 gap-4 mb-4">
            <select class="bg-gray-50 border border-gray-300 rounded-lg w-full sm:w-auto sm:flex-1 p-2.5">
              <option>Chọn môn học</option>
            </select>
            <select class="bg-gray-50 border border-gray-300 rounded-lg w-full sm:w-auto sm:flex-1 p-2.5">
              <option>Chọn loại câu hỏi</option>
            </select>
          </div>

          <form class="mb-4">
            <div class="flex items-center gap-2 mb-2">
              <img src="./image/clipboard-text.png" alt="" />
              <label class="text-sm font-medium text-gray-900">
                Mệnh đề sử dụng
              </label>
            </div>
            <select
              disabled
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            >
              <option selected>Nhờ thầy cô chứng minh công thức sau</option>
            </select>
          </form>

          <div class="mb-4">
            <div class="flex items-center gap-2 mb-2">
              <img src="./image/pen.png" alt="" />
              <label class="text-sm font-medium text-gray-900">
                Nội dung câu hỏi của bạn
              </label>
            </div>
            <textarea
              rows="4"
              class="block w-full p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
            ></textarea>
            <div class="flex items-center mt-2">
              <img
                src="./image/gallery-img.png"
                alt="Upload Icon"
                class="w-5 h-5"
              />
              <span class="ml-2 text-sm text-gray-500">
                Tải ảnh câu hỏi lên
              </span>
            </div>
          </div>

          <div class="flex justify-center">
            <button class="text-white font-bold py-2 px-4 rounded-full transition ease-in-out bg-blue-500 hover:bg-indigo-500 duration-300">
              Gửi câu hỏi
            </button>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h1 class="text-xl font-semibold text-white mb-6">Kết quả</h1>
          <h2 class="text-white mb-4">Trả lời câu hỏi của bạn</h2>
          <div class="bg-white rounded-lg p-4 shadow-lg mb-6 w-full h-[500px] overflow-y-auto">
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor
              si
            </p>
            <hr class="my-4" />
            <div class="bg-gray-50 p-4 rounded-lg shadow-inner">
              <p class="text-gray-600 mb-2">
                Bạn đánh giá thế nào về câu trả lời này?
              </p>
              <div class="flex items-center space-x-2 mb-4">
                <i class="text-yellow-400">★</i>
                <i class="text-yellow-400">★</i>
                <i class="text-yellow-400">★</i>
                <i class="text-gray-400">★</i>
                <i class="text-gray-400">★</i>
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Gửi đánh giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerPage;
