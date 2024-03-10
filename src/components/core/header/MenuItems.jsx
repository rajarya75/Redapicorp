import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

export default function MenuItems({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target) &&
        typeof window !== "undefined"
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  const closeDropdown = () => {
    if (dropdown) {
      setDropdown(false);
    }
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu && (
        <>
          <Button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {depthLevel === 0 &&
            typeof window !== "undefined" &&
            window.innerWidth < 960 ? (
              items.name
            ) : (
              <Link href={items.path}>{items.name}</Link>
            )}
            {depthLevel > 0 &&
            typeof window !== "undefined" &&
            window.innerWidth > 960 ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </Button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      )}
      {!items.submenu && <Link href={items.path}>{items.name}</Link>}
    </li>
  );
}
