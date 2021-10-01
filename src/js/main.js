// =============================================
// sidebar dropdown
// =============================================

const dropdownContainer = document.querySelectorAll(".dropdown-container");

dropdownContainer.forEach((btnContainer) => {
  const dropBtn = btnContainer.querySelectorAll(".sidebar__drop--btn");
  const dropdownContainer = btnContainer.querySelector(
    ".sidebar__list--dropdown"
  );
  const dropArrow = btnContainer.querySelector(".icon-arrow-down");

  dropBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      dropdownContainer.classList.toggle("sidebar__list--active");
      dropArrow.classList.toggle("arrow-down");

      /*
      console.log(dropdownContainer.style.height);

      if (dropdownContainer.classList.contains === "sidebar__list--active") {
        console.log("true");
      } else {
        // dropdownContainer.classList.add("sidebar__list--active");
        // dropArrow.classList.add("arrow-down");
        console.log("false");
      }
      */
    });
  });
});

// =============================================
// sidebar open and close
// =============================================
// toggle-btn
const toggleBtn = document.querySelector(".toggle-btn");
const body = document.querySelector("body");
// console.log(body);
toggleBtn.addEventListener("click", function () {
  body.classList.toggle("sidebar-active");
});
