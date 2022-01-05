import Driver from 'driver.js';

const driver = new Driver({
  className: 'scoped-class',        // className to wrap driver.js popover
  animate: true,                    // Whether to animate or not
  opacity: 0.75,                    // Background opacity (0 means only popovers and without overlay)
  padding: 10,                      // Distance of element from around the edges
  allowClose: true,                 // Whether the click on overlay should close or not
  overlayClickNext: false,          // Whether the click on overlay should move next
  doneBtnText: '完成',              // Text on the final button
  closeBtnText: '跳过',            // Text on the close button for this step
  stageBackground: '#ffffff',       // Background color for the staged behind highlighted element
  nextBtnText: '下一步',              // Next button text for this step
  prevBtnText: '上一步',          // Previous button text for this step
  showButtons: true,               // Do not show control buttons in footer
  keyboardControl: true,            // Allow controlling through keyboard (escape to close, arrow keys to move)
  scrollIntoViewOptions: {},        // We use `scrollIntoView()` when possible, pass here the options for it if you want any
  // onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
  // onHighlighted: (Element) => {},      // Called when element is fully highlighted
  // onDeselected: (Element) => {},       // Called when element has been deselected
  // onReset: (Element) => {},            // Called when overlay is about to be cleared
  // onNext: (Element) => {},                    // Called when moving to next step on any step
  // onPrevious: (Element) => {},                // Called when moving to previous step on any step
});

export default driver