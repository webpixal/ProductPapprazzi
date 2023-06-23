import React from "react";

import Btn_Zoom from "../Common/btn_Zoom";
import DesignerDetails from "./designerDetails";
import CommonTextLine from "./commonTextLine";
import PaymentCards from "./paymentCards";
const WebDesignBuild = () => {
  return (
    <main className="container mx-auto">
      <DesignerDetails />
      <PaymentCards />
      <Btn_Zoom />
    </main>
  );
};

export default WebDesignBuild;
