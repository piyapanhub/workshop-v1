pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Print Environment') {
      steps {
        sh 'ls -al'
        sh 'printenv'
      }
    }

    stage('Selenium Testing') {
      steps {
        sh 'node test.js'
        input 'testing ok?'
      }
    }

    stage('Build docker image') {
      steps {
        script {
          docker.withRegistry('', 'dockerhub') {
            def slackImage = docker.build("${env.image}:${BUILD_NUMBER}")
            slackImage.push()
            slackImage.push('latest')
          }
        }

      }
    }

    stage('Deployment') {
      steps {
        sh 'docker-compose up -d'
      }
    }

  }
  tools {
    nodejs '18.6.0'
  }
  environment {
    image = 'piyapandocker/workshop-test'
    registry = 'docker.io'
  }
}