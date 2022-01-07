import "./App.css";
import Inputs from "./components/Inputs";
import { useState } from "react";
import AmortizationTable from "./components/AmortizationTable";
import Box from "@mui/material/Box";
import Logo from "./components/Logo";
import rows from "./services/Rows";

function App() {
  const [loan, setLoan] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");
  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Inputs
          onChange={(loan, nper, rate) => {
            setLoan(loan);
            setNper(nper);
            setRate(rate);
          }}
        />
        <Box mt={2}>
          <Logo />
        </Box>
      </Box>
      <Box mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
        <AmortizationTable rows={rows(loan, nper, rate)} />
      </Box>
    </Box>
  );
}

export default App;
