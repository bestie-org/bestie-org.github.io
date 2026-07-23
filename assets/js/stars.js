// Live GitHub star counter for all [data-star-count] elements on the page.
// Uses the unauthenticated GitHub API (60 req/h/IP) with a 1h localStorage
// cache; degrades silently to a plain "Star on GitHub" button on any failure.
(function () {
  var REPO = "bestie-org/BEStie";
  var CACHE_KEY = "bestie-stars";
  var CACHE_TTL_MS = 60 * 60 * 1000;

  function render(count) {
    document.querySelectorAll("[data-star-count]").forEach(function (el) {
      el.textContent = count.toLocaleString("en-US");
      el.hidden = false;
    });
  }

  function fromCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var entry = JSON.parse(raw);
      if (Date.now() - entry.t > CACHE_TTL_MS) return null;
      return typeof entry.stars === "number" ? entry.stars : null;
    } catch (e) {
      return null;
    }
  }

  var cached = fromCache();
  if (cached !== null) {
    render(cached);
    return;
  }

  fetch("https://api.github.com/repos/" + REPO, { headers: { Accept: "application/vnd.github+json" } })
    .then(function (r) {
      if (!r.ok) throw new Error("GitHub API " + r.status);
      return r.json();
    })
    .then(function (data) {
      if (typeof data.stargazers_count !== "number") return;
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), stars: data.stargazers_count }));
      } catch (e) { /* private mode etc. — non-fatal */ }
      render(data.stargazers_count);
    })
    .catch(function () { /* keep static fallback button */ });
})();
