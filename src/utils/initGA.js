export const initGA = () => {
  if (import.meta.env.MODE !== "production") return;

  const script1 = document.createElement("script");
  script1.setAttribute("async", "");
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-5YPHTW14Q4";
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-5YPHTW14Q4");`;

  document.head.appendChild(script2);
};
