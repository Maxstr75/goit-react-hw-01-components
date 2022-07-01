import Profile from './components/Profile/Profile';
import user from './user.json' 
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={ user.stats.followers }
        views={ user.stats.views }
        likes={ user.stats.likes } 
    />
    </div>
  );
};