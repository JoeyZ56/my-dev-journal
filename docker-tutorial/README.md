<div>

# DOCKER SYNTAX

## FROM:

#### Build this image from the specified image.

## COPY:

#### Copies files or directories from <"file"> and adds them to the filesystem of the container at the path <"dest">

## WOKRDIR:

#### Sets the working directory for all following commands

## RUN:

#### 1. Run is exectued in the container, "COPY" is exectued on the host

#### 2. will execute any command in a shell inside the container environment.

## CMD:

#### 1. The instruction that is to be executed when Docker container starts

#### 2. There can only be ONE "CMD" instruction in a DockerFile

# Build Docker Image File

## From the Command line:

### "docker build -t node-app:1.0 ."

#### -t or "tag" sets a name and optionally a tag in the "name:tag" format

#### "." is the current directory

## To Start Docker container

#### "docker run -d -p 3010:3010 node-app:1.0"

</div>
