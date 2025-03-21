const btn = document.querySelector('.changeColorBtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');

btn.addEventListener('click', async () => {

    chrome.storage.sync.get('color', ({ color }) => 
        {
        console.log('Stored color:', color);
       });
   
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

     // Execute script
     chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: pickColor,
        },
        async (injectionResults) => {

            if (!injectionResults || !Array.isArray(injectionResults)) {
                console.error('Injection results are not iterable:', injectionResults);
                return;
            }
            const [data] = injectionResults;
            //data?.result?.sRGBHex
            if (data && data.result) {
                const color = data.result.sRGBHex;
                colorGrid.style.backgroundColor = color;
                colorValue.innerText = color;
                try{
                    await navigator.clipboard.writeText(color);
                   }catch(err){
                    console.error(err);
                     }      
                
            }

            // if (!injectionResults || !Array.isArray(injectionResults) || injectionResults.length === 0) {
            //     console.error('Injection results are invalid:', injectionResults);
            //     return;
            // }

            
        });

    })
    // Get stored color
    

//     // Get active tab
    

   
        
//     );
// });

// Function to pick color using EyeDropper API
async function pickColor() {
    try {
        const eyeDropper = new EyeDropper();
        const result = await eyeDropper.open();
        console.log('Picked color:', result);
        return result;
    } catch (err) {
        console.error('Error picking color:', err);
    }
}
