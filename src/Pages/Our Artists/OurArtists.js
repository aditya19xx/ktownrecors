import React from "react";
import './OurArtists.css';

const OurArtists = () => {
  return (
    <div>
      <h1 style={{fontSize:'70px', color:'white', marginBottom:'30px', fontFamily: 'Montserrat Alternates',}}>Our Artists</h1>
      <div style={{color:'white',fontFamily: 'Montserrat Alternates'}} className="row row-cols-1 row-cols-md-4 g-4 ">
        <div className="col" >
          <div className="card h-100 rounded-3">
            <img
              src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/247901699_2013584442127662_2537902719181188147_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr6K8J5zrh_LspYUqzddfXMHHV0nfxMlkwcdXSd_EyWa3yB0K1ZYp5inQXY-qokktHvK_xUCZwpqx1EYEgTGCO&_nc_ohc=5p_Fvja5mjcAX-hA9iC&tn=Dn7rgj6kjH8eIZGE&_nc_ht=scontent.fdac31-1.fna&oh=f104fcb6a0b75fb227593481896032cd&oe=619F712B"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 style={{fontSize:'30px'}} className="card-title">VriShi</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 rounded-3">
            <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/161844810_1671125246402755_7850162985536462935_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHlT23bthwHN4IGa0QmD3lhPek1aa4uA9A96TVpri4D0MDF0GNo51fLT9UGKKEQ5me8sP4owH1nKFiGIMMQ8yid&_nc_ohc=y1_FK8weiYMAX_BaSkj&_nc_ht=scontent.fdac31-1.fna&oh=e53a9ead44858435ec87362b6f80fd67&oe=61BFE10B" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 style={{fontSize:'30px'}} className="card-title">Yogi</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 rounded-3">
            <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/182284662_490396632161352_6703206865818750052_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHwXOBeeRV6YM1PoR_sz8cZyKWnN7O4cUHIpac3s7hxQRp1MjS7UKE5O9uqxfQ4QVnyZ-bwr0NRkxnWVkvjhIbd&_nc_ohc=NYet05XsLlYAX8o1xWL&_nc_ht=scontent.fdac31-1.fna&oh=e99e66f590cb42d6c0bdfba91a619b6b&oe=61BF0E18" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 style={{fontSize:'30px'}} className="card-title">Bilash Chakrabarty</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 rounded-3">
            <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/163349129_217239190173822_7099432777507789691_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFVg3j-zAodt3XHMvGpQ-HG-ww02x3wBxL7DDTbHfAHElDJWdyR-50Nzpbm_0SGUnaRwPbXLHFMF0T1eHOl3Qm5&_nc_ohc=drx7K-0OQGsAX961_ia&tn=Dn7rgj6kjH8eIZGE&_nc_ht=scontent.fdac31-1.fna&oh=8e513a2dbeed2a7bfa1dc70cfa93e1ea&oe=61C221DB" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 style={{fontSize:'30px'}} className="card-title">K$#N</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurArtists;
