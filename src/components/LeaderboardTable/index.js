import React from 'react'
import { LeaderboardHeader , Rank , Name , Score,
Language , TimeSpent ,LeaderboardTableContainer } from './styledComponents'
import LeaderboardRow from '../LeaderboardRow'

const LeaderboardTable = (props) => {
    const {leaderboardData} = props

    const renderLeaderboardHeader = ()=>(
        <LeaderboardHeader>
            <Rank>Rank</Rank>
            <Name>Name</Name>
            <Score>Score</Score>
            <Language>Language</Language>
            <TimeSpent>Time Spent</TimeSpent>
        </LeaderboardHeader>
    )
  return (
    <LeaderboardTableContainer>
        {renderLeaderboardHeader()}
        {leaderboardData.map(each => (
            <LeaderboardRow key ={each.id} userDetails = {each}/>
        ))}
    </LeaderboardTableContainer>
  )
}

export default LeaderboardTable
