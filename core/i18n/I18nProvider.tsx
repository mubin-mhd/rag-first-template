"use client";
import { createContext, useContext } from "react";

const I18nContext = createContext<Record<string, string>>({});

export function I18nProvider({
  messages,
  children,
}: {
  messages: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>
  );
}

export function useT() {
  const messages = useContext(I18nContext);

  return (key: string) => messages[key] || key;
}
