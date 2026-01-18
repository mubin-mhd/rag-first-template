import { useState } from "react";

export function useFiles() {
    const [files] = useState([
        {
            name: "Product_Specs.pdf",
            status: "Processing",
            date: "Today",
            size: "2.4 MB",
            type: "pdf",
        },
        {
            name: "Knowledge_Q1.md",
            status: "Processing",
            date: "Yesterday",
            size: "14 KB",
            type: "md",
        },
    ]);

    return { files };
}
