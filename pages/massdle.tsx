import '@/app/globals.css'
import React, { useEffect, useState } from 'react';

type Guess = {
  name: string;
  pop: {
    val: number;
    close: boolean;
    correct: boolean;
  };
  county: {
    val: string;
    close: boolean;
    correct: boolean;
  };
  dist: {
    val: number;
    close: boolean;
    correct: boolean;
  };
  dunks: {
    val: number;
    close: boolean;
    correct: boolean;
  };
};

type Town = {
  name: string;
  population: number;
  county: string;
  distance: number;
  count: number;
};

const countyNeighbors: Record<string, string[]> = {
  Barnstable: ['Plymouth', 'Bristol'],
  Berkshire: ['Franklin', 'Hampshire', 'Hampden'],
  Bristol: ['Plymouth', 'Barnstable', 'Norfolk'],
  Dukes: ['Nantucket'],
  Essex: ['Middlesex', 'Suffolk'],
  Franklin: ['Berkshire', 'Hampshire', 'Worcester'],
  Hampden: ['Hampshire', 'Worcester'],
  Hampshire: ['Franklin', 'Hampden', 'Worcester', 'Berkshire'],
  Middlesex: ['Essex', 'Suffolk', 'Norfolk', 'Worcester'],
  Nantucket: ['Dukes'],
  Norfolk: ['Bristol', 'Plymouth', 'Suffolk', 'Middlesex'],
  Plymouth: ['Barnstable', 'Bristol', 'Norfolk'],
  Suffolk: ['Middlesex', 'Norfolk'],
  Worcester: ['Franklin', 'Hampshire', 'Hampden', 'Middlesex', 'Plymouth'],
};


const ChevronUp = () => (
  <svg
    className="w-4 h-4 ml-1 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const ChevronDown = () => (
  <svg
    className="w-4 h-4 ml-1 text-red-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

function App() {
  const [towns, setTowns] = useState<Town[]>([]);
  const [guess, setGuess] = useState<string>('');
  const [answer, setAnswer] = useState<Town | null>(null);
  const [validGuess, setValidGuess] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);
  const [guessList, setGuessList] = useState<Guess[]>([]);

  // Load CSV on component mount
  useEffect(() => {
    fetch('/towns.csv')
      .then(res => res.text())
      .then(csv => {
        const rows = csv.replace(/\r/g, '').trim().split('\n');
        const headers = rows[0].split(',');
        const data: Town[] = rows.slice(1).map(line => {
          const values = line.split(',');
          const obj: any = {};
          headers.forEach((h, i) => {
            const value = values[i];
            if (h === 'population' || h === 'count') {
              obj[h] = parseInt(value, 10);
            } else if(h === 'distance') {
              obj[h] = parseFloat(value)
            } else {
              obj[h] = value;
            }
          });
          return obj as Town;
        });
        setTowns(data);
      });
  }, []);

  useEffect(() => {
    if (towns.length > 0) {
      pickAnswer();
    }
  }, [towns]);

  const pickAnswer = () => {
    const randomIndex = Math.floor(Math.random() * towns.length);
    console.log(randomIndex)
    setAnswer(towns[randomIndex]);
    setGuessList([]);
  }

  const handleGuess = () => {
    if (!answer) return;
    const town = towns.find(t => t.name.toLowerCase() === guess.toLowerCase());
    if (!town) {
      setShake(true);
      setTimeout(() => setShake(false), 400); // Remove class after animation
    } else {
      setGuess('');
      setValidGuess(false);
      const newGuess : Guess = {
        'name':town.name,
        'pop':{
          'val':town.population,
          'close':Math.abs(town.population-answer.population) < 1000,
          'correct':town.population === answer.population
        },
        'county':{
          'val':town.county,
          'close':areCountiesNeighbors(town.county,answer.county),
          'correct':town.county === answer.county
        },
        'dist':{
          'val': Math.round(town.distance * 10) / 10,
          'close':Math.abs(town.distance-answer.distance) < 10,
          'correct':town.distance === answer.distance
        },
        'dunks':{
          'val':town.count,
          'close':Math.abs(town.count-answer.count) < 2,
          'correct':town.count === answer.count
        }
      }
      setGuessList(prev => [...prev, newGuess]);
    }
  };

  function areCountiesNeighbors(county1: string, county2: string): boolean {
    const c1 = county1.toLowerCase();
    const c2 = county2.toLowerCase();
    if (c1 === c2) return true;

    const neighbors = countyNeighbors[county1] || countyNeighbors[county1.charAt(0).toUpperCase() + county1.slice(1).toLowerCase()];
    if (!neighbors) return false;

    return neighbors.some(n => n.toLowerCase() === c2);
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-6 font-sans">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-800">Bay Statle</h1>

        <div>
          <input
            type="text"
            value={guess}
            placeholder="Enter town name"
            className={`w-full p-3 rounded-md border-2 text-lg text-black transition focus:outline-none 
              ${validGuess 
                ? 'border-green-500 focus:ring-2 focus:ring-green-300' 
                : 'border-red-300 focus:ring-2 focus:ring-red-200'}
                ${shake ? 'shake' : ''}`}
            onChange={(e) => {
              const val = e.target.value;
              setGuess(val);
              setValidGuess(towns.some(t => t.name.toLowerCase() === val.toLowerCase()));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleGuess();
            }}
          />
        </div>

        <button
          onClick={handleGuess}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-lg font-medium transition"
        >
          Guess
        </button>

        <div className="mt-6">
          <h2 className="text-lg text-black font-bold mb-2">Your Guesses</h2>
          {[...guessList].reverse().map((g, i) => (
            <div key={i} className="flex gap-2 items-center">

              {/* Name */}
              <div className="flex items-center justify-center w-32 h-10 text-sm font-bold text-black truncate">
                {g.name}
              </div>

              {/* Population */}
              <div className={`flex flex-col items-center justify-center w-32 h-20 text-white font-semibold rounded text-center
                ${g.pop.correct ? 'bg-green-500' : g.pop.close ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                <span className="text-xs leading-tight">Population:</span>
                <span className="truncate">{g.pop.val.toLocaleString()}</span>
                {g.pop.val > answer!.population && !g.pop.correct && <ChevronDown />}
                {g.pop.val < answer!.population && !g.pop.correct && <ChevronUp />}
              </div>

              {/* Distance */}
              <div className={`flex flex-col items-center justify-center w-32 h-20 text-white font-semibold rounded text-center
                ${g.dist.correct ? 'bg-green-500' : g.dist.close ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                <span className="text-xs leading-tight">Distance to Boston:</span>
                <span className="truncate">{g.dist.val}</span>
                {g.dist.val > answer!.distance && !g.dist.correct && <ChevronDown />}
                {g.dist.val < answer!.distance && !g.dist.correct && <ChevronUp />}
              </div>

              {/* Dunks */}
              <div className={`flex flex-col items-center justify-center w-32 h-20 text-white font-semibold rounded text-center
                ${g.dunks.correct ? 'bg-green-500' : g.dunks.close ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                <span className="text-xs leading-tight"># of Dunks:</span>
                <span className="truncate">{g.dunks.val}</span>
                {g.dunks.val > answer!.count && !g.dunks.correct && <ChevronDown />}
                {g.dunks.val < answer!.count && !g.dunks.correct && <ChevronUp />}
              </div>

              {/* County */}
              <div className={`flex flex-col items-center justify-center w-32 h-20 text-white font-semibold rounded text-center
                ${g.county.correct ? 'bg-green-500' : g.county.close ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                <span className="text-xs leading-tight">County:</span>
                <span className="truncate">{g.county.val}</span>
              </div>

            </div>
          ))}
        </div>
        <button
          onClick={() => {
            if(answer){
              setGuess(answer?.name);
            }
          }}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-lg font-medium transition"
        >
          Give Up?
        </button>
      </div>
    </div>
  );
}

export default App;
