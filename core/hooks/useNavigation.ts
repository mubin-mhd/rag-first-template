import { useState } from "react";

export function useNavigation() {
    const [activeNav, setActiveNav] = useState("home");

    return { activeNav, setActiveNav };
}
