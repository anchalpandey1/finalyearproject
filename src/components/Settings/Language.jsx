import React, { useState } from "react";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
      {/* Sidebar */}    

      {/* Main Content */}
      <div className="w-3/4 p-10">
        <h2 className="text-xl font-bold mb-6">Select Language</h2>
        <div className="space-y-5">
          {[
            { key: "English", label: "English" },
            { key: "Hindi", label: "Hindi" },
            { key: "Telgu", label: "Telgu" },
            { key: "French", label: "French" },
          ].map((setting) => (
            <div
              key={setting.key}
              className="flex justify-between items-center border-b pb-3"
            >
              <span className="text-gray-800">{setting.label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="language" // Ensure only one can be selected at a time
                  value={setting.key}
                  checked={selectedLanguage === setting.key}
                  onChange={() => handleLanguageChange(setting.key)}
                  className="sr-only peer"
                />
                <div className="w-6 h-6 border border-gray-300 rounded-full peer-checked:bg-black peer-focus:ring-2 peer-focus:ring-black peer-focus:ring-offset-2 flex items-center justify-center">
                  {selectedLanguage === setting.key && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
