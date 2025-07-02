'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2, Trash2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/services');
      setServices(response.data);
    } catch (err) {
      setError('فشل تحميل البيانات');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/services/${id}`);
      setServices((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      alert('حدث خطأ أثناء الحذف');
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">إدارة الخدمات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="border rounded-xl p-4 shadow hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                  <Trash2 className="w-5 h-5 text-red-500" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Pencil className="w-5 h-5 text-blue-500" />
                </Button>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">أيقونة: {service.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

