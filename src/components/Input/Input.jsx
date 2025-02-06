import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
  const [inputText, setInput] = useState("");
  const [inputUser, setUser] = useState("");
  const navigate = useNavigate();
 
  const handleSave = (e) => {
    e.preventDefault(); 
    localStorage.setItem("savedText", inputText); 
    localStorage.setItem("UserName", inputUser); 
    navigate("/output"); 
  };

  return (
    <div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm outline-gray-300 focus:outline-2 focus:outline-indigo-600 focus:-outline-offset-2"
                    placeholder="e.g. John Doe"
                    value={inputUser}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                  Essay
                </label>
                <div className="mt-2">
                  <textarea
                    name="about"
                    id="about"
                    rows="25"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={inputText}
                    onChange={(e) => setInput(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm/6 font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
