import "../styles/index.scss";

// TABS

window.onload = function() {
  // Variables
  var tabLinks = document.querySelectorAll(".tabs__link");
  var tabContents = document.querySelectorAll(".tabs__item");

  // Loop through the tab link
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function(e) {
      e.preventDefault();
      var id = this.hash.replace("#", "");

      // Loop through the tab content
      for (var j = 0; j < tabContents.length; j++) {
        var tabContent = tabContents[j];
        tabContent.classList.remove("is-visible");
        tabLinks[j].classList.remove("is-active");
        if (tabContent.id === id) {
          tabContent.classList.add("is-visible");
        }
      }

      this.classList.add("is-active");
    });
  }
};
