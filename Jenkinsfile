pipeline{
    agent any
    stages{
        stage('Installing Dependencies'){
            
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

        stage('Run Test'){

            steps{
                sh '''
                    cd calc-server
                    npm run test
                '''
            }
            
        }

        stage('Run Build'){
            steps{
                
                sh '''
                    cd calc-server
                    docker build . -t fauzianaava/calc-app:$BUILD_NUMBER
                '''

                sh '''
                    cd calc-server
                    docker login -u $dockerHubUsername -p $dockerHubPassword
                    docker push fauzianaava/albertcalc:$BUILD_NUMBER
                '''
            }
            
        }
    }
}