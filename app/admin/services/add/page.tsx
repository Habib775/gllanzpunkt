'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function AddServicePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/services', {
        title,
        description,
        icon,
      });

      router.push('/admin/services');
    } catch (err) {
      setError('فشل في إضافة الخدمة');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">إضافة خدمة جديدة</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">العنوان</label>
          <Input
            type="text"
            placeholder="مثال: تنظيف السجاد"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">الوصف</label>
          <Textarea
            placeholder="اكتب وصفًا موجزًا للخدمة"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">الأيقونة (اسم فقط)</label>
          <Input
            type="text"
            placeholder="مثال: VacuumCleaner"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-600">{error}</div>}

        <Button type="submit" disabled={loading}>
          {loading ? 'جارٍ الإرسال...' : 'إضافة الخدمة'}
        </Button>
      </form>
    </div>
  );
}

