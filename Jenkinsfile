pipeline {
    agent any

    environment {
        // Substitua pelo seu ID de credencial no Jenkins
        DOCKER_CREDENTIALS = credentials('docker-credentials')
        IMAGE_NAME = "assemblyconsultoria/lista-de-tarefas-angular"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", "docker-hub-credentials-id") {
                        def dockerImage = docker.image("${IMAGE_NAME}:${IMAGE_TAG}")
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
