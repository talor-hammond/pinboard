// for each #nav li, call the toggleTab function with the selected tab and the target id as arguments:
document.querySelectorAll("#nav li").forEach(function(navEl) {
    navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
  });

  function toggleTab(selectedNav, targetId) {
    var navEls = document.querySelectorAll("#nav li");
  
    // adding the is-active class to the selected #nav li
    navEls.forEach(function(navEl) {
      if (navEl.id == selectedNav) {
        navEl.classList.add("is-active");
      } else {
        if (navEl.classList.contains("is-active")) {
          navEl.classList.remove("is-active");
        }
      }
    });
  
    // diplaying the tab pane with the id associated with the dataset-target.
    var tabs = document.querySelectorAll(".tab-pane");
  
    tabs.forEach(function(tab) {
      if (tab.id == targetId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }