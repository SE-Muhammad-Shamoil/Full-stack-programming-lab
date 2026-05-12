import Link from "next/link";

const LINKS: { href: string; key: string; label: string }[] = [
  { href: "/account", key: "dashboard", label: "Dashboard" },
  { href: "/order-details", key: "orders", label: "Orders" },
  { href: "/edit-account", key: "account", label: "Account Details" },
  { href: "/edit-billing", key: "billing", label: "Billing Address" },
  { href: "/edit-shipping", key: "shipping", label: "Shipping Address" },
  { href: "/login", key: "signout", label: "Sign Out" },
];

export default function AccountSidebar({ active }: { active: string }) {
  return (
    <aside className="account-sidebar">
      <h4>My Account</h4>
      <ul>
        {LINKS.map((item) => (
          <li key={item.key}>
            <Link href={item.href} className={active === item.key ? "active" : ""}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
