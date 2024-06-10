pipeline{
    agent {
        docker {
            image 'node:14'
        }
    }
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