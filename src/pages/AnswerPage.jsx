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
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-14 gap-x-6 max-w-screen-lg mx-auto">
        <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <div class="flex items-center space-x-2">
            <img src="./image/arrow-circle-left.png" alt="" class="w-12 h-12" />
            <h1 class="text-xl font-semibold">Đặt 1 câu hỏi mới</h1>
          </div>

          <div className="flex items-center gap-36">
            <div className="flex items-center gap-2">
              <img src="./image/book.png" alt="" />
              <h2>Môn học</h2>
            </div>
            <div className="flex items-center gap-2">
              <img src="./image/message-question.png" alt="" />
              <h2>Loại câu hỏi</h2>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6 gap-4 mt-4">
            <select class="bg-gray-50 border border-gray-300 rounded-lg w-full sm:w-auto sm:flex-1">
              <option>Chọn môn học</option>
            </select>
            <select class="bg-gray-50 border border-gray-300 rounded-lg w-full sm:w-auto sm:flex-1">
              <option>Chọn loại câu hỏi</option>
            </select>
          </div>

          <form class="max-w-sm mx-auto mt-4">
            <div class="flex items-center gap-1">
              <img src="./image/clipboard-text.png" alt="" />
              <label class="block mb-2 text-sm font-medium text-gray-900 mt-2">
                Mệnh đề sử dụng
              </label>
            </div>
            <select
              disabled
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            >
              <option selected>Nhờ thầy cô chứng minh công thức sau</option>
            </select>
          </form>

          <div class="mb-4 mt-4">
            <div class="flex items-center gap-1">
              <img src="./image/pen.png" alt="" />
              <label class="block mb-2 text-sm font-medium text-gray-900 mt-2">
                Nội dung câu hỏi của bạn
              </label>
            </div>
            <textarea
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
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

          <div class="flex justify-center mt-4">
            <button class=" text-white font-bold py-2 px-4 rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              Gửi câu hỏi
            </button>
          </div>
        </div>
        <div>
          <div className="bg-sky-600 shadow-lg rounded-lg p-6 w-full max-w-lg">
            <h1 className="text-xl font-semibold text-white mb-7">Kết quả</h1>
            <h2 className="text-white">Trả lời câu hỏi của bạn</h2>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
              <p className="text-gray-950">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerPage;
