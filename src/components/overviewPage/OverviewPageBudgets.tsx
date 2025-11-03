import OverviewPageBoxTitle from './OverviewPageBoxTitle';
import { OverviewPagePotsTab } from './OverviewPagePots';

import {
  pieArcClasses,
  PieChart,
  pieClasses,
} from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';

import '../../styles/overviewPage/overviewPageBudgets.css'

export default function OverviewPageBudgets() {

    const arr = [{
        id: 1,
        label: "Entertainment",
        value:  80,
        color: "var(--red)"
    },
    {
        id:2,
        label: "Bills",
        value:  10,
        color: "var(--purple)",
    },{
        id:3,
        label: "Personal Care",
        value:  20,
        color: "var(--orange)",
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

    return (
        <div className="overview-page_budgets overview-page_content-box">
            <OverviewPageBoxTitle title='Budgets' details="See Details" link="/budgets"/>

            <div className='overview-page_budgets_content'>
                
                <Box className='overview-page_budgets_chart'>
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
                                height={200}
                                width={200}
                                hideLegend
                                slotProps={{
                                    tooltip: {
                                        position: "left",
                                        
                                   },
                                }}
                            >    
                             <text x="50%" y="50%" className="overview-page_budgets_chart-text">
                                <tspan x="50%" dy="0em" fill="var(--grey-900)" className="text-1 text-dark">$338</tspan>
                                <tspan x="50%" dy="1.5em" fill="var(--grey-500)" className="text-5 text-light">of $975 limit</tspan>
                            </text>
                        </PieChart>

                </Box>

                <ul className='overview-page_budgets_list'>
                    {arr.map((item, index) => (
                        <OverviewPagePotsTab key={index} {...item} />
                    ))}
                </ul>

            </div>
        </div>
    )
};







