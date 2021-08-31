import React, {Component} from "react";


class MovieCard extends Component {

    render(){

        const { key, info, likedBy, users } = this.props;

        console.log(likedBy)
        console.log(users)

        if (!likedBy)
        {
            console.log('none');
        }
        else
        {
            console.log('some');
        }

        (!likedBy) ? (console.log('none')):(console.log('some'))

        return (
            <li key={info.id}>
                <h2>
                    {info.name}
                </h2>

                {!likedBy ?
                    (<p>None of the current users liked this movie</p>) :
                    (<ul>
                        {likedBy.map(userId => {return  (
                            <li key={userId}>
                                <p>{users[userId].name}</p>
                            </li>)
                        })}
                    </ul>)
                }

            </li>
        )
    }
}

export default MovieCard;