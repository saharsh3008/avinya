import { useState } from "react";
import { Paper, Tab, Tabs } from "@mui/material";
import ReactPropTypes from "prop-types";
import dayValues from "./data.jsx";
import styling from "./event.module.css";
function DayDataLeft(props) {
  return (
    <div className={styling.master1}>
      <div className={styling.smallBox}>
        <div className={styling.triangleLeft}></div>
        <h1 className={styling.num}>{props.num}</h1>
      </div>
      <div className={styling.bigBox}>
        <p className={styling.content}>{props.context}</p>
        <a className={styling.infoLinkLeft} href={props.info}>
          More Info
        </a>
      </div>
    </div>
  );
}

function DayDataRight(props) {
  return (
    <div className={styling.master2}>
      <div className={styling.bigBox}>
        <p className={styling.content}>{props.context}</p>
        <a className={styling.infoLinkRight} href={props.info}>
          More Info
        </a>
      </div>
      <div className={styling.smallBox}>
        <div className={styling.triangleRight}></div>
        <h1 className={styling.num}>{props.num}</h1>
      </div>
    </div>
  );
}

DayDataLeft.propTypes = {
  num: ReactPropTypes.string,
  context: ReactPropTypes.string,
  info: ReactPropTypes.string,
};
DayDataRight.propTypes = {
  num: ReactPropTypes.string,
  context: ReactPropTypes.string,
  info: ReactPropTypes.string,
};

function Event() {
  const [activeDay, setActiveDay] = useState(1);
  const handleChange = (event, newValue) => {
    setActiveDay(newValue);
  };

  return (
    <div className={styling.main}>
      <h1
        className={`${styling["eventHeading"]} text-8xl my-5 font-extrabold py-4`}
      >
        EVENTS
      </h1>
      <div className="flex flex-col text-center items-center justify-center mb-5">
        <Paper square>
          <Tabs
            value={activeDay}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="Tabs"
            sx={{
              "& button": {
                backgroundColor: "black",
                color: "white",
                fontSize: "1.5rem",
                width: "10rem",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontStyle: "normal",
              },
              "& button.Mui-selected": {
                color: "primary",
              },
            }}
          >
            <Tab label="Day 01" value={1} />
            <Tab label="Day 02" value={2} />
            <Tab label="Day 03" value={3} />
            <Tab label="Day 04" value={4} />
          </Tabs>
        </Paper>
      </div>
      <h1 className={`${styling["dateValue"]} text-4xl my-12`}>
        {dayValues[activeDay].date}
      </h1>
      <div className={styling.allContent}>
        <div className={styling.master}>
          <DayDataLeft
            num="1"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
          />
          <DayDataRight
            num="2"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
          />
        </div>
        <div className={styling.master}>
          <DayDataLeft
            num="3"
            context={dayValues[activeDay].block3}
            info={dayValues[activeDay].infoBlock3}
          />
          <DayDataRight
            num="4"
            context={dayValues[activeDay].block4}
            info={dayValues[activeDay].infoBlock4}
          />
        </div>
        <div className={styling.master}>
          <DayDataLeft
            num="5"
            context={dayValues[activeDay].block5}
            info={dayValues[activeDay].infoBlock5}
          />
          <DayDataRight
            num="6"
            context={dayValues[activeDay].block6}
            info={dayValues[activeDay].infoBlock6}
          />
        </div>
        <div className={styling.master}>
          <DayDataLeft
            num="7"
            context={dayValues[activeDay].block7}
            info={dayValues[activeDay].infoBlock7}
          />
          <DayDataRight
            num="8"
            context={dayValues[activeDay].block8}
            info={dayValues[activeDay].infoBlock8}
          />
        </div>
      </div>
    </div>
  );
}

export default Event;
