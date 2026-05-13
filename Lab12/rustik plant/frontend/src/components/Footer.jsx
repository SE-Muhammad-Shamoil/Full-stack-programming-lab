export default function Footer() {
  const columns = {
    Informations: ["Terms and conditions", "About us", "Sitemap", "Contact", "Return policy", "Suppliers"],
    "My Account": ["Your Account", "Information", "Addresses", "Orders history", "Delivery Information", "Search Terms"],
    "Help and More": ["New products", "Top sellers", "Manufacturers", "Suppliers", "Specials"],
    Links: ["Delivery", "Service", "Gift Cards", "Mobile", "Manufacturers"]
  };

  return (
    <footer className="mt-14 overflow-hidden bg-[#ddd]">
      <div className="page-shell border-t border-[#c8c3bd]">
        <div className="container-rustik rounded-b-[52px] border-b-[9px] border-plank-orange py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(columns).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-5 font-serif text-lg uppercase text-[#c77735]">{title}</h3>
                <ul className="space-y-3 text-xs text-[#3f3934]">
                  {links.map((link) => <li key={link}>{link}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs text-[#77716b]">© 2014 Rustik Plank Furniture. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
