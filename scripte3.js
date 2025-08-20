    const button = document.getElementById('web-mode');
    const body = document.body;
    const i = document.getElementById('icon');

    // عند تحميل الصفحة: نتحقق من القيمة المخزنة
    if(localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
      i.textContent = "dark_mode";
    }

    button.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains('dark')) {
        i.textContent = 'dark_mode';
        localStorage.setItem("theme", "dark"); // حفظ الوضع
      } else {
        i.textContent = 'light_mode';
        localStorage.setItem("theme", "light"); // حفظ الوضع
      }
    });