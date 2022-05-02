import React, { useState } from 'react';
import './Card.css';
import {motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {
                expanded ?
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} /> :
                    <CompactCard param={props} setExpanded={() => setExpanded(true)} />
            }

        </AnimateSharedLayout>
    )
}



//CompactCard
function CompactCard({ param, setExpanded }) {
    const Png = param.png;

    return (
        <motion.div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            onClick={setExpanded}
            layoutId='ExpandedCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>

            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>

        </motion.div>
    )
}
//ExpandedCard
function ExpandedCard({ param, setExpanded }) {

    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    
    return (
        <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <span>{param.title}</span>
        <div className="chartContainer">
          <Chart options={data.options} series={param.series} type="area" />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    );
}


export default Card;

/* Different design:
replace this:

<motion.div className="ExpandedCard"
style={{
    background: param.color.backGround,
    boxShadow: param.color.boxShadow
}}
layoutId='ExpandedCard'
>
<div  style={{alignSelf:'flex-end', cursor:'pointer', color:'white'}}
   >
    <UilTimes onClick={setExpanded} />
</div>
<span style={{color:'white', fontWeight:'bold',fontSize:'1.5rem'}}>{param.title}</span>
<div className="chartContainer">
    <Chart series = {param.series} type='area' options={data.options}/>
    </div>
<span style={{color:'white'}}>Last 24 hours</span>
</motion.div>

and remove from css

.ExpandedCard > span:nth-of-type(1) {
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-shadow: 0px 0px 15px white;
}
.ExpandedCard > span:nth-of-type(2) {
  color: rgb(236, 236, 236);
  font-size: 15px;
}

*/