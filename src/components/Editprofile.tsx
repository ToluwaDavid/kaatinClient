import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faUndo,
  faPalette,
  faImage,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function CardEditor() {
  // Card data state
  const [card, setCard] = useState({
    name: "John Doe",
    title: "Design Manager",
    company: "Kaadi Inc.",
    email: "john@kaadi.com",
    phone: "+1 (555) 123-4567",
    website: "kaadi.com",
    social: {
      linkedin: "",
      twitter: "",
      instagram: "",
    },
    color: "accent", // Matches your theme
    profileImage: null as string | null,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  // Handle social media changes
  const handleSocialChange = (platform: string, value: string) => {
    setCard((prev) => ({
      ...prev,
      social: { ...prev.social, [platform]: value },
    }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCard((prev) => ({
          ...prev,
          profileImage: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Reset form
  const handleReset = () => {
    setCard({
      name: "",
      title: "",
      company: "",
      email: "",
      phone: "",
      website: "",
      social: { linkedin: "", twitter: "", instagram: "" },
      color: "accent",
      profileImage: null,
    });
  };

  return (
    <div className="space-y-6">
      {/* Editor Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">
          {/* <FontAwesomeIcon icon={faEdit} className="mr-2 text-accent" /> */}
          Card Editor
        </h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <FontAwesomeIcon icon={faUndo} className="mr-2" />
            Reset
          </button>
          <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90">
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* ===== EDITOR FORM ===== */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-6">
          {/* Personal Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {/* <FontAwesomeIcon icon={faUser} className="mr-2 text-accent" /> */}
              Personal Information
            </h3>
            <div className="space-y-4">
              <InputField
                label="Full Name"
                name="name"
                value={card.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              <InputField
                label="Job Title"
                name="title"
                value={card.title}
                onChange={handleChange}
                placeholder="Design Manager"
              />
              <InputField
                label="Company"
                name="company"
                value={card.company}
                onChange={handleChange}
                placeholder="Kaadi Inc."
              />
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              <FontAwesomeIcon icon={faLink} className="mr-2 text-accent" />
              Contact Information
            </h3>
            <div className="space-y-4">
              <InputField
                label="Email"
                name="email"
                type="email"
                value={card.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              <InputField
                label="Phone"
                name="phone"
                value={card.phone}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
              />
              <InputField
                label="Website"
                name="website"
                value={card.website}
                onChange={handleChange}
                placeholder="yourwebsite.com"
              />
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {/* <FontAwesomeIcon icon={faShareAlt} className="mr-2 text-accent" /> */}
              Social Links
            </h3>
            <div className="space-y-4">
              <SocialInput
                platform="linkedin"
                icon={faLinkedin}
                value={card.social.linkedin}
                onChange={handleSocialChange}
                placeholder="linkedin.com/in/username"
              />
              <SocialInput
                platform="twitter"
                icon={faTwitter}
                value={card.social.twitter}
                onChange={handleSocialChange}
                placeholder="twitter.com/username"
              />
              <SocialInput
                platform="instagram"
                icon={faInstagram}
                value={card.social.instagram}
                onChange={handleSocialChange}
                placeholder="instagram.com/username"
              />
            </div>
          </div>
        </div>

        {/* ===== LIVE PREVIEW ===== */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-primary">
            {/* <FontAwesomeIcon icon={faEye} className="mr-2 text-accent" /> */}
            Live Preview
          </h3>

          <div
            className={`border-2 border-${card.color}/20 rounded-lg p-8 flex flex-col items-center`}
          >
            {/* Profile Image */}
            <div className="relative mb-4">
              {card.profileImage ? (
                <img
                  src={card.profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-accent/20"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-4xl text-accent font-bold">
                    {card.name.charAt(0)}
                    {card.name.split(" ")[1]?.charAt(0) || ""}
                  </span>
                </div>
              )}
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <FontAwesomeIcon icon={faImage} className="text-accent" />
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="profileImageUpload"
              />
            </div>

            {/* Profile Info */}
            <h3 className="text-xl font-bold text-center">
              {card.name || "Your Name"}
            </h3>
            <p className="text-gray-600 text-center">
              {card.title || "Job Title"}
            </p>
            <p className="text-gray-500 text-sm text-center">
              {card.company || "Company"}
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-center">
              {card.email && (
                <div className="flex items-center justify-center text-gray-700">
                  {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-accent" /> */}
                  {card.email}
                </div>
              )}
              {card.phone && (
                <div className="flex items-center justify-center text-gray-700">
                  {/* <FontAwesomeIcon icon={faPhone} className="mr-2 text-accent" /> */}
                  {card.phone}
                </div>
              )}
              {card.website && (
                <div className="flex items-center justify-center text-accent hover:underline">
                  <FontAwesomeIcon icon={faLink} className="mr-2" />
                  {card.website.replace(/^https?:\/\//, "")}
                </div>
              )}
            </div>

            {/* Social Links */}
            {(card.social.linkedin ||
              card.social.twitter ||
              card.social.instagram) && (
              <div className="flex space-x-4 mt-6">
                {card.social.linkedin && (
                  <a
                    href={card.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                )}
                {card.social.twitter && (
                  <a
                    href={card.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                )}
                {card.social.instagram && (
                  <a
                    href={card.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Component
function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
      />
    </div>
  );
}

// Social Media Input Component
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
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {platform.charAt(0).toUpperCase() + platform.slice(1)}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(platform, e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
      />
    </div>
  );
}
