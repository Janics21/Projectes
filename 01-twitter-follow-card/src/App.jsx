import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'kikobeats',
        name: 'Kiko',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'Paco Hdez',
        name: 'Paco Hernandez',
        isFollowing: true
    },
    {
        userName: 'TMChain',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}