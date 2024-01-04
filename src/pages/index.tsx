// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Preloader from '../components/Loading Page/Preloader';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeAsyncOperation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    };

    fakeAsyncOperation();
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <h1>Welcome to Qutopia</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
