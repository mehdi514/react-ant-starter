import { createContext } from "react";

const userData = {
  john: {
    surname: "calderon",
    company: "blacklogics",
  },
  sophia: {
    surname: "adam",
    company: "starbucks",
  },
};

export const UserContext = createContext(userData);

export default userData;