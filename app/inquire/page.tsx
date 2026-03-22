import type { Metadata } from "next";
import InquireContent from "@/components/inquire/InquireContent";

export const metadata: Metadata = {
  title: "Inquire — Seven Senses",
  description:
    "Begin a confidential conversation about your retreat. Seven Senses welcomes inquiries from those seeking considered, unhurried experiences.",
};

export default function InquirePage() {
  return <InquireContent />;
}
