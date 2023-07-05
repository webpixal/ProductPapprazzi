import ContactNav from "@/Components/ContactusComponents/contactNav";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import ContactBody from "@/Components/ContactusComponents/contactBody";

const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <div className={OpenSans.className}>
      <ContactNav />
      <ContactBody />
    </div>
  );
};

export default index;
