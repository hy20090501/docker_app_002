example--前后端分离部署docker(多应用)

前端项目：frontend001 + frontend002  + nginx
后端项目：backend001  + backend002 

构建镜像：
docker-compose build


启动容器：
docker-compose up


验证服务：
```text
http://localhost/app001/
http://localhost/app002/
```

本项目详细说明：
https://segmentfault.com/a/1190000023939043