import { useState } from "react";

export function useUser() {
    const [user] = useState({
        name: "Mike Taylor",
        avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        role: "Senior Designer",
    });

    return { user };
}
