// admin/OffersAdmin.tsx
import React, { useEffect, useState } from 'react';

interface Offer {
  id: string;
  title: string;
  description: string;
  price: number;
}

const OffersAdmin: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [newOffer, setNewOffer] = useState({ title: '', description: '', price: 0 });

  useEffect(() => {
    fetch('/api/admin/offers')
      .then(res => res.json())
      .then(data => setOffers(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewOffer(prev => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value,
    }));
  };

  const addOffer = async () => {
    if (!newOffer.title || !newOffer.description || newOffer.price <= 0) {
      alert('يرجى ملء جميع الحقول بشكل صحيح');
      return;
    }
    try {
      const res = await fetch('/api/admin/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOffer),
      });
      if (res.ok) {
        const added = await res.json();
        setOffers([...offers, added]);
        setNewOffer({ title: '', description: '', price: 0 });
      } else {
        alert('حدث خطأ أثناء الإضافة');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOffer = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا العرض؟')) return;
    try {
      const res = await fetch(`/api/admin/offers/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setOffers(offers.filter(o => o.id !== id));
      } else {
        alert('فشل في الحذف');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">إدارة العروض</h2>

      <div className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="عنوان العرض"
          value={newOffer.title}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
        />
        <textarea
          name="description"
          placeholder="وصف العرض"
          value={newOffer.description}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
          rows={3}
        />
        <input
          type="number"
          name="price"
          placeholder="السعر"
          value={newOffer.price}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
          min={0}
          step={0.01}
        />
        <button
          onClick={addOffer}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          إضافة عرض جديد
        </button>
      </div>

      <ul>
        {offers.map(offer => (
          <li key={offer.id} className="flex justify-between items-center border-b py-2">
            <div>
              <strong>{offer.title}</strong> - {offer.description} - <span>{offer.price} €</span>
            </div>
            <button
              onClick={() => deleteOffer(offer.id)}
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

export default OffersAdmin;

