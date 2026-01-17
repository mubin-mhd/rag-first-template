"use client";

import { createContext, useContext } from "react";

export type UIComponents = {
  ChatLayout?: React.FC<any>;
  Sidebar?: React.FC<any>;
};

const UIContext = createContext<UIComponents>({});

export function UIProvider({
  components,
  children,
}: {
  components: UIComponents;
  children: React.ReactNode;
}) {
  return <UIContext.Provider value={components}>{children}</UIContext.Provider>;
}

export function useUI() {
  return useContext(UIContext);
}
