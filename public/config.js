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
            "Sylvan Enthusiast",
            "Aspiring Roboticist"
        ]
    }
}

const aboutMe = {
    bodyText: {
        text: `I am a recent Master's graduate from the UMass Amherst College of Information and Computer Sciences.
                Throughout my education, I have gained exposure to a large variety of fields of computer science, but I am mainly interested in the fields of machine/reinforcement learning, data science, and robotics
                I have 4 years of experience in systems engineering and software engineering, as well as being the software lead of my high school robotics team.`,
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

const projects = {
    entries: [
        {
            title: 'IMU to MOCAP Data Translation',
            description: 'Designed a machine learning based approach to infer MOCAP data from two wrist worn IMUs',
            github: {
                owner: 'rwbakerUMASS',
                repo: 'IMU-To-MOCAP',
                githubLink: 'https://github.com/rwbakerUMASS/IMU-To-MOCAP'
            }
        },
        {
            title: 'Human Following Robot',
            description: 'Creates a ROS package to enable a small robot to identify, track, and follow a human.',
            github: {
                owner: 'rwbakerUMASS',
                repo: '603-GP',
                githubLink: 'https://github.com/rwbakerUMASS/603-GP'
            }
        },
        {
            title: 'Transfer Learning Leveraging Trajectory-Ranked Rewards',
            description: 'Experimented with a novel approach to transfer RL policy to a more complex task',
            github: {
                owner: 'rwbakerUMASS',
                repo: '690-Final-Project',
                githubLink: 'https://github.com/rwbakerUMASS/690-Final-Project'
            }
        },
        {
            title: 'Image Super-Resolution',
            description: 'AutoEncoder trained to reduce jagged/pixellated edges, blur, and over exposure in images',
            github: {
                owner: 'rwbakerUMASS',
                repo: 'Image-Super-Res',
                githubLink: 'https://github.com/rwbakerUMASS/Image-Super-Res'
            }
        },
        {
            title: 'This Website!',
            description: 'Personal website written in NextJS',
            github: {
                owner: 'rwbakerUMASS',
                repo: 'rwbakerUMASS.github.io',
                githubLink: 'https://github.com/rwbakerUMASS/rwbakerUMASS.github.io'
            }
        }
    ]
}

export { welcomePage, aboutMe, education, projects };