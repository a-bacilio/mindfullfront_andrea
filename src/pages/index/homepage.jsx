import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import axios from 'axios';

function Homepage() {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const [currentLevel, setCurrentLevel] = useState(null);

    useEffect(() => {
        // Fetch user's current level from the backend
        const fetchCurrentLevel = async () => {
            try {
                const response = await axios.get('/api/current-level', {
                    headers: {
                        Authorization: `Bearer ${authToken}` // Send authentication token
                    }
                });
                setCurrentLevel(response.data.currentLevel);
            } catch (error) {
                console.error('Error fetching current level:', error);
            }
        };

        fetchCurrentLevel();
    }, [authToken]);

    // Render different content based on the user's current level
    const renderContent = () => {
        switch (currentLevel) {
            case 1:
                return (
                    <div>
                        <h1>Welcome to Level 1</h1>
                        <p>This is the content for level 1</p>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h1>Welcome to Level 2</h1>
                        <p>This is the content for level 2</p>
                    </div>
                );
            // Add more cases for additional levels as needed
            default:
                return (
                    <div>
                        <h1>Welcome to the Homepage!</h1>
                        <p>This is the default content for users who haven't reached any level yet.</p>
                    </div>
                );
        }
    };

    return (
        <div className="">
            {renderContent()}
            <Link to="/">Go to Homepage</Link>
        </div>
    );
}

export default Homepage;
