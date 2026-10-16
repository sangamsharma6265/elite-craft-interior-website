"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

export default function MobileMenu({
  navigation,
}: {
  navigation: readonly NavigationItem[];
}) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const prefetched = useRef(false);
  const router = useRouter();

  function closeMenu() {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }

  function handleToggle() {
    if (menuRef.current?.open && !prefetched.current) {
      router.prefetch("/furniture");
      prefetched.current = true;
    }
  }

  useEffect(() => {
    function handleOutsideClick(event: PointerEvent) {
      const menu = menuRef.current;

      if (
        menu?.open &&
        event.target instanceof Node &&
        !menu.contains(event.target)
      ) {
        closeMenu();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuRef.current?.open) {
        closeMenu();
        menuRef.current.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <details
      ref={menuRef}
      className="mobile-menu"
      onToggle={handleToggle}
    >
      <summary>Menu</summary>

      <nav aria-label="Mobile navigation">
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}