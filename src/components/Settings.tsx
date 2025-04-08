import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShieldAlt,
  faCreditCard,
  faBell,
  faPalette,
  faGlobe,
  faSave,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

type Tab = "profile" | "security" | "billing" | "notifications" | "appearance";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@kaadi.com",
    jobTitle: "Design Manager",
    company: "Kaadi Inc.",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: {
      email: true,
      sms: false,
      promotions: true,
    },
    theme: "light",
    language: "en",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          // ...prev[parent as keyof typeof formData],
          [child]: checked !== undefined ? checked : value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: checked !== undefined ? checked : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your save logic here
    console.log("Settings saved:", formData);
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Settings Header */}
      <div>
        <h2 className="text-2xl font-bold text-primary">
          {/* <FontAwesomeIcon icon={faCog} className="mr-2 text-accent" /> */}
          Settings
        </h2>
        <p className="text-gray-600">
          Manage your account preferences and security
        </p>
      </div>

      {/* Settings Container */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            {[
              { id: "profile", icon: faUser, label: "Profile" },
              { id: "security", icon: faShieldAlt, label: "Security" },
              { id: "billing", icon: faCreditCard, label: "Billing" },
              { id: "notifications", icon: faBell, label: "Notifications" },
              { id: "appearance", icon: faPalette, label: "Appearance" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center px-6 py-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-accent text-accent"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <FontAwesomeIcon icon={tab.icon} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Profile Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Password
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Two-Factor Authentication
                  </h3>
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      id="twoFactor"
                      className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                    />
                    <label
                      htmlFor="twoFactor"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Enable two-factor authentication
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Settings */}
            {activeTab === "billing" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Subscription Plan
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Pro Plan</p>
                      <p className="text-sm text-gray-500">$9.99/month</p>
                    </div>
                    <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 text-sm">
                      Change Plan
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Payment Method
                  </h3>
                  <div className="mt-2 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded shadow-sm mr-3">
                          <img src="/visa.png" alt="Visa" className="h-6" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-gray-500">
                            Expires 04/2025
                          </p>
                        </div>
                      </div>
                      <button className="text-sm text-accent hover:text-accent/80">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        htmlFor="email-notifications"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Notifications
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive updates via email
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      id="email-notifications"
                      name="notifications.email"
                      checked={formData.notifications.email}
                      onChange={handleChange}
                      className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        htmlFor="sms-notifications"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SMS Notifications
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive updates via text message
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      id="sms-notifications"
                      name="notifications.sms"
                      checked={formData.notifications.sms}
                      onChange={handleChange}
                      className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        htmlFor="promo-notifications"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Promotional Offers
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive special offers and updates
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      id="promo-notifications"
                      name="notifications.promotions"
                      checked={formData.notifications.promotions}
                      onChange={handleChange}
                      className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === "appearance" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: "light", name: "Light", icon: "☀️" },
                    { id: "dark", name: "Dark", icon: "🌙" },
                    { id: "system", name: "System", icon: "💻" },
                  ].map((theme) => (
                    <div key={theme.id}>
                      <input
                        type="radio"
                        id={`theme-${theme.id}`}
                        name="theme"
                        value={theme.id}
                        checked={formData.theme === theme.id}
                        onChange={handleChange}
                        className="hidden peer"
                      />
                      <label
                        htmlFor={`theme-${theme.id}`}
                        className="block p-4 border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-accent peer-checked:ring-2 peer-checked:ring-accent"
                      >
                        <span className="text-2xl block mb-2">
                          {theme.icon}
                        </span>
                        <span className="text-sm">{theme.name}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Language
                  </h3>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent rounded-lg"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 flex items-center"
              >
                <FontAwesomeIcon icon={faSave} className="mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
