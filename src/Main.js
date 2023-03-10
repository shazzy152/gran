import React, { useState, useEffect }  from 'react';
import SearchBox from "./SearchBox";
import Maps from "./Maps";

const Main = () => {

    //state value for selected location
    const [selectPosition, setSelectPosition] = useState(null);

    //Media query specification
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1200px)").matches
      )

    useEffect(() => {
        window
        .matchMedia("(max-width: 1200px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
    <>
      {/* Desktop View */}
      {!matches && 
      <div className="main-container">
        <div className="info-cont">
          <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
        </div>
        <div className="map-cont">
          <Maps selectPosition={selectPosition} />
        </div>
      </div>}
      {/* Mobile View */}
      {matches && 
      <div className="main-container">
        <div className="map-cont">
          <Maps selectPosition={selectPosition} />
        </div>
        <div className="info-cont">
          <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
        </div>
      </div>}
      <style>{`
        .main-container{
          display: flex;
          width: 100vw;
          height: 100vh;
          overflow: scroll;
        }
        .info-cont{
          width: 40vw;
          padding: 20px;
          height: auto;
        }
        .map-cont{
          height: inherit;
          width: 60vw;
          align-self: center;
        }
        @media only screen and (max-width: 1200px){
            .main-container{
                flex-direction: column;
            }
            .info-cont{
                width: 100%;
            }
            .map-cont{
                height: 80%;
                width: 100%;
            }
        }
          `}
      </style>
    </>
  )
}

export default Main