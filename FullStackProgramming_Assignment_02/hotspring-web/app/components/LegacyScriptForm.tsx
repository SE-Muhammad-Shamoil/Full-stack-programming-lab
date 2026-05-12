"use client";

import type { FormHTMLAttributes, ReactNode } from "react";

export type LegacyFormHandler =
  | "handleLogin"
  | "handleRegister"
  | "handleContact"
  | "handleForgot"
  | "handleCheckout"
  | "handleSave";

/** Wraps forms that rely on globals defined in `/public/js/script.js` (jQuery document.ready). */
export default function LegacyScriptForm({
  id,
  handler,
  children,
  ...rest
}: {
  id: string;
  handler: LegacyFormHandler;
  children: ReactNode;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "id" | "onSubmit" | "children">) {
  return (
    <form
      {...rest}
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        const fn = (window as unknown as Record<string, ((ev: SubmitEvent) => boolean) | undefined>)[handler];
        fn?.(e.nativeEvent as SubmitEvent);
      }}
    >
      {children}
    </form>
  );
}
