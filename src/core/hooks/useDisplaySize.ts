import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import { useEffect, useState } from "react";

export default function useDisplaySize() {
  const screens = useBreakpoint();
  const [size, setSize] = useState<"lg" | "md" | "sm" | "xl" | "xs" | "xxl">();

  useEffect(() => {
    setSize(getSize(screens));
  }, [screens]);
  return size;
}

function getSize(
  sizes: Partial<Record<Breakpoint, boolean>>
): "lg" | "md" | "sm" | "xl" | "xs" | "xxl" {
  if (isXxl(sizes)) return "xxl";
  else if (isXl(sizes)) return "xl";
  else if (isLg(sizes)) return "lg";
  else if (isMd(sizes)) return "md";
  else if (isSm(sizes)) return "sm";
  else return "xs";
}

function isXxl(sizes: Partial<Record<Breakpoint, boolean>>): boolean {
  if (sizes.xxl) return true;
  return false;
}

function isXl(sizes: Partial<Record<Breakpoint, boolean>>): boolean {
  if (sizes.lg && sizes.md && sizes.sm && sizes.xl) return true;
  return false;
}

function isLg(sizes: Partial<Record<Breakpoint, boolean>>): boolean {
  if (sizes.lg && sizes.md && sizes.sm) return true;
  return false;
}

function isMd(sizes: Partial<Record<Breakpoint, boolean>>): boolean {
  if (sizes.md && sizes.sm) return true;
  return false;
}

function isSm(sizes: Partial<Record<Breakpoint, boolean>>): boolean {
  if (sizes.sm) return true;
  return false;
}
