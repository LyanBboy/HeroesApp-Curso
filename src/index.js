import React from 'react';
import { createRoot } from 'react-dom/client';
import {HeroesApp} from './HeroesApp';

const content = document.getElementById('root');
const root = createRoot(content);
root.render(<HeroesApp />);