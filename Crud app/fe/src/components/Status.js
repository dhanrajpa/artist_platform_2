import React from 'react'

function Status({ dataStatus }) {
    console.log(dataStatus);
    // let data
    if (dataStatus == "online") {

        return (
            <>
                <span
                    style={
                        {
                            backgroundColor: "green",
                            height: "3px",
                            width: "3px"
                        }
                    }></span>
            </>
        )

    } else {
        return (<span
            style={
                {
                    backgroundColor: "red",
                    height: "3px",
                    width: "3px"
                }
            }></span>
        )
    }
}

export default Status
