import React, { useState } from "react";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    notificationSound: true,
    pushNotifications: true,
    updatesServices: true,
    newOffers: true,
    updates: true,
  });

  const toggleSetting = (settingKey) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: !prevSettings[settingKey],
    }));
  };

  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
      {/* Sidebar */}    

      {/* Main Content */}
      <div className="w-3/4 p-10">
        <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
        <div className="space-y-5">
          {[
            { key: "notificationSound", label: "Notifications sound" },
            { key: "pushNotifications", label: "Push notifications" },
            { key: "updatesServices", label: "Updates Services" },
            { key: "newOffers", label: "New offers" },
            { key: "updates", label: "Updates" },
          ].map((setting) => (
            <div
              key={setting.key}
              className="flex justify-between items-center border-b pb-3"
            >
              <span className="text-gray-800">{setting.label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[setting.key]}
                  onChange={() => toggleSetting(setting.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5 peer-checked:after:border-white"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
