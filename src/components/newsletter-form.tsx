"use client";

import { useState } from "react";
import { ButtonPrimary } from "@/components/button";

export function NewsletterForm() {
  const [held, setHeld] = useState(false);

  return (
    <form
      className="mt-space-4 flex max-w-xl flex-col gap-space-2"
      onSubmit={(event) => {
        event.preventDefault();
        setHeld(true);
      }}
    >
      <label htmlFor="letter-email" className="eyebrow">
        Email
      </label>
      <div className="flex flex-col gap-space-2 sm:flex-row sm:items-center">
        <input
          id="letter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="name@example.com"
          className="min-h-11 w-full border border-line bg-surface px-3 text-base text-ink placeholder:text-ink-muted"
        />
        <ButtonPrimary type="submit">Request a note</ButtonPrimary>
      </div>
      <p role="status" className="min-h-6 text-sm text-ink-muted">
        {held ? "This address stayed in the browser. The letter is not open yet." : ""}
      </p>
    </form>
  );
}
