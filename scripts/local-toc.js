// Quarto's module-based scroll tracking cannot load under file://.
// Keep direct-file previews usable without replacing Quarto on HTTP(S).
if (window.location.protocol === "file:") {
  document.addEventListener("DOMContentLoaded", () => {
    const toc = document.querySelector('nav[role="doc-toc"]');
    if (!toc) return;
    const entries = Array.from(toc.querySelectorAll("a[data-scroll-target]"))
      .map(link => {
        const target = link.getAttribute("data-scroll-target");
        if (!target.startsWith("#")) return null;
        const section = document.getElementById(decodeURIComponent(target.slice(1)));
        return section ? { link, section } : null;
      }).filter(Boolean);
    if (!entries.length) return;
    let scheduled = false;
    function update() {
      scheduled = false;
      let active = entries[0];
      const threshold = Math.min(200, window.innerHeight * 0.25);
      for (const entry of entries) {
        if (entry.section.getBoundingClientRect().top <= threshold) active = entry;
      }
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) active = entries[entries.length - 1];
      for (const { link } of entries) {
        const selected = link === active.link;
        link.classList.toggle("active", selected);
        if (selected) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
      // Keep nested headings accessible when Quarto's module is unavailable.
      toc.querySelectorAll("ul.collapse").forEach(list => list.classList.remove("collapse"));
    }
    function schedule() {
      if (!scheduled) { scheduled = true; window.requestAnimationFrame(update); }
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    update();
  });
}
