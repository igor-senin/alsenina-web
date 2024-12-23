import React from "react";
import { Routes, Route } from "react-router";

// Place for pages imports...
import Home from "./pages/Home";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Contacts from "./pages/contacts/Contacts";

import Flowwow from "./pages/projects/subpages/Flowwow";
import UFirst from "./pages/projects/subpages/UFirst";
import Magiclean from "./pages/projects/subpages/Magiclean";
import Kumiho from "./pages/projects/subpages/Kumiho";
import NewOpera from "./pages/projects/subpages/NewOpera";
import IWasThere from "./pages/projects/subpages/IWasThere";

import data from './pages/projects/projects.json';

const projList = data.projects;

const elements = {
  "flowwow": <Flowwow config={projList["flowwow"]} />,
  "ufirst": <UFirst config={projList["ufirst"]} />,
  "magiclean": <Magiclean config={projList["magiclean"]} />,
  "kumiho": <Kumiho config={projList["kumiho"]} />,
  "new_opera": <NewOpera config={projList["new_opera"]} />,
  "i_was_there": <IWasThere config={projList["i_was_there"]} />,
};
const urls = Object.keys(projList);
const previews = [];
for (let key in projList) {
  previews.push(projList[key].imgPath);
}

const PageSwitcher = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects">
        <Route index element={<Projects previews={previews} urls={urls} />} />

        {urls.map((url) => <Route path={url} element={elements[url]} />)}
      </Route>
      <Route path="experience" element={<Experience />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  );
};

export default PageSwitcher;
