# third party cookie demo 

## set up

1. Import cert.cer  to keychains, and make it 'Always Trust'

2. Add content to /etc/hosts

```
127.0.0.1  blog.local.zk
127.0.0.1  ad.zk
```

3. start server project 

```
cd server 
yarn
node server.js
```



## test third party cookies

1. open http://blog.local.zk:8001/blog.html . Third party cookie `ad.zk` would be set.![image-20230226024825128](https://md4zk.oss-cn-beijing.aliyuncs.com/uPic/image-20230226024825128.png)

2. open http://ad.zk:8001/ad.html 

   `ad.zk` cookie is there

   ![image-20230226024904850](https://md4zk.oss-cn-beijing.aliyuncs.com/uPic/image-20230226024904850.png)

 

## test when disabled third party cookies in incognito mode

![image-20230226024756803](https://md4zk.oss-cn-beijing.aliyuncs.com/uPic/image-20230226024756803.png)

open http://blog.local.zk:8001/blog.html, set-cookies get a warning, no cookie is set.

![image-20230226024938810](https://md4zk.oss-cn-beijing.aliyuncs.com/uPic/image-20230226024938810.png)
