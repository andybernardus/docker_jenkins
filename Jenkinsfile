pipeline{
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            steps{
                sh "sudo yum npm install"
            }
        }

        stage("Build"){
            steps{
                sh "npm run build"
            }
        }
    }
}