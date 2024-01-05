import { useState } from "react";

const formatPhoneNumber = (val: string): string => {
  const phone = val.replace(/\D/g, "");

  const company = phone.slice(3, 5),
    first3 = phone.slice(5, 8),
    first2 = phone.slice(8, 10),
    last2 = phone.slice(10, 12);

  return `+998 ${company.length === 2 ? company + " " : company}${
    first3.length === 3 ? first3 + " " : first3
  }${first2.length === 2 ? first2 + " " : first2}${last2}`.trim();
};

export const usePhoneNumber = (): [string, string, (val: string) => void] => {
  const [phoneNumber, setPhoneNumber] = useState<string>("998");

  const phoneNumberHandler = (val: string) => {
    const phone = val.replace(/\D/g, "");
    setPhoneNumber((prev) => {
      return phone.length > 2 ? phone : prev;
    });
  };

  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return [phoneNumber, formattedPhoneNumber, phoneNumberHandler];
};
