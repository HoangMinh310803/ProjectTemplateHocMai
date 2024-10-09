import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function QuestionPage() {
  return (
    <container className="container mx-auto px-4">
      <header>
        <Header />
      </header>
      <div>
        <h2 className="bg-gray-100">Trang chủ/ đặt câu hỏi mới </h2>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg md:max-w-3xl">
            <div className="flex items-center space-x-2">
              <img
                src="./image/arrow-circle-left.png"
                alt=""
                className="w-12 h-12"
              />
              <h1 className="text-xl font-semibold">Đặt 1 câu hỏi mới</h1>
            </div>

            <div className="mt-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
                <div className="flex flex-col gap-2 w-full sm:w-2/4">
                  <div className="flex items-center gap-2">
                    <img src="./image/book.png" alt="" />
                    <h2 className="text-lg font-medium">Môn học</h2>
                  </div>
                  <select className="bg-gray-50 border border-gray-300 rounded-lg w-full">
                    <option>Chọn môn học</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-2/4 mt-4 sm:mt-0">
                  <div className="flex items-center gap-2">
                    <img src="./image/message-question.png" alt="" />
                    <h2 className="text-lg font-medium">Loại câu hỏi</h2>
                  </div>
                  <select className="bg-gray-50 border border-gray-300 rounded-lg w-full">
                    <option>Chọn loại câu hỏi</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <img src="./image/clipboard-text.png" alt="" />
                <label
                  for="countries_disabled"
                  className="text-sm font-medium text-gray-900"
                >
                  Mệnh đề sử dụng
                </label>
              </div>
              <select
                disabled
                id="countries_disabled"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mt-2"
              >
                <option selected>Nhờ thầy cô chứng minh công thức sau</option>
              </select>
            </div>

            <div className="mt-4 mb-4">
              <div className="flex items-center gap-2">
                <img src="./image/pen.png" alt="" />
                <label
                  for="question"
                  className="text-sm font-medium text-gray-900"
                >
                  Nội dung câu hỏi của bạn
                </label>
              </div>
              <textarea
                id="question"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 mt-2"
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
              <Link to="/AnswerProcessPage">
                <button className="btn-blue-gradient btn-blue-gradient:hover btn-blue-gradient:focus btn-blue-gradient:focus.dark">
                  Gửi câu hỏi
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
}

export default QuestionPage;
