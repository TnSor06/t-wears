import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles.js";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory></Directory>
    </HomePageContainer>
  );
};
