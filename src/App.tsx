import React from 'react';
import './App.css';
import UserCard from './components/UserCard'


//INTERFACE IN TYPESCRIPT FOR DEFINE PROPERTIES OF USER
interface User {
  id: string;
  name: string;
  url: string;
  gender: 'M' | 'F';
  role: string;
  isAdmin: boolean;
}

//CONST USER THAT USE USER'S TYPE
const USER1:  User ={
  id: '1',
  name: 'Marco Madeddu',
  url: 'https://media-exp1.licdn.com/dms/image/C4E03AQH2DwWbx6NdrQ/profile-displayphoto-shrink_800_800/0/1642694690487?e=1670457600&v=beta&t=7grqCwOxLFc7FhivAOpI2WpSlLnIVqzd-G9NG46jCik',
  gender: 'M',
  role: 'React Developer',
  isAdmin: true,
};

const USER2:  User ={
  id: '2',
  name: 'Vittorio Mascia',
  url: 'https://media-exp1.licdn.com/dms/image/C4D03AQH5DXaK7fPrPQ/profile-displayphoto-shrink_800_800/0/1647633729329?e=1670457600&v=beta&t=uRqhJWfNu8uuEAnx_i7gVoMTKNSaL_-suXP3Va_0bew',
  gender: 'M',
  role: 'IT Manager',
  isAdmin: true,
};

const USER3:  User ={
  id: '3',
  name: 'Alessandro Manenti',
  url: 'https://media-exp1.licdn.com/dms/image/C4D03AQEao5087l0z-A/profile-displayphoto-shrink_200_200/0/1616520049835?e=1670457600&v=beta&t=LirjeH_n2g3ODm-qr2G4PbCoVtiwuX7pIdDukbgBv18',
  gender: 'M',
  role: 'SalesForce Developer',
  isAdmin: false,
};

const USER4:  User ={
  id: '4',
  name: 'Vittorio Contena',
  url: 'https://media-exp1.licdn.com/dms/image/C4D03AQGQJwmqVwV9Tw/profile-displayphoto-shrink_800_800/0/1568661447957?e=1670457600&v=beta&t=EsGp1YHCu1LBAu1RtCOqF8YL5uAvPkaTNEQkYVR1t80',
  gender: 'M',
  role: 'IT Assistant',
  isAdmin: true,
};

function App() {

  return (
    <>
    {/* <UserCard name={USER1.name} url={USER1.url} gender={USER1.gender} role={USER1.role} id={USER1.id} admin={USER1.isAdmin}></UserCard>
    <UserCard name={USER2.name} url={USER2.url} gender={USER2.gender} role={USER2.role} id={USER2.id} admin={USER2.isAdmin}></UserCard>
    <UserCard name={USER3.name} url={USER3.url} gender={USER3.gender} role={USER3.role} id={USER3.id} admin={USER3.isAdmin}></UserCard>
    <UserCard name={USER4.name} url={USER4.url}  gender={USER4.gender} role={USER4.role} id={USER4.id} admin={USER4.isAdmin}></UserCard> */}
    <UserCard {...USER1}></UserCard>
    <UserCard {...USER2}></UserCard>
    <UserCard {...USER3}></UserCard>
    <UserCard {...USER4}></UserCard>
    </>
  );
}

export default App;

