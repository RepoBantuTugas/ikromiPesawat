import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/search_result.css";

function CardResult() {
  return (
    <div className="container_accordion">
      <Accordion className="box_accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Jet Air - Economy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur
            corrupti quisquam tempore mollitia commodi. Explicabo magnam
            laboriosam molestiae quo.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CardResult;
