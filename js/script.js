let navButtons = document.querySelectorAll('.link');
let sections = document.querySelectorAll('.section');
const disableLinksAndSections = function () {
  navButtons.forEach(btn => {
    btn.classList.remove('active-link');
  });
  sections.forEach(page => {
    page.classList.remove('active-page');
  });
};
const activeLinkAndSection = function (element) {
  element.classList.add('active-link');
  const page = document.getElementById(
    element.getAttribute('href').replace(/[#]/g, '')
  );
  page.classList.add('active-page');
};

navButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    disableLinksAndSections();
    activeLinkAndSection(btn);
  });
});
