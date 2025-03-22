const welcomePage = {
    topText: {
        color: 'text-white-500',
        message: "Hi, I'm Ryan"
    },
    typeWriterText: {
        color: 'text-white-500',
        messages: [
            "Software Engineer",
            "ML Enthusiast",
            "Sylvan Enthusiast"
        ]
    }
}

const aboutMe = {
    bodyText: {
        text: `I am a recent Master's graduate from the UMass Amherst College of Information and Computer Sciences.
                Throughout my education, I have gained exposure to a large variety of fields of computer science, but I am mainly interested in the fields of machine/reinforcement learning, data science, and robotics
                I have 4 years of intern experience in systems engineering and software engineering, as well as being the software lead of my high school robotics team.`,
        color: "text-white-500"
    },
    imagePath: "../public/assets/img/Ryan2.jpg"
}

const education = {
    colors: {
        title: 'white',
        insitution: 'white',
        other: 'white'
    },
    entries: [
        {
            title: 'M.S. in Computer Science',
            university: 'University of Massachusetts',
            time: '2023 - 2024',
            gpa: '3.97'
        },
        {
            title: 'B.S. in Computer Science',
            university: 'University of Massachusetts',
            time: '2019 - 2023',
            gpa: '3.88'
        }
    ]    
}

export { welcomePage, aboutMe, education };