

export const fadeUp = (delay) =>({
    hidden: {
        opacity: 0,
        y: 100,
    },
    show:{
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: delay
        }
    }
})


// HEADER SECTION
export const container = (delay) =>({
    hidden: {
        opacity: 0,
        x : -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: delay
        }
    }
})
