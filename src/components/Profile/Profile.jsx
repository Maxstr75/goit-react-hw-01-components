
// import PropTypes from 'prop-types';
// import css from './Profile.module.css';


export default function Profile({ username, tag, location, avatar, stats }) {
    
    return (
        <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
  <li>
            <span class="label" >Followers   </span>
      <span class="quantity">5603</span>
    </li>
    <li>
      <span class="label">Views   </span>
      <span class="quantity">   4827</span>
    </li>
    <li>
        <span class="label" >Likes   </span>
      <span class="quantity">1308</span>
    </li>
  </ul>
</div>
  );
}

// ReactDOM.render(
//     <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={ user.stats.followers }
//         views={ user.stats.views }
//         likes={ user.stats.likes } 
//     />,
//     document.querySelector('root'),
// );

 