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
    post {
        always {
            // Clean up Docker images
            sh 'docker image prune -f'
        }
        success {
            echo 'Build completed successfully'
        }
        failure {
            echo 'Build failed'
        }
    }
}