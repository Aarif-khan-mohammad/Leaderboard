import React from 'react'
import {useState, useEffect } from 'react'
import { ErrorMessage, LeaderboardContainer ,LoadingViewContainer } from './styledComponents'
import LeaderboardTable from '../LeaderboardTable'

const Leaderboard = () => {
  const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

  const [apiResponse, setApiResponse] = useState({status : apiStatusConstants.initial , data : null , errorMsg : null})

  useEffect(()=>{
    const getLeaderboardData = async ()=>{
      const url = 'https://apis.ccbp.in/leaderboard'
      const options = {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
        },
      }

      setApiResponse({
        status : apiStatusConstants.inProgress,
        data : null,
        errorMsg : null
      })

      const response = await fetch(url, options)
      const responseData = await response.json()
      
      if(response.ok){
        setApiResponse( (prevApiResponse)=>( {
          ...prevApiResponse,
          status : apiStatusConstants.success,
          data : responseData,
          errorMsg:null
        }))
      }
      
    }
    getLeaderboardData()
  } , [])

  const renderLoadingView = ()=>{
    return (
      <LoadingViewContainer>
        <ErrorMessage>Loading ...</ErrorMessage>
      </LoadingViewContainer>
    )
  }
  const renderSuccessView = ()=>{
    const {data} = apiResponse
    const formattedLeaderboardData = data.leaderboard_data.map(eachUser => ({
      id: eachUser.id,
      rank: eachUser.rank,
      name: eachUser.name,
      profileImgUrl: eachUser.profile_image_url,
      score: eachUser.score,
      language: eachUser.language,
      timeSpent: eachUser.time_spent,
    }))
    return <LeaderboardTable leaderboardData = {formattedLeaderboardData} />
  }
  const renderFailureView = ()=>{}

  const renderLeaderboarder = ()=>{
    const {status} = apiResponse
    switch(status){
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()

      default:
        return null
    }
  }

  return (
    <LeaderboardContainer>
      {renderLeaderboarder()}
    </LeaderboardContainer>
  )
}

export default Leaderboard
