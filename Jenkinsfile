pipeline {
    agent any
    
   tools {nodejs "NodeJS"}
 
    environment {
        CI = 'true'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod +x deliver.sh'
                sh './deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'chmod +x kill.sh'
                sh './kill.sh'
            }
        }
    }
}
