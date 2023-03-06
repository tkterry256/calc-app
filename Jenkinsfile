pipeline{
    agent any
    stages{
        stage('Installing Dependencies'){
            
            steps{
                sh 'cd ./calc-client'
                sh 'npm install'
                sh 'cd ../calc-server'
                sh 'npm install'
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