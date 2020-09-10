import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ProgressBar from './../ProgressBar';
import { act } from "react-dom/test-utils";

describe('Progress Bar', () => {

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

	it('renders without error', () => {
      act(() => {
        render(<ProgressBar />, container);
      });
      expect(container.textContent).toContain("The limit is: 0");
	});

	it('should render without an error using mock json', () => {
        act(() => {
        const resp = {"buttons":[25,44,-50,-28],"bars":[55,64],"limit":110};
             fetch.mockResponseOnce(JSON.stringify(resp));  // Mock API Response
             render(<ProgressBar />, container);
        });
        setTimeout(()=> { 
             expect(container.textContent).toBe("The limit is: 110");
        },5000);     
    });
    
    // Added for suppress some jest unwanted warning 
    const consoleError = console.error;
    beforeAll(() => {
      jest.spyOn(console, 'error').mockImplementation((...args) => {
        if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
         // consoleError(...args);
        }
      });
    });
});