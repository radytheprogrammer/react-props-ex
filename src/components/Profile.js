import React from "react";
import { getImageUrl } from './utils.js';

const Avatar =( {person, size} ) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

const Profile = () => {
  return (
    <>
    <div className="container">
      <div className="row">

        <div className="col-sm-4">
            <Avatar
              person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
              size={100}    
            />
          </div>
          <div className="col-sm-4">
            <Avatar
                size={90}
                person={{ 
                  name: 'Katsuko Saruhashi', 
                  imageId: 'YfeOqp2'
                }}
            />
          </div>
          <div className="col-sm-4"><Avatar
            size={80}
            person={{
              name: 'Aklilu Lemma', 
              imageId: 'OKS67lh'
            }}
          /></div>
          
        </div>
    </div>

    <div class="container">
        <div class="row">
              <div className="col-sm-4" style={{padding: '10px', color: 'magenta', border: '1px solid red'}}
              >
                Col 1
              </div>
              <div className="col-sm-4" style={{padding: '10px', color: 'green', border: '1px solid red'}}>
                Col 2
              </div>
              <div className="col-sm-4" style={{padding: '10px', color: 'lightblue', border: '1px solid red'}}>
                Col 3
              </div>
        </div>
    </div>

</>
    
  );
}

export default Profile;
