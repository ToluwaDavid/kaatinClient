import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faUser,
  faCopy,
  faQrcode,
  faGlobe,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

import { useAppSelector } from "../store/hooks";
import { toast } from "react-toastify";

export default function Profile() {
  const user = useAppSelector((state) => state.auth.user);

  const copyToClipboard = () => {
    if (user?.slug) {
      //const url = `https://kaatin.vercel.app/${user.slug}`;
      const url = `https://kaatinserver-production.up.railway.app/card/${user.email}`;
      navigator.clipboard.writeText(url);
      toast.success("🔗 Profile link copied!");
    }
  };

  if (!user) return <p className="text-center">Loading profile...</p>;

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary">
          <FontAwesomeIcon icon={faUser} className="mr-2 text-accent" />
          Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Business Card Preview */}
          <div className="max-w-lg mx-auto bg-white p-8 rounded shadow border border-gray-200">
            {/* Name & Contact Section */}
            <div className="flex flex-col md:flex-row mt-10 justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Name & Title */}
              <div>
                <h1 className="text-2xl uppercase font-light tracking-wider text-gray-800">
                  {user.firstname.toUpperCase()}
                  <span className="font-semibold ml-1">
                    {user.lastname.toUpperCase()}
                  </span>
                </h1>
                <p className="text-sm text-gray-500 mt-1">{user.role}</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-gray-300"></div>

              {/* Contact Info */}
              <div className="text-sm text-gray-700 space-y-2">
                {user.phone && (
                  <div className="flex items-center space-x-2">
                    {/* <span>📞</span> */}
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-3 text-gray-500"
                    />
                    <span>{user.phone}</span>
                  </div>
                )}
                {user.email && (
                  <div className="flex items-center space-x-2">
                    {/* <span className="text-primary">✉️</span> */}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="mr-3 text-gray-500"
                    />
                    <span>{user.email}</span>
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center space-x-2">
                    {/* <span>🌐</span> */}
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="mr-3 text-gray-500"
                    />
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Address */}
            {user.address && (
              <div className="mt-14 pt-4 border-t border-gray-100 text-center text-xs text-gray-500 flex items-center justify-center space-x-2">
                {/* <span>📍</span> */}
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="mr-3 text-dark"
                />
                <span>{user.address}</span>
              </div>
            )}
          </div>

          {/* Share Options */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Share Options
              </h3>
              <div className="flex space-x-3">
                <button
                  onClick={copyToClipboard}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faCopy} className="mr-2" />
                  Copy Link
                </button>
                <button className="flex-1 border border-accent text-accent hover:bg-accent/10 py-2 px-4 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faQrcode} className="mr-2" />
                  QR Code
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Contact Info
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-3 text-accent"
                  />
                  {user.email}
                </div>
                <div className="flex items-center text-gray-700">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-3 text-accent"
                  />
                  {user.phone}
                </div>
              </div>
            </div>

            {/* Optional Social Media */}
            {/* {user.socialLinks && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  {user.socialLinks.linkedin && (
                    <a
                      href={user.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                  )}
                  {user.socialLinks.twitter && (
                    <a
                      href={user.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                  )}
                  {user.socialLinks.instagram && (
                    <a
                      href={user.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                  )}
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
