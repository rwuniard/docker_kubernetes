# docker_kubernetes

This is the note from the docker kubernetes class - Stephen Grider

**Docker**


**List all containers**<br/>
*Docker ps* => show all the docker containers that are running <br/>
*Docker ps* --all => show all the docker containers that was run <br/>

**Running a container**
*Docker run hello-world* => it will create hello-world container and run it.

NOTES:
Docker run  = docker create + docker start

**Create and start a container**
*Docker create <image_name> *=> it will return container id
*Docker start -a <container_id>* => attach the process id and watch the output.
*Docker start <container_id>* => you won’t see any output

**Delete all the run containers**
*Docker system prune*

**Logging to log instead of printing to console**
*Docker logs <container_id>*

**Stopping containers**
*Docker stop <container_id>* => wait 10 seconds and if it doesn’t stop, it will issue a kill command below.
*Docker kill <container_id>*

**Executing additional command in a container**
*Docker exec -it <container_id> <command> *
=> exec - run another command
=> -it - allow us to provide input to the container and make it interactive
=> <command> - command to execute

**Open a shell command in a container**
*Docker exec -it <container_id> sh*

You can also do it with docker run
Example:
*Docker run -it busybody sh*
It will run a container busybody image and go to the shell


**Dockerfile
----------**

*FROM alpine

RUN app --update redid
CMD [“redis-server”]*

**Tagging your docker image**
*Docker  build -t <docker_id>/<project_name>:<version>
Example: docker build -t ronsonw/redis:latest .*


**Creating docker image from running container**
Run a container and do something inside that container, such as install redis.
Then you want to capture that container as an image. 
You can do docker commit.
*Docker commit -c ‘CMD [“redis-server”] <container_id>*






