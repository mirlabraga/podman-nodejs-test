// pipeline {
//     agent {
//         kubernetes {
//             yaml """
// apiVersion: v1
// kind: Pod
// spec:
//   containers:
//   - name: podman
//     image: docker.io/library/podman:latest
//     command:
//     - cat
//     tty: true
// """
//         }
//     }
//    agent any
//    stages {
//       stage('Build') {
//          steps {
//                container('podman') {
//                sh 'apt update -y && apt install -y podman'
//                sh 'podman --version'
//                }
//          }
//       }
//    }
// }

pipeline {
   agent any
   stages {
      stage('Podman docker-compose') {
         steps {
            sh '''  set +x
                     sudo apt-get update && apt-get install dnsutils -y
                     sudo apt-get install -y podman
                     podman --version'''   
            sh './install'
         }
      }
   }
}



// pipeline {
//   agent {
//       kubernetes {
//       defaultContainer 'podman'
//      yaml '''
// ---
// apiVersion: v1
// kind: Pod
// spec:
//   containers:
//     - name: podman
//       imagePullPolicy: Always
//       image: docker.io/mysticrenji/podman:latest
//       command:
//         - cat
//       tty: true
//       securityContext:
//         privileged: true
//       volumeMounts:
//         - mountPath: /var/lib/containers
//           name: podman-volume
//         - mountPath: /dev/shm
//           name: devshm-volume
//         - mountPath: /var/run
//           name: varrun-volume
//         - mountPath: /tmp
//           name: tmp-volume
//   restartPolicy: Never
//   volumes:
//     - name: podman-volume
//       emptyDir: {}
//     - emptyDir:
//         medium: Memory
//       name: devshm-volume
//     - emptyDir: {}
//       name: varrun-volume
//     - emptyDir: {}
//       name: tmp-volume
//       '''
//       }}
//    stages {
//       stage('Podman Build') {
//          steps {
//             container('podman') {
//               sh '''
//               echo -e 'FROM busybox\nRUN echo "hello world"' | podman --events-backend=file build -t  ghcr.io/mysticrenji/hello:latest -
//               '''
//             }
//          }
//       }
//       stage('Podman docker-compose') {
//          steps {
//             container('podman') {
//               sh '''
//               git clone https://github.com/mysticrenji/podman-experiments.git
//               cd podman-experiments
//               podman create network pod-net
//               podman-compose -t identity up -d
//               sleep 45
//               podman-compose -t identity down
//               podman images
//               '''
//             }
//          }
//       }
//    }
// }
// pipeline {
//    agent any
//    stages {
//       stage('Podman docker-compose') {
//          steps {
//             sh './install'
//          }
//       }
//    }
// }
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