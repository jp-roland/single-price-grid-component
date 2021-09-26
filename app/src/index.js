import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-light flex flex-col justify-center py-12 font-Karla">
        <div className="relative w-full max-w-custom mx-auto shadow-xl">
          <div className="bg-white p-10 rounded-t-md">
            <p className="text-cyan font-bold text-2xl m-0">Join our community</p>
            <p className="text-yellow-bright font-bold text-lg pt-5">30-day, hassle-free money back guarantee</p>
            <p className="text-blue-grayish text-base pt-1.5">Gain access to our full library of tutorials along with expert code reviews.</p>
            <p className="text-blue-grayish text-base">Perfect for any developers who are serious about honing their skills.</p>
          </div>
          <div className="flex">
            <div className="flex-1 bg-cyan text-white p-10 rounded-bl-md">
              <p className="font-bold text-lg">Monthly Subscription</p>
              <div className="flex items-center pt-3 pb-1.5">
                <p className="font-bold text-3.5xl">$29</p>
                <p className="pl-3 opacity-50">per month</p>
              </div>
              <p className="pb-6 opacity-90">Full access for less than $1 a day</p>
              <button type="button" className="bg-yellow-bright w-full p-3 font-bold rounded-md shadow-xl">Sign Up</button>
            </div>
            <div className="flex-1 bg-cyan-light text-white text-sm p-10 rounded-br-md">
              <p className="font-bold text-lg pb-4">Why Us</p>
              <div className="opacity-80">
                <p>Tutorials by industry experts</p>
                <p>Peer & expert code review</p>
                <p>Coding exercises</p>
                <p>Access to our GitHub repos</p>
                <p>Community forum</p>
                <p>Flashcard decks</p>
                <p>New videos every week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
);