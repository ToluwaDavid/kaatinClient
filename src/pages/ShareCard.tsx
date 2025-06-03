import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faCopy,
  faQrcode,
  faGlobe,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  website?: string;
  address: string;
  views?: number;
}

const SharedCard: React.FC = () => {
  const { email } = useParams<{ email: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        console.log(email);
        const encodedEmail = encodeURIComponent(email || "");
        console.log(encodedEmail);
        //const response = await axios.get(`/api/user/card/${encodedEmail}`);
        const response = await axios.get(
          `https://kaatinserver-production.up.railway.app/api/user/card/${email}`
        );
        console.log(response);
        setUser(response.data);
      } catch (err) {
        toast.error("❌ Could not load card");
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [email]);

  if (loading) return <div className="text-center mt-10">Loading card...</div>;
  if (!user) return <div className="text-center mt-10">No user found</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow border border-gray-200">
        {/* Name & Contact Section */}
        <div className="flex flex-col md:flex-row mt-10 justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Name & Title */}
          <div>
            <h1 className=" uppercase font-light tracking-wider text-gray-800">
              {user.firstname.toUpperCase()}
              <span className="font-semibold ml-1">
                {user.lastname.toUpperCase()}
              </span>
            </h1>
            <p className="text-sm text-blue-500 mt-1">{user.role}</p>
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
                  className="mr-3 text-blue-900"
                />
                <span>{user.phone}</span>
              </div>
            )}
            {user.email && (
              <div className="flex items-center space-x-2">
                {/* <span className="text-primary">✉️</span> */}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3 text-blue-950"
                />
                <span>{user.email}</span>
              </div>
            )}
            {user.website && (
              <div className="flex items-center space-x-2">
                {/* <span>🌐</span> */}
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="mr-3 text-blue-200"
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
              className="mr-3 text-blue-200"
            />
            <span>{user.address}</span>
          </div>
        )}
      </div>

      {/* <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="mb-6">
          <h2 className="text-2xl font-bold uppercase text-gray-800">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-gray-600">{user.role}</p>
        </div>

        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <span className="text-dark">📞</span> {user.phone}
          </div>
          <div>✉️ {user.email}</div>
          {user.website && (
            <div>
              🌐{" "}
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                {user.website}
              </a>
            </div>
          )}
          <div>🏢 {user.company}</div>
          <div>📍 {user.address}</div>
          <div>👁️ Views: {user.views || 0}</div>
        </div>
      </div> */}
    </div>
  );
};

export default SharedCard;
