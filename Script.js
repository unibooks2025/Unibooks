document.addEventListener("DOMContentLoaded", () => {
  const regulationFilter = document.getElementById("regulation-filter");
  const languageFilter = document.getElementById("language-filter");
  const courses = document.querySelectorAll(".course-card");

  function filterCourses() {
    const selectedRegulation = regulationFilter.value;
    const selectedLanguage = languageFilter.value;

    courses.forEach(course => {
      const courseReg = course.getAttribute("data-regulation");
      const courseLang = course.getAttribute("data-language");

      const matchReg = selectedRegulation === "all" || selectedRegulation === courseReg;
      const matchLang = selectedLanguage === "all" || selectedLanguage === courseLang;

      if (matchReg && matchLang) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  }

  regulationFilter.addEventListener("change", filterCourses);
  languageFilter.addEventListener("change", filterCourses);
});
// 📘 Book Filter Logic
document.addEventListener("DOMContentLoaded", () => {
  const subjectFilter = document.getElementById("subject-filter");
  const langFilter = document.getElementById("lang-filter");
  const books = document.querySelectorAll(".book-card");

  function filterBooks() {
    const selectedSubject = subjectFilter.value;
    const selectedLang = langFilter.value;

    books.forEach(book => {
      const bookSub = book.getAttribute("data-subject");
      const bookLang = book.getAttribute("data-lang");

      const matchSub = selectedSubject === "all" || selectedSubject === bookSub;
      const matchLang = selectedLang === "all" || selectedLang === bookLang;

      if (matchSub && matchLang) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  }

  subjectFilter.addEventListener("change", filterBooks);
  langFilter.addEventListener("change", filterBooks);
});
// 📬 Contact Form Handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page reload
      alert("Thank you for contacting us! We'll get back to you soon.");
      contactForm.reset(); // clear the form
    });
  }
});


