import React from "react";
import Header from "../components/Header";

function AnswerProcessPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-8 px-28 mb-24">
        <h1>Trang chủ/ kết quả iChat</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-14 gap-x-6 max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <div className="flex items-center space-x-2">
              <img
                src="./image/arrow-circle-left.png"
                alt=""
                className="w-12 h-12"
              />
              <h1 className="text-xl font-semibold">Đặt 1 câu hỏi mới</h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <img src="./image/book.png" alt="" />
                <h2>Môn học</h2>
              </div>
              <div className="flex items-center gap-2">
                <img src="./image/message-question.png" alt="" />
                <h2>Loại câu hỏi</h2>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4 mt-4">
              <select className="bg-gray-50 border border-gray-300 rounded-lg w-full sm:w-auto">
                <option>Chọn môn học</option>
              </select>
              <select className="bg-gray-50 border border-gray-300 rounded-lg w-full sm:w-auto">
                <option>Chọn loại câu hỏi</option>
              </select>
            </div>
            <form className="max-w-sm mx-auto mt-4">
              <div className="flex items-center gap-1">
                <img src="./image/clipboard-text.png" alt="" />
                <label
                  for="countries_disabled"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                >
                  Mệnh đề sử dụng
                </label>
              </div>
              <select
                disabled
                id="countries_disabled"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Nhờ thầy cô chứng minh công thức sau</option>
              </select>
            </form>
            <div className="mb-4 mt-4">
              <div className="flex items-center gap-1">
                <img src="./image/pen.png" alt="" />
                <label
                  for="countries_disabled"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                >
                  Nội dung câu hỏi của bạn
                </label>
              </div>
              <textarea
                id="question"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập nội dung của bạn....."
              ></textarea>
              <div className="flex items-center mt-2">
                <img
                  src="./image/gallery-img.png"
                  alt="Upload Icon"
                  className="w-5 h-5"
                />
                <span className="ml-2 text-sm text-gray-500">
                  Tải ảnh câu hỏi lên
                </span>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="btn-blue-gradient btn-blue-gradient:hover btn-blue-gradient:focus btn-blue-gradient:focus.dark">
                Gửi câu hỏi
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-sky-600 shadow-lg rounded-lg p-6 w-full h-full max-w-lg">
            <h1 className="text-xl font-semibold text-white mb-7">Kết quả</h1>
            <h2 className="text-white">Trả lời câu hỏi của bạn</h2>
            <div className="bg-white shadow-xl rounded-lg p-6 w-auto max-w-lg ">
              <img
                src="./image/Layer_1.png"
                alt=" "
                className="max-w-[200px] mx-auto"
              />
              <hr />
              <h2 className="text-center">
                Hệ thống đang xử lí lỗi, vui lòng đợi
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerProcessPage;
