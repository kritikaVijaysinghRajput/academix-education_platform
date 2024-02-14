import React, { useState } from "react";
import LeftSidebar from "../../Components/Teacher/LeftSidebar";
import TeacherNavbar from "../../Components/TeacherNavbar";
import AnalyticSidebarTeacher from "../../Components/Teacher/AnalyticSidebarTeacher";
import classNames from "classnames";

const CreateQuiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="create quiz">
      <div className="teachersubjectdashboard">
        <div className="navbar fixed top-0 bg-white w-full z-40">
          <TeacherNavbar />
        </div>
        <div className="main w-full flex justify-center">
          <div className="Leftsidebar w-2/12 fixed top-20 left-0 bg-white   ">
            <LeftSidebar />
          </div>
          <div className="main mx-60 mt-20 p-4 w-full ">
            <p className=" font-semibold text-xl flex justify-center  ">
              Create Quiz
            </p>

            <div className=" flex justify-center items-center ">
              <input
                type="text"
                placeholder="Enter the Quiz title"
                className="block  border w-96 border-black rounded-lg p-3 my-3 text-sm"
              />
            </div>
            <p className="font-semibold text-sm ">Marks:50 Time:25 min</p>

            <div className=" first bg-white rounded-2xl shadow p-4 relative border mt-5 ">
              <form className="flex-1 ">
                <p className="text-sm">Question 1</p>
                <input
                  type="text"
                  placeholder="Enter the Question"
                  className="block w-full border border-black rounded-lg p-3 my-3 text-sm"
                />
                <div className="max-w-md  p-2">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select an option:
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 1"
                        checked={selectedOption === "option 1"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 1</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 2"
                        checked={selectedOption === "option 2"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 2</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 3"
                        checked={selectedOption === "option 3"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 3</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 4"
                        checked={selectedOption === "option 4"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 4</span>
                    </div>
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold mb-2 ">
                      Your answer:
                    </label>
                    <input
                      type="text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className={classNames("border p-2 w-full rounded-lg", {
                        "border-red-500": !selectedOption,
                      })}
                    />
                    {!selectedOption && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select an option.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="second bg-white rounded-2xl shadow p-4 relative border mt-5 ">
              <form className="flex-1 ">
                <p className="text-sm">Question 2</p>
                <input
                  type="text"
                  placeholder="Enter the Question"
                  className="block w-full border border-black rounded-lg p-3 my-3 text-sm"
                />
                <div className="max-w-md  p-2">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select an option:
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 1"
                        checked={selectedOption === "option 1"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 1</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 2"
                        checked={selectedOption === "option 2"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 2</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 3"
                        checked={selectedOption === "option 3"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 3</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 4"
                        checked={selectedOption === "option 4"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 4</span>
                    </div>
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold mb-2 ">
                      Your answer:
                    </label>
                    <input
                      type="text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className={classNames("border p-2 w-full rounded-lg", {
                        "border-red-500": !selectedOption,
                      })}
                    />
                    {!selectedOption && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select an option.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="Third bg-white rounded-2xl shadow p-4 relative border mt-5 ">
              <form className="flex-1 ">
                <p className="text-sm">Question 3</p>
                <input
                  type="text"
                  placeholder="Enter the Question"
                  className="block w-full border border-black rounded-lg p-3 my-3 text-sm"
                />
                <div className="max-w-md  p-2">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select an option:
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 1"
                        checked={selectedOption === "option 1"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 1</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 2"
                        checked={selectedOption === "option 2"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 2</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 3"
                        checked={selectedOption === "option 3"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 3</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 4"
                        checked={selectedOption === "option 4"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 4</span>
                    </div>
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold mb-2 ">
                      Your answer:
                    </label>
                    <input
                      type="text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className={classNames("border p-2 w-full rounded-lg", {
                        "border-red-500": !selectedOption,
                      })}
                    />
                    {!selectedOption && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select an option.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="fourth bg-white rounded-2xl shadow p-4 relative border mt-5 ">
              <form className="flex-1 ">
                <p className="text-sm">Question 4</p>
                <input
                  type="text"
                  placeholder="Enter the Question"
                  className="block w-full border border-black rounded-lg p-3 my-3 text-sm"
                />
                <div className="max-w-md  p-2">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select an option:
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 1"
                        checked={selectedOption === "option 1"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 1</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 2"
                        checked={selectedOption === "option 2"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 2</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 3"
                        checked={selectedOption === "option 3"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 3</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 4"
                        checked={selectedOption === "option 4"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 4</span>
                    </div>
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold mb-2 ">
                      Your answer:
                    </label>
                    <input
                      type="text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className={classNames("border p-2 w-full rounded-lg", {
                        "border-red-500": !selectedOption,
                      })}
                    />
                    {!selectedOption && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select an option.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className=" fifth bg-white rounded-2xl shadow p-4 relative border mt-5 ">
              <form className="flex-1 ">
                <p className="text-sm">Question 5</p>
                <input
                  type="text"
                  placeholder="Enter the Question"
                  className="block w-full border border-black rounded-lg p-3 my-3 text-sm"
                />
                <div className="max-w-md  p-2">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select an option:
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 1"
                        checked={selectedOption === "option 1"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 1</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 2"
                        checked={selectedOption === "option 2"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 2</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 3"
                        checked={selectedOption === "option 3"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 3</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="option 4"
                        checked={selectedOption === "option 4"}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Option 4</span>
                    </div>
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold mb-2 ">
                      Your answer:
                    </label>
                    <input
                      type="text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className={classNames("border p-2 w-full rounded-lg", {
                        "border-red-500": !selectedOption,
                      })}
                    />
                    {!selectedOption && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select an option.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-center items-center shadow-lg">
              <button className="bg-primary text-white  w-full p-3  mt-2 flex items-center justify-center rounded-lg hover:bg-purple-400">
                Create Quiz
              </button>
            </div>
          </div>

          <div className="Right w-2/12 fixed top-20 right-0  ">
            <AnalyticSidebarTeacher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
