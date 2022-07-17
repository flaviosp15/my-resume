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
  const section = document.getElementById(
    element.getAttribute('href').replace(/[#]/g, '')
  );
  section.classList.add('active-page');
  section.scrollTo({
    top: 0,
  });
};

navButtons.forEach(btn => {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    disableLinksAndSections();
    activeLinkAndSection(btn);
  });
});
