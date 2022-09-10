import { useState } from 'react';
import './App.css';

const emojiDatabase = {
  '😀': {
    name: 'Grinning',
    meaning: 'It conveys cheerfulness and joy towards something positive',
  },
  '😃': {
    name: 'Smiley',
    meaning: 'Smiley emoji denotes happiness and positive feelings',
  },
  '😄': {
    name: 'Smile',
    meaning: `The smile emoji depicts a person’s happiness when sending a greeting text or simply used to compliment something or the other`,
  },
  '😁': {
    name: 'Grin',
    meaning:
      'The grin emoji represents mischievousness but can be used to give away excitement and enjoyment',
  },
  '😆': {
    name: 'Laughing',
    meaning:
      'The emoji depicts laughter often used to react towards something hilarious',
  },
  '😅': {
    name: 'Sweat Smile',
    meaning:
      'Used to depict a close call but is also often used in awkward situations during a chat',
  },
  '🤣': {
    name: 'Rolling on the floor laughing',
    meaning: 'Used when someone cracks a hilarious joke',
  },
  '😂': {
    name: 'Joy',
    meaning: 'Shedding tears because of laughing so hard',
  },
  '🙂': {
    name: 'Slightly smiling face',
    meaning:
      'An emoji which can have two or more meanings to it such as being positive, happy or patronizing and being ironic',
  },
  '🙃': {
    name: 'Upside down face',
    meaning: 'The emoji depicts being silly and sarcastic',
  },
  '😉': {
    name: 'Wink',
    meaning:
      'This emoji signals a joke or a hidden meaning which when used won’t be understood by many',
  },
  '😊': {
    name: 'Blush',
    meaning: 'This emoji expresses extreme happiness and positive feelings',
  },
  '😇': {
    name: 'Innocent',
    meaning: 'This emoji means being as innocent and pure as an angel',
  },
  '😍': {
    name: 'Heart Eyes',
    meaning:
      'Taken straight from cartoons, the hearted eyes emoji is used to convey feeling of love and attraction',
  },
  '😘': {
    name: 'Kissing Heart',
    meaning: 'The emoji is used to convey a goodbye to a very close one',
  },
  '😜': {
    name: 'Stuck out tongue winking eye',
    meaning:
      'Used when just casually kidding around with jokes and funny conversations',
  },
  '🤔': {
    name: 'Thinking Face',
    meaning: 'Depicts going into a deep state of thinking',
  },
  '🤗': {
    name: 'Hugging Face',
    meaning: 'This emoji depicts a sense of affection for someone',
  },
  '😎': {
    name: 'Smiling face with sunglasses',
    meaning: 'Feeling overachieved and cool',
  },
  '🤓': {
    name: 'Nerd face',
    meaning: 'Depicting a mind loaded with theoretical knowledge',
  },
};

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState({ name: '', meaning: '' });
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    // resetting the state value
    setResult({ name: '', meaning: '' });
    setError('');

    let input = event.target.value;
    setUserInput(input);

    if (input in emojiDatabase) {
      setResult({
        name: emojiDatabase[input].name,
        meaning: emojiDatabase[input].meaning,
      });
      setError('');
    } else if (input === '') {
      setError('');
      setResult({ name: '', meaning: '' });
    } else {
      setError('We dont have this emoji here!');
      setResult({ name: '', meaning: '' });
    }
  };

  const getEmojiInfo = (input) => {
    setUserInput(input);
    setResult({
      name: emojiDatabase[input].name,
      meaning: emojiDatabase[input].meaning,
    });
    setError('');
  };

  return (
    <div className='App'>
      <h1>Inside Out!!</h1>
      <input
        placeholder='Paste any emoji to search the meaning..'
        value={userInput}
        onChange={handleInputChange}
      />

      <div className='result-container'>
        {result.name && <h4>You chose : {userInput}</h4>}
        {result.name && <h3>Name : {result.name}</h3>}
        {result.meaning && <h4>Meaning: {result.meaning}</h4>}
        {!result.name && error && <p>{error}</p>}
      </div>

      <h1>Emojis we know</h1>

      <div className='emoji-container'>
        {Object.keys(emojiDatabase).map((emoji) => (
          <span
            style={{ fontSize: '1.4rem', padding: '0.5rem', cursor: 'pointer' }}
            key={emoji}
            onClick={() => getEmojiInfo(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
