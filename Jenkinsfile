pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Executando o comando Docker Build...'
                // Add your build commands here
            }
        }
        stage('Push Docker Image') {
            steps {
                echo 'Executando o comando Docker Push...'
                // Add your test commands here
            }
        }
        stage('Deploy no Kubernetes') {
            steps {
                echo 'Executando o comando kubectl apply...'
                // Add your deployment commands here
            }
        }
    }
}
