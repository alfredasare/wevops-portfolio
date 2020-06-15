import {createContext} from 'react';
import {PORTFOLIO_DATA} from "./portfolio.data";

const PortfolioContext = createContext(PORTFOLIO_DATA);

export default PortfolioContext;