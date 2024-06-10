pipeline{
    agent any

    tools {nodejs "NODEJS"} 

    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            steps{
                sh "npm install"
            }
        }

        stage("Build"){
            steps{
                sh "npm run start"
            }
        }
    }
}