pipeline{
    agent any
    environment {
        DOCKER_HUB = credentials('docker-hub-fauzia')
    }
    stages{
        stage('Install Dependencies'){
            
            steps{
                sh '''
                    cd calc-client
                    npm install
                '''
                sh '''
                    cd calc-server
                    npm install
                '''
            }
            
        }

        stage('Run Tests'){

            steps{
                sh '''
                    cd calc-server
                    npm run test
                '''
            }
            
        }

        stage('Build node projects'){
            steps{
                
                sh '''
                    cd calc-server
                    npm run build
                '''
            }
            
        }

        stage('Build docker image'){
            steps{
                sh '''
                    cd calc-server
                    docker build . -t fauzianaava/calc-app:$BUILD_NUMBER
                '''
            }
            
        }

        stage('Publish docker image'){
            steps{
                sh '''
                    docker login -u $DOCKER_HUB_USR --password-stdin $DOCKER_HUB_PSW
                    docker push fauzianaava/albertcalc:$BUILD_NUMBER
                '''
            }
            
        }
    }
}