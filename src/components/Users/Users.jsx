import React from "react";
import s from './Users.module.css'

class Users extends React.Component {

    constructor(props) {
        super(props);
            this.props.setUsers([
                    {
                        id: 1,
                        photoUrl: 'https://lh3.googleusercontent.com/TMrev6WWnXwyrJKUiHnzH1lUn-PIAyeazq5QQ5bIMJrqumqH2owjx9I9rghvV6SkPcA',
                        followed: false,
                        fullName: 'Van Darkholme',
                        status: 'Gachi is art',
                        location: {city: 'Los-Angeles', country: 'USA'}
                    },
                    {
                        id: 2,
                        photoUrl: 'https://lh3.googleusercontent.com/TMrev6WWnXwyrJKUiHnzH1lUn-PIAyeazq5QQ5bIMJrqumqH2owjx9I9rghvV6SkPcA',
                        followed: false,
                        fullName: 'Billy',
                        status: 'Looking for the Boss',
                        location: {city: 'Holywood', country: 'USA'}
                    },
                    {
                        id: 3,
                        photoUrl: 'https://lh3.googleusercontent.com/TMrev6WWnXwyrJKUiHnzH1lUn-PIAyeazq5QQ5bIMJrqumqH2owjx9I9rghvV6SkPcA',
                        followed: false,
                        fullName: 'Boss of Gym',
                        status: 'Where are you Billy',
                        location: {city: 'San-Francisco', country: 'USA'}
                    },
                    {
                        id: 4,
                        photoUrl: 'https://lh3.googleusercontent.com/TMrev6WWnXwyrJKUiHnzH1lUn-PIAyeazq5QQ5bIMJrqumqH2owjx9I9rghvV6SkPcA',
                        followed: false,
                        fullName: 'Yuliya',
                        status: 'My boyfriend is the greatest',
                        location: {city: 'Moscow', country: 'Russia'}
                    },
                    {
                        id: 5,
                        photoUrl: 'https://lh3.googleusercontent.com/TMrev6WWnXwyrJKUiHnzH1lUn-PIAyeazq5QQ5bIMJrqumqH2owjx9I9rghvV6SkPcA',
                        followed: false,
                        fullName: 'Nikis',
                        status: 'Sell Priora',
                        location: {city: 'Stavropol', country: 'Russia'}
                    },
                    {
                        id: 6,
                        photoUrl: 'https://lh3.googleusercontent.com/TMrev6WWnXwyrJKUiHnzH1lUn-PIAyeazq5QQ5bIMJrqumqH2owjx9I9rghvV6SkPcA',
                        followed: false,
                        fullName: 'Andrey',
                        status: 'Buy a garage in London',
                        location: {city: 'London', country: 'England'}
                    }
                ]
            )
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users