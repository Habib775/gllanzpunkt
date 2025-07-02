'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface AboutData {
  title: string;
  description: string;
}

export default function AdminAbout() {
  const [about, setAbout] = useState<AboutData>({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await axios.get('/api/about');
        setAbout(res.data);
      } catch (error) {
        console.error('Error fetching About data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.put('/api/about', about);
      alert('تم حفظ التغييرات بنجاح');
    } catch (error) {
      alert('حدث خطأ أثناء الحفظ');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">تحرير قسم من نحن</h1>

      {loading ? (
        <p>جاري التحميل...</p>
      ) : (
        <>
          <label className="block mb-2 font-semibold">العنوان</label>
          <Input
            type="text"
            value={about.title}
            onChange={(e) => setAbout({ ...about, title: e.target.value })}
            className="mb-4"
          />

          <label className="block mb-2 font-semibold">الوصف</label>
          <Textarea
            value={about.description}
            onChange={(e) => setAbout({ ...about, description: e.target.value })}
            rows={6}
            className="mb-6"
          />

          <Button onClick={handleSave} disabled={saving}>
            {saving ? 'جارٍ الحفظ...' : 'حفظ التغييرات'}
          </Button>
        </>
      )}
    </main>
  );
}

