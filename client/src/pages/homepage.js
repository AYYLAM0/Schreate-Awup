import React from 'react'
import Login from '../components/Login/login'
import Calendar from '../components/calendar/calendar'
import MainPage from './mainPage'



const HomePage = () => {

    return (
        <>
            <Login />
            <Calendar/>
            <MainPage />

        </>
    )
}

export default HomePage;