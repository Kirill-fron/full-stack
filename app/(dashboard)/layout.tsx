import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next Pizza",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            >
                DASHBOARD HEADER
                {children}
            </body>
        </html>
    );
}
