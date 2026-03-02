pipeline {
   agent any
   stages {
      stage('Podman docker-compose') {
         steps {
            sh './install'
         }
      }
   }
}
// pipeline {
//     agent any
//     // tools {
//     //     nodejs 'Node_25'
//     // }
//     stages {
//         // 1. Checkout: Get code from version control
//         // stage('Checkout') {
//         //     steps {
//         //         checkout scm
//         //     }
//         // }
//         // 2. Build: Compile or build the application
//         stage('Build') {
//             steps {
//                 echo 'Building application...'
//                 container('podman') {
//                     sh 'podman build -t my-node-app .'
//                 }
//             }
//         }
//         // 3. Test: Run unit/integration tests
//         stage('Test') {
//             steps {
//                 echo 'Running tests...'
//                 // sh 'npm test' // Example for Node.js
//             }
//         }
//         // 4. Package: Prepare artifacts for deployment
//         stage('Package') {
//             steps {
//                 echo 'Packaging application...'
//                 // sh 'npm run build' // Example for Node.js
//             }
//         }
//         // 5. Deploy: Deploy to environment
//         stage('Deploy') {
//             steps {
//                 echo 'Deploying application...'
//                 // sh './deploy.sh' // Example deployment script
//             }
//         }
//         // 6. Post: Archive, notify, cleanup
//         stage('Post') {
//             steps {
//                 echo 'Post-build actions...'
//                 // archiveArtifacts artifacts: '**/build/*.zip', fingerprint: true
//                 // mail to: 'team@example.com', subject: 'Build Notification', body: 'Build complete.'
//             }
//         }
//     }
// }

// pipeline {
//     agent {
//         kubernetes {
//             yaml """
// apiVersion: v1
// kind: Pod
// spec:
//   containers:
//   - name: podamn
//     image: docker.io/library/podman:latest
//     command:
//     - cat
//     tty: true
// """
//         }
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 container('maven') {
//                     sh 'mvn -version'
//                 }
//             }
//         }
//     }
// }