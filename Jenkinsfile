pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def dockerapp = docker.build("fabiocarvalho242/ListaDeTarefasAngular:${env.BUILD_ID}", '-f Dockerfile .')
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://hub.docker.com', 'docker-credentials') {
                        dockerapp.push('latest')
                        dockerapp.push("${env.BUILD_ID}")
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
