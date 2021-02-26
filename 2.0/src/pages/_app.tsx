import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContex';
import './global.css';


function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
    </ChallengesProvider>
  )
}

export default MyApp
