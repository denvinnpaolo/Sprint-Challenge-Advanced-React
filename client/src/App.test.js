import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import UserCard, { } from "./components/PlayerCard";

test('renders without crashing', () => {render(<App />)});