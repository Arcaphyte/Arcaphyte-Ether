export const ENGINES = [
  {
    id: "duckduckgo",
    name: "DuckDuckGo",
    template: "https://duckduckgo.com/?q={query}",
  },
  {
    id: "google",
    name: "Google",
    template: "https://www.google.com/search?q={query}",
  },
  {
    id: "bing",
    name: "Bing",
    template: "https://www.bing.com/search?q={query}",
  },
  {
    id: "brave",
    name: "Brave",
    template: "https://search.brave.com/search?q={query}",
  },
  {
    id: "ecosia",
    name: "Ecosia",
    template: "https://www.ecosia.org/search?q={query}",
  },
];
export function validTemplate(template) {
  try {
    const u = new URL(template);
    return (
      u.protocol === "https:" &&
      template.includes("{query}") &&
      !u.username &&
      !u.password
    );
  } catch {
    return false;
  }
}
export function resolveAddress(input, template) {
  const value = input.trim();
  if (!value) throw new Error("Enter a search or web address.");
  if (/^[a-z][a-z\d+.-]*:/i.test(value) && !/^[\w.-]+:\d+(\/|$)/.test(value)) {
    const u = new URL(value);
    if (!["http:", "https:"].includes(u.protocol))
      throw new Error("Only HTTP and HTTPS websites are supported.");
    if (u.username || u.password)
      throw new Error("Addresses with embedded credentials are not supported.");
    return u.href;
  }
  if (
    !/\s/.test(value) &&
    /^(localhost(:\d+)?|([a-z\d-]+\.)+[a-z\d-]+)(:\d+)?([/?#].*)?$/i.test(value)
  )
    return new URL("https://" + value).href;
  if (!validTemplate(template))
    throw new Error("Use an HTTPS search URL containing {query}.");
  return template.replaceAll("{query}", encodeURIComponent(value));
}
