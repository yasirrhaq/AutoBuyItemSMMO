function triggerBuyProcess(index) {
  // Select all the buy buttons on the page
  let buyButtons = document.querySelectorAll('button[type="button"][x-on\\:click^="itemAction=\'buy\'"]');

  if (index < buyButtons.length) {
    // Click the buy button to open the purchase modal
    buyButtons[index].click();

    // Wait for the modal to open and the confirm button to be clickable
    setTimeout(() => {
      // Assuming the 'confirmBuyButton' becomes available after the click
      let confirmButton = document.getElementById('confirmBuyButton');
      if (confirmButton) {
        confirmButton.click();

        // Wait some time before moving to the next item to give the server time to process the request
        setTimeout(() => {
          triggerBuyProcess(index + 1); // Move to the next item
        }, 2000); // Adjust this delay as necessary
      } else {
        console.error('Confirm Buy button not found.');
      }
    }, 1000); // Adjust if the modal takes longer to become ready
  } else {
    console.log('Processed all items.');
  }
}

triggerBuyProcess(0); // Start the process with the first item
