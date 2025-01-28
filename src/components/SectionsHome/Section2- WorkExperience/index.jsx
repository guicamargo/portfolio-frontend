import React, {useRef,useState} from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { CornerRightUp } from 'lucide-react';

import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  const accordionRef = useRef(null);
  const [isAnyOpen, setIsAnyOpen] = useState(true);

  const closeAll = () => {
    if (accordionRef.current) {
      const details = accordionRef.current.querySelectorAll('details');
      details.forEach(detail => {
        detail.removeAttribute('open');
      });
      setIsAnyOpen(false);
    }
  };

  const handleDetailsClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'summary') {
      const allDetails = accordionRef.current.querySelectorAll('details');
      const anyOpen = Array.from(allDetails).some(detail => detail.hasAttribute('open'));
      setIsAnyOpen(anyOpen);
    }
  };

  return (
    <ConteinerSections title={t('nav.experience')} className="experienceContainer">
    <div className="accordion-container">
      <div className="accordion-header">
        <button 
          className="close-all-button"
          onClick={closeAll}
          disabled={!isAnyOpen}
        >
          <CornerRightUp/>
          Close All
        </button>
      </div>
      <div className="accordion" ref={accordionRef} onClick={handleDetailsClick}>
        <details>
          <summary>
            How do you create an accordion?
          </summary>
          <div>
            Easy! As long as you 
          </div>
        </details>
        
        <details>
          <summary>
            What 
          </summary>
          <div>
            No worries.
          </div>
        </details>
        
        <details>
          <summary>
            What type of 
          </summary>
          <div>
            Almost anything you'd like.
          </div>
        </details>
        
        <details>
          <summary>
            How does it work?
          </summary>
          <div>
            The <code>&lt;details&gt;</code> 
          </div>
        </details>
      </div>
    </div>
    </ConteinerSections>
  );
};

export default Index;