import React from "react";
import Btn_Zoom from "../Common/btn_Zoom";
import LinkedContains from "@/Components/linkedinservicesConponent/linkedContaind";

const LinkedBody = () => {
  return (
    <div className="container mx-auto">
      <LinkedContains />
      <div className="mt-44">
        <Btn_Zoom P="Book a Zoom call with us today to learn more about our" P2="LinkedIn services and take the first step in building your presence and authority on LinkedIn."/>
      </div>
    </div>
  );
};

export default LinkedBody;
