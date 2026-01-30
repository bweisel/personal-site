export default defineNuxtPlugin(() => {
  if (import.meta.dev) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.cfBeacon = '{"token": "fa1247ade181426da6c3338b1a68e986"}';
  document.head.appendChild(script);
});
