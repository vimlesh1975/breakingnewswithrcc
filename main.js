window.onload = () => {
    window.data2 = [
        'एमएमआरडीए क्षेत्रातील घरांमध्ये गिरणी कामगारांसाठी ५० टक्के आरक्षण- मुख्यमंत्री ',
        'लासलगाव बाजार समितीत कांद्याला २ हजार ६५० रुपयांचा भाव',
        'घाटकोपर इमारत दुर्घटनेप्रकरणी अटक करण्यात आलेले सुनील शितप यांच्या पोलिस कोठडीत ७ ऑगस्टपर्यंत वाढ ',
        'मुंबई विद्यापीठाचे सर्व निकाल ५ ऑगस्टपर्यंत जाहीर होतील, तर १५  ऑगस्टपर्यंत विद्यार्थ्यांना गुणपत्रिका मिळणार - मुख्यमंत्री देवेंद्र फडणवीस',
        'सोने- चांदीचं आयात शुल्क मूल्य वाढवण्याचा केंद्रीय अबकारी आणि सीमाशुल्क मंडळाचा निर्णय',
        'प्राप्तिकर विवरणपत्र सादर करण्याच्या मुदतीत ५ ऑगस्टपर्यंत वाढ'
    ];
    const gElement = document.getElementById("xf2");
    let intervalId;
    const addRadioButtons=()=>{
           // Create radio buttons
    const radioContainer = document.createElement("div");
    radioContainer.style.position='absolute';

    const radioTransform = document.createElement("input");
    radioTransform.type = "radio";
    radioTransform.name = "animationType";
    radioTransform.value = "animateFromLeft";
    const labelTransform = document.createElement("label");
    labelTransform.textContent = "animateFromLeft";

    const radioReveal = document.createElement("input");
    radioReveal.type = "radio";
    radioReveal.name = "animationType";
    radioReveal.value = "revealFromLeft";
    const labelReveal = document.createElement("label");
    labelReveal.textContent = "revealFromLeft";

    const radioCenterReveal = document.createElement("input");
    radioCenterReveal.type = "radio";
    radioCenterReveal.name = "animationType";
    radioCenterReveal.value = "centerReveal";
    radioCenterReveal.checked = true;
    const labelCenterReveal = document.createElement("label");
    labelCenterReveal.textContent = "centerReveal";

    // Append radio buttons to container
    radioContainer.appendChild(radioTransform);
    radioContainer.appendChild(labelTransform);
    radioContainer.appendChild(radioReveal);
    radioContainer.appendChild(labelReveal);
    radioContainer.appendChild(radioCenterReveal);
    radioContainer.appendChild(labelCenterReveal);

    document.body.prepend(radioContainer);  // Add the radio buttons to the page

     // Function to trigger animation based on selected radio button
     const handleRadioChange = () => {
        clearInterval(intervalId);
        const selectedAnimationType = document.querySelector('input[name="animationType"]:checked').value;

        // Start animation based on selected type
        if (selectedAnimationType === 'animateFromLeft') {
            gElement.style.transition = 'transform 0.5s ease';
            animateAndUpdate('animateFromLeft', gElement, (index) => updatestring('xf2', data2[index]));
        } else if (selectedAnimationType === 'revealFromLeft') {
            gElement.style.transition = 'clip-path 0.25s ease';
            animateAndUpdate('revealFromLeft', gElement, (index) => updatestring('xf2', data2[index]));
        } else if (selectedAnimationType === 'centerReveal') {
            gElement.style.transition = 'clip-path 0.25s ease';
            animateAndUpdate('centerReveal', gElement, (index) => updatestring('xf2', data2[index]));
        }

 
    };

    // Add event listener for radio button change
    radioContainer.addEventListener('change', handleRadioChange);
        // Trigger the default animation on page load (Transform Animation by default)
        handleRadioChange();
    }

    // Common helper function for animation
    const animateAndUpdate = (type, gElement, updateCallback) => {
        let i = 0;

        const animate = () => {
            if (type === 'animateFromLeft') {
                const ctm = gElement.getCTM();
                const originalCTME = ctm.e;

                // Move out of view
                ctm.e = -2000;
                gElement.setAttribute("transform", `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} ${ctm.e} ${ctm.f})`);

                setTimeout(() => {
                    updateCallback(i); // Update content
                    if (i===0) { gElement.style.opacity = 1;}
                    ctm.e = originalCTME; // Bring back to original position
                    gElement.setAttribute("transform", `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} ${ctm.e} ${ctm.f})`);
                    i = (i + 1) % data2.length; // Increment index
                }, 800);

            } else if (type === 'revealFromLeft') {
                // Hide with clip-path
                gElement.setAttribute("clip-path", 'inset(0 100% 0 0)');
                setTimeout(() => {
                    updateCallback(i); // Update content
                    if (i===0) { gElement.style.opacity = 1;}
                    gElement.setAttribute("clip-path", 'inset(0%)'); // Reveal
                    i = (i + 1) % data2.length; // Increment index
                }, 800);
            } else if (type === 'centerReveal') {
                // Hide content from the center (initially clipped from both sides)
                gElement.setAttribute("clip-path", 'circle(0% at 50% 50%)');
                setTimeout(() => {
                    updateCallback(i); // Update content
                    if (i === 0) { gElement.style.opacity = 1; }
                    gElement.setAttribute("clip-path", 'circle(100% at 50% 50%)'); // Reveal from center
                    i = (i + 1) % data2.length; // Increment index
                }, 800);
            }
        };

        // Start animation
        animate();

        // Loop animation
        intervalId = setInterval(animate, 5000);
    };



    // Start function
    window.animateFromLeft = () => {
        gElement.style.transition = 'transform 0.5s ease';
        animateAndUpdate('animateFromLeft', gElement, (index) => updatestring('xf2', data2[index]));
    };

    // Reveal function
    window.revealFromLeft = () => {
        gElement.style.transition = 'clip-path 0.25s ease';
        animateAndUpdate('revealFromLeft', gElement, (index) => updatestring('xf2', data2[index]));
    };

      // Center reveal function (circle-based animation)
      window.centerReveal = () => {
        gElement.style.transition = 'clip-path 0.5s ease';
        animateAndUpdate('centerReveal', gElement, (index) => updatestring('xf2', data2[index]));
    };

    addRadioButtons();

    // Uncomment the desired animation
    // animateFromLeft();
    // revealFromLeft();
    // centerReveal(); // Start center reveal animation
};
