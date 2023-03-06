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
                echo '#####Running Build#########'
            }
            
        }
    }
}