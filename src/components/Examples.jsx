import React, { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

function Examples() {
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
    <Section title="Examples" id='examples'>
    <Tabs buttons={
        <>
            <TabButton isSelected={selectedTopic === 'çomponents'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>
    }
    >{tabContent}</Tabs>
 
  </Section>
  
  )
}

export default Examples