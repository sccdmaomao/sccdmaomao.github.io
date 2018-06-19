var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import CollapsibleCard from 'components/CollapsibleCard';
import React from 'react';
import Biography from './components/Biography';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
const cards = [
    { title: 'Biography', minWidth: 700, children: <Biography /> },
    {
        title: 'Skills',
        minWidth: 700,
        children: <Skills />
    },
    {
        title: 'Experiences',
        minWidth: 700,
        children: <Experiences />
    }
];
const HomePage = () => (<div>
    {cards.map(card => {
    const { children } = card, rest = __rest(card, ["children"]);
    return (<CollapsibleCard key={`home-card-${card.title}`} {...rest}>
          {children}
        </CollapsibleCard>);
})}
  </div>);
export default HomePage;
//# sourceMappingURL=Home.jsx.map