import React from 'react';

const DebugTest = () => {
  console.log('DebugTest component is rendering');
  
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <h1>Debug Test Page</h1>
      <p>If you can see this, React is working!</p>
    </div>
  );
};

export default DebugTest;
