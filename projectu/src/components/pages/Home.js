import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import '../../static/css/home.css'
import searchIcon from '../../static/svg/searchW.svg'

let Home = (props) => {
    const [search, setSearch] = useState('_')

    let handleKeyPress = (event) => {
        console.log('asd')
        if (event.key === 'Enter'){
            props.enteredSearch()
            props.history.push('/browse/search')
        }
    }
    
    return (
        <div className="home-container">
            <div style={{height: "70px"}} />
            <h1 className="home-header">Im looking for:</h1>
            <div className="home-dynamic-filler-container">
                <h3 className="df-content df-starter">All with</h3>
                <h3 className="df-content " style={{color: 'rgb(245,165,0)'}}>{search}</h3>
                <h3 className="df-content df-finisher">skills</h3>
                <h3 className="df-content df-starter">Users with</h3>
                <h3 className="df-content " style={{color: 'rgb(1,152,173)'}}>{search}</h3>
                <h3 className="df-content df-finisher">interests</h3>
                <h3 className="df-content df-starter">Posts with titles containing</h3>
                <h3 className="df-content " style={{color: 'rgb(16,79,37)'}}>{search}</h3>
                <h3 className="df-content df-finisher"></h3>
                <h3 className="df-content df-starter">Users with</h3>
                <h3 className="df-content " style={{color: 'rgb(152,183,49)'}}>{search}</h3>
                <h3 className="df-content df-finisher">or similar usernames</h3>
                <h3 className="df-content df-starter">Find creatives with</h3>
                <h3 className="df-content " style={{color: 'rgb(113,112,255)'}}>{search}</h3>
                <h3 className="df-content df-finisher">skills</h3>
            </div>
            <div className="home-search-bar">
                <Link to={`/browse/${'asd'}`} className="neutralize-link home-enter-search home-search-hover" onClick={() => props.enteredSearch()}>
                    <img src={searchIcon} className="home-search-icon" alt="search" />
                </Link>
                <div className="home-search-hr" />
                <input className="home-search-input" type="text" onChange={(e) => {
                    props.onQueryChange(e)
                    setSearch(e.target.value)
                    }} onKeyPress={(e) => handleKeyPress(e)} />
                <div className="home-search-hr" />
                <div className="home-searching-for home-search-hover">
                    all
                </div>
            </div>
            <div className="home-description">
                ProjectU is filling the gab between creatives. 
                We help you find people with similar talents and skills to work on projects together. 
                We believe that through simple communication, amazing things can come up.
            </div>
        </div>
    )
}

Home = withRouter(Home)

//const mapStateToProps = (state) => {
//	return {
        
//	}
//}
export default connect(
    null
)(Home)