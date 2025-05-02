pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("myapp:${env.BUILD_ID}", '-f Dockerfile .')
                    echo "Docker image built: ${dockerImage}"
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    def dockerImage = "myapp:${env.BUILD_ID}"
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-credentials') {
                        docker.image(dockerImage).push('latest')
                        docker.image(dockerImage).push("${env.BUILD_ID}")
                        echo "Docker image pushed: ${dockerImage}"
                    }
                }
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
