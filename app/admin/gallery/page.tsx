'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageAlt, setNewImageAlt] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await axios.get('/api/gallery');
        setImages(res.data);
      } catch (error) {
        console.error('Error fetching gallery', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const handleAddImage = async () => {
    if (!newImageUrl.trim()) return alert('يرجى إدخال رابط الصورة');
    setSaving(true);
    try {
      await axios.post('/api/gallery', { url: newImageUrl, alt: newImageAlt });
      setNewImageUrl('');
      setNewImageAlt('');
      // إعادة تحميل الصور بعد الإضافة
      const res = await axios.get('/api/gallery');
      setImages(res.data);
    } catch (error) {
      alert('حدث خطأ أثناء إضافة الصورة');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteImage = async (id: number) => {
    if (!confirm('هل أنت متأكد من حذف هذه الصورة؟')) return;
    try {
      await axios.delete(`/api/gallery/${id}`);
      setImages(images.filter(img => img.id !== id));
    } catch (error) {
      alert('حدث خطأ أثناء الحذف');
    }
  };

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">إدارة معرض الصور</h1>

      {loading ? (
        <p>جاري التحميل...</p>
      ) : (
        <>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">رابط الصورة</label>
            <Input
              type="text"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="mb-2"
            />

            <label className="block mb-1 font-semibold">النص البديل (اختياري)</label>
            <Input
              type="text"
              value={newImageAlt}
              onChange={(e) => setNewImageAlt(e.target.value)}
              placeholder="وصف الصورة"
              className="mb-2"
            />

            <Button onClick={handleAddImage} disabled={saving}>
              {saving ? 'جاري الإضافة...' : 'إضافة صورة جديدة'}
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative group border rounded overflow-hidden">
                <img src={img.url} alt={img.alt || 'صورة المعرض'} className="w-full h-32 object-cover" />
                <button
                  onClick={() => handleDeleteImage(img.id)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition"
                  title="حذف الصورة"
                >
                  حذف
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

