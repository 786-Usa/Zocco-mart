import { useState } from "react";
import {
  User,
  Package,
  RefreshCcw,
  Truck,
  Lock,
  MapPin,
  CreditCard,
  LogOut,
} from "lucide-react";
import Header from "../components/Header";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "orders", label: "Orders", icon: Package },
  { id: "refunds", label: "Refunds", icon: RefreshCcw },
  { id: "track", label: "Track Orders", icon: Truck },
  { id: "password", label: "Password", icon: Lock },
  { id: "address", label: "Address", icon: MapPin },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "logout", label: "Logout", icon: LogOut },
];

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <div className="h-64 flex items-center justify-center text-gray-400">Profile Content (API later)</div>;
      case "orders":
        return <div className="h-64 flex items-center justify-center text-gray-400">Orders Content (API later)</div>;
      case "refunds":
        return <div className="h-64 flex items-center justify-center text-gray-400">Refunds Content (API later)</div>;
      case "track":
        return <div className="h-64 flex items-center justify-center text-gray-400">Track Orders (API later)</div>;
      case "password":
        return <div className="h-64 flex items-center justify-center text-gray-400">Change Password (API later)</div>;
      case "address":
        return <div className="h-64 flex items-center justify-center text-gray-400">Address (API later)</div>;
      case "payment":
        return <div className="h-64 flex items-center justify-center text-gray-400">Payment Methods (API later)</div>;
      case "logout":
        return (
          <div className="h-64 flex flex-col items-center justify-center gap-4">
            <p className="text-gray-500">Are you sure you want to logout?</p>
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Logout
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        
        {/* Sidebar */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">My Account</h2>

          <div className="flex flex-col gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    activeTab === tab.id
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold capitalize mb-4">
            {activeTab}
          </h2>

          {renderContent()}
        </div>
      </div>
    </div>
    </>
  );
};

export default MyProfile;