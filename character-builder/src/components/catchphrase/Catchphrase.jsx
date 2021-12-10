import React from 'react';

export default function Catchphrase({ catchPhrase }) {
  return (
    <div>
      {catchPhrase.map((phrase) => (
        <p key={phrase}>{phrase}</p>
      ))}
    </div>
  );
}
