// admin/ServicesAdmin.tsx
import React, { useEffect, useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const ServicesAdmin: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState({ title: '', description: '', icon: '' });

  useEffect(() => {
    fetch('/api/admin/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const addService = async () => {
    if (!newService.title || !newService.description || !newService.icon) return alert('جميع الحقول مطلوبة');
    try {
      const res = await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService),
      });
      if (res.ok) {
        const added = await res.json();
        setServices([...services, added]);
        setNewService({ title: '', description: '', icon: '' });
      } else {
        alert('حدث خطأ أثناء الإضافة');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteService = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الخدمة؟')) return;
    try {
      const res = await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setServices(services.filter(s => s.id !== id));
      } else {
        alert('فشل في الحذف');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">إدارة الخدمات</h2>

      <div className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="عنوان الخدمة"
          value={newService.title}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
        />
        <textarea
          name="description"
          placeholder="وصف الخدمة"
          value={newService.description}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
          rows={3}
        />
        <input
          type="text"
          name="icon"
          placeholder="اسم الأيقونة (مثلاً: fa-solid fa-bolt)"
          value={newService.icon}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={addService}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          إضافة خدمة جديدة
        </button>
      </div>

      <ul>
        {services.map(service => (
          <li key={service.id} className="flex justify-between items-center border-b py-2">
            <div>
              <i className={`${service.icon} mr-3`}></i>
              <strong>{service.title}</strong> - {service.description}
            </div>
            <button
              onClick={() => deleteService(service.id)}
              className="text-red-600 hover:text-red-800"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesAdmin;

