pipeline{
    agent any
    stages{
        stage('Installing Dependencies'){
            
            steps{
                sh '''
                    cd ./calc-client
                    npm install
                '''
            }
            
        }

        stage('Run Test'){
            // npm run test
            steps{
                echo '#####Running Tests#########'
            }
            
        }

        stage('Run Build'){
            steps{
                echo '#####Running Build#########'
            }
            
        }
    }
}