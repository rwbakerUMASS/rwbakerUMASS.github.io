import internal from "stream"

const navBar = {
    menuItems: [
        {
            name: "About",
            button: {
                internal: true,
                path: "about"
            }
        },
        {
            name: 'Education',
            button: {
                internal: true,
                path: "education"
            }
        },
        {
            name: "Projects",
            button: {
                internal: true,
                path: "projects"
            }
        },
        {
            name: "GitHub",
            button: {
                internal: false,
                path: "https://github.com/rwbakerUMASS"
            }
        },
        {
            name: "LinkedIn",
            button: {
                internal: false,
                path: "https://linkedin.com/in/rwbaker16"
            }
        },
        {
            name: "Bay Statle",
            button: {
                internal: false,
                path: "massdle"
            }
        },
        {
            name: "Photography",
            button: {
                internal: false,
                path: "photography"
            }
        }
    ]
}

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
        text: `I'm a software engineer with a background in machine learning, data science, and robotics. I like working on projects that connect code to real-world behavior, whether that's translating IMU signals into motion capture data, building tools that make complex systems easier to test, or experimenting with new ways for robots to understand their environment.\n
                My interest in engineering started early, leading the software side of my high school robotics team. Since then, I've worked across systems and software engineering while completing my B.S. and M.S. in Computer Science at UMass Amherst. I enjoy digging into tricky problems, understanding how systems fit together, and building things that make those systems more intuitive.\n
                Outside of coding, I'm usually skiing, backpacking, taking photos, tinkering with my homelab, or following New England sports.`,
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
        },
        {
            title: 'ChessPP',
            description: 'Chess Engine written in C++, current work in progress',
            github: {
                owner: 'rwbakerUMASS',
                repo: 'ChessPP',
                githubLink: 'https://github.com/rwbakerUMASS/ChessPP'
            }
        }
    ]
}

export { navBar, welcomePage, aboutMe, education, projects };