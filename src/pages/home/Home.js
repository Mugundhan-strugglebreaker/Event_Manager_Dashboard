import React from 'react'
import Charts from '../../component/charts/Charts'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import Widget from '../../component/widget/Widget'
import './home.css'
function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Charts/>
            <Widget/>
        </div>
    )
}

export default Home
