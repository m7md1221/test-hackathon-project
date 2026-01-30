## خطوات رفع المشروع على GitHub

تم إنشاء المشروع التجريبي بنجاح في:
`C:\Users\dell\Desktop\test-hackathon-project`

### الخطوات التالية:

1. أنشئ مستودع جديد على GitHub:
   - اذهب إلى https://github.com/new
   - اسم المستودع: `test-hackathon-project`
   - اجعله **Public** (عام)
   - لا تضف README (موجود بالفعل)
   - اضغط "Create repository"

2. ارفع الكود إلى GitHub (نفّذ في PowerShell):

```powershell
cd "C:\Users\dell\Desktop\test-hackathon-project"
git remote add origin https://github.com/YOUR_USERNAME/test-hackathon-project.git
git branch -M main
git push -u origin main
```

**استبدل YOUR_USERNAME باسم المستخدم الخاص بك على GitHub**

3. انتظر GitHub Actions:
   - اذهب إلى تبويب **Actions** في المستودع
   - انتظر حتى يكتمل workflow "Clean Code Check"
   - تأكد من ظهور ✅ علامة خضراء
   - تحقق من وجود artifact باسم "eslint-report"

4. اختبر في النظام:
   - سجل دخول كفريق في http://localhost:3000
   - اذهب إلى "Upload Project"
   - أدخل رابط المستودع: `https://github.com/YOUR_USERNAME/test-hackathon-project`
   - اضغط Submit

5. تحقق من النتيجة:
   - سجل دخول كإدمن
   - افتح تفاصيل الفريق
   - شاهد Clean Code Score (متوقع حوالي 70-80/100)

---

## ملفات المشروع المُنشأة:

✅ `package.json` - ملف المشروع والمكتبات
✅ `.eslintrc.json` - إعدادات ESLint
✅ `index.js` - ملف رئيسي مع 7 مشاكل
✅ `app.js` - ملف ثانوي مع 4 مشاكل
✅ `.github/workflows/clean-code.yml` - GitHub Actions workflow
✅ `README.md` - توثيق المشروع
✅ `.gitignore` - استثناء ملفات

المشروع يحتوي على:
- 6 أخطاء (errors) = -30 نقطة
- 5 تحذيرات (warnings) = -10 نقطة
- الدرجة المتوقعة: **60/100**
