

import {
  pieArcClasses,
  PieChart,
  pieClasses,
} from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';


import "../../styles/budgetsPage/budgetsChart.css"


export default function BudgetsPageChartContainer() {

    const arr = [{
        id: 1,
        label: "Entertainment",
        value:  80,
        color: "var(--red)",
        limit: 150,
    },
    {
        id:2,
        label: "Bills",
        value:  10,
        color: "var(--purple)",
        limit: 150,
    },{
        id:3,
        label: "Personal Care",
        value:  20,
        color: "var(--orange)",
        limit: 150,
    },]

    const arr2 = [{
        id: 12,
        label: "Netflix",
        value:  30,
        color: "var(--red)"
    },
    {
        id: 11,
        label: "Spotify",
        value:  30,
        color: "var(--purple)"
    },
    {
        id: 13,
        label: "Setanta Sports",
        value:  20,
        color: "var(--orange)"
    },
    {
        id:21,
        label: "Electricity",
        value:  10,
        color: "var(--purple)",
    },{
        id:31,
        label: "Clothes",
        value:  20,
        color: "var(--orange)",
    },]

    
    return(
        <div className="budgets-page_chart-container content-box">
             <Box className='pie-chart_box'>
                        <PieChart
                                sx={{
                                    [`.${pieClasses.series}[data-series="inner"] .${pieArcClasses.root}`]: {
                                    opacity: 0.6,
                                    },
                                }}
                              
                                series={[
                                {   
                                    id: "inner",
                                    innerRadius: 60,
                                    outerRadius: 75,
                                    data: arr2,
                                    highlightScope: { fade: 'global', highlight: 'item' },
                                },
                                {   
                                    id: "outer",
                                    innerRadius: 75,
                                    outerRadius: 100,
                                    data: arr,
                                    highlightScope: { fade: 'series', highlight: 'item' },
                                    
                                },
                                ]}
                                height={240}
                                width={240}
                                hideLegend
                                slotProps={{
                                    tooltip: {
                                        position: "left",
                                        
                                   },
                                }}
                            >    
                             <text x="50%" y="50%" className="pie-chart_text">
                                <tspan x="50%" dy="0em" fill="var(--grey-900)" className="text-1 text-dark">$338</tspan>
                                <tspan x="50%" dy="1.5em" fill="var(--grey-500)" className="text-5 text-light">of $975 limit</tspan>
                            </text>
                        </PieChart>

             </Box>
             <div className="budgets-page_chart-details">
                <h2 className='text-2 text-dark'>Spending Summary</h2>
                <ul className="budgets-page_chart-list">
                    {arr.map((item, index)=>{
                        return(<ChartItem key={index} {...item}/>)
                    })}
                </ul>
             </div>
        </div>
    )
}

type ChartItemProps = {
    label: string,
    value: number,
    limit: number,
}

function ChartItem({label,value,limit}:ChartItemProps) {

    return(
        <li className="budgets-page_chart-item">
            <div className="budgets-page_chart-item_title-container">
                <div className="vertical-line">
                </div>
                <span className="text-4 text-light">{label}</span>
            </div>
            <div className="budgets-page_chart-item_amount">
                    
                    <span className="text-3 text-bold text-dark">${value}</span>
                    <span className="text-3 text-light">{`of $${limit}`}</span>
            </div>
            
        </li>
    )
}