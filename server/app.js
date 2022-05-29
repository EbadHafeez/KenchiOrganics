console.log("Working")
visualViewport.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--viewport-height', `${visualViewport.height}px`)
})