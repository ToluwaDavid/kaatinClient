import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserPlus,
  faEllipsisV,
  faEnvelope,
  faPhone,
  faTrash,
  faStar,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  linkedin?: string;
  twitter?: string;
  lastContact: string;
  isFavorite: boolean;
};

export default function Contacts() {
  // Sample contacts data - replace with your API data
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@designstudio.com",
      phone: "+1 (555) 123-4567",
      company: "Design Studio Inc.",
      linkedin: "linkedin.com/in/sarahjohnson",
      lastContact: "2 days ago",
      isFavorite: true,
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@techsolutions.com",
      phone: "+1 (555) 987-6543",
      company: "Tech Solutions LLC",
      twitter: "twitter.com/michaelchen",
      lastContact: "1 week ago",
      isFavorite: false,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily@marketingpro.com",
      phone: "+1 (555) 456-7890",
      company: "Marketing Pros",
      lastContact: "3 weeks ago",
      isFavorite: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newContactModal, setNewContactModal] = useState(false);

  // Filter contacts based on search
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, isFavorite: !contact.isFavorite }
          : contact
      )
    );
  };

  // Delete contact
  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Contacts Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">
          {/* <FontAwesomeIcon icon={faAddressBook} className="mr-2 text-accent" /> */}
          My Contacts
        </h2>

        <div className="flex space-x-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search contacts..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Add Contact Button */}
          <button
            onClick={() => setNewContactModal(true)}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 flex items-center"
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            <span className="hidden md:inline">Add Contact</span>
          </button>
        </div>
      </div>

      {/* Contacts List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-medium text-gray-500 uppercase text-xs tracking-wider">
          <div className="col-span-5 md:col-span-4">Name</div>
          <div className="hidden md:block md:col-span-3">Contact Info</div>
          <div className="col-span-4 md:col-span-3">Company</div>
          <div className="col-span-3 md:col-span-1 text-right">
            Last Contact
          </div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* Contacts Items */}
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="grid grid-cols-12 gap-4 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {/* Name Column */}
              <div className="col-span-5 md:col-span-4 flex items-center">
                <button
                  onClick={() => toggleFavorite(contact.id)}
                  className={`mr-3 ${
                    contact.isFavorite ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
                <div>
                  <p className="font-medium text-gray-900">{contact.name}</p>
                  <p className="text-sm text-gray-500 md:hidden">
                    {contact.email || contact.phone}
                  </p>
                </div>
              </div>

              {/* Contact Info (hidden on mobile) */}
              <div className="hidden md:block md:col-span-3">
                <div className="flex space-x-4">
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-600 hover:text-accent"
                      title="Email"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  )}
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                      className="text-gray-600 hover:text-accent"
                      title="Phone"
                    >
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                  )}
                  {contact.linkedin && (
                    <a
                      href={`https://${contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                      title="LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {contact.twitter && (
                    <a
                      href={`https://${contact.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                      title="Twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  )}
                </div>
              </div>

              {/* Company */}
              <div className="col-span-4 md:col-span-3 text-gray-600">
                {contact.company}
              </div>

              {/* Last Contact */}
              <div className="col-span-3 md:col-span-1 text-right text-sm text-gray-500">
                {contact.lastContact}
              </div>

              {/* Actions */}
              <div className="col-span-1 text-right">
                <div className="dropdown relative">
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </button>
                  <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
                      Share My Card
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                    >
                      <FontAwesomeIcon icon={faTrash} className="mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            {searchTerm
              ? "No matching contacts found"
              : "You haven't added any contacts yet"}
          </div>
        )}
      </div>

      {/* Add Contact Modal - Basic Implementation */}
      {newContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-primary">
              Add New Contact
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setNewContactModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90">
                  Save Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
