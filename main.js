window.onload = () => {
    window.data2 = [
        'एमएमआरडीए क्षेत्रातील घरांमध्ये गिरणी कामगारांसाठी ५० टक्के आरक्षण- मुख्यमंत्री ', 'लासलगाव बाजार समितीत कांद्याला २ हजार ६५० रुपयांचा भाव',
        'घाटकोपर इमारत दुर्घटनेप्रकरणी अटक करण्यात आलेले सुनील शितप यांच्या पोलिस कोठडीत ७ ऑगस्टपर्यंत वाढ ',
        'मुंबई विद्यापीठाचे सर्व निकाल ५ ऑगस्टपर्यंत जाहीर होतील, तर १५  ऑगस्टपर्यंत विद्यार्थ्यांना गुणपत्रिका मिळणार - मुख्यमंत्री देवेंद्र फडणवीस',
        'सोने- चांदीचं आयात शुल्क मूल्य वाढवण्याचा केंद्रीय अबकारी आणि सीमाशुल्क मंडळाचा निर्णय',
        'प्राप्तिकर विवरणपत्र सादर करण्याच्या मुदतीत ५ ऑगस्टपर्यंत वाढ'
    ];

    window.start = () => {
        var i = 0
        const gElement = document.getElementById("xf2");
        var ctm = gElement.getCTM();
        const originalCTME = ctm.e;

        ctm.e = -2000;

        gElement.setAttribute("transform", `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} ${ctm.e} ${ctm.f})`);
        updatestring('xf2', data2[i]);
        gElement.style.opacity = 1;


        gElement.style.transition = 'transform 0.5s ease';

        ctm.e = originalCTME;
        setTimeout(() => {
            gElement.setAttribute("transform", `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} ${ctm.e} ${ctm.f})`);
        }, 300);

        i = (i + 1) % (data2.length);

        setInterval(() => {
            ctm.e = -2000;
            gElement.setAttribute("transform", `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} ${ctm.e} ${ctm.f})`);
            ctm.e = originalCTME;
            updatestring('xf2', data2[i]);
            setTimeout(() => {
                gElement.setAttribute("transform", `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} ${ctm.e} ${ctm.f})`);
            }, 800);
            i = (i + 1) % (data2.length);
        }, 5000);


    }

start();
}