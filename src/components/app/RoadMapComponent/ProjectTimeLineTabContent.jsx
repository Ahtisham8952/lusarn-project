import { Box } from '@chakra-ui/react'
import React from 'react'
import TimelineCard from './TimelineCard'
import YearBar from './YearBar'
const Timeline2022=[
    {
        Value:'0',
        percentage:'0%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'none'
    },
    {
        Value:'0',
        percentage:'0%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'none'
    },
    {
        Value:'0',
        percentage:'0%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'none'
    },
]
const Timeline2021=[
    {
        Value:'100',
        percentage:'100%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'none'
    },
    {
        Value:'20',
        percentage:'20%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'none'
    },
    {
        Value:'0',
        percentage:'0%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'none'
    },
]
const Timeline2020=[
    {
        Value:'100',
        percentage:'100%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'none'
    },
    {
        Value:'100',
        percentage:'100%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'flex'
    },
    {
        Value:'100',
        percentage:'100%',
        description:'Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.',
        users:'7',
        timline:'Feb-Jun (4 months)',
        thirdbtn:'flex'
    },
]
const ProjectTimeLineTabContent = () => {
  return (
    <Box>
        <Box>   
        <YearBar Year="2022"/>
        <TimelineCard TimeLine={Timeline2022}/>
        </Box>
        <Box>   
        <YearBar Year="2021"/>
        <TimelineCard TimeLine={Timeline2021}/>
        </Box>
        <Box>   
        <YearBar Year="2020"/>
        <TimelineCard TimeLine={Timeline2020}/>
        </Box>
        

    </Box>
  )
}

export default ProjectTimeLineTabContent