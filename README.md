# docker_kubernetes

This is the note from the docker kubernetes class - Stephen Grider

**Docker**


**List all containers**<br/>
*Docker ps* => show all the docker containers that are running <br/>
*Docker ps* --all => show all the docker containers that was run <br/>

**Running a container**<br/>
*Docker run hello-world* => it will create hello-world container and run it.<br/>

NOTES:<br/>
Docker run  = docker create + docker start<br/>

**Create and start a container**<br/>
*Docker create <image_name> *=> it will return container id<br/>
*Docker start -a <container_id>* => attach the process id and watch the output.<br/>
*Docker start <container_id>* => you won’t see any output<br/>

**Delete all the run containers**<br/>
*Docker system prune*<br/>

**Logging to log instead of printing to console**<br/>
*Docker logs <container_id>*<br/>

**Stopping containers**<br/>
*Docker stop <container_id>* => wait 10 seconds and if it doesn’t stop, it will issue a kill command below. <br/>
*Docker kill <container_id>*<br/>

**Executing additional command in a container**<br/>
*Docker exec -it <container_id> <command> * <br/>
=> exec - run another command <br/>
=> -it - allow us to provide input to the container and make it interactive<br/>
=> <command> - command to execute<br/>

**Open a shell command in a container**<br/>
*Docker exec -it <container_id> sh*<br/>

You can also do it with docker run<br/>
Example:<br/>
*Docker run -it busybody sh*<br/>
It will run a container busybody image and go to the shell<br/>


**Dockerfile<br/>
----------**<br/>

*FROM alpine<br/>

RUN app --update redis<br/>
CMD [“redis-server”]*<br/>

**Tagging your docker image**<br/>
*Docker  build -t <docker_id>/<project_name>:<version><br/>
Example: docker build -t ronsonw/redis:latest .*<br/>


**Creating docker image from running container**<br/>
Run a container and do something inside that container, such as install redis.<br/>
Then you want to capture that container as an image. <br/>
You can do docker commit.<br/>
*Docker commit -c ‘CMD [“redis-server”] <container_id>*<br/>






