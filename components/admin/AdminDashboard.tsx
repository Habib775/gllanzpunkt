import React, { useState } from "react";
import ServicesAdmin from "../../admin/ServicesAdmin";
import OffersAdmin from "../../admin/OffersAdmin";

interface AdminDashboardProps {
  token: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ token }) => {
  const [activeTab, setActiveTab] = useState("services");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">لوحة تحكم Glanzpunkt</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setActiveTab("services")}
                  className={`${
                    activeTab === "services"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
                >
                  الخدمات
                </button>
                <button
                  onClick={() => setActiveTab("offers")}
                  className={`${
                    activeTab === "offers"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
                >
                  العروض
                </button>
                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`${
                    activeTab === "gallery"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
                >
                  المعرض
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className={`${
                    activeTab === "about"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
                >
                  من نحن
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === "services" && <ServicesAdmin />}
          {activeTab === "offers" && <OffersAdmin />}
          {activeTab === "gallery" && (
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-2xl font-bold mb-4">إدارة المعرض</h2>
              <p>قريباً...</p>
            </div>
          )}
          {activeTab === "about" && (
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-2xl font-bold mb-4">إدارة قسم من نحن</h2>
              <p>قريباً...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

