document.addEventListener('DOMContentLoaded', () => {
    const hoverFeature1 = document.querySelector('#hover-feature');
    const hoverState1 = document.querySelector('#hover');
    const arrowUp = document.querySelector('#icon-up');
    const arrowUpCompany = document.querySelector('#companyarrowup');
    const arrowDownCompany = document.querySelector('#companyarrowdown');
    const arrowDown = document.querySelector('#icon-down');
    
   
   
    hoverFeature1.addEventListener('mouseenter', () => {
        hoverState1.style.display ='flex';
        arrowUp.style.display = 'flex';
        arrowDown.style.display = 'none';
    });
    hoverFeature1.addEventListener('mouseleave', () => {
        arrowUp.style.display = 'none'
        hoverState1.style.display ='none';
        arrowDown.style.display = 'flex';
    });

    // Hover-feature Company
    const companyHoverFeature = document.querySelector('#hover-featureCompany');
    const companyHoverState = document.querySelector('#company-hover');

    companyHoverFeature.addEventListener('mouseenter', () => {
        companyHoverState.style.display ='flex';
        arrowUpCompany.style.display = 'flex';
        arrowDownCompany.style.display = 'none';
        
    });
    companyHoverFeature.addEventListener('mouseleave', () => {
        companyHoverState.style.display ='none';
        arrowUpCompany.style.display = 'none';
        arrowDownCompany.style.display = 'flex';
    });



    // Mobile Responsiveness

    const navHolder = document.querySelector('.menu');
    const navigation = document.querySelector('nav');
    navHolder.addEventListener('click', () => {
        navigation.classList.toggle('active')
    })
})