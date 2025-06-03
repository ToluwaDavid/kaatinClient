import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateProfile } from "../store/slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faUndo,
  faImage,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";

export default function EditProfile() {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    role: "",
    company: "",
    address: "",
    phone: "",
    website: "",
    email: "",
    color: "accent",
  });

  useEffect(() => {
    if (user) {
      setForm({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        role: user.role || "",
        company: user.company || "",
        address: user.address || "",
        phone: user.phone || "",
        website: user.website || "",
        email: user.email || "",
        color: "accent",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSocialChange = (platform: string, value: string) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     social: { ...prev.social, [platform]: value },
  //   }));
  // };

  const handleReset = () => {
    if (user) {
      setForm({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        role: user.role || "",
        company: user.company || "",
        address: user.address || "",
        phone: user.phone || "",
        website: user.website || "",
        color: "accent",
        email: user.email || "",
      });
    }
  };

  const handleSubmit = async () => {
    try {
      await dispatch(updateProfile(form)).unwrap();
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Edit Profile</h2>
        <div className="flex space-x-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faUndo} className="mr-2" />
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90"
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Fields */}
        <div className="bg-white p-6 rounded-lg shadow border space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Personal Info
            </h3>
            <InputField
              label="First Name"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              placeholder="John"
            />
            <InputField
              label="Last Name"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Smith"
            />
            <InputField
              label="Role / Title"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Product Designer"
            />
            <InputField
              label="Company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Kaad Inc"
            />
            <InputField
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Lagos, Nigeria"
            />
            <InputField
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+234 801..."
            />
            <InputField
              label="Website"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="yourwebsite.com"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Social Links
            </h3>
            {/* <SocialInput
              platform="linkedin"
              icon={faLinkedin}
              value={form.social.linkedin}
              onChange={handleSocialChange}
              placeholder="linkedin.com/in/..."
            />
            <SocialInput
              platform="twitter"
              icon={faTwitter}
              value={form.social.twitter}
              onChange={handleSocialChange}
              placeholder="twitter.com/..."
            />
            <SocialInput
              platform="instagram"
              icon={faInstagram}
              value={form.social.instagram}
              onChange={handleSocialChange}
              placeholder="instagram.com/..."
            /> */}
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-white p-6 rounded-lg shadow border space-y-6">
          <h3 className="text-lg font-semibold text-primary">Live Preview</h3>
          <div className="border-2 border-accent/20 rounded-lg p-6 text-center space-y-2">
            <h3 className="text-xl font-bold">
              {form.firstname} {form.lastname}
            </h3>
            <p className="text-gray-600">{form.role}</p>
            <p className="text-gray-500">{form.company}</p>
            <p className="text-sm text-gray-700">{form.phone}</p>
            <p className="text-sm text-gray-700">{form.email}</p>
            {form.website && (
              <a
                href={`https://${form.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline block"
              >
                {form.website}
              </a>
            )}
            <p className="text-xs text-gray-500">{form.address}</p>

            {/* <div className="flex justify-center space-x-3 mt-4">
              {form.social.linkedin && (
                <a
                  href={form.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {form.social.twitter && (
                <a
                  href={form.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              )}
              {form.social.instagram && (
                <a
                  href={form.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
      />
    </div>
  );
}

function SocialInput({
  platform,
  icon,
  value,
  onChange,
  placeholder,
}: {
  platform: string;
  icon: any;
  value: string;
  onChange: (platform: string, value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {platform.charAt(0).toUpperCase() + platform.slice(1)}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(platform, e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
      />
    </div>
  );
}
