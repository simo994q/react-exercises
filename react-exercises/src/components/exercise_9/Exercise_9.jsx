import { useEffect, useState } from 'react'
import style from './Exercise_9.module.scss'
import { Card } from './Card'

export function Exercise_9 () {

    const [userData, setUserData] = useState([])

    useEffect(() => {

        const fetchUsers = () => {
            const URL = 'https://random-data-api.com/api/users/random_user?size=10'
            fetch(URL).then(res => res.json()).then(data => setUserData(data))
        }

        fetchUsers()

    }, [])

    console.log(userData);

    return (
        <div className={style.container}>
            <section>
                {
                    userData && userData.map((user) => {
                        return (
                            <Card 
                            key={user.id}
                            avatar={user.avatar}
                            firstName={user.first_name}
                            lastName={user.last_name}
                            title={user.employment.title}
                            keySkill={user.employment.key_skill}
                            city={user.address.city}
                            streetName={user.address.street_name}
                            state={user.address.state}
                            country={user.address.country}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}