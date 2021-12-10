import React from 'react';

export default function Controls({
  head,
  onHeadChange,
  torso,
  onTorsoChange,
  pants,
  onPantChange,
  catchPhrase,
  setCatchphrase,
  handleClick,
}) {
  const headChoices = ['bird', 'dog', 'duck'];
  const torsoChoices = ['blue', 'fancy', 'pink', 'red'];
  const pantChoices = ['blue', 'dog', 'leg', 'white'];

  return (
    <div>
      <label>
        Head Options
        <select
          value={head}
          onChange={(event) => onHeadChange(event.target.value)}
        >
          {headChoices.map((choice) => (
            <option key={choice}>{choice}</option>
          ))}
        </select>
      </label>

      <label>
        Torso Options
        <select
          value={torso}
          onChange={(event) => onTorsoChange(event.target.value)}
        >
          {torsoChoices.map((choice) => (
            <option key={choice}>{choice}</option>
          ))}
        </select>
      </label>

      <label>
        Pant Options
        <select
          value={pants}
          onChange={(event) => onPantChange(event.target.value)}
        >
          {pantChoices.map((choice) => (
            <option key={choice}>{choice}</option>
          ))}
        </select>
      </label>

      <label>
        Catch Phrase:
        <input
          type="text"
          value={catchPhrase}
          onChange={(event) => setCatchphrase(event.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Add a catchphrase!
        </button>
      </label>
    </div>
  );
}
