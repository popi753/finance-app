export const changeVisibility = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const input = (e.currentTarget as HTMLElement).parentElement?.querySelector(".auth-input") as HTMLInputElement;
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        };
    }