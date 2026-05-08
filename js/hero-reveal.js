(function () {
  var el = document.querySelector(".hero-reveal");
  if (!el) return;

  function setVisible(visible) {
    el.classList.toggle("is-visible", visible);
  }

  if (!("IntersectionObserver" in window)) {
    setVisible(true);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        setVisible(entry.isIntersecting);
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px",
    },
  );

  observer.observe(el);
})();
