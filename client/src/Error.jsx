import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', color:'white' }}>You can return to <Link to="/">Home Page</Link></h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px', color:'white' }}></p>
      <img
        src="images/404.jpg"  
        alt="Lost Cat GIF"
        style={{ maxWidth: '40%', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
      />
    </div>
  );
};

export default Error;