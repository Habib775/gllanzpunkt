'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`/api/services/${id}`);
        const service = res.data;
        setTitle(service.title);
        setDescription(service.description);
        setIcon(service.icon);
      } catch (err) {
        setError('تعذر تحميل بيانات الخدمة.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchService();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError(null);

    try {
      await axios.put(`/api/services/${id}`, {
        title,
        description,
        icon,
      });
      router.push('/admin/services');
    } catch (err) {
      setError('فشل في تحديث الخدمة.');
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-10">جارٍ تحميل الخدمة...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">تعديل الخدمة</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">العنوان</label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">الوصف</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">الأيقونة</label>
          <Input
            type="text"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-600">{error}</div>}

        <Button type="submit" disabled={submitLoading}>
          {submitLoading ? 'جارٍ الحفظ...' : 'حفظ التعديلات'}
        </Button>
      </form>
    </div>
  );
}

