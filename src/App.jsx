import React, { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  // let tabContent = 'Please click a button'

  let tabContent = <p>Please Select  a Topic:</p>

  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
     )
  }

  function handleSelect(selectedButton) {
    // selected button => 'components','jsx','props','state'
    setSelectedTopic(selectedButton)
 }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=> (<CoreConcept key={item.title} {...item}/>))}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'çomponents'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
        </main>
    </div>
  );
}


export default App;


{/* <CoreConcept 
title={CORE_CONCEPTS[0].title}
description={CORE_CONCEPTS[0].description}
image={CORE_CONCEPTS[0].image}
/>
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} />
<CoreConcept {...CORE_CONCEPTS[3]} /> */}