# Example app - microservices
[Medium post](https://medium.com/@siham.hadi/deploy-a-solidjs-app-to-a-local-kubernetes-cluster-4e0046486ffc)
## Getting started

### Prerequisites
Set up a local kubernentes development environment by installing all of the following:

- Docker CLI  - [Install on OS X](https://formulae.brew.sh/formula/docker)
- Hyperkit  [Install](https://minikube.sigs.k8s.io/docs/drivers/hyperkit/)
- Kubectl [Install](https://kubernetes.io/docs/tasks/tools/) 
- Minikube [Install](https://minikube.sigs.k8s.io/docs/start/)
- Helm [Install](https://skaffold.dev/docs/install/)
- Skaffold [Install](https://helm.sh/docs/helm/helm_install/)


## Installation
In the root of solid and node folders run:
```
$ npm install
```


Create env files in the root of solid and node:


```
<!--  solid/.env -->

VITE_API_URL=MINIKUBENODEURL
VITE_CLIENT_PORT=NODEPORTVALUE
```

```
<!-- node/.env -->

PORT=YOUREXPRESSAPIPORT 
```

### Running microservices 

In the root folder run:
```
$ skaffold dev
```