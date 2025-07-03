# 🌟 Glanzpunkt - Professional Cleaning Services

موقع شركة Glanzpunkt لخدمات التنظيف المهنية مع لوحة تحكم شاملة.

## 🚀 **المميزات الرئيسية**

### 🎛️ **لوحة التحكم الكاملة:**
- **تسجيل دخول آمن** للمشرفين مع تشفير كلمات المرور
- **إدارة الخدمات:** إضافة، تعديل، حذف، عرض
- **إدارة العروض:** إدارة كاملة للعروض الترويجية
- **إدارة المعرض:** رفع وحذف الصور
- **إدارة قسم "من نحن":** تحرير المحتوى
- **واجهة عربية** سهلة الاستخدام

### 🔗 **API Routes المكتملة:**
- `/api/services` - إدارة الخدمات
- `/api/offers` - إدارة العروض
- `/api/gallery` - إدارة المعرض
- `/api/about` - إدارة قسم من نحن
- `/api/auth` - المصادقة والجلسات

### 🎨 **التقنيات المستخدمة:**
- **Frontend:** Next.js 14 مع TypeScript
- **Backend:** Next.js API Routes
- **قاعدة البيانات:** MongoDB مع Prisma ORM
- **المصادقة:** JWT مع Cookies آمنة
- **التصميم:** Tailwind CSS مع مكونات UI مخصصة
- **التأثيرات:** Framer Motion, Sparkles

## 🔧 **التثبيت والتشغيل المحلي**

### 1. **استنساخ المشروع:**
\`\`\`bash
git clone https://github.com/Habib775/gllanzpunkt.git
cd gllanzpunkt
\`\`\`

### 2. **تثبيت التبعيات:**
\`\`\`bash
npm install
\`\`\`

### 3. **إعداد قاعدة البيانات:**
\`\`\`bash
# انسخ ملف المتغيرات البيئية
cp .env.example .env

# حدث .env مع بيانات MongoDB الحقيقية
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/glanzpunkt"
JWT_SECRET="your_super_secret_jwt_key"
\`\`\`

### 4. **إعداد Prisma:**
\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

### 5. **تشغيل المشروع:**
\`\`\`bash
npm run dev
\`\`\`

### 6. **الوصول للوحة التحكم:**
- **URL:** \`http://localhost:3000/admin/login\`
- **اسم المستخدم:** \`admin\`
- **كلمة المرور:** \`admin123\`

## 🌐 **النشر على Vercel**

### 1. **ربط المشروع بـ Vercel:**
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول أو أنشئ حساب جديد
3. انقر على "New Project"
4. اختر مستودع GitHub الخاص بك
5. انقر على "Import"

### 2. **إعداد متغيرات البيئة:**
في لوحة تحكم Vercel، اذهب إلى:
\`Settings > Environment Variables\`

أضف المتغيرات التالية:
\`\`\`
DATABASE_URL = mongodb+srv://username:password@cluster.mongodb.net/glanzpunkt
JWT_SECRET = your_super_secret_jwt_key_here
\`\`\`

### 3. **النشر:**
- Vercel سيقوم بالنشر تلقائياً عند كل push إلى GitHub
- أو يمكنك النشر يدوياً من لوحة التحكم

### 4. **إعداد قاعدة البيانات:**
بعد النشر الأول:
\`\`\`bash
# من terminal محلي
npx prisma db push
\`\`\`

## 🔒 **الأمان**

- **Middleware حماية** لصفحات الإدارة
- **تشفير كلمات المرور** مع bcrypt
- **JWT tokens** آمنة
- **Cookies httpOnly** للحماية من XSS

## 📁 **بنية المشروع**

\`\`\`
glanzpunkt/
├── app/                    # Next.js App Router
│   ├── admin/             # صفحات لوحة التحكم
│   ├── api/               # API Routes
│   ├── globals.css        # الأنماط العامة
│   ├── layout.tsx         # Layout الرئيسي
│   └── page.tsx           # الصفحة الرئيسية
├── components/            # مكونات React
│   ├── ui/               # مكونات UI أساسية
│   └── admin/            # مكونات لوحة التحكم
├── lib/                  # مكتبات مساعدة
├── prisma/               # إعدادات قاعدة البيانات
├── public/               # الملفات الثابتة
├── middleware.ts         # Next.js Middleware
├── vercel.json          # إعدادات Vercel
└── package.json         # التبعيات والنصوص
\`\`\`

## 🎯 **الوصول للموقع**

### **الصفحة الرئيسية:**
- عرض الخدمات والعروض
- معرض الصور
- معلومات الاتصال

### **لوحة التحكم:**
- \`/admin/login\` - تسجيل الدخول
- \`/admin/dashboard\` - لوحة التحكم الرئيسية
- \`/admin/services\` - إدارة الخدمات
- \`/admin/offers\` - إدارة العروض
- \`/admin/gallery\` - إدارة المعرض
- \`/admin/about\` - إدارة قسم من نحن

## 🛠️ **التطوير**

### **إضافة خدمة جديدة:**
1. اذهب إلى \`/admin/services\`
2. انقر على "إضافة خدمة جديدة"
3. املأ البيانات المطلوبة
4. احفظ التغييرات

### **تحديث التصميم:**
- الأنماط في \`app/globals.css\`
- مكونات UI في \`components/ui/\`
- إعدادات Tailwind في \`tailwind.config.ts\`

## 📞 **الدعم**

للمساعدة أو الاستفسارات، يرجى فتح issue في GitHub أو التواصل مع فريق التطوير.

---

**تم تطوير المشروع بواسطة Manus AI** 🤖

