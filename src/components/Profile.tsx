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
} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  // Updated user data to match business card
  const user = {
    name: "John Smith",
    title: "Managing Director",
    company: "Your Company Name",
    email: "john@company.com",
    phone: "1121 45 5760-433",
    phone2: "11218 6700-443",
    website: "www.websttename.com",
    infoWebsite: "inforwebstte.com",
    address: "Your Company Address Goes Here New York City",
    social: {
      linkedin: "linkedin.com/in/johnsmith",
      twitter: "twitter.com/johnsmith",
      instagram: "instagram.com/johnsmith",
    },
    profileUrl: "company.com/johnsmith",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user.profileUrl);
    alert("Profile link copied!");
  };

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
            {/* Top Section: Name and Contact  */}
            <div className="flex flex-col md:flex-row mt-10 justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Left: Name and Title  */}
              <div>
                <h1 className="text-2xl uppercase font-light tracking-wider text-gray-800">
                  JOHN<span className="font-semibold">SMITH</span>
                </h1>
                <p className="text-sm text-gray-600 mt-1">Managing Director</p>
              </div>

              {/* Divider for desktop  */}
              <div className="hidden md:block w-px h-16 bg-gray-300"></div>

              {/* Right: Contact Info  */}
              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>1121 45 6780 433</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📠</span>
                  <span>1121 65 6710 443</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉️</span>
                  <span>info@website.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span>www.websitename.com</span>
                </div>
              </div>
            </div>

            {/* Bottom: Address  */}
            <div className="mt-14 pt-4 border-t border-gray-100 text-center text-xs text-gray-500 flex items-center justify-center space-x-2">
              <span>📍</span>
              <span>YOUR COMPANY ADDRESS GOES HERE NEW YOURK CITY</span>
            </div>
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

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Social Media
              </h3>
              <div className="flex space-x-4">
                <a
                  href={`https://${user.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href={`https://${user.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a
                  href={`https://${user.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      {/* <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-primary">
          Profile Activity
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Total Views" value="1,240" trend="↑ 12%" />
          <StatCard title="Shares" value="86" trend="↑ 3%" />
          <StatCard title="Last Viewed" value="2h ago" />
          <StatCard title="Profile Completeness" value="95%" />
        </div>
      </div> */}
    </div>
  );
}

// Reusable stat card component
function StatCard({
  title,
  value,
  trend,
}: {
  title: string;
  value: string;
  trend?: string;
}) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex items-baseline mt-1">
        <p className="text-xl font-semibold">{value}</p>
        {trend && <span className="ml-2 text-xs text-green-500">{trend}</span>}
      </div>
    </div>
  );
}
