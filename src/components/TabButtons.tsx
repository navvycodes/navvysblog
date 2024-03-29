import React from "react";
import { Button, Box } from "@mui/material";

const boxStylings = {
  justifyContent: "space-between",
};

const buttonStylings = {
  borderRadius: "20px",
  mx: "3px",
  backgroundColor: "#0E3164",
  fontFamily: "Ubuntu",
};

export const TabButtons = () => {
  const tabs = [
    "Home",
    "Stuff I'm Doing",
    "Reviews",
    "Random Thoughts",
    "About",
  ];
  return (
    <Box sx={boxStylings}>
      {tabs.map((tab, index) => (
        <Button key={index} variant="contained" sx={buttonStylings}>
          {tab}
        </Button>
      ))}
    </Box>
  );
};
