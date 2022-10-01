// Functions
const randomColorGenerator = () => {
    const contentList = document.getElementsByClassName('content')

    Array.from(contentList).forEach(handleColor)
}



const handleColor = (value) => {
    const colors = ['green', 'red', 'blue', 'purple', 'orange', 'dark-green', 'dark-red', 'dark-blue', 'dark-purple']

    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    value.classList.add(randomColor)
}

// Function calls
randomColorGenerator()