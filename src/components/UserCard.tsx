interface UserCardProps{
    id: string;
    name: string;
    url: string;
    gender: 'M' | 'F';
    role: string;
    isAdmin: boolean;
  }
  
  const UserCard = (props: UserCardProps) => {
    const cls = props.gender === 'M' ? 'card male' : 'card female';
    const admn = props.isAdmin && '★';
    return  (
      <div className={cls}>
        <img src={props.url} alt={props.id} className="thumb"/>
        <p>{admn} {props.name}</p>
        <p>{props.role}</p>
      </div>
    )
  }
  export default UserCard;