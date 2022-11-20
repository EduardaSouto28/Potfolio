import create from "zustand";
import { persist } from "zustand/middleware";

export const darkMode = create(
    persist(
        (set) => (
            {
                classHome: "homepage-dark",
                classNav: "homepage__nav-dark",
                darkMode: () => set((state) => (
                    { 
                        classHome: "homepage-dark" ,
                        classNav: "homepage__nav-dark"
                    })),
                lightMode: () => set((state) => (
                    { 
                        classHome: "homepage-light" ,
                        classNav: "homepage__nav-light"
                    })),
            }
        ),
    )
);

