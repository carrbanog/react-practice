import getImageUrl from './user.js';

function Profile({ personInfo }) {
  return (
    <>
      <Header person={personInfo} />
      <Avatar person={personInfo} />
    </>
  );
}

function Header({ person }) {
  return(
    <h1>{person.name}</h1>
  );
}

function Avatar({person}){
  return(
    <img 
      className="avatar"
      src={getImageUrl(person)}
    >
    </img>
  )
}

export default Profile;
