FROM centos:centos8

RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash -

RUN yum update -y \
    && yum install -y nodejs \
    && yum clean all

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
