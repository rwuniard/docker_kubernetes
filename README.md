# Docker and Kubernetes

This is the note from the docker kubernetes class - Stephen Grider<br/>

##The redis-image is the first example to create a docker container<br/>
##The simpleweb is the second example to show how to create a nodejs simple web server and how to copy source code and all its dependencies.<br/>
##The visits is the example to build multiple containers where the web server will be dependent on a redis in memory database.<br/>

**Docker**

**List all containers**<br/>
_Docker ps_ => show all the docker containers that are running <br/>
_Docker ps_ --all => show all the docker containers that was run <br/>

**Running a container**<br/>
_Docker run hello-world_ => it will create hello-world container and run it.<br/>

NOTES:<br/>
Docker run = docker create + docker start<br/>

**Create and start a container**<br/>
_Docker create <image_name> _=> it will return container id<br/>
_Docker start -a <container_id>_ => attach the process id and watch the output.<br/>
_Docker start <container_id>_ => you won’t see any output<br/>

**Delete all the run containers**<br/>
_Docker system prune_<br/>

**Logging to log instead of printing to console**<br/>
_Docker logs <container_id>_<br/>

**Stopping containers**<br/>
_Docker stop <container_id>_ => wait 10 seconds and if it doesn’t stop, it will issue a kill command below. <br/>
_Docker kill <container_id>_<br/>

**Executing additional command in a container**<br/>
_Docker exec -it <container_id> <command> _ <br/>
=> exec - run another command <br/>
=> -it - allow us to provide input to the container and make it interactive<br/>
=> <command> - command to execute<br/>

**Open a shell command in a container**<br/>
_Docker exec -it <container_id> sh_<br/>

You can also do it with docker run<br/>
Example:<br/>
_Docker run -it busybody sh_<br/>
It will run a container busybody image and go to the shell<br/>

**Dockerfile<br/>
----------**<br/>

\*FROM alpine<br/>

RUN app --update redis<br/>
CMD [“redis-server”]\*<br/>

**Tagging your docker image**<br/>
_Docker build -t <docker_id>/<project_name>:<version><br/>
Example: docker build -t ronsonw/redis:latest ._<br/>

**Creating docker image from running container**<br/>
Run a container and do something inside that container, such as install redis.<br/>
Then you want to capture that container as an image. <br/>
You can do docker commit.<br/>
_Docker commit -c ‘CMD [“redis-server”] <container_id>_<br/>
