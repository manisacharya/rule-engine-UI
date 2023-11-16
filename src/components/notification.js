import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Notification() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/precepted-notification/3100`, {})
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])

    return (
        <div>
            <div class="ui cards">
                {APIData.map((data) => {
                    return (
                    <div class="ui red fluid card">
                        <div class="content">
                            <div class="header">{data.name}</div>
                            <div>{data.value}</div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}