import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Prompt from './prompt';

function FetchUser() {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/');
            setIsLoading(true);
            setError('');
            const { name, email, picture } = response.data.results[0];
            const fullName = `${name.title} ${name.first} ${name.last}`;
            setUser({
                name: fullName,
                email,
                img: picture.large
            })
        } catch (e) {
            setError('Error fetching user');
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div>
            <Prompt
            title='Color Picker'
            list={[
                'Display 4 color buttons: Red, Blue, Green, Yellow',
                'A div with that color as the background',
                'A message: “You selected: Green',
                'Add a “Clear” button that hides the color box and message'
            ]}
            concepts={'useState'} />

            {isLoading && <p> Loading User... </p>}
            {user && 
            <div>
                <img height='100px' width='100px' src={user.img} alt='user'/>
                <br />
                name: {user.name}
                <br />
                email: {user.email}
            </div> }
            <button onClick={fetchUser}>Fetch Random User</button>
            {error}
        </div>
    )
}

export default FetchUser;